import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const ACCOUNT_EMAILS = [
  { email: "admin@menstrocare.com", name: "Admin", role: "SUPER_ADMIN" },
  { email: "reception@menstrocare.com", name: "Reception", role: "RECEPTIONIST" },
] as const;
const EXPECTED_USER_COUNT = 21;
const EXPECTED_NOTIFICATION_COUNT = 18;
const CONFIRMATION = "REPLACE ALL USERS";
const prisma = new PrismaClient();

function readSecret(prompt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const input = process.stdin;
    if (!input.isTTY) {
      reject(new Error("Run this command in an interactive terminal."));
      return;
    }

    const wasRaw = input.isRaw;
    let value = "";
    process.stdout.write(prompt);
    input.setRawMode(true);
    input.resume();

    const cleanup = () => {
      input.removeListener("data", onData);
      input.setRawMode(wasRaw ?? false);
      input.pause();
      process.stdout.write("\n");
    };

    const onData = (chunk: Buffer) => {
      for (const character of chunk.toString("utf8")) {
        if (character === "\u0003") {
          cleanup();
          reject(new Error("Cancelled."));
          return;
        }
        if (character === "\r" || character === "\n") {
          cleanup();
          resolve(value);
          return;
        }
        if (character === "\u007f" || character === "\b") {
          value = value.slice(0, -1);
          process.stdout.write("\b \b");
          continue;
        }
        if (character >= " ") {
          value += character;
          process.stdout.write("*");
        }
      }
    };

    input.on("data", onData);
  });
}

function validatePassword(password: string, label: string) {
  if (
    password.length < 8 ||
    password.length > 128 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    throw new Error(`${label} must be 8-128 characters and include uppercase, lowercase, and a number.`);
  }
}

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not configured.");

  const parsedUrl = new URL(databaseUrl);
  const databaseName = parsedUrl.pathname.slice(1).split("?")[0];
  if (
    !["localhost", "127.0.0.1", "::1"].includes(parsedUrl.hostname) ||
    databaseName !== "jaggreys"
  ) {
    throw new Error("Refusing to run: this command is restricted to the local jaggreys database.");
  }

  const [userCount, notificationCount, messageCount, blogPostCount, branches, roles, existingAccounts] =
    await Promise.all([
      prisma.user.count(),
      prisma.notification.count(),
      prisma.message.count(),
      prisma.blogPost.count(),
      prisma.branch.findUnique({ where: { code: "ACCRA" } }),
      prisma.role.findMany({ where: { name: { in: ["SUPER_ADMIN", "RECEPTIONIST"] } } }),
      prisma.user.findMany({
        where: { email: { in: ACCOUNT_EMAILS.map((account) => account.email) } },
        select: { email: true },
      }),
    ]);

  if (userCount !== EXPECTED_USER_COUNT || notificationCount !== EXPECTED_NOTIFICATION_COUNT) {
    throw new Error(
      `Database changed since review (users: ${userCount}, notifications: ${notificationCount}); no records were changed.`,
    );
  }
  if (messageCount !== 0 || blogPostCount !== 0) {
    throw new Error("Messages or authored blog posts now exist; no records were changed.");
  }
  if (!branches) throw new Error("The ACCRA branch was not found.");
  if (roles.length !== 2) throw new Error("Required SUPER_ADMIN and RECEPTIONIST roles were not found.");
  if (existingAccounts.length > 0) throw new Error("One or more replacement email addresses already exist.");

  console.log(`Database: local ${databaseName}`);
  console.log(`This will remove ${userCount} login accounts and ${notificationCount} account notifications.`);
  console.log("Audit entries, staff records, patient records, and other clinic data will be preserved.");
  console.log("New accounts: admin@menstrocare.com (SUPER_ADMIN), reception@menstrocare.com (RECEPTIONIST), branch ACCRA.");
  console.log(`Type ${CONFIRMATION} to continue, or press Ctrl+C to cancel.`);
  const confirmation = await readSecret("> ");
  if (confirmation !== CONFIRMATION) throw new Error("Confirmation did not match; no records were changed.");

  const password = await readSecret("Initial password for both accounts (input hidden): ");
  validatePassword(password, "Initial password");
  const passwordHash = await bcrypt.hash(password, 12);
  const roleIds = new Map(roles.map((role) => [role.name, role.id]));

  await prisma.$transaction(async (tx) => {
    const existingUsers = await tx.user.findMany({ select: { id: true } });
    const userIds = existingUsers.map((user) => user.id);

    await tx.notification.deleteMany({ where: { userId: { in: userIds } } });
    await tx.message.deleteMany({
      where: { OR: [{ senderId: { in: userIds } }, { receiverId: { in: userIds } }] },
    });
    await tx.staff.updateMany({ where: { userId: { in: userIds } }, data: { userId: null } });
    await tx.patient.updateMany({ where: { userId: { in: userIds } }, data: { userId: null } });
    await tx.document.updateMany({ where: { uploadedById: { in: userIds } }, data: { uploadedById: null } });
    await tx.auditLog.updateMany({ where: { userId: { in: userIds } }, data: { userId: null } });
    await tx.user.deleteMany({ where: { id: { in: userIds } } });

    for (const account of ACCOUNT_EMAILS) {
      const roleId = roleIds.get(account.role);
      if (!roleId) throw new Error(`Missing role ${account.role}.`);
      await tx.user.create({
        data: {
          email: account.email,
          name: account.name,
          passwordHash,
          roleId,
          branchId: branches.id,
          isActive: true,
        },
      });
    }
  });

  console.log("Replacement login accounts created successfully.");
  for (const account of ACCOUNT_EMAILS) console.log(`  ${account.email} (${account.role})`);
  console.log("Sign in at /login. Passwords were not displayed or written to logs.");
}

main()
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : "Account replacement failed.");
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });