import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Info,
  Lightbulb,
  Users,
  BookOpen,
  Library,
  Award,
  Archive,
} from "lucide-react";
import { siteConfig, isPending, servicePricingNote } from "@/config/site";

export const metadata: Metadata = {
  title: "Programmes & Facilities",
  description: `${siteConfig.name} delivers programmes and facilities across its three integrated branches — Mind (Tamale), Soul (Busunu) and Heart (Bole) — advancing ethical leadership, heritage preservation, Indigenous Knowledge Systems and Pan-African learning.`,
  alternates: { canonical: "/services" },
};

const SERVICE_ICONS: Record<string, typeof Lightbulb> = {
  "leadership-laboratory": Lightbulb,
  "pan-african-fellowships": Users,
  "indigenous-knowledge": BookOpen,
  "library-museum": Library,
  "hall-of-fame": Award,
  "digital-archive": Archive,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes & Facilities"
        title="Programmes & Facilities"
        description={`${siteConfig.name} delivers programmes and facilities across its three integrated branches — Mind (Tamale), Soul (Busunu) and Heart (Bole). Through the Leadership Laboratory, Pan-African Fellowships, the Indigenous Knowledge Systems Centre, the Library & Museum, the Northern Star Hall of Fame and the Digital Archive, the Centre advances ethical leadership, heritage preservation, research and human dignity rooted in Northern Ghana and serving Africa and the world.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programmes & Facilities" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/contact">
              Ask About Our Programmes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-start gap-3 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--brand-text)]">
              <strong>{servicePricingNote()}</strong> The Centre's 2026 soft infrastructure
              launch includes programmes, partnerships, fellowships, archives and digital platforms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => {
              const Icon = SERVICE_ICONS[service.slug] ?? Lightbulb;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <Card className="h-full border-0 shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Icon
                          className="h-10 w-10 text-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                        {isPending(service.status) ? (
                          <span className="rounded-full bg-[var(--brand-accent)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--brand-primary)]">
                            Confirm on enquiry
                          </span>
                        ) : null}
                      </div>
                      <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                        {service.name}
                      </h2>
                      <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5 text-sm text-[var(--brand-text-light)]">
                        {service.highlights.slice(0, 3).map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]"
                              aria-hidden="true"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:underline">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">Leadership</h2>
                <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Explore the Mahama Leadership Framework and how the Centre cultivates ethical,
                  competent and visionary leaders.
                </p>
                <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                  <Link href="/leadership">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-[var(--brand-text)]">Research</h3>
                <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Discover research, policy dialogues and Indigenous Knowledge Systems work.
                </p>
                <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                  <Link href="/research">Explore research</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-[var(--brand-text)]">Questions</h3>
                <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Fees, dates, enrolment, access and other enquiries.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                    <Link href="/faq">See FAQs</Link>
                  </Button>
                  <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                    <Link href="/contact">Contact us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-3 text-3xl font-bold">Plan your visit or make an enquiry</h2>
              <p className="text-lg text-white/90">
                Whether you would like to visit the Centre, enrol in a programme or propose a
                partnership, we welcome your enquiry.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
                  <Link href="/contact">
                    Ask About Our Programmes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
