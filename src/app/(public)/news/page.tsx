import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Megaphone, Newspaper } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Updates from the Centre",
  description: `Institutional milestones in the founding decade of ${siteConfig.formalName} — from the 2021 vision to the Vision 2031 commitments.`,
  alternates: { canonical: "/news" },
};

const updates = [
  {
    label: "2021",
    title: "The vision emerges",
    summary:
      "A bold idea was conceived: to transform presidential legacy into leadership capital for future generations, and to create a globally respected institution rooted in Northern Ghana and serving the African continent.",
  },
  {
    label: "2021–2025",
    title: "Foundations secured",
    summary:
      "Land acquisition completed. Institutional endorsements secured. Conceptual, architectural and programmatic frameworks refined, and strategic stakeholder engagement initiated. The foundation has been laid.",
  },
  {
    label: "2026",
    title: "Year of First Light: soft infrastructure launches",
    summary:
      "While physical construction is mobilised, the Centre activates its soft infrastructure — programmes, partnerships, fellowships, archives and digital platforms — establishing intellectual credibility and continental relevance from day one.",
  },
  {
    label: "2026",
    title: "Pan-African Fellowship Programme opens",
    summary:
      "A flagship cohort programme selecting exceptional young leaders from across Africa for immersive leadership development, mentorship and continental networking — the first cohort of the Northern Star generation.",
  },
  {
    label: "Partnership",
    title:
      "Foundational anchor partnership with the University for Development Studies (UDS), Tamale",
    summary:
      "UDS anchors the Centre's university partnerships, with collaboration spanning the Leadership Laboratory, Indigenous Knowledge Systems Research, Fellowship Programmes, Student Leadership Development and Joint Publications.",
  },
  {
    label: "Partnership",
    title: "Call for strategic partnerships issued",
    summary:
      "The Centre invites partners from every sector and every continent — universities, foundations, development partners, corporations, philanthropists, traditional authorities, governments and diaspora communities — to help shape this enduring institution.",
  },
  {
    label: "Vision 2031",
    title: "The decade delivered",
    summary:
      "By 2031, the commitment is a fully operational, globally recognised institution connecting Mind (Tamale), Soul (Busunu) and Heart (Bole) — with global digital reach, a premier Annual Lecture and long-term financial sustainability.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & updates"
        title="Updates from the Centre"
        description="Institutional milestones from the founding decade — reported as they are, from the 2021 vision to the Vision 2031 commitments."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
        actions={
          <Button
            asChild
            size="lg"
            className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
          >
            <Link href="/partner">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Milestone listing */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Founding decade · 2021–2031
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The story so far
            </h2>
            <p className="text-[var(--brand-text-light)]">
              These entries record institutional milestones set out in the
              Centre&rsquo;s prospectus. They are milestones, not press articles
              — no publication dates are claimed beyond the milestones
              themselves.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {updates.map((update) => (
              <Card
                key={`${update.label}-${update.title}`}
                className="border-0 shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[var(--brand-accent)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-primary)]">
                      {update.label}
                    </span>
                    <Newspaper
                      className="h-4 w-4 text-[var(--brand-text-light)]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {update.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {update.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media inquiries */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Media inquiries
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Writing or reporting on the Centre?
              </h2>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                We welcome media inquiries, research access requests and
                partnership proposals. Get in touch and we will respond with
                accurate, on-record information about the institution, its
                programmes and its founding decade.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90"
                >
                  <Link href="/contact">
                    Contact the Centre
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="border-0 bg-white shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <Megaphone
                    className="mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-[var(--brand-text)]">
                      On-record enquiries
                    </h3>
                    <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                      Media inquiries are welcomed at{" "}
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-semibold text-[var(--brand-primary)] hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>{" "}
                      or{" "}
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="font-semibold text-[var(--brand-primary)] hover:underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <Newspaper
                    className="mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-[var(--brand-text)]">
                      Honest by design
                    </h3>
                    <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                      Where a date, figure or arrangement has not yet been
                      confirmed by the Centre, we say so plainly rather than
                      publish a claim we cannot stand behind.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Be part of what comes next
          </h2>
          <p className="mb-8 text-white/85">
            The light begins in 2026. Partner with us, or start a conversation
            on {siteConfig.contact.phone}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link href="/partner">Partner With Us</Link>
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
