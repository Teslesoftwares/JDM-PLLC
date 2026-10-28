export default function DashboardPage() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Dashboard Overview</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="/dashboard/inquiries"
          className="group rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/40 hover:shadow-md sm:p-6"
        >
          <h3 className="mb-2 text-lg font-medium">Contact Inquiries</h3>
          <p className="mb-4 text-gray-600">View messages sent from the contact form</p>
          <span className="font-medium text-[var(--brand-primary)] group-hover:underline">
            View Inquiries →
          </span>
        </a>
        <a
          href="/dashboard/news"
          className="group rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/40 hover:shadow-md sm:p-6"
        >
          <h3 className="mb-2 text-lg font-medium">News Management</h3>
          <p className="mb-4 text-gray-600">Create, edit, and publish news articles</p>
          <span className="font-medium text-[var(--brand-primary)] group-hover:underline">
            Manage News →
          </span>
        </a>
      </div>
    </div>
  );
}
