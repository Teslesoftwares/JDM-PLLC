# Menstrocare — Hospital Management System

A fertility-clinic management platform for **Menstrocare Fertility Clinic** (Oyarifa, Accra, Ghana): a public marketing site, a staff back-office dashboard, and a self-service patient portal — sharing one codebase, one database and one auth layer. The data model and the staff dashboard remain multi-branch, so further clinics can be added without a migration.

Built with Next.js 16 (App Router), Auth.js v5, Prisma and PostgreSQL. 68 pages, 57 API route handlers, 50 database models, 17 enums.

> **Everything patient- or clinic-facing is configured in `src/config/site.ts`** — name, services, branches, opening hours, contact details, navigation. Nothing about the clinic is hardcoded in a page, so a rename or a new branch is a single-file change. Values marked `PENDING_CONFIRMATION` are placeholders the interface labels as unconfirmed; replace them with details the clinic has verified before launch.

---

## Table of contents

1. [What the system does](#1-what-the-system-does)
2. [Tech stack](#2-tech-stack)
3. [Quick start](#3-quick-start)
4. [Demo accounts](#4-demo-accounts)
5. [Environment variables](#5-environment-variables)
6. [npm scripts](#6-npm-scripts)
7. [Project structure](#7-project-structure)
8. [Routing and route groups](#8-routing-and-route-groups)
9. [Pages](#9-pages)
10. [API reference](#10-api-reference)
11. [Authentication](#11-authentication)
12. [Authorization](#12-authorization)
13. [Data model](#13-data-model)
14. [Enums](#14-enums)
15. [Seed data](#15-seed-data)
16. [Frontend system](#16-frontend-system)
17. [Conventions](#17-conventions)
18. [Known gaps and unfinished work](#18-known-gaps-and-unfinished-work)
19. [Deployment notes](#19-deployment-notes)

---

## 1. What the system does

Three distinct front doors, one system.

| Surface | Route prefix | Audience | Layout |
| --- | --- | --- | --- |
| **Public site** | `/`, `/about`, `/services/*`, `/doctors`, `/branches`, `/blog`, … | Prospective patients | `src/app/(public)/layout.tsx` |
| **Staff dashboard** | `/dashboard/*` | Doctors, nurses, lab scientists, reception, pharmacy, accounts, admins | `src/app/(dashboard)/layout.tsx` → `AppShell` (collapsible 20-item sidebar, mobile drawer) |
| **Patient portal** | `/portal/*` | Registered patients | `src/app/(patient-portal)/layout.tsx` → `AppShell` (7-item sidebar) |

Functional modules:

- **Public marketing & SEO** — service catalogue from `siteConfig`, team directory, location page, blog, FAQ, privacy/terms, book-appointment form, contact form (messages are persisted), `sitemap.ts`, `robots.ts` and a web manifest.
- **Front desk** — appointment booking (public and staff paths), status workflow, check-in, live per-branch queue board with call-next / complete / cancel.
- **Clinical** — patient 360 view, consultations, medical records, prescriptions, lab orders and results with approval, imaging orders and results.
- **Fertility** — per-patient fertility profile (hormonal panel AMH/FSH/LH/prolactin/E2/progesterone/TSH, ultrasound, semen analysis), treatment cycles, IUI cycles.
- **Maternity** — pregnancy register (LMP/EDD/gravidity/parity, notes), antenatal visits, deliveries.
- **Laboratory** — test catalogue, three-column workbench (pending / in progress / completed), result entry and approval; approving every result auto-completes the order.
- **Pharmacy** — medication catalogue, per-branch stock, FEFO dispensing.
- **Inventory** — consumables, stock movements with running balances, low-stock alerts.
- **Billing** — invoices with line items, discounts, tax, and payments (cash, MTN MoMo, Telecel Cash, AirtelTigo Money, card, bank transfer, insurance) with automatic status recomputation and transaction-safe voiding.
- **Administration** — staff directory, users, roles and permissions, branches, server-aggregated reports (Recharts), notifications, persisted settings.
- **Patient portal** — appointments, approved lab results, medical records, prescriptions, payments and balance, editable profile.

---

## 2. Tech stack

| Layer | Choice | Version |
| --- | --- | --- |
| Framework | Next.js (App Router, Turbopack) | 16.3.3 |
| UI runtime | React / React DOM | 19.2.8 |
| Language | TypeScript (`strict`) | 5.x |
| Auth | Auth.js / NextAuth v5 (credentials + Prisma adapter, JWT sessions) | 5.0.0-beta.32 |
| ORM | Prisma | 6.19.3 |
| Database | PostgreSQL | — |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config`) + `twMerge` / `clsx` | 4.x |
| Components | Hand-maintained shadcn/ui-style primitives (Radix + CVA) | — |
| Icons | lucide-react | 1.x |
| Server data / state | TanStack Query, Zustand | 5.x |
| Charts | Recharts | 3.x |
| Validation | Zod | 4.x |
| Dates | date-fns | 4.x |
| Passwords | bcryptjs (12 rounds) | 3.x |
| Linting | ESLint 9 flat config (`eslint-config-next`: core-web-vitals + typescript) | 9.x |

---

## 3. Quick start

**Prerequisites:** Node 18+, npm, and a running PostgreSQL instance.

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env      # then set DATABASE_URL and the auth secrets

# 3. Create the schema and load demo data
npm run db:setup          # prisma generate + prisma db push + prisma/seed.ts

#    …or step by step
npm run db:generate
npm run db:push
npm run db:seed

# 4. Run
npm run dev               # http://localhost:3000
```

Other useful commands:

```bash
npm run db:migrate        # create + apply a migration
npm run db:migrate:prod   # apply migrations (CI / production)
npm run db:studio         # Prisma Studio
npm run db:reset          # reset schema and re-seed  (DESTRUCTIVE)
npm run build             # prisma generate && next build
npm run typecheck         # tsc --noEmit
npm run lint              # eslint
```

Health check once running: `GET /api/health` → `{ "status": "healthy", "database": "connected", … }` (503 on failure).

> **Re-seeding is safe and deterministic.** Every seed write is `upsert`-ed, or keyed by a stable business key and deleted-then-recreated (medication stock, inventory stock), so running `npm run db:seed` twice converges on the same data instead of aborting. All values (appointment dates, stock quantities, cycle dates) are derived deterministically, so demo screens look the same on every run.

---

## 4. Demo accounts

See [LOGIN.md](LOGIN.md) for the demo credentials, sign-in instructions, account provisioning, and password recovery details. Demo credentials are for local development only and must be changed or removed before deployment.

---

## 5. Environment variables

`.env.example` is the reference. If the SMTP or storage variables are left unset, the email and storage modules fall back to dev-safe behaviour (see below); every other placeholder block is unused.

| Variable | Required | Used by | Notes |
| --- | --- | --- | --- |
| `DATABASE_URL` | yes | Prisma | PostgreSQL connection string. |
| `AUTH_SECRET` | yes | Auth.js | Token signing secret. |
| `AUTH_URL` | yes | Auth.js | Canonical app URL. |
| `NEXTAUTH_SECRET` / `NEXTAUTH_URL` | recommended | Auth.js | v5 prefers the unprefixed names; keep both in sync. |
| `APP_NAME` | no | `clinicName()` | Overrides the clinic name used in emails and documents; defaults to `siteConfig.name`. |
| `CLINIC_WEBSITE` | no | `siteConfig.website` | Public website address. The shipped default (`https://menstrocare.example`) is a reserved placeholder that cannot resolve. |
| `CLINIC_EMAIL` | no | `siteConfig.contact.email` | Generic inbox. The shipped default is a `no-reply@` placeholder; the contact form is the working channel until a real address is confirmed. |
| `APP_URL` | no | `siteConfig`, root `metadata.metadataBase` | Defaults to `http://localhost:3000`. |
| `APP_ENV` | no | `src/lib/db.ts` | `development` enables Prisma query logging. Any non-production value also keeps the Prisma client on `globalThis` so it survives HMR. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | no | `src/lib/email` | Used by the password-reset flow. When any host value is unset the email is rendered but logged instead of sent — fine for development, required for real delivery. |
| `STORAGE_*` | no | `src/lib/storage` | Document/storage abstraction. Falls back to a local disk store when the provider variables are unset. |
| `SMS_*`, `WHATSAPP_*`, `MTN_MOMO_*`, `TELECEL_*`, `AIRTELTIGO_*`, `CARD_*`, `REDIS_URL` | no | — | Declared but unused. Billing is recorded manually; no provider is called. |

---

## 6. npm scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `next dev` | Dev server (Turbopack). |
| `build` | `prisma generate && next build` | Production build. |
| `start` | `next start` | Serve the production build. |
| `lint` | `eslint` | Lint the repo. |
| `typecheck` | `tsc --noEmit` | Type-check without emitting. |
| `db:setup` | `prisma generate && prisma db push && npx tsx prisma/seed.ts` | One-shot bootstrap. |
| `db:generate` | `prisma generate` | Regenerate the client. |
| `db:push` | `prisma db push` | Sync the schema without a migration. |
| `db:migrate` | `prisma migrate dev` | Create/apply a dev migration. |
| `db:migrate:prod` | `prisma migrate deploy` | Apply migrations (CI / production). |
| `db:seed` | `npx tsx prisma/seed.ts` | Load demo data. |
| `db:studio` | `prisma studio` | Visual database browser. |
| `db:reset` | `prisma migrate reset --force && npm run db:seed` | **Destructive** rebuild. |
| `postinstall` | `prisma generate \|\| exit 0` | Never fails an install. |

---

## 7. Project structure

```
.
├── prisma/
│   ├── schema.prisma          # 50 models, 17 enums, PostgreSQL
│   ├── migrations/            # init + hardening + 3 additive migrations
│   └── seed.ts                # permissions, roles, reference data, demo records (idempotent)
├── public/                    # served verbatim (logo.svg, hero-bg.mp4, …)
├── Images/                    # source brand assets (Logo.svg, Futus.mp4) — not served
└── src/
    ├── app/
    │   ├── layout.tsx         # root layout: Inter font, SEO metadata, providers
    │   ├── page.tsx           # marketing homepage (renders its own Header/Footer)
    │   ├── icon.png           # home-screen/browser icon (generated from public/logo.svg)
    │   ├── favicon.ico        # browser tab icon fallback (.ico convention)
    │   ├── globals.css        # Tailwind v4 theme + brand CSS variables
    │   ├── (public)/          # marketing + auth pages   → /, /about, /login, …
    │   ├── (dashboard)/       # staff app               → /dashboard/*
    │   ├── (patient-portal)/  # patient app             → /portal/*
    │   └── api/               # 57 route handlers
    ├── components/
    │   ├── brand/             # logo.tsx (wordmark lockup from siteConfig)
    │   ├── layout/            # header.tsx, footer.tsx, auth-nav.tsx, app-shell.tsx,
    │   │                      # page-hero.tsx
    │   ├── providers/         # session (SessionProvider), query, theme
    │   └── ui/                # alert, avatar, badge, button, card, dialog,
    │                          # dropdown-menu, input, label, scroll-area,
    │                          # separator, tabs
    ├── config/               # site.ts (clinic identity, services, branches, navigation),
    │                         # articles.ts (health articles)
    ├── lib/
    │   ├── api/               # errors.ts, guard.ts, validate.ts, client.ts
    │   ├── appointments/      # booking.ts, queue.ts, state.ts
    │   ├── audit/             # AuditLog writer (action enums + record())
    │   ├── auth.ts            # Auth.js config (credentials provider, JWT callbacks)
    │   ├── db.ts / db/        # Prisma singleton + withSerializableRetry transaction wrapper
    │   ├── email/             # SMTP mailer with dev-log fallback
    │   ├── ids.ts             # race-free sequence-backed <PREFIX>-NNNNNN ids
    │   ├── money.ts           # Decimal money helpers (totals, status derivation, serialisation)
    │   ├── notifications/     # server-side in-app notification creation
    │   ├── observability.ts   # logging / tracing helpers
    │   ├── payments/          # mobile-money provider abstraction (MTN MoMo, logging sink)
    │   ├── permissions/       # permission cache, role hierarchy, branch scoping
    │   ├── storage/           # document storage abstraction (local fallback)
    │   └── validations/       # Zod schemas (auth, clinical, common, operations, settings)
    ├── middleware.ts          # optimistic page redirect (NOT a security boundary)
    ├── types/                 # shared interfaces + next-auth.d.ts augmentation
    └── utils/                 # cn() and date/currency formatters
```

Path alias: `@/*` → `./src/*`. `next.config.ts` is intentionally empty — no image config, rewrites or experimental flags.

`src/app/admin`, `src/app/dashboard` and `src/app/patient` exist on disk but are **empty**, so they create no routes; the real ones live under the route groups.

---

## 8. Routing and route groups

Route groups add a layout boundary without adding a URL segment:

- `(public)` → URLs exactly as written: `/about`, `/services/dental`, `/login`, …
- `(dashboard)` → the inner folder is named `dashboard`, so URLs are `/dashboard`, `/dashboard/patients`, …
- `(patient-portal)` → the inner folder is named `portal`, so URLs are `/portal`, `/portal/lab-results`, …

`Header` is the public marketing header: it is rendered by `(public)/layout.tsx` and by `src/app/page.tsx` (which sits outside the group). The two authenticated areas do **not** reuse it — a signed-in clinician or patient gets `AppShell` (`src/components/layout/app-shell.tsx`), a sidebar-only frame with no marketing navigation.

---

## 9. Pages

### 9.1 Public — `(public)`

**Server components (static content)**

| URL | Notes |
| --- | --- |
| `/` | Homepage driven by `siteConfig`: services, location, opening hours and contact details. |
| `/about` | Mission, values, story. Milestones render only once the clinic confirms them. |
| `/services` | Hub for the services in `siteConfig.services`. |
| `/services/[slug]` | One page per configured service: `fertility`, `infertility-investigations`, `female-reproductive-health`, `male-fertility`, `laboratory`, `imaging`. Each shows the `statusNote` while the offering is `PENDING_CONFIRMATION`. **No price is published anywhere** — `servicePricingNote()` states that prices are confirmed with the clinic. |
| `/fertility` | SEO landing page for fertility care. |
| `/branches` | Location directory from `siteConfig.branches` (currently Oyarifa, Accra). |
| `/doctors` | Team directory from `siteConfig.team` — **empty by default**: a clinician is not published until the clinic verifies name, qualification and registration number. |
| `/blog` | Article index from `src/config/articles.ts`. |
| `/faq` | Categorised accordion. |
| `/privacy`, `/terms` | Legal pages. |

**Dynamic, statically generated** (`generateStaticParams` + `generateMetadata`)

| URL | Notes |
| --- | --- |
| `/branches/[slug]` | One page per configured branch (`oyarifa`). |
| `/doctors/[slug]` | Clinician profile with education, specialisations and schedule. |
| `/blog/[slug]` | Article body. |

**Client components (interactive)**

| URL | Notes |
| --- | --- |
| `/login` | Server page wraps `LoginPageClient` in `<Suspense>`; reads `?callbackUrl`. |
| _removed_ | Public self-registration is retired. Patients are registered at the clinic by admin/reception (`/dashboard/patients/new`). |
| `/forgot-password` | Email-only form. |
| `/reset-password` | Reads `?token` and sends it as the `x-reset-token` header. |
| `/book-appointment` | Public booking → `POST /api/appointments` (public path, finds-or-creates the patient). |
| `/contact` | Location, opening hours and phone from `siteConfig` + message form → `POST /api/contact` (persists). |

### 9.2 Staff dashboard — `(dashboard)` — all client components

| URL | Purpose |
| --- | --- |
| `/dashboard` | KPI cards (patients, appointments today, queue, revenue, pending labs) + recent appointments — all fetched from the API, error state surfaced. |
| `/dashboard/patients` | Searchable, paginated patient list with per-patient counts. |
| `/dashboard/patients/new` | Full registration form (~30 fields incl. insurance, emergency contact, next of kin). |
| `/dashboard/patients/[id]` | Patient 360: overview, appointments, records, lab orders, invoices, fertility profile, pregnancies. |
| `/dashboard/appointments` | Status tabs, search, check-in, confirm/cancel. |
| `/dashboard/appointments/new` | Staff booking with patient autocomplete, **doctor picker backed by `GET /api/staff`** (branch + `ACTIVE` filter), slot-conflict check. |
| `/dashboard/appointments/[id]` | Detail with status timeline and the same actions. |
| `/dashboard/queue` | Live queue board: call next, complete, cancel, branch filter; server errors surfaced, polling guarded. |
| `/dashboard/consultations` | Consultation list with diagnosis; error state surfaced. |
| `/dashboard/consultations/new` | Multi-step: medical record → consultation → prescriptions → lab orders. |
| `/dashboard/consultations/[id]` | Notes, diagnosis, plan, linked record, prescriptions, lab and imaging orders. |
| `/dashboard/medical-records` | Records list with complaint, assessment, diagnosis, doctor; **search is wired to the API**. |
| `/dashboard/doctor` | Clinician overview ("Clinician Overview" in the sidebar): today's list, recent patients and consultations, pending labs; **prescription and lab-order stat cards read the real counts**. |
| `/dashboard/fertility` | All fertility profiles. |
| `/dashboard/fertility/[patientId]` | Full fertility workup. |
| `/dashboard/laboratory` | Three-column workbench. |
| `/dashboard/laboratory/orders`, `/[id]` | All lab orders; result entry and per-result approval. |
| `/dashboard/imaging`, `/[id]` | Imaging board; findings and report entry. |
| `/dashboard/pharmacy` | Medication catalogue with per-branch stock and low-stock alerts. |
| `/dashboard/inventory` | Consumables, running balances, reorder levels, latest movement. |
| `/dashboard/maternity`, `/[id]` | Pregnancy register; antenatal visit history and add-visit form. |
| `/dashboard/billing` | Revenue / pending / paid / overdue summary. |
| `/dashboard/billing/invoices`, `/new`, `/[id]` | Invoice list, creation (line items, discount, tax), detail, payment capture and voiding. |
| `/dashboard/billing/payments` | All payments with method badges. |
| `/dashboard/users` | Staff list from `GET /api/users` (role/branch/permission filtering). |
| `/dashboard/roles` | Role/permission matrix from `GET /api/roles`. |
| `/dashboard/branches` | Branch cards from the API. |
| `/dashboard/reports` | Recharts analytics over week / month / year presets **or a custom date range, aggregated server-side by `GET /api/reports/summary`** (max 366 days), with error + retry UI. |
| `/dashboard/notifications` | Notification centre, mark-as-read (one or all). |
| `/dashboard/settings` | Clinic, appointment and notification settings — **persisted via `GET`/`PATCH /api/settings`** (requires `settings.manage`). |

### 9.3 Patient portal — `(patient-portal)` — all client components

| URL | Purpose |
| --- | --- |
| `/portal` | Greeting, next appointment, quick links, recent activity. |
| `/portal/appointments` | Upcoming vs past. |
| `/portal/records` | Medical records. **Calls the portal-scoped `GET /api/portal/medical-records`, pinned to the signed-in patient** (draft/unapproved clinician notes excluded). |
| `/portal/lab-results` | Approved results only, with reference ranges and abnormal flags. |
| `/portal/prescriptions` | Per-item medication, dosage, frequency, duration, dispensed state. |
| `/portal/payments` | Payment history, total paid, outstanding balance. |
| `/portal/profile` | Edit phone, address, allergies; read-only demographics. |

---

## 10. API reference

All handlers live under `src/app/api/**/route.ts` (57 files). Shared conventions: JSON in, JSON out; a named collection or object on success; `{ "error": "…" }` with an appropriate status on failure; errors are raised/rendered through `src/lib/api/errors.ts` and logged with the route name. List endpoints validate query params (`page` / `limit` / `search` plus resource-specific filters) against Zod schemas in `src/lib/validations/operations.ts`.

**Security conventions:** every route except the deliberately public ones (`/api/auth/*`, `/api/health`, `/api/branches`, `/api/contact`, and the public booking path of `POST /api/appointments`) authenticates through `src/lib/api/guard.ts` (`requireStaff`, `requirePatient`, `requireAuth`, `requirePermission`, `requireBranchAccess`). Branch-confined staff are pinned to their own branch even when a request names another `branchId`. Multi-statement writes run through `withSerializableRetry` (`src/lib/db/transaction.ts`) and are recorded in `AuditLog` via `src/lib/audit`.

### 10.1 Auth and system

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/auth/[...nextauth]` | `GET`, `POST` | Auth.js catch-all. |
| `/api/auth/forgot-password` | `POST` | Validates the email, always returns the same message (no user enumeration), and when the account exists creates a single-use `PasswordResetToken` (hashed) with an expiry and emails the reset link — rendered + logged when no SMTP host is configured. |
| `/api/auth/reset-password` | `POST` | Requires an `x-reset-token` header. Verifies the hashed token against `PasswordResetToken` (rejecting expired/used tokens), does a repeated-password confirmation check, updates `passwordHash`, and consumes the token in the same transaction. |
| `/api/health` | `GET` | Liveness probe (`SELECT 1`); 503 on database failure. |
| `/api/contact` | `POST` | Validates name/email/message then **persists a `ContactMessage`** (`MSG-` id). No outbound email. |
| `/api/branches` | `GET` | Public; active branches, name-sorted. |
| `/api/roles` | `GET` | `roles.manage` — roles with description, `isSystem`, user count and permission count. |
| `/api/users` | `GET` | `users.manage` — paginated staff; `search` over name/email; joins role and branch; maps `isActive` → `ACTIVE`/`INACTIVE`; includes `lastLogin`. |
| `/api/staff` | `GET` | Any authenticated staff member — branch-scoped staff directory (`branchId` + `employmentStatus` filters; `SUPER_ADMIN` sees all branches). Used by the appointment doctor picker. |
| `/api/settings` | `GET`, `PATCH` | `settings.manage` — clinic, appointment and notification settings, stored as JSON in the `Setting` model. `PATCH` accepts only the known setting keys. |

### 10.2 Appointments and queue

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/appointments` | `GET`, `POST` | **GET**: `appointments.view`; paginated, filters `search` (patient name/ID), `status`, `doctorId`, `branchId`, `date`. **POST**: dual-mode — public booking (resolve branch by name, find-or-create the patient by email/phone, no auth) or staff booking (`appointments.create`; slot-availability check first). Both issue ids from the `APT` sequence. |
| `/api/appointments/[id]` | `GET`, `PATCH`, `DELETE` | `appointments.view` / `.edit` / `.cancel`; detail with patient/doctor/branch/queue; partial update with an explicit field schema; `DELETE` is a soft cancel (`status = CANCELLED`). |
| `/api/appointments/[id]/check-in` | `POST` | `appointments.edit` — marks `CHECKED_IN` and, in a transaction, creates the next sequential `Queue` number for that branch today. Rejects double check-in or already in progress. |
| `/api/queue` | `GET` | `appointments.view` — today's queue (`branchId`, `status` filters), doctor formatted as `Dr. First Last`. |
| `/api/queue/call-next` | `POST` | `appointments.edit` — `action`: `call` (queue `CALLED` + appointment `IN_PROGRESS`), `complete` (both `COMPLETED`), `cancel` (both `CANCELLED`). Stamps `calledAt` / `completedAt`. |

### 10.3 Patients and clinical records

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/patients` | `GET`, `POST` | `patients.view` / `.create` — paginated list with `search` (first/last name, patientId, email, phone) and `branchId`, plus appointment / lab-order / invoice counts. `POST` assigns the next `PAT-…` number from the sequence. |
| `/api/patients/[id]` | `GET`, `PATCH` | `patients.view` / `.edit` — full record: demographics, recent appointments, medical records, lab orders, invoices, fertility profile (incl. `cycleLength`, `lastMenstrualPeriod`, `previousPregnancies`), pregnancies, documents and aggregate counts. `PATCH` updates demographics, clinical, insurance and contact fields against an explicit schema; branch access is enforced. |
| `/api/medical-records` | `GET`, `POST` | `medical_records.view` / `.create` — paginated (`patientId` optional); includes patient names, consultation diagnosis and doctor. `POST` creates a `MR-<sequence>` record with vitals, examination, assessment, treatment plan and follow-up date. |
| `/api/medical-records/[id]` | `GET` | `medical_records.view` — record + patient demographics + consultation + prescription items + lab orders with tests and results. |
| `/api/consultations` | `GET`, `POST` | **GET**: `medical_records.view`; filters `doctorId`, `patientId` (via the medical record) and `search`. **POST**: `medical_records.create`; resolves the caller's `Staff` row, creates `CONS-<sequence>`. |
| `/api/consultations/[id]` | `GET`, `PATCH` | `medical_records.view` / `.edit` — consultation with record, patient, doctor, appointment, prescriptions, and lab/imaging orders with their results. `PATCH` updates only the fields in `updateConsultationSchema` (no unfiltered body spread). |

### 10.4 Laboratory

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/lab-orders` | `GET`, `POST` | `laboratory.orders` — filters `patientId`, `status`, `branchId`; includes patient, doctor, test and results. `POST` creates `LAB-<sequence>` with `priority` (default `NORMAL`) and clinical info. Branch access is enforced. |
| `/api/lab-orders/[id]` | `GET`, `PATCH` | `laboratory.orders` — order with full patient demographics, doctor, test, consultation diagnosis and results. |
| `/api/lab-results` | `GET`, `POST` | `laboratory.results` — filters `patientId`, `approved`; includes test name/category/unit/range and the parent order. `POST` creates `RES-<sequence>`. |
| `/api/lab-results/[id]/approve` | `POST` | `laboratory.approve` — marks the result approved with `approvedAt`, then auto-completes the parent order once **all** of its results are approved. |
| `/api/lab-tests` | `GET` | Any authenticated staff member — active test catalogue, filters `category` and `search` (name or test code). |

### 10.5 Fertility, maternity and imaging

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/fertility` | `GET`, `POST` | `fertility.view` / `.manage` — `GET`: paginated profiles (optional `patientId`) with 5 recent cycles and 5 recent IUI cycles. `POST`: creates `FERT-<sequence>`, parses hormonal and semen numerics, rejects a second profile for the same patient. |
| `/api/fertility/[id]` | `GET`, `PATCH` | `fertility.view` / `.manage` — looks up by `id` **or** `patientId`; includes patient demographics, all cycles and all IUI cycles. `PATCH` persists treatment history with explicit fields. |
| `/api/fertility/[id]/cycles` | `POST` | `fertility.manage` — adds a `CYC-<sequence>` cycle (number, treatment type, start date, notes). |
| `/api/pregnancies` | `GET`, `POST` | `maternity.view` / `.manage` — filter by `status` and `branchId`; includes patient, latest antenatal visit and delivery. `POST` creates `PREG-<sequence>` with LMP, EDD, gravidity, parity, blood group and notes. Branch access is enforced. |
| `/api/pregnancies/[id]` | `GET` | `maternity.view` — pregnancy with patient demographics, all antenatal visits (newest first) and the delivery record. |
| `/api/pregnancies/[id]/visits` | `POST` | `maternity.manage` — records an antenatal visit: number, date, weight, BP, fundal height, fetal heart rate, urine, notes, risk indicators, next visit date. |
| `/api/imaging-orders` | `GET`, `POST` | `medical_records.view` / `.create` — filters `patientId`, `status`; includes patient, doctor and results. `POST` creates `IMG-<sequence>`. |
| `/api/imaging-orders/[id]` | `GET`, `PATCH` | `medical_records.view` / `.edit` — order with patient, doctor and results. |
| `/api/imaging-results` | `POST` | `laboratory.results` — creates `IMGR-<sequence>` (findings + report) and auto-sets the parent order to `COMPLETED`. |

### 10.6 Billing and payments

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/invoices` | `GET`, `POST` | `billing.create` / `billing.reports` — filters `patientId`, `status`, `branchId`; includes patient, branch, items and payment summary. `POST` validates, computes `subtotal − discount + tax` as Decimal, creates `INV-<sequence>` with nested line items. Branch access is enforced. |
| `/api/invoices/[id]` | `GET`, `PATCH`, `DELETE` | Invoice with patient contact, branch address/phone/email, items and payments. `DELETE` **voids** the invoice (`CANCELLED`, in a serializable retry) rather than deleting — refused if any completed payment exists (refund them first) or it is already cancelled; the void is audited. |
| `/api/invoices/[id]/payments` | `POST` | `billing.create` — records a `PAY-<sequence>` payment, rejects amounts above the remaining balance, then recomputes the invoice status to `PAID` / `PARTIAL` / `PENDING`. |
| `/api/payments` | `GET` | `billing.reports` — paginated, filters `method` and `status`; includes the invoice with its patient and branch. |

### 10.7 Pharmacy, inventory and notifications

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/prescriptions` | `GET`, `POST` | `pharmacy.prescriptions` — filter by `consultationId`; `POST` creates a prescription with nested items (medication, dosage, frequency, duration, instructions). |
| `/api/medications` | `GET`, `POST` | `pharmacy.prescriptions` — filters `category`, `search` (name, generic name, medication code) and `branchId`; includes per-branch stock. `POST` creates `MED-<sequence>`. |
| `/api/medications/[id]` | `GET` | Per-branch stock ordered by earliest expiry, plus the 20 most recent dispensations including the patient. |
| `/api/dispense` | `POST` | `pharmacy.dispense` — **FEFO dispensing**: picks the earliest-expiry lot with sufficient quantity, deducts it, writes a `DispensedMedication` with the computed total, and marks the prescription items dispensed. 400 on insufficient stock. |
| `/api/inventory` | `GET`, `POST` | `inventory.view` / `.manage` — filters `branchId`, `category`, `search`; includes the most recent movement and the running `quantity` balance. `POST` creates an item (`INVT-<sequence>`). |
| `/api/inventory/[id]` | `GET`, `PATCH` | Item with branch and the full movement history (newest first). |
| `/api/inventory/[id]/movements` | `POST` | `inventory.manage` — records a `StockMovement` (type, quantity, reference, notes) and updates the item's `quantity` in one transaction. |
| `/api/notifications` | `GET`, `POST`, `PATCH` | **Session-scoped** — `GET` returns up to 50 notifications plus `unreadCount`, with `unread` and `type` filters. `PATCH` marks read by `ids[]` or `markAll`, pinned to the session user. `POST` accepts no body and returns 501: notifications are created server-side by `src/lib/notifications`. |

### 10.8 Patient portal — all session-scoped, 401 when unauthenticated

| Endpoint | Methods | Description |
| --- | --- | --- |
| `/api/portal` | `GET`, `PATCH` | The `Patient` linked to the session. `PATCH` allows self-service updates to `phone`, `address` and `allergies` only. |
| `/api/portal/appointments` | `GET` | Split into `upcoming` and `past`; matched by `patientId` or via the patient's records' consultations. |
| `/api/portal/lab-results` | `GET` | **Approved results only**, with test name, category, unit, reference range and order id. |
| `/api/portal/payments` | `GET` | Payments across the patient's invoices, plus `totalPaid` (completed) and `totalOutstanding`. |
| `/api/portal/prescriptions` | `GET` | patient → medical records → consultations → prescriptions, with items and the prescribing doctor. |
| `/api/portal/medical-records` | `GET` | patient → completed consultations → medical records, plus the record's own clinical summary; **pinned to the signed-in patient**; draft or unapproved clinician notes excluded. |

---

## 11. Authentication

`src/lib/auth.ts` — Auth.js v5, mounted at `src/app/api/auth/[...nextauth]/route.ts`.

For user-facing sign-in instructions and the development demo accounts, see [LOGIN.md](LOGIN.md).

- **Provider:** Credentials (email + password) only. No OAuth providers.
- **Adapter:** `@auth/prisma-adapter`, but `session.strategy = "jwt"`, so the `Session` model is never written to.
- **Sign-in page:** `/login`, which is also the error page.
- **Flow:** look up the user by email → require `passwordHash` and `isActive` → `bcrypt.compare` → update `lastLoginAt` → return the user with `role`, `roleId` and `branchId`.
- **Callbacks:**
  - `jwt` — copies `role`, `roleId` and `branchId` onto the token.
  - `session` — sets `session.user.id = token.sub` and re-attaches `role`, `roleId` and `branchId`.
- **Client session:** `SessionProvider` in `src/components/providers/index.tsx`, mounted by the root layout. Client components read it with `useSession()` from `next-auth/react`; server code uses the exported `auth()`.
- **Type augmentation is centralised** in `src/types/next-auth.d.ts` (`Session.user.id`, `role`, `roleId`, `branchId`) — no runtime `as any` casts for these fields.

**Route protection** — `src/middleware.ts` is an *optimistic* cookie-presence check for **pages only**:

1. If the path is in the `PUBLIC_ROUTES` set (marketing, auth, and public utility pages) → allow.
2. If it starts with `/api/` → allow at this layer — API routes are deliberately not guarded in middleware (two layers of truth would drift); each handler authenticates itself.
3. If it looks like a static asset (`/_next`, `/favicon`, or anything containing a `.`) → allow.
4. Otherwise require `authjs.session-token` or `__Secure-authjs.session-token`; if absent, redirect to `/login?callbackUrl=<path>`; signed-in users on `/login` are pushed to `/dashboard`.

The middleware does **not** validate the token and is **not** a security boundary — a cookie's presence proves nothing. Real enforcement lives in `src/lib/api/guard.ts`, which guards every protected API route.

---

## 12. Authorization

Two layers work together:

- `src/lib/permissions/` resolves permissions, hierarchy and branch scoping (see below).
- `src/lib/api/guard.ts` enforces them per request: `requireAuth` (any signed-in user), `requireStaff`, `requirePatient`, `requirePermission(ctx, "code")`, and `requireBranchAccess(ctx, branchId)`, plus `parseBody` / `parseQuery` for validated input and `ApiError` for typed failures.

`src/lib/permissions/index.ts`:

| Export | Purpose |
| --- | --- |
| `getUserPermissions(userId)` | Resolves role → permission codes, memoised in an in-process `Map` (`ROLE_PERMISSIONS_CACHE`). |
| `clearPermissionsCache(userId?)` | Invalidates one user or the whole cache. |
| `hasPermission` / `hasAnyPermission` / `hasAllPermissions` | Checks against the resolved list. |
| `canAccessBranch(userBranchId, targetBranchId, isSuperAdmin)` | Super-admins see everything; everyone else is confined to their own branch. |
| `ROLE_HIERARCHY` / `getRoleLevel(name)` | Numeric rank per role name. |

**32 permissions** across 15 modules: `patients.{view,create,edit,delete}`, `appointments.{view,create,edit,cancel}`, `medical_records.{view,create,edit}`, `laboratory.{orders,results,approve}`, `pharmacy.{prescriptions,dispense}`, `billing.{create,refund,reports}`, `users.manage`, `roles.manage`, `branches.manage`, `fertility.{view,manage}`, `maternity.{view,manage}`, `inventory.{view,manage}`, `reports.{view,export}`, `settings.manage`, `audit.view`.

**10 roles**, all `isSystem: true`:

| Role | Level | Access summary |
| --- | --- | --- |
| `SUPER_ADMIN` | 100 | All 32 permissions; all branches. |
| `ADMIN` | 90 | All 32 permissions; all branches. |
| `BRANCH_MANAGER` | 80 | Patients, appointments, records, lab, billing, inventory, reports (17); own branch. |
| `DOCTOR` | 70 | Patients, appointments, records, lab, fertility, maternity, prescriptions (12); own branch. |
| `NURSE` | 60 | Patients, appointments, medical records (4); own branch. |
| `LAB_SCIENTIST` | 60 | Patients, lab orders, lab results, **approve** (4); own branch. |
| `PHARMACIST` | 60 | Patients, prescriptions, **dispense**, inventory view and manage (5); own branch. |
| `RECEPTIONIST` | 50 | Patients, appointments, billing create (8); own branch. |
| `ACCOUNTANT` | 50 | Patients, billing including refunds, reports (6); own branch. |
| `PATIENT` | 10 | Portal only: appointments view/create, medical records view (3). |

`ROLE_HIERARCHY` also lists `FERTILITY_SPECIALIST`, `MIDWIFE`, `STORE_MANAGER`, `HR_MANAGER` and `CUSTOMER_SUPPORT`, which have no seeded `Role` row — add them to the seed if you need them.

> **Enforcement is wired in.** 39 route files call the guard (`requirePermission`/`requireStaff`/`requireBranchAccess`), the portal routes use `requirePatient`, and branch-scoped queries (patients, staff, appointments, invoices, lab orders, pregnancies, inventory) are pinned to the caller's branch. The six routes that do **not** authenticate are deliberately public: the Auth.js catch-all, forgot-password, reset-password, health, branches, and contact. Patient registration is not among them — `POST /api/patients` requires `patients.create` **and** a role in `PATIENT_REGISTRATION_ROLES` (`SUPER_ADMIN`, `ADMIN`, `RECEPTIONIST`; see `src/config/roles.ts`). The dashboard sidebar renders all items to every signed-in staff member, but each screen's API calls enforce permissions server-side — unauthorized screens show a friendly `403` (e.g. roles, users, settings) instead of leaking data.

---

## 13. Data model

PostgreSQL via Prisma (`prisma/schema.prisma`) — 50 models. `Json` columns hold structured-but-unmodelled data (vitals, opening hours, emergency contacts, staff-involved lists, settings values, audit details, attachments).

### Authentication and authorization

`User` (email unique, `passwordHash`, `isActive`, 2FA fields, `lastLoginAt`/`lastLoginIp`, → Role, → Branch?, → Staff?, → Patient?), `Session` (present but unused under JWT), `PasswordResetToken` (hashed token, expiry, consumed flag → User), `Role`, `Permission`, `RolePermission` (composite primary key).

### Organisation

`Branch` (code unique, address, city, region, geo coordinates, opening-hours JSON), `Department` (code unique, → Branch), `Staff` (`employeeId` unique, qualification, licence number, professional body, `employmentStatus`, → Branch, → Department?, → User?), `Room` (name, number, `RoomType`, `RoomStatus`, → Branch, → Department?).

### Patients and scheduling

`Patient` (`patientId` unique, demographics, blood group, genotype, allergies, insurance, emergency contact, next of kin, → Branch, → User?), `Appointment` (`appointmentId` unique, date + `time` string, `AppointmentStatus`, reason, notes, type, → Patient, → Staff? doctor, → Branch, → Queue?, → Consultation?), `Queue` (one per appointment, `queueNumber`, `QueueStatus`, `calledAt`, `completedAt`).

### Clinical

`MedicalRecord` (`recordId` unique, chief complaint, history, vitals JSON, examination, assessment, treatment plan, follow-up date), `Consultation` (`consultationId` unique, type, notes, diagnosis, treatment plan, → Appointment?, → Staff doctor, → MedicalRecord?), `Diagnosis` (code, name, `isPrimary`), `Prescription` (`PrescriptionStatus`, → Consultation, → Diagnosis?), `PrescriptionItem` (medication, dosage, frequency, duration, instructions, `dispensed`).

### Laboratory

`LabTest` (`testCode` unique, category, specimen type, reference range, unit, turnaround time, price), `LabReferenceRange` (gender, age band, normal low/high, unit), `LabOrder` (`orderId` unique, `LabOrderStatus`, priority, clinical info, → Patient, → Staff?, → LabTest?, → Consultation?), `LabResult` (`resultId` unique, value, unit, reference range, flag, `approved`, `approvedAt`).

### Imaging

`ImagingOrder` (`orderId` unique, procedure, clinical info, `ImagingOrderStatus`, → Patient, → Staff?, → Consultation?), `ImagingResult` (`resultId` unique, findings, report, attachments JSON).

### Fertility

`FertilityProfile` (`profileId` unique, one-to-one with `Patient`) — menstrual history and cycle length, hormonal investigations (AMH, FSH, LH, prolactin, estradiol, progesterone, TSH), ultrasound, tubal assessment, semen analysis (volume, concentration, motility, morphology), and male histories. Plus `FertilityCycle` (cycle number, treatment type, start/end date, medications, tests, ultrasound, outcome, pregnancy result) and `IuiCycle` (medication, monitoring and ultrasound notes, follicle measurements, endometrial thickness, trigger, semen preparation, procedure date and notes, outcome, pregnancy test, clinical outcome, follow-up).

### Maternity and paediatrics

`Pregnancy` (`pregnancyId` unique, LMP, EDD, gravidity, parity, blood group, `PregnancyStatus`, **notes**), `AntenatalVisit` (visit number, date, weight, blood pressure, fundal height, fetal heart rate, urine, notes, risk indicators, next visit date), `Delivery` (date, type, baby name/gender/weight/height, APGAR score, complications, procedures, staff involved JSON), `Child` (`childId` unique, → Patient as parent), `Vaccination` (name, date given, dose, next due).

### Billing

`Service` (`serviceCode` unique, `ServiceCategory`, price), `Invoice` (`invoiceNumber` unique, `InvoiceStatus`, subtotal, discount, tax, total, due date, notes, → Patient, → Branch), `InvoiceItem` (description, quantity, unit price, total, → Service?), `Payment` (`paymentNumber` unique, amount, `PaymentMethod`, reference, `PaymentStatus`, → Invoice).

### Pharmacy and inventory

`Medication` (`medicationCode` unique, generic name, category, form, strength, manufacturer, unit price, reorder level), `MedicationStock` (batch number, quantity, expiry date, purchase and selling price, → Medication, → Branch), `DispensedMedication` (quantity, unit price, total, → Medication, → Prescription), `InventoryItem` (`itemCode` unique, category, unit, unit price, **quantity balance**, reorder level, → Branch), `StockMovement` (`StockMovementType`, quantity, reference, → InventoryItem).

### Content, communication and platform

`Notification` (`NotificationType`, read flag, → User), `ContactMessage` (subject, content, read flag, sender ↔ receiver, `MSG-…` id — written by the public contact form), `BlogPost` (slug unique, content, excerpt, SEO title/description, `BlogStatus`, → User author), `Testimonial` (consent and published flags), `Document` (name, type, file URL, size, mime type, → Patient?), `AuditLog` (action, resource, details JSON, IP, user agent, success, → User?), `Setting` (key unique, `value` JSON, category), `InsuranceClaim` (`claimId` unique, provider, membership number, amount, status, → Patient?).

---

## 14. Enums

| Enum | Values |
| --- | --- |
| `Gender` | `MALE`, `FEMALE`, `OTHER` |
| `EmploymentStatus` | `ACTIVE`, `INACTIVE`, `ON_LEAVE`, `TERMINATED`, `RETIRED` |
| `AppointmentStatus` | `PENDING`, `CONFIRMED`, `CHECKED_IN`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`, `NO_SHOW` |
| `QueueStatus` | `WAITING`, `CALLED`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED` |
| `LabOrderStatus` | `PENDING`, `SAMPLE_COLLECTED`, `IN_PROGRESS`, `COMPLETED`, `APPROVED`, `CANCELLED` |
| `ImagingOrderStatus` | `PENDING`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED` |
| `PregnancyStatus` | `ACTIVE`, `COMPLETED`, `MISCARRIED`, `TERMINATED` |
| `PrescriptionStatus` | `ACTIVE`, `COMPLETED`, `CANCELLED` |
| `ServiceCategory` | `CONSULTATION`, `LABORATORY`, `IMAGING`, `PROCEDURE`, `MEDICATION`, `ADMISSION`, `ROOM`, `MATERNITY`, `OTHER` |
| `InvoiceStatus` | `PENDING`, `PARTIAL`, `PAID`, `OVERDUE`, `CANCELLED`, `REFUNDED` |
| `PaymentMethod` | `CASH`, `MTN_MOMO`, `TELECEL_CASH`, `AIRTELTIGO_MONEY`, `CARD`, `BANK_TRANSFER`, `INSURANCE`, `OTHER` |
| `PaymentStatus` | `PENDING`, `COMPLETED`, `FAILED`, `REFUNDED` |
| `RoomType` | `CONSULTATION`, `LABORATORY`, `ULTRASOUND`, `PROCEDURE`, `MATERNITY`, `WARD`, `THEATRE`, `OTHER` |
| `RoomStatus` | `AVAILABLE`, `OCCUPIED`, `RESERVED`, `MAINTENANCE` |
| `StockMovementType` | `PURCHASE`, `TRANSFER_IN`, `TRANSFER_OUT`, `ADJUSTMENT`, `DISPENSED`, `RETURNED`, `EXPIRED` |
| `NotificationType` | `APPOINTMENT`, `LAB_RESULT`, `IMAGING`, `PRESCRIPTION`, `PAYMENT`, `MESSAGE`, `SYSTEM`, `REMINDER` |
| `BlogStatus` | `DRAFT`, `PUBLISHED`, `SCHEDULED`, `ARCHIVED` |

---

## 15. Seed data

`npm run db:seed` runs `prisma/seed.ts`, which loads:

| Area | Contents |
| --- | --- |
| Permissions | 32 codes across 15 modules. |
| Roles | 10 system roles with their permission sets. |
| Branches | Three **demo** branches — Accra (`ACCRA`), Kumasi (`KUMASI`), Takoradi (`TAKORADI`) — so branch scoping and per-branch stock are exercised. These are fixture data, not published clinic locations: `siteConfig.branches` lists only the confirmed site, and `/api/branches` serves whatever the database holds. |
| Departments | 10: Fertility, Obstetrics & Gynaecology, Laboratory, Pharmacy, Maternity, Paediatrics, General Medicine, Dental, Imaging, Administration. |
| Services | 15 priced services — consultations GH₵200–500, labs GH₵80–250, imaging GH₵200–300, IUI GH₵3 000, antenatal GH₵500, normal delivery GH₵5 000, caesarean GH₵12 000. |
| Lab tests | 21 across Haematology, Chemistry, Hormones, Microbiology, Andrology and Immunology (FBC, AMH, semen analysis, β-hCG, …). |
| Medications | 20 with codes, generics, forms, strengths, prices and reorder levels. |
| Medication stock | Per branch — 20 medicines × 3 branches, stable `BATCH-<BR>` batch numbers, deterministic quantities (20–220). |
| Inventory | 20 consumable items (PPE, sharps, laboratory, general) **per branch** — 60 rows in total, deterministic opening stocks above each reorder level. |
| Staff | 12 — 6 doctors, 2 nurses, 1 receptionist, 1 lab scientist, 1 pharmacist, 1 accountant — each with a linked `User`. |
| Users | 1 super admin + 12 staff (`Staff@123`) + 8 patients (`Patient@123`). Staff addresses use the reserved `menstrocare.example` domain so they can never collide with a real mailbox. |
| Patients | 8 (`PAT-DEMO-001`…`008`) with blood groups and genotypes spread across all three branches. |
| Appointments | 12, **deterministically spread over the last 30 days** (re-seeding never moves them). |
| Fertility | 3 profiles (`FERT-…`) with hormonal and semen values plus treatment cycles; the demo profile includes `cycleLength`, `previousPregnancies` and `lastMenstrualPeriod` used by the patient 360 fertility panel. |
| Maternity | 2 pregnancies with 8 antenatal visits (4 each) and EDDs computed as LMP + 280 days. |
| Clinical | 5 medical records (`MR-DEMO-001`…`005`), each paired with a consultation (`CON-DEMO-001`…`005`). |
| Notifications | 6 unread samples addressed to the admin account. |

**Models with no seeded rows:** `Session`, `PasswordResetToken`, `Queue`, `Diagnosis`, `Prescription`, `PrescriptionItem`, `LabReferenceRange`, `LabOrder`, `LabResult`, `ImagingOrder`, `ImagingResult`, `IuiCycle`, `Delivery`, `Child`, `Vaccination`, `Invoice`, `InvoiceItem`, `Payment`, `DispensedMedication`, `StockMovement`, `Room`, `ContactMessage`, `BlogPost`, `Testimonial`, `Document`, `AuditLog`, `Setting`, `InsuranceClaim`. Those modules only get data through the UI or the API.

Every value is deterministic (no `Math.random()`), and every record is upserted or recreated by a stable business key, so the seed is safe to run repeatedly.

---

## 16. Frontend system

**Tailwind v4, CSS-first.** There is no `tailwind.config.*`; the theme lives in `src/app/globals.css` under `@theme` (`--color-*` and `--radius-*` in oklch) plus a base layer applying `border-border` to `*` and `bg-background text-foreground` to `body`. Dark mode is a `.dark` class driven by `next-themes`.

**Brand palette** — plain CSS variables, consumed as arbitrary values (`bg-[var(--brand-primary)]`):

| Variable | Light | Dark |
| --- | --- | --- |
| `--brand-primary` | `#0f766e` | `#2b9d92` |
| `--brand-primary-light` | `#2b9d92` | `#5fc0b6` |
| `--brand-primary-dark` | `#0a5751` | `#0f766e` |
| `--brand-secondary` | `#b4577f` | `#cf85a6` |
| `--brand-secondary-light` | `#cf85a6` | `#e0a3bb` |
| `--brand-accent` | `#e6f4f2` | `#0d2a28` |
| `--brand-warm` | `#fbeef2` | `#2a1a20` |
| `--brand-text` | `#16302f` | `#f2f7f6` |
| `--brand-text-light` | `#4c6664` | `#a9c3c1` |

`.on-light` re-declares the light palette on a single element (used by the public mobile navigation drawer).

**UI primitives** (`src/components/ui/`) are vendored shadcn/ui-style components built on Radix and `class-variance-authority`; there is no `components.json`, so they are not CLI-managed: `alert`, `avatar`, `badge`, `button`, `card`, `dialog`, `dropdown-menu`, `input`, `label`, `scroll-area`, `separator`, `tabs`. `Button` supports `asChild` via Radix `Slot`, so it can wrap a `next/link`.

**Layout components**

- `header.tsx` — sticky top contact bar, 8-item desktop nav, off-canvas mobile drawer, `AuthNav`, "Book Appointment" call to action.
- `footer.tsx` — brand block, quick links, services from `siteConfig`, contact details, legal links.
- `app-shell.tsx` — the authenticated frame shared by the dashboard and the portal: collapsible desktop sidebar, mobile drawer with an Escape handler and a menu button in a mobile app bar, user chip and sign-out. Takes its navigation, home route and labels as props, so a link can only exist in one area by accident.
- `page-hero.tsx` — the shared gradient page header for public pages (eyebrow, H1, breadcrumbs, actions).
- `auth-nav.tsx` — session-aware auth control. Signed out: a **Login** outline button linking to `/login`. Signed in: an avatar dropdown showing name and email, a "Dashboard" link (or "My Portal" for the `PATIENT` role) and "Sign out" via `signOut({ callbackUrl: "/login" })`. Renders icon-only below the `lg` breakpoint and accepts a `fullWidth` variant for the mobile drawer.

**Providers** (root layout, outermost first): `ThemeProvider` (next-themes, `attribute="class"`, `defaultTheme="light"`) → `Providers` (`SessionProvider`) → `QueryProvider` (TanStack Query). The font is `Inter` via `next/font/google`, exposed as `--font-inter`.

---

## 17. Conventions

**Human-readable record IDs** come from one Postgres sequence per prefix (`src/lib/ids.ts`, `nextId(prefix, tx?)`), issued as `<PREFIX>-<zero-padded to 6>` starting at 1000:

| Entity | Prefix | Example |
| --- | --- | --- |
| Patient | `PAT` | `PAT-001000` |
| Appointment | `APT` | `APT-001000` |
| Medical record | `MR` | `MR-001000` |
| Consultation | `CONS` | `CONS-001000` |
| Lab order / result | `LAB` / `RES` | `LAB-001000` |
| Imaging order / result | `IMG` / `IMGR` | `IMG-001000` |
| Fertility profile / cycle / IUI cycle | `FERT` / `CYC` / `IUIC` | `FERT-001000` |
| Pregnancy / child | `PREG` / `CHD` | `PREG-001000` |
| Invoice / payment / medication | `INV` / `PAY` / `MED` | `INV-001000` |
| Inventory item | `INVT` | `INVT-001000` — previously `INV-`, which collided with invoices |
| Insurance claim / contact message / document / audit event | `CLM` / `MSG` / `DOC` / `EVT` | `MSG-001000` |

`nextval()` is atomic and race-free (unlike the old `count()`-based ids, which could issue duplicates under concurrency); sequences are created idempotently on first use, so the module works with both `prisma db push` and `prisma migrate deploy`. Passing the Prisma transaction client (`tx`) keeps id generation inside the same transaction as the insert.

The sequences are named `<namespace>_id_<prefix>_seq` with `SEQUENCE_NAMESPACE = "menstrocare"` (`menstrocare_id_pat_seq`, …). They were `jaggreys_id_*_seq` before the rebrand; `adoptLegacySequenceState()` runs once after creation and advances each replacement sequence to its legacy position when the old name had been used, so an existing database cannot be issued an identifier that is already taken. Fresh databases match no legacy sequence and pay one catalogue query.

The seed uses its own readable ids (`PAT-DEMO-001`, `MR-DEMO-001`, `CON-DEMO-001`), and the sequences start high enough that they can never collide with those.

**Other conventions**

- `src/utils` provides `cn()`, `formatDate`, `formatDateTime`, `formatCurrency` (GHS), `slugify`, `getInitials` and `debounce`. The old `generateId(prefix)` helper is gone — use `nextId` from `src/lib/ids.ts`.
- Money is **Prisma `Decimal`**, not `Float` — server-computed totals are exact, serialised as strings (`serializeMoney` / `serializeMoneyDeep` in `src/lib/money.ts`) and parsed client-side. Currency is Ghanaian cedis (GH₵), rendered by the formatters in `src/utils`.
- `src/lib/db.ts` exports a `db` singleton, pinned to `globalThis` outside production to survive hot reloads. Writes that span multiple rows or models use `withSerializableRetry` from `src/lib/db/transaction.ts` (retries `P2034`/`40001` serialisation failures) so concurrent check-ins, dispensations and payments cannot interleave corruptly.
- Zod schemas live in `src/lib/validations/` split by area (`auth.ts`, `clinical.ts`, `common.ts`, `operations.ts`, `settings.ts`); route bodies are parsed with `parseBody` and queries with `parseQuery` from `src/lib/api/validate.ts`.
- Errors are raised with `ApiError` (typed status + message), rendered by `handleApiError` in `src/lib/api/errors.ts` which logs the route name; unexpected failures return 500.
- Non-trivial state changes (register, check-in, queue actions, invoice void/payment, lab approval, dispense, settings, portal edits) write an `AuditLog` row via `src/lib/audit`.
- Money and clinical timelines are computed server-side (invoice totals, remaining balances, queue numbers, EDDs, reports aggregates) so the client stays a rendering layer.

---

## 18. Known gaps and unfinished work

Worth knowing before you build on top of this.

**Security is largely closed** — every API route except the deliberately public ones (`/api/auth/*`, `/api/health`, `/api/branches`, `/api/contact`, and the public self-service booking path) authenticates through `src/lib/api/guard.ts` and is permission- and branch-scoped, and mutations are validated, transaction-wrapped and audited. The anonymous endpoints are rate-limited through `src/lib/rate-limit` (in-process memory store, or a shared Redis store when `REDIS_URL` is set; fails open on storage errors):

- `POST /api/auth/forgot-password` — 5 / hour per IP
- `POST /api/auth/reset-password` — 10 / hour per IP
- `POST /api/contact` — 5 / 15 min per IP
- `POST /api/appointments?public=booking` — 5 / hour per IP **and** per contact identity (email/phone)
- **Credentials login** — 10 / 15 min per account+IP and per IP; blocked attempts are audited as `rate_limited` login failures

Remaining hardening worth doing:

- **The rename is code-and-data, not history.** `prisma/migrations/` is left byte-for-byte unchanged, so the first migration comment still names the old product and an applied environment keeps its original schema. Identifiers that were renamed (`menstrocare_id_*_seq`, seeded email addresses, `menstrocare-app`) are handled by the legacy-sequence carry-over above and by re-running `npm run db:seed`; re-seeding an existing database leaves the old `@jaggreys.com` rows in place because their addresses are part of their upsert keys — reset the database (`npm run db:reset`) if you want the new ones.
- **Public booking creates patients.** A caller can create a `Patient` record (with contact details) repeatedly via `POST /api/appointments`'s public path; acceptable for self-service but consider verification (email/phone) for a public launch.
- **No end-to-end test suite.** There is a unit suite (`npm test` — money, ids, redaction, rate limiting, validation) plus a database-backed integration suite (`npm run test:integration`, against `TEST_DATABASE_URL`) whose headline check is that every permission string referenced by the routes exists in the seed — the exact bug that once shipped `payments.create`. Not yet covered: a full browser/HTTP E2E pass.

**External integrations are still placeholders / dev-only:**

- **SMTP** — the email module renders and logs reset links when no SMTP host is set; real delivery works only once `SMTP_*` is configured.
- **Storage** — the storage abstraction falls back to a local disk store; no object-storage provider is wired up.
- **SMS, WhatsApp and all mobile-money / card payment providers** are unimplemented — billing is recorded manually and no provider is ever called.

**Content that is hardcoded rather than read from the database**

- The public site (homepage, services, doctors, branches, blog, FAQ) uses inline data from `siteConfig`/components, not the `BlogPost`, `Testimonial`, `Service` or `Staff` tables.

**Dead or unreachable routes**

- `src/app/admin`, `src/app/dashboard`, `src/app/patient`, `src/app/api/seed`, `src/app/api/patients/[id]/records`, `src/app/(public)/verify-email` are empty directories that create no routes (`/verify-email` is allow-listed in the middleware but has no content).
- `src/app/(dashboard)/dashboard/medical-records/[id]` and `src/app/(dashboard)/dashboard/users/[id]` folders exist but are empty, so those detail views are unreachable from the UI.
- `POST /api/notifications` accepts no body and returns 501 — notifications are created only by server-side code in `src/lib/notifications`.

**Verification carried out (pre-launch checklist):**
- `npm run lint`, `npm run typecheck`, `npx prisma validate` and `npm run build` all pass.
- The seed is verified idempotent (two consecutive runs keep 12 appointments, 60 inventory rows and non-negative stock).
- API smoke tests against the production build verified: 401 for anonymous access to staff/reports endpoints; branch confinement (an Accra doctor only ever sees Accra staff even when forced with a Kumasi `branchId`); `403` for a doctor without `reports.view` on the reports summary; SUPER_ADMIN seeing all branches; reports custom `from`/`to` windows and the 366-day cap; patient-360 fertility fields; an appointment resolved to the correct `Staff` doctor; and 200s across the changed dashboard pages.

---

## 19. Deployment notes

- **Target:** any Node host (the project is not Vercel-specific, though it will run there). `next.config.ts` only sets security headers, so there are no platform assumptions.
- **Build:** `npm run build` runs `prisma generate` first, so the Prisma client is always generated for the deployed schema. `postinstall` also generates it and swallows failures. Response security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, a baseline CSP, and `no-store` caching on `/api/*`, `/dashboard/*` and `/portal/*`) are set in `next.config.ts`.
- **Migrations:** `prisma/migrations/` ships in the repo (an initial schema plus hardening and additive migrations), so `npm run db:migrate:prod` (`prisma migrate deploy`) applies them on CI / production. `prisma db push` also works for scratch environments.
- **Environment:** set `DATABASE_URL`, `AUTH_SECRET`, `AUTH_URL` and `APP_URL` at minimum. Set `CLINIC_WEBSITE` and `CLINIC_EMAIL` to the clinic's verified values — while they are unset the site publishes reserved `.example` placeholders, which is deliberate (they cannot resolve to a third party's site) but must not survive launch. `APP_ENV=production` disables Prisma query logging and stops pinning the client to `globalThis`. Configure `SMTP_*` if you want password-reset emails to actually send.
- **Health check:** point your platform's probe at `GET /api/health`.
- **Before going live:** rotate the seeded credentials, run the test/lint/typecheck/build pass, configure SMTP and a real storage backend, and close the remaining gaps in [section 18](#18-known-gaps-and-unfinished-work).# JDM-PLLC
