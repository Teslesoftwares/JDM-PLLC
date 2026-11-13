import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { LAUNCH_REGISTRATION_CATEGORY } from "@/lib/launch-registrations";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type RegistrationInput = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  address?: unknown;
  nationality?: unknown;
  organisation?: unknown;
  consent?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function sendRegistrationEmails(registration: {
  reference: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  nationality: string;
  organisation: string | null;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const port = Number(process.env.SMTP_PORT || 587);
  if (!host || !user || !password || !Number.isInteger(port) || port < 1) {
    throw new Error("SMTP settings are incomplete");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });
  const from = { name: "JDM-PLLC", address: "info@jdm-pllc.org" };
  const details = [
    `Registration reference: ${registration.reference}`,
    `Name: ${registration.name}`,
    `Email: ${registration.email}`,
    `Phone: ${registration.phone}`,
    `Address: ${registration.address}`,
    `Nationality: ${registration.nationality}`,
    `Organisation: ${registration.organisation || "Not provided"}`,
    "",
    "Proposed event: JDM-PLLC National Launch",
    "Date: 30 November 2026",
    "Time: 10:00 AM (proposed)",
    "Venue: University for Development Studies, Tamale Campus (venue to be confirmed)",
  ].join("\n");

  await Promise.all([
    transporter.sendMail({
      from,
      to: "info@jdm-pllc.org",
      replyTo: { name: registration.name, address: registration.email },
      subject: `New launch registration — ${registration.reference}`,
      text: details,
    }),
    transporter.sendMail({
      from,
      to: { name: registration.name, address: registration.email },
      subject: `Launch registration received — ${registration.reference}`,
      text: [
        `Dear ${registration.name},`,
        "",
        "Thank you for registering your interest in attending the proposed launch of the John Dramani Mahama Presidential Library & Legacy Centre.",
        "",
        details,
        "",
        "The date, time and venue are subject to confirmation. We will send updates to this email address.",
        "",
        "JDM-PLLC Secretariat",
        "info@jdm-pllc.org",
      ].join("\n"),
      headers: { "List-Unsubscribe": "<mailto:info@jdm-pllc.org?subject=Unsubscribe>" },
    }),
  ]);
}

export async function POST(request: Request) {
  let body: RegistrationInput;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }

  // Quietly accept honeypot submissions without storing or emailing them.
  if (clean(body.website, 200)) {
    return Response.json({ success: true, reference: "JDM-LAUNCH" });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 40);
  const address = clean(body.address, 240);
  const nationality = clean(body.nationality, 100);
  const organisation = clean(body.organisation, 160) || null;
  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    phone.length < 6 ||
    address.length < 3 ||
    nationality.length < 2 ||
    body.consent !== true
  ) {
    return Response.json({ error: "Please provide valid contact details and consent to the Privacy Notice." }, { status: 400 });
  }

  const reference = `JDM-${randomUUID().slice(0, 8).toUpperCase()}`;
  let registration;
  try {
    registration = await prisma.contactMessage.create({
      data: {
        reference,
        name,
        email,
        phone,
        organisation,
        subject: "JDM-PLLC Official Launch Registration",
        message: [
          "Registered interest in attending the proposed JDM-PLLC Official Launch on 30 November 2026.",
          `Address: ${address}`,
          `Nationality: ${nationality}`,
        ].join("\n"),
        category: LAUNCH_REGISTRATION_CATEGORY,
        consent: true,
        status: "NEW",
      },
    });
  } catch (error) {
    console.error("Launch registration save failed:", error);
    return Response.json({ error: "We could not save your registration. Please try again." }, { status: 500 });
  }

  try {
    await sendRegistrationEmails({
      reference: registration.reference,
      name,
      email,
      phone,
      address,
      nationality,
      organisation,
    });
    return Response.json({ success: true, reference, emailSent: true }, { status: 201 });
  } catch (error) {
    // Keep the registration so the Secretariat can follow up if SMTP is down.
    console.error("Launch registration email delivery failed:", error);
    return Response.json({ success: true, reference, emailSent: false }, { status: 201 });
  }
}
