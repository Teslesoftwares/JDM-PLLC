import type { RoleName } from "@/types";

/**
 * Roles permitted to register a new patient.
 *
 * Registration is a front-desk / administrative task: it creates the patient
 * record and the identifiers that notes, results and billing hang off.
 * Clinical roles do not register patients — they work on records that already exist.
 *
 * Lives in `src/config` (no database import) so both the API guard and client
 * components can read it without pulling Prisma into the browser bundle.
 */
export const PATIENT_REGISTRATION_ROLES = [
  "SUPER_ADMIN",
  "ADMIN",
  "RECEPTIONIST",
] as const satisfies readonly RoleName[];

export type PatientRegistrationRole = (typeof PATIENT_REGISTRATION_ROLES)[number];

/** True when `role` may register patients. Used for UI affordances only — the API re-checks. */
export function canRegisterPatients(role: string | null | undefined): boolean {
  return (
    !!role && (PATIENT_REGISTRATION_ROLES as readonly string[]).includes(role)
  );
}