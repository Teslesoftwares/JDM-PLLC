"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  nationality: "",
  organisation: "",
  consent: false,
  website: "",
};

export function LaunchRegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [reference, setReference] = useState("");
  const [emailSent, setEmailSent] = useState(true);
  const [error, setError] = useState("");

  function change(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/launch-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "We could not complete your registration. Please try again.");
        return;
      }
      setEmailSent(data.emailSent !== false);
      setReference(data.reference);
    } catch {
      setError("We could not reach the registration service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (reference) {
    return (
      <div className="py-8 text-center" role="status">
        <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-(--brand-primary)" aria-hidden="true" />
        <h2 className="mb-2 text-2xl font-bold text-(--brand-text)">Registration received</h2>
        <p className="text-(--brand-text-light)">{emailSent ? "A confirmation has been sent to your email address." : "Your registration is saved. Email delivery is delayed; the Secretariat will follow up."}</p>
        <p className="mt-4 text-sm text-(--brand-text-light)">Registration reference: <strong>{reference}</strong></p>
      </div>
    );
  }

  const inputClass = "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-(--brand-text) outline-none focus:border-(--brand-primary) focus:ring-2 focus:ring-(--brand-primary)/20";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="launch-website">Website</label>
        <input id="launch-website" name="website" value={form.website} onChange={change} tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="launch-name" className="text-sm font-semibold text-(--brand-text)">Full name</label>
        <input id="launch-name" name="name" value={form.name} onChange={change} autoComplete="name" required maxLength={120} className={inputClass} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="launch-email" className="text-sm font-semibold text-(--brand-text)">Email address</label>
          <input id="launch-email" name="email" type="email" value={form.email} onChange={change} autoComplete="email" required maxLength={254} className={inputClass} />
        </div>
        <div>
          <label htmlFor="launch-phone" className="text-sm font-semibold text-(--brand-text)">Phone number</label>
          <input id="launch-phone" name="phone" type="tel" value={form.phone} onChange={change} autoComplete="tel" required maxLength={40} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="launch-address" className="text-sm font-semibold text-(--brand-text)">Residential address</label>
        <input id="launch-address" name="address" value={form.address} onChange={change} autoComplete="street-address" required maxLength={240} className={inputClass} />
      </div>
      <div>
        <label htmlFor="launch-nationality" className="text-sm font-semibold text-(--brand-text)">Nationality</label>
        <input id="launch-nationality" name="nationality" value={form.nationality} onChange={change} autoComplete="country-name" required maxLength={100} className={inputClass} />
      </div>
      <div>
        <label htmlFor="launch-organisation" className="text-sm font-semibold text-(--brand-text)">Organisation <span className="font-normal text-gray-500">(optional)</span></label>
        <input id="launch-organisation" name="organisation" value={form.organisation} onChange={change} autoComplete="organization" maxLength={160} className={inputClass} />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-(--brand-text-light)">
        <input name="consent" type="checkbox" checked={form.consent} onChange={change} required className="mt-1 h-4 w-4 accent-(--brand-primary)" />
        <span>I agree that JDM-PLLC may use these details to manage my launch registration and send event updates. See the <Link href="/privacy" className="font-semibold text-(--brand-primary) underline">Privacy Notice</Link>.</span>
      </label>
      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
      <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center rounded-lg bg-(--brand-primary) px-5 py-3 font-semibold text-white transition hover:bg-(--brand-primary-dark) disabled:opacity-60 sm:w-auto">
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting…</> : "Complete registration"}
      </button>
      <p className="text-xs text-(--brand-text-light)">The launch date, time and venue remain subject to confirmation by the Secretariat.</p>
    </form>
  );
}
