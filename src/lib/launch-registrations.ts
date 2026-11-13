import type { ContactMessage } from "@prisma/client";
import type { SheetData } from "write-excel-file/node";

export const LAUNCH_REGISTRATION_CATEGORY = "LAUNCH_REGISTRATION";

type ExportableRegistration = Pick<
  ContactMessage,
  | "name"
  | "email"
  | "phone"
  | "organisation"
  | "reference"
  | "message"
  | "createdAt"
>;

/** Pull one labelled line (Address / Nationality) out of a registration message. */
export function registrationDetail(
  message: string,
  label: "Address" | "Nationality"
) {
  const line = message.split("\n").find((item) => item.startsWith(`${label}:`));
  return line?.slice(label.length + 1).trim() || "—";
}

/** Human-readable Ghana time, avoiding timezone surprises when opened in Excel. */
export function formatRegisteredAt(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Accra",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

const headers = [
  "Registered",
  "Name",
  "Email",
  "Phone",
  "Address",
  "Nationality",
  "Organisation",
  "Reference",
] as const;

const headerCell = (value: string) => ({
  value,
  fontWeight: "bold" as const,
  backgroundColor: "#F3F4F6",
  borderColor: "#D1D5DB",
  borderStyle: "thin" as const,
  alignVertical: "center" as const,
});

const bodyCell = (value: string) => ({
  value,
  borderColor: "#E5E7EB",
  borderStyle: "thin" as const,
  wrap: true,
});

/** Column widths, in the same order as the sheet. */
export const LAUNCH_REGISTRATION_EXPORT_COLUMNS = [
  { width: 22 }, // Registered
  { width: 26 }, // Name
  { width: 32 }, // Email
  { width: 18 }, // Phone
  { width: 34 }, // Address
  { width: 18 }, // Nationality
  { width: 26 }, // Organisation
  { width: 18 }, // Reference
];

/** Build the worksheet used by the dashboard's "Export to Excel" action. */
export function buildLaunchRegistrationSheet(
  registrations: ExportableRegistration[]
): SheetData {
  return [
    headers.map(headerCell),
    ...registrations.map((registration) => [
      bodyCell(formatRegisteredAt(registration.createdAt)),
      bodyCell(registration.name),
      bodyCell(registration.email),
      bodyCell(registration.phone || "—"),
      bodyCell(registrationDetail(registration.message, "Address")),
      bodyCell(registrationDetail(registration.message, "Nationality")),
      bodyCell(registration.organisation || "—"),
      bodyCell(registration.reference),
    ]),
  ];
}
