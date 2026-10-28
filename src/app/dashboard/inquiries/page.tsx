"use client";

import { useEffect, useState } from "react";

interface Inquiry {
  id: string;
  reference: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  category: string;
  status: string;
  createdAt: string;
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setInquiries(data.inquiries || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const markAsRead = async (id: string) => {
    await fetch("/api/contact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: "READ" }),
    });
    setInquiries(inquiries.map((i) => (i.id === id ? { ...i, status: "READ" } : i)));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Contact Inquiries</h2>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {inquiries.filter((i) => i.status === "NEW").length} New
        </span>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : inquiries.length === 0 ? (
        <div className="rounded-lg border bg-white p-8 text-center">
          <p className="text-gray-600">No inquiries yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className={`rounded-lg border bg-white p-6 shadow-sm ${
                inquiry.status === "NEW" ? "border-l-4 border-l-blue-500" : ""
              }`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium">{inquiry.name}</h3>
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs">{inquiry.reference}</span>
                    <span className={`rounded px-2 py-1 text-xs ${
                      inquiry.status === "NEW" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                    }`}>
                      {inquiry.status}
                    </span>
                    <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-700">
                      {inquiry.category}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {inquiry.email} {inquiry.phone && `• ${inquiry.phone}`}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(inquiry.createdAt).toLocaleString()}
                  </p>
                </div>
                {inquiry.status === "NEW" && (
                  <button
                    onClick={() => markAsRead(inquiry.id)}
                    className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
              {inquiry.subject && (
                <p className="mb-2 font-medium">Subject: {inquiry.subject}</p>
              )}
              <div className="rounded bg-gray-50 p-4">
                <p className="whitespace-pre-wrap text-gray-700">{inquiry.message}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={`mailto:${inquiry.email}?subject=Re: ${inquiry.subject || inquiry.reference}`}
                  className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
