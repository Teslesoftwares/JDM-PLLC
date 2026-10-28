export default function DashboardPage() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Dashboard Overview</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-medium">Contact Inquiries</h3>
          <p className="mb-4 text-gray-600">View messages from contact form</p>
          <a href="/dashboard/inquiries" className="text-blue-600 hover:underline">View Inquiries →</a>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-medium">News Management</h3>
          <p className="mb-4 text-gray-600">Create, edit, and publish news articles</p>
          <a href="/dashboard/news" className="text-blue-600 hover:underline">Manage News →</a>
        </div>
      </div>
    </div>
  );
}
