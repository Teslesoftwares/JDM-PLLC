import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import nodemailer from "nodemailer";

async function sendContactNotification(input: {
  reference: string;
  name: string;
  email: string;
  organisation?: string | null;
  category: string;
  message: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const port = Number(process.env.SMTP_PORT || 587);
  const to = process.env.CONTACT_EMAIL || "info@jdm-pllc.org";

  if (!host || !user || !password || !Number.isInteger(port) || port < 1) {
    throw new Error("Contact email SMTP settings are incomplete");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to,
    replyTo: { name: input.name, address: input.email },
    subject: `Website enquiry (${input.category}) — ${input.reference}`,
    text: [
      `Reference: ${input.reference}`,
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Organisation: ${input.organisation || "Not provided"}`,
      `Category: ${input.category}`,
      "",
      input.message,
    ].join("\n"),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organisation, message, category = "GENERAL", consent, website } = body;

    // Honeypot
    if (website) {
      return NextResponse.json({ success: true, reference: "JDM-" + Date.now().toString().slice(-6) });
    }

    if (!name || !email || !message || message.length < 10 || consent !== true) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const reference = "JDM-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    await prisma.contactMessage.create({
      data: {
        reference,
        name,
        email,
        organisation: organisation || null,
        message,
        category,
        consent: true,
        status: "NEW",
        ipAddress: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
        userAgent: request.headers.get("user-agent"),
      },
    });

    await sendContactNotification({
      reference,
      name,
      email,
      organisation: organisation || null,
      category,
      message,
    });

    return NextResponse.json({ success: true, reference });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || (session.user.role !== "ADMIN" && session.user.role !== "SUPER_ADMIN")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const inquiries = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ inquiries });
  } catch (error) {
    console.error("Get inquiries error:", error);
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user || (session.user.role !== "ADMIN" && session.user.role !== "SUPER_ADMIN")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, status } = body;

    const inquiry = await prisma.contactMessage.update({
      where: { id },
      data: {
        status,
        readAt: status === "READ" ? new Date() : undefined,
      },
    });

    return NextResponse.json({ inquiry });
  } catch (error) {
    console.error("Update inquiry error:", error);
    return NextResponse.json({ error: "Failed to update inquiry" }, { status: 500 });
  }
}
