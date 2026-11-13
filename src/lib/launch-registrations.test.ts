import { describe, expect, it } from "vitest";

import {
  buildLaunchRegistrationSheet,
  formatRegisteredAt,
  registrationDetail,
} from "./launch-registrations";

const registration = {
  name: "Ama Mensah",
  email: "ama@example.com",
  phone: "+233 20 000 0000",
  organisation: null,
  reference: "JDM-ABC12345",
  message: [
    "Registered interest in attending the proposed JDM-PLLC Official Launch.",
    "Address: 12 High Street, Tamale",
    "Nationality: Ghanaian",
  ].join("\n"),
  createdAt: new Date("2026-11-13T10:05:00Z"),
};

describe("registrationDetail", () => {
  it("extracts a labelled line from the stored message", () => {
    expect(registrationDetail(registration.message, "Address")).toBe(
      "12 High Street, Tamale"
    );
    expect(registrationDetail(registration.message, "Nationality")).toBe(
      "Ghanaian"
    );
  });

  it("falls back to an em dash when the line is missing", () => {
    expect(registrationDetail("no details here", "Address")).toBe("—");
    expect(registrationDetail("Address:   ", "Address")).toBe("—");
  });
});

describe("formatRegisteredAt", () => {
  it("renders Ghana local time", () => {
    expect(formatRegisteredAt(registration.createdAt)).toBe(
      "13 Nov 2026, 10:05"
    );
  });
});

describe("buildLaunchRegistrationSheet", () => {
  const sheet = buildLaunchRegistrationSheet([registration]);

  it("starts with the expected header row", () => {
    expect(sheet).toHaveLength(2);
    expect(
      sheet[0].map((cell) =>
        cell && typeof cell === "object" && "value" in cell
          ? cell.value
          : cell
      )
    ).toEqual([
      "Registered",
      "Name",
      "Email",
      "Phone",
      "Address",
      "Nationality",
      "Organisation",
      "Reference",
    ]);
  });

  it("maps each registration into the table columns", () => {
    const row = sheet[1].map((cell) =>
      cell && typeof cell === "object" && "value" in cell ? cell.value : cell
    );
    expect(row).toEqual([
      "13 Nov 2026, 10:05",
      "Ama Mensah",
      "ama@example.com",
      "+233 20 000 0000",
      "12 High Street, Tamale",
      "Ghanaian",
      "—",
      "JDM-ABC12345",
    ]);
  });

  it("returns only the header row when there are no registrations", () => {
    expect(buildLaunchRegistrationSheet([])).toHaveLength(1);
  });
});
