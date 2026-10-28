import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Library,
  Mic,
  Users,
  ScrollText,
  CalendarDays,
  Megaphone,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Events & programmes",
  description: `2026 is the Year of First Light at ${siteConfig.formalName} — the launch of the Centre's soft infrastructure: digital archive, annual lecture, Pan-African fellowships and an oral history blitz.`,
  alternates: { canonical: "/events" },
};

const launches = [
  {
    icon: Library,
    title: "Virtual Northern Star Library & Digital Archive",
    body: "A globally accessible digital repository of leadership case studies, oral histories, governance research, and archival materials from across the African continent — making the Centre's knowledge available to the world from day one.",
  },
  {
    icon: Mic,
    title: "Northern Star Annual Lecture",
    body: "Establishing a premier annual intellectual forum that convenes leaders, scholars, policymakers, and innovators to advance dialogue on governance, development, and African futures — positioning the Centre as a continental thought leader.",
  },
  {
    icon: Users,
    title: "Pan-African Fellowship Programme",
    body: "A flagship cohort programme selecting exceptional young leaders from across Africa for immersive leadership development, mentorship, and continental networking — the first cohort of the Northern Star generation.",
  },
  {
    icon: ScrollText,
    title: "Indigenous Knowledge Systems Oral History Blitz",
    body: "A systematic, urgent effort to record, preserve, and digitize the oral histories and traditional governance wisdom of communities across Northern Ghana and beyond — before these irreplaceable voices are lost.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="2026 · The Year of First Light"
        title="Events & programmes"
        description="While physical construction is mobilized, the intellectual and programmatic infrastructure of the Northern Star Centre launches — establishing credibility and continental relevance from day one."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/contact">
              Ask About These Initiatives
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Soft infrastructure launch
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                2026 is the inflection point
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  The land is secured. The endorsements are granted. The vision is
                  clear. Now, we activate. While physical construction is
                  mobilized, we launch the intellectual and programmatic
                  infrastructure that will establish the Centre&rsquo;s
                  credibility and continental relevance from day one.
                </p>
                <p className="font-medium text-[var(--brand-text)]">
                  The light begins.
                </p>
              </div>
            </div>

            <Card className="border-0 bg-[var(--brand-accent)]">
              <CardContent className="p-8">
                <CalendarDays
                  className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Dates will be announced
                </h3>
                <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Programme dates, cohorts and application windows are confirmed
                  with {siteConfig.shortName} at the time of enquiry. Register
                  your interest and the team will keep you informed as each
                  initiative launches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Four launches */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              First Light · 2026
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Four initiatives, one launch
            </h2>
            <p className="text-[var(--brand-text-light)]">
              These initiatives establish the Centre&rsquo;s intellectual
              footprint while physical infrastructure is being developed.
              2026: The Light Begins.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {launches.map((item) => (
              <Card key={item.title} className="border-0 bg-white shadow-sm">
                <CardContent className="flex h-full flex-col p-6">
                  <item.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {item.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {item.body}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                    Dates announced · Register your interest
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Lecture feature */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Feature programme
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                The Northern Star Annual Lecture
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  A premier annual intellectual forum convening leaders, scholars,
                  policymakers, and innovators to advance dialogue on governance,
                  development, and African futures.
                </p>
                <p>
                  By establishing the Annual Lecture, {siteConfig.name} positions
                  itself as a continental thought leader — a platform where
                  leadership practice, democratic resilience and Pan-African
                  development are studied and applied in real time.
                </p>
                <p className="font-medium text-[var(--brand-text)]">
                  The inaugural lecture date will be announced. Register your
                  interest to be invited.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-8">
                  <Megaphone
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-3 text-lg font-semibold text-[var(--brand-text)]">
                    Convening the constellation
                  </h3>
                  <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                    <li>Leaders and public servants</li>
                    <li>Scholars and researchers</li>
                    <li>Policymakers and innovators</li>
                    <li>Young leaders of the Northern Star generation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Register your interest CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Register your interest
          </h2>
          <p className="mb-8 text-white/85">
            Be among the first to hear when the 2026 programmes open. Book an
            conversation with the team, or contact us on{" "}
            {siteConfig.contact.phone} or {siteConfig.contact.email}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link href="/contact">Ask About These Initiatives</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
