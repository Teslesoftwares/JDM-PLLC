"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Calendar,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Info,
  Clock,
  Ticket,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Public visit / interest request.
 *
 * Posts to `POST /api/appointments?public=booking`, whose Zod schema requires a
 * branch id, date of birth and gender, so all three stay on the form. Branches
 * are loaded from the public `/api/branches` directory rather than hardcoded,
 * so a new location needs no change here.
 */

/** Interest types offered by the Centre, mapped to the request's `type` field. */
const INTEREST_TYPES = [
  "Visit the Library & Museum",
  "Research access",
  "Event registration",
  "Partnership enquiry",
  "Other",
];

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "13:00", "14:00", "15:00", "16:00", "16:30",
];

interface Branch {
  id: string;
  name: string;
  city: string | null;
}

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  branchId: "",
  type: "",
  date: "",
  time: "",
  reason: "",
};

export default function BookAppointmentPage() {
  const [form, setForm] = useState(EMPTY);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loadingBranches, setLoadingBranches] = useState(true);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ name: string; reference?: string } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetch("/api/branches")
      .then((response) => response.json())
      .then((data: { branches?: Branch[] }) => {
        if (!active) return;
        setBranches(data.branches ?? []);
        // Preselect when the Centre's directory returns a single branch.
        if ((data.branches ?? []).length === 1) {
          setForm((previous) => ({ ...previous, branchId: data.branches![0].id }));
        }
      })
      .catch(() => {
        if (active) setError("We could not load the branch list. Please call the Centre instead.");
      })
      .finally(() => {
        if (active) setLoadingBranches(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      setError("Please provide your first name, last name, email address and phone number.");
      return;
    }
    if (!form.dateOfBirth) {
      setError("Please provide your date of birth so we can process your request.");
      return;
    }
    if (!form.gender) {
      setError("Please select how you would like to be recorded.");
      return;
    }
    if (!form.branchId) {
      setError("Please choose the branch you would like to deal with.");
      return;
    }
    if (!form.date || !form.time) {
      setError("Please choose your preferred date and time.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/appointments?public=booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          branchId: form.branchId,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          dateOfBirth: form.dateOfBirth,
          gender: form.gender,
          date: form.date,
          time: form.time,
          type: form.type || "Visit the Library & Museum",
          reason: form.reason || null,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          data.error ??
            "We could not submit that request. Please try again, or call the Centre on " +
              siteConfig.contact.phone +
              " and we will take it from there."
        );
        return;
      }

      setResult({ name: form.firstName });
      setForm(EMPTY);
    } catch {
      setError(`We could not reach the Centre. Please try again or call ${siteConfig.contact.phone} instead.`);
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <div>
        <section className="bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-primary)]/10 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-[var(--brand-primary)]">
              <Calendar className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Plan Your Visit
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-[var(--brand-text)] sm:text-5xl">
              Request received
            </h1>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center" role="status">
                <CheckCircle2
                  className="mx-auto mb-4 h-16 w-16 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h2 className="mb-2 text-2xl font-bold text-[var(--brand-text)]">
                  Thank you, {result.name}
                </h2>
                <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                  Your request has been sent to the Centre. We confirm every request
                  by phone or email, so nothing is confirmed until you hear from us.
                  If your request is time-sensitive, call{" "}
                  {siteConfig.contact.phone}.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                  >
                    <Link href="/">Return home</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact the Centre</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-primary)]/10 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-[var(--brand-primary)]">
            <Calendar className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Plan Your Visit
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-[var(--brand-text)] sm:text-5xl">
            Request a visit, research access or a conversation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--brand-text-light)]">
            Tell us what you would like to arrange at {siteConfig.name} and when
            suits you. We confirm every request by phone or email.
          </p>
        </div>
      </section>

      {/* Visiting hours & admission */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Before you request
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Visiting hours and admission
            </h2>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              The Centre&rsquo;s contact office is in Accra; its work is carried
              through Mind in Tamale, Soul in Busunu and Heart in Bole.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <Clock
                  className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-3 text-lg font-semibold text-[var(--brand-text)]">
                  Visiting hours
                </h3>
                <dl className="space-y-1.5 text-sm">
                  {Object.entries(siteConfig.openingHours.schedule).map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-4">
                      <dt className="text-[var(--brand-text-light)]">{day}</dt>
                      <dd className="font-medium text-[var(--brand-text)]">{hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-[var(--brand-text-light)]">
                  Sunday and public holidays: closed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <Ticket
                  className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Admission
                </h3>
                <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Admission is free for Ghanaian citizens. International visitors pay
                  GHS 50.
                </p>
                <p className="mt-3 text-xs text-[var(--brand-text-light)]">
                  Opening dates for the Library, Museum and Hall of Fame are confirmed
                  with the Centre at the time of booking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <MapPin
                  className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Where we are
                </h3>
                <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                  {siteConfig.contact.address}. Three integrated branches: Mind
                  (Tamale), Soul (Busunu) and Heart (Bole) — our Global Headquarters
                  with the Presidential Library &amp; Museum.
                </p>
                <p className="mt-3 text-xs text-[var(--brand-text-light)]">
                  Call {siteConfig.contact.phone} before you travel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Your details
            </p>
            <h2 className="mb-3 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Send your request
            </h2>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              A sentence or two is enough. We reply by phone or email to confirm
              what happens next.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {error ? (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                ) : null}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="e.g. 024 123 4567"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      max={today}
                      value={form.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Recorded gender *</Label>
                    <select
                      id="gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      required
                      className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                    >
                      <option value="">Select</option>
                      <option value="FEMALE">Female</option>
                      <option value="MALE">Male</option>
                      <option value="OTHER">Prefer to self-describe</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="branchId">Branch *</Label>
                  <select
                    id="branchId"
                    name="branchId"
                    value={form.branchId}
                    onChange={handleChange}
                    required
                    disabled={loadingBranches}
                    className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm disabled:opacity-60"
                  >
                    <option value="">
                      {loadingBranches ? "Loading branches…" : "Select a branch"}
                    </option>
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                        {branch.city ? ` — ${branch.city}` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="type">What would you like to arrange? *</Label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                  >
                    <option value="">Select an option</option>
                    {INTEREST_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="date">Preferred date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred time *</Label>
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                    >
                      <option value="">Select a time</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="reason">Reason for your request</Label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={3}
                    value={form.reason}
                    onChange={handleChange}
                    maxLength={200}
                    placeholder="For example: I am researching Northern Ghana's traditional governance systems and would like archive access."
                    className="mt-2 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                  />
                  <p className="mt-2 flex items-start gap-2 text-xs text-[var(--brand-text-light)]">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    A sentence is enough. Please do not include sensitive personal
                    details here — the Centre will confirm the details with you
                    directly.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading || loadingBranches}
                  className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending request
                    </>
                  ) : (
                    <>
                      Send request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-4 text-center text-sm text-[var(--brand-text-light)]">
                We confirm every request by phone or email. Centre hours:{" "}
                {siteConfig.openingHours.summary}.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Inquiries welcome</h2>
          <p className="mb-8 text-white/85">
            Research access, partnership proposals, media inquiries, event
            registration and scholarship applications — we are glad to hear from
            you on {siteConfig.contact.phone}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/partner">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
