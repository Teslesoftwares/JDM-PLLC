import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "jdmadmin@jdmpllc.org";
  const password = "JdmOffice2026";
  const name = "JDM Admin";

  let role = await prisma.role.findUnique({ where: { name: "ADMIN" } });
  if (!role) {
    role = await prisma.role.findUnique({ where: { name: "SUPER_ADMIN" } });
  }
  if (!role) {
    role = await prisma.role.create({
      data: { name: "ADMIN", description: "Administrator", isSystem: true },
    });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: { email },
    update: { passwordHash, name, roleId: role.id, isActive: true },
    create: { email, name, passwordHash, roleId: role.id, isActive: true },
  });

  console.log("Created/updated user:", user.email, "role:", role.name);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
