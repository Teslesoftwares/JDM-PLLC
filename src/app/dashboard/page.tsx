export default function DashboardPage() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-semibold sm:text-2xl">JDM-PLLC Secretariat</h2>
      <p className="mb-6 max-w-3xl leading-relaxed text-gray-600">
        Document the legacy, preserve and protect the historical record, and inspire the youth to learn from the past and shape the future.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="/dashboard/inquiries"
          className="group rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/40 hover:shadow-md sm:p-6"
        >
          <h3 className="mb-2 text-lg font-medium">Contact Enquiries</h3>
          <p className="mb-4 text-gray-600">View messages sent through the Contact Form</p>
          <span className="font-medium text-[var(--brand-primary)] group-hover:underline">
            View Enquiries →
          </span>
        </a>
        <a
          href="/dashboard/news"
          className="group rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/40 hover:shadow-md sm:p-6"
        >
          <h3 className="mb-2 text-lg font-medium">News and Project Updates</h3>
          <p className="mb-4 text-gray-600">
            Only confirmed developments should be presented as completed. Proposals, discussions and pending approvals must be identified accurately.
          </p>
          <span className="font-medium text-[var(--brand-primary)] group-hover:underline">
            News and Updates →
          </span>
        </a>
      </div>
    </div>
  );
}
