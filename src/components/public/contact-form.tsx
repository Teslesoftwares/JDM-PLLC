"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

type Category =
  | "GENERAL"
  | "PARTNERSHIP"
  | "DONATION"
  | "RESEARCH"
  | "MEDIA"
  | "PROGRAMMES"
  | "EAMMC_TERDI"
  | "OTHER";

const CATEGORIES: Array<{ value: Category; label: string }> = [
  { value: "GENERAL", label: "General Enquiry" },
  { value: "PARTNERSHIP", label: "Institutional Partnership" },
  { value: "DONATION", label: "Donations and Sponsorship" },
  { value: "RESEARCH", label: "Research and Archives" },
  { value: "MEDIA", label: "Media Enquiry" },
  { value: "PROGRAMMES", label: "Youth Programmes" },
  { value: "EAMMC_TERDI", label: "EAMMC-TERDI" },
  { value: "OTHER", label: "Other" },
];

const EMPTY = {
  name: "",
  email: "",
  organisation: "",
  message: "",
  category: "GENERAL" as Category,
  consent: false,
  website: "",
};

/**
 * Public contact form.
 *
 * Posts to `/api/contact`, which persists the message as a `ContactMessage`
 * with a quotable reference. The `website` field is a honeypot: it is hidden
 * from people and rejected by the API, which answers bots exactly as it answers
 * people.
 */
export function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || form.message.trim().length < 10) {
      setError("Please provide your full name, email address and a message of at least 10 characters.");
      return;
    }

    if (!form.consent) {
      setError("Please consent to the Privacy Notice before sending your message.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(data.error ?? "We could not send your message. Please try again or call the Centre.");
        return;
      }

      setReference(typeof data.reference === "string" ? data.reference : null);
      setSuccess(true);
      setForm(EMPTY);
    } catch {
      setError(`We could not reach the Centre. Please try again or call ${siteConfig.contact.phone} instead.`);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="py-10 text-center" role="status">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-[var(--brand-primary)]" aria-hidden="true" />
        <h2 className="mb-2 text-xl font-bold text-[var(--brand-text)]">Message received</h2>
        <p className="mx-auto max-w-sm text-[var(--brand-text-light)]">
          Thank you. The Centre will reply as soon as it can. If your matter is
          urgent, please call {siteConfig.contact.phone} instead.
        </p>
        {reference ? (
          <p className="mt-4 text-sm text-[var(--brand-text-light)]">
            Your reference:{" "}
            <span className="font-semibold text-[var(--brand-text)]">{reference}</span>
          </p>
        ) : null}
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSuccess(false);
            setReference(null);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error ? (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">Full name *</Label>
          <Input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={100}
            required
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="contact-email">Email address *</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            maxLength={254}
            required
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-organisation">Organisation if applicable</Label>
          <Input
            id="contact-organisation"
            name="organisation"
            value={form.organisation}
            onChange={handleChange}
            autoComplete="organization"
            maxLength={200}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="contact-category">Enquiry category</Label>
          <select
            id="contact-category"
            name="category"
            value={form.category}
            onChange={(event) =>
              setForm((previous) => ({
                ...previous,
                category: event.target.value as Category,
              }))
            }
            className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
          >
            {CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message">Message *</Label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          maxLength={5000}
          required
          className="mt-2 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="contact-consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={(event) =>
            setForm((previous) => ({ ...previous, consent: event.target.checked }))
          }
          className="mt-1 h-4 w-4 rounded border-input text-[var(--brand-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          required
        />
        <Label htmlFor="contact-consent" className="text-sm font-normal leading-relaxed">
          Consent to the{" "}
          <Link href="/data-protection" className="font-medium text-[var(--brand-primary)] hover:underline">
            Privacy Notice
          </Link>
          . *
        </Label>
      </div>

      {/* Honeypot: hidden from people, rejected by the API. */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="contact-website">Website</Label>
        <Input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}
