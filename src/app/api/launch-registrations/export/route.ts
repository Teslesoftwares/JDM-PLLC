import { NextResponse } from "next/server";
import writeXlsxFile from "write-excel-file/node";

import { auth } from "@/lib/auth";
import {
  LAUNCH_REGISTRATION_CATEGORY,
  LAUNCH_REGISTRATION_EXPORT_COLUMNS,
  buildLaunchRegistrationSheet,
} from "@/lib/launch-registrations";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function exportDateStamp(date: Date): string {
  // Ghana local date, so the filename matches what the Secretariat sees.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Accra",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Admin-only download of every launch registration as an .xlsx workbook. */
export async function GET() {
  const session = await auth();
  if (
    !session?.user ||
    (session.user.role !== "ADMIN" && session.user.role !== "SUPER_ADMIN")
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const registrations = await prisma.contactMessage.findMany({
      where: { category: LAUNCH_REGISTRATION_CATEGORY },
      orderBy: { createdAt: "asc" },
    });

    const buffer = await writeXlsxFile(
      buildLaunchRegistrationSheet(registrations),
      {
        sheet: "Launch Registrations",
        stickyRowsCount: 1,
        columns: LAUNCH_REGISTRATION_EXPORT_COLUMNS,
      }
    ).toBuffer();

    const filename = `jdm-pllc-launch-registrations-${exportDateStamp(new Date())}.xlsx`;

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": String(buffer.length),
        "Cache-Control": "private, no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Launch registration export failed:", error);
    return NextResponse.json(
      { error: "Failed to export launch registrations" },
      { status: 500 }
    );
  }
}
