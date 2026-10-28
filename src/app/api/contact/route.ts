import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, category = "GENERAL", website } = body;

    // Honeypot
    if (website) {
      return NextResponse.json({ success: true, reference: "JDM-" + Date.now().toString().slice(-6) });
    }

    if (!name || !email || !message || message.length < 10) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const reference = "JDM-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    await prisma.contactMessage.create({
      data: {
        reference,
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
        category,
        status: "NEW",
        ipAddress: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
        userAgent: request.headers.get("user-agent"),
      },
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
