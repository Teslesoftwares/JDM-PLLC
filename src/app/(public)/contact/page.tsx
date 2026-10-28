import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/public/contact-form";
import { ArrowRight, ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name}: ${siteConfig.contact.phone}, ${siteConfig.contact.email}, ${siteConfig.contact.address}. Send a message, plan a visit or propose a partnership.`,
  alternates: { canonical: "/contact" },
};

const INQUIRIES = [
  "Research access",
  "Partnership proposals",
  "Media inquiries",
  "Event registration",
  "Scholarship applications",
];

export default function ContactPage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description={`Call the Centre on ${siteConfig.contact.phone}, send a message using the form, or plan your visit online. Research access, partnership proposals, media inquiries, event registration and scholarship applications are all welcome.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-5">
            <Card className="border-0 shadow-md lg:col-span-3">
              <CardContent className="p-8">
                <h2 className="mb-1 text-2xl font-bold text-[var(--brand-text)]">
                  Send us a message
                </h2>
                <p className="mb-6 text-sm text-[var(--brand-text-light)]">
                  Tell us what you need and we will reply as soon as we can. Messages
                  are logged with a reference so you can quote it if you call us back.
                </p>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-6 lg:col-span-2">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-lg font-semibold text-[var(--brand-text)]">
                    Centre details
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    <span className="font-semibold text-[var(--brand-text)]">
                      {siteConfig.formalName}
                    </span>
                    <br />
                    {siteConfig.descriptor}
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="font-medium text-[var(--brand-text)] hover:underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="break-all text-[var(--brand-text)] hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <span className="text-[var(--brand-text)]">
                        {siteConfig.contact.address}
                        <br />
                        {siteConfig.contact.country}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <span className="text-[var(--brand-text)]">
                        {siteConfig.openingHours.summary}
                      </span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                  >
                    <Link href="/branches">
                      Explore the branches
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-[var(--brand-text)]">
                    Opening hours
                  </h3>
                  <dl className="space-y-1.5 text-sm">
                    {days.map((day) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="text-[var(--brand-text-light)]">{day}</dt>
                        <dd className="font-medium text-[var(--brand-text)]">
                          {siteConfig.openingHours.schedule[day]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-[var(--brand-text-light)]">
                    Public holidays: closed. Admission is free for Ghanaian citizens;
                    international visitors pay GHS 50.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-[var(--brand-text)]">
                    Inquiries welcome
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Tell us which of these you need in your message and it will reach
                    the right person.
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {INQUIRIES.map((inquiry) => (
                      <li
                        key={inquiry}
                        className="flex items-start gap-2 text-[var(--brand-text)]"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                        {inquiry}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our location */}
      <section id="location" className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Where to find us
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              One institution, three branches
            </h2>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              Our contact office is at {siteConfig.contact.address}. The Centre
              itself works through three integrated branches in Northern Ghana —
              Mind in Tamale, Soul in Busunu and Heart in Bole, our Global
              Headquarters with the Presidential Library &amp; Museum and the Hall
              of Fame.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
              {siteConfig.branches.map((branch) => (
                <Card key={branch.slug} className="border-0 bg-white shadow-md">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-accent)]">
                        <MapPin className="h-6 w-6 text-[var(--brand-primary)]" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--brand-text)]">
                          {branch.name}
                        </h3>
                        <p className="text-sm text-[var(--brand-text-light)]">
                          {branch.city}, {branch.country}
                        </p>
                      </div>
                    </div>

                    <address className="mb-6 space-y-3 text-sm not-italic">
                      <p className="flex items-start gap-3 text-[var(--brand-text)]">
                        <MapPin
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                        <span>
                          {branch.address}, {branch.city}
                          <br />
                          {branch.region}, {branch.country}
                        </span>
                      </p>
                      <p className="flex items-start gap-3">
                        <Phone
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                        <a
                          href={siteConfig.contact.phoneHref}
                          className="font-medium text-[var(--brand-text)] hover:underline"
                        >
                          {branch.phone}
                        </a>
                      </p>
                      <p className="flex items-start gap-3 text-[var(--brand-text)]">
                        <Clock
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                        <span>{siteConfig.openingHours.summary}</span>
                      </p>
                    </address>

                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-text-light)]">
                      At this branch
                    </h4>
                    <ul className="mb-6 flex flex-wrap gap-2">
                      {branch.departments.map((department) => (
                        <li
                          key={department}
                          className="rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs font-medium text-[var(--brand-primary)]"
                        >
                          {department}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      className="mt-auto border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]"
                    >
                      <Link href={`/branches/${branch.slug}`}>
                        View branch details
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-2">
              {siteConfig.contact.latitude != null &&
              siteConfig.contact.longitude != null ? (
                <Card className="border-0 shadow-md">
                  <CardContent className="p-0">
                    <iframe
                      title={`Map showing ${siteConfig.name} in ${siteConfig.contact.address}`}
                      className="h-72 w-full rounded-none border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${siteConfig.contact.latitude},${siteConfig.contact.longitude}&z=15&output=embed`}
                    />
                  </CardContent>
                </Card>
              ) : null}

              <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-md">
                <CardContent className="p-8">
                  <h3 className="mb-3 text-xl font-bold">Plan your visit</h3>
                  <p className="mb-6 leading-relaxed text-white/85">
                    Visiting hours are{" "}
                    <span className="font-semibold">{siteConfig.openingHours.summary}</span>
                    , with Sundays and public holidays closed. Admission is free for
                    Ghanaian citizens; international visitors pay GHS 50. Call{" "}
                    <a href={siteConfig.contact.phoneHref} className="underline underline-offset-4">
                      {siteConfig.contact.phone}
                    </a>{" "}
                    before you travel, or request a visit online.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Button
                      asChild
                      className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
                    >
                      <Link href="/branches">Visitor information</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
                    >
                      <Link href="/branches">Explore the branches</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
