import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function registrationDetail(message: string, label: "Address" | "Nationality") {
  const line = message.split("\n").find((item) => item.startsWith(`${label}:`));
  return line?.slice(label.length + 1).trim() || "—";
}

export default async function LaunchRegistrationsPage() {
  const registrations = await prisma.contactMessage.findMany({
    where: { category: "LAUNCH_REGISTRATION" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">Launch Registrations</h2>
          <p className="mt-1 text-sm text-gray-600">Proposed official launch · 30 November 2026</p>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">{registrations.length} registered</span>
      </div>

      {registrations.length === 0 ? (
        <div className="rounded-lg border bg-white p-8 text-center text-gray-600">No registrations yet.</div>
      ) : (
        <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-600">
              <tr>
                <th className="px-4 py-3">Registered</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Nationality</th>
                <th className="px-4 py-3">Organisation</th>
                <th className="px-4 py-3">Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {registrations.map((registration) => (
                <tr key={registration.id} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-gray-600">{registration.createdAt.toLocaleString()}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{registration.name}</td>
                  <td className="px-4 py-3"><a className="text-blue-700 hover:underline" href={`mailto:${registration.email}`}>{registration.email}</a></td>
                  <td className="whitespace-nowrap px-4 py-3">{registration.phone}</td>
                  <td className="max-w-56 px-4 py-3">{registrationDetail(registration.message, "Address")}</td>
                  <td className="px-4 py-3">{registrationDetail(registration.message, "Nationality")}</td>
                  <td className="px-4 py-3">{registration.organisation || "—"}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-600">{registration.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
