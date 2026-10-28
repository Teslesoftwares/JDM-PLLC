"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

type Category =
  | "GENERAL"
  | "VISITING"
  | "RESEARCH"
  | "PARTNERSHIP"
  | "MEDIA"
  | "EVENTS"
  | "FELLOWSHIP";

const CATEGORIES: Array<{ value: Category; label: string }> = [
  { value: "GENERAL", label: "General enquiry" },
  { value: "VISITING", label: "Visiting & admission" },
  { value: "RESEARCH", label: "Research access" },
  { value: "PARTNERSHIP", label: "Partnership proposal" },
  { value: "MEDIA", label: "Media inquiry" },
  { value: "EVENTS", label: "Event registration" },
  { value: "FELLOWSHIP", label: "Fellowship or scholarship" },
];

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "", category: "GENERAL" as Category, website: "" };

/**
 * Public contact form.
 *
 * Posts to `/api/contact`, which persists the message as a `ContactMessage`
 * with a quotable reference and sends the sender an acknowledgement. The
 * `website` field is a honeypot: it is hidden from people and rejected by the
 * API, which answers bots exactly as it answers people.
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
      setError("Please provide your name, a valid email address and a message of at least 10 characters.");
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
          <Label htmlFor="contact-name">Name *</Label>
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
          <Label htmlFor="contact-email">Email *</Label>
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
          <Label htmlFor="contact-phone">Phone (optional)</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="contact-category">What is this about?</Label>
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
        <Label htmlFor="contact-subject">Subject (optional)</Label>
        <Input
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          maxLength={200}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="contact-message">Message *</Label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          maxLength={5000}
          required
          className="mt-2 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
          placeholder="Tell us how we can help — include any relevant dates, references or the branch you are interested in."
        />
        <p className="mt-2 text-xs text-[var(--brand-text-light)]">
          A few sentences is enough. Please avoid sensitive personal details here —
          anything that needs a full conversation is better arranged directly with
          the Centre.
        </p>
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