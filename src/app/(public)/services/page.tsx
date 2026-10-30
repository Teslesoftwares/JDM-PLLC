import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Archive,
  BookOpen,
  GraduationCap,
  Landmark,
  Lightbulb,
  MonitorPlay,
  Users,
  Building2,
} from "lucide-react";
import { siteConfig, isPending } from "@/config/site";

export const metadata: Metadata = {
  title: "The Library & Legacy Centre",
  description:
    "The proposed facilities and programme areas of JDM-PLLC: presidential library and archives, research, civic education, youth skills, conferences, museum, digital learning and community history.",
  alternates: { canonical: "/services" },
};

const FACILITY_ICONS: Record<string, typeof Landmark> = {
  "presidential-library-archives": Landmark,
  "research-knowledge-centre": BookOpen,
  "leadership-civic-education": Users,
  "youth-skills-enterprise": Lightbulb,
  "conference-public-dialogue": Building2,
  "museum-cultural-heritage": Archive,
  "digital-virtual-learning": MonitorPlay,
  "family-community-history": GraduationCap,
};

export default function CentrePage() {
  return (
    <>
      <PageHero
        eyebrow="The Library & Legacy Centre"
        title="A Living Institution for History, Knowledge and Opportunity"
        description="JDM-PLLC is being developed as a centre for historical preservation, research, education, cultural heritage and youth empowerment."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "The Centre" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/contact">
              Enquire About the Centre
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 space-y-3 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5 text-sm leading-relaxed text-[var(--brand-text)]">
            <p>
              JDM-PLLC is being developed as a centre for historical
              preservation, research, education, cultural heritage and youth
              empowerment.
            </p>
            <p>
              Its facilities and programmes will be implemented progressively,
              subject to planning, institutional agreements, approvals, funding
              and available resources.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => {
              const Icon = FACILITY_ICONS[service.slug] ?? Landmark;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <Card className="h-full border-0 shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Icon className="h-9 w-9 text-[var(--brand-primary)]" aria-hidden="true" />
                        {isPending(service.status) ? (
                          <span className="rounded-full bg-[var(--brand-accent)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--brand-primary)]">
                            Proposed
                          </span>
                        ) : null}
                      </div>
                      <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                        {service.name}
                      </h2>
                      <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                        {service.description}
                      </p>
                      <p className="mb-2 text-sm font-medium text-[var(--brand-text)]">
                        Potential activities include:
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
                <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Programmes
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Explore the signature initiatives the Centre intends to
                  develop for leadership, heritage, research and youth
                  enterprise.
                </p>
                <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                  <Link href="/programmes">View programmes</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Research &amp; Archives
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Learn how the Centre intends to collect, preserve and
                  interpret historical materials.
                </p>
                <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                  <Link href="/research">Explore research</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Branches &amp; Locations
                </h2>
                <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Tamale, Damongo, Busunu and Bole each contribute to one
                  connected institutional vision.
                </p>
                <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                  <Link href="/branches">View locations</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-3 text-3xl font-bold">
                Partner with the Centre
              </h2>
              <p className="text-lg text-white/90">
                Universities, libraries, cultural institutions, foundations and
                development organisations are invited to explore collaboration
                in research, education, archival preservation and programme
                development.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
                <Link prefetch={false} href="/partner">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link prefetch={false} href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
