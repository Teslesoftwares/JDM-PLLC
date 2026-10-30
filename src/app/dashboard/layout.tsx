import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ScrollProgress } from "@/components/motion/scroll-progress";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const role = session.user.role;
  if (role !== "ADMIN" && role !== "SUPER_ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgress />
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-base font-bold sm:text-xl">JDM-PLLC Secretariat Dashboard</h1>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <span className="min-w-0 truncate text-xs text-gray-600 sm:text-sm">
              {session.user.email} ({role})
            </span>
            <Link
              href="/"
              className="shrink-0 rounded border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 sm:text-sm"
            >
              Back to Site
            </Link>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-2 sm:px-4">
          <Link href="/dashboard" className="whitespace-nowrap rounded-t px-3 py-2.5 text-sm font-medium hover:text-[var(--brand-primary)]">Overview</Link>
          <Link href="/dashboard/inquiries" className="whitespace-nowrap rounded-t px-3 py-2.5 text-sm font-medium hover:text-[var(--brand-primary)]">Contact Enquiries</Link>
          <Link href="/dashboard/news" className="whitespace-nowrap rounded-t px-3 py-2.5 text-sm font-medium hover:text-[var(--brand-primary)]">News and Project Updates</Link>
        </nav>
      </header>
      <div className="motion-page-enter mx-auto max-w-7xl px-4 py-6 sm:py-8">{children}</div>
    </div>
  );
}
