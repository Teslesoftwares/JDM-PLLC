export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  roleId: string;
  branchId: string | null;
  role: string;
}

export interface Session {
  user: User;
}

export type Permission =
  | "patients.view"
  | "patients.create"
  | "patients.edit"
  | "patients.delete"
  | "appointments.view"
  | "appointments.create"
  | "appointments.edit"
  | "appointments.cancel"
  | "medical_records.view"
  | "medical_records.create"
  | "medical_records.edit"
  | "laboratory.orders"
  | "laboratory.results"
  | "laboratory.approve"
  | "pharmacy.prescriptions"
  | "pharmacy.dispense"
  | "billing.create"
  | "billing.refund"
  | "billing.reports"
  | "users.manage"
  | "roles.manage"
  | "branches.manage"
  | "fertility.view"
  | "fertility.manage"
  | "maternity.view"
  | "maternity.manage"
  | "inventory.view"
  | "inventory.manage"
  | "reports.view"
  | "reports.export"
  | "settings.manage"
  | "audit.view";

export type RoleName =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "BRANCH_MANAGER"
  | "DOCTOR"
  | "FERTILITY_SPECIALIST"
  | "NURSE"
  | "MIDWIFE"
  | "LAB_SCIENTIST"
  | "PHARMACIST"
  | "RECEPTIONIST"
  | "ACCOUNTANT"
  | "STORE_MANAGER"
  | "HR_MANAGER"
  | "PATIENT"
  | "CUSTOMER_SUPPORT";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
