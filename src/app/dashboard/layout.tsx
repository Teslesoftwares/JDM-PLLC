import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

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
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold">JDM PLLC Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{session.user.email} ({role})</span>
            <a href="/" className="text-sm text-blue-600 hover:underline">Back to Site</a>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <nav className="mb-6 flex flex-wrap gap-4 border-b">
          <a href="/dashboard" className="px-4 py-2 hover:text-blue-600">Overview</a>
          <a href="/dashboard/inquiries" className="px-4 py-2 hover:text-blue-600">Inquiries</a>
          <a href="/dashboard/news" className="px-4 py-2 hover:text-blue-600">News Management</a>
        </nav>
        {children}
      </div>
    </div>
  );
}
