import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Globe,
  Telescope,
  Landmark,
  Leaf,
  Quote,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "From vision to continental institution",
  description: `The founding decade of ${siteConfig.formalName} — 2021 to 2031 — from a bold idea rooted in Northern Ghana to a fully operational institution serving Africa and the world.`,
  alternates: { canonical: "/legacy" },
};

const foundingDecade = [
  {
    year: "2021",
    title: "The Vision Emerges",
    body: "A bold idea was conceived: to transform presidential legacy into leadership capital for future generations and create a globally respected institution rooted in Northern Ghana and serving the African continent.",
  },
  {
    year: "2021–2025",
    title: "Foundations Secured",
    body: "Land acquisition completed. Institutional endorsements secured. Conceptual, architectural, and programmatic frameworks refined. Strategic stakeholder engagement initiated. The foundation has been laid.",
  },
  {
    year: "2026",
    title: "The Inflection Point",
    body: "The land is secured. The endorsements are granted. The vision is clear. Now, we activate. While physical construction is mobilized, we launch the soft infrastructure — programmes, partnerships, fellowships, archives, and digital platforms — establishing the Centre's intellectual credibility and continental relevance from day one.",
  },
  {
    year: "2031",
    title: "The Decade Delivered",
    body: "A fully operational, self-sustaining institution connecting three integrated branches: Mind (Tamale), Soul (Busunu), and Heart (Bole) — a living civic, intellectual, cultural, and developmental engine serving Africa and the world.",
  },
];

const vision2031 = [
  {
    icon: Globe,
    title: "Global Digital Reach",
    body: "Virtual Northern Star Library accessible worldwide, with Pan-African Fellowship Programme producing annual cohorts of ethical leaders from across the continent.",
  },
  {
    icon: Telescope,
    title: "International Recognition",
    body: "Northern Star Annual Lecture established as a premier intellectual forum. Indigenous Knowledge Systems Centre recognized internationally — a pathway established toward future UNESCO-level recognition.",
  },
  {
    icon: Landmark,
    title: "Fully Operational Facilities",
    body: "Presidential Library, Museum, Hall of Fame, and Conference Centre fully operational across all three branches — Mind (Tamale), Soul (Busunu), and Heart (Bole).",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    body: "Thousands of direct and indirect jobs created. Long-term financial sustainability achieved through diversified income streams, a growing endowment, and a thriving heritage tourism economy.",
  },
];

export default function LegacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Founding Decade · 2021–2031"
        title="From vision to continental institution"
        description={`${siteConfig.name} grew from a bold idea rooted in Northern Ghana into a continental project — a decade of building the foundation for generations to come.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legacy" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/mission">
              Our Vision &amp; Mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Our story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Our story
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                The Mahama story is the first light we map
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  From Bole, a young John Dramani Mahama rose through every level
                  of public service to become President of Ghana — demonstrating
                  that leadership is cultivated through service, learning,
                  resilience, and commitment to the public good.
                </p>
                <p>
                  H.E. John Dramani Mahama — the only Ghanaian to serve at every
                  level of elected and appointed office — provides a uniquely
                  comprehensive framework for studying governance and democratic
                  resilience.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[var(--brand-accent)] pl-8">
              <Quote className="mb-4 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
              <p className="text-xl font-medium leading-relaxed text-[var(--brand-text)]">
                The Mahama story is the first light we map. Our mission is to
                illuminate the entire constellation.
              </p>
              <p className="mt-4 text-sm text-[var(--brand-text-light)]">
                While the life and leadership journey of H.E. John Dramani Mahama
                serves as our foundational case study and primary light, the Centre
                documents, preserves, and projects the stories of transformational
                leaders from Northern Ghana, Ghana, Africa, and the global African
                family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Decade timeline */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Founding Decade · 2021–2031
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              From vision to continental institution
            </h2>
            <p className="text-[var(--brand-text-light)]">
              A decade of deliberate construction — from a bold idea to a
              fully operational institution serving Africa and the world.
            </p>
          </div>

          <ol className="space-y-8 border-l-2 border-[var(--brand-accent)] pl-8">
            {foundingDecade.map((milestone) => (
              <li key={milestone.year} className="relative">
                <span
                  className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-[var(--brand-primary)] ring-4 ring-[var(--brand-accent)]"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  {milestone.year}
                </p>
                <h3 className="mb-2 text-xl font-semibold text-[var(--brand-text)]">
                  {milestone.title}
                </h3>
                <p className="max-w-3xl leading-relaxed text-[var(--brand-text-light)]">
                  {milestone.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Vision 2031 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Vision 2031
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The Decade Delivered
            </h2>
            <p className="text-[var(--brand-text-light)]">
              By 2031, the Northern Star Centre will stand as a fully
              operational, globally recognised institution — a living civic,
              intellectual, cultural, and developmental engine serving Africa
              and the world. Our commitments:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {vision2031.map((commitment) => (
              <Card key={commitment.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <commitment.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {commitment.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {commitment.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation quote band */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
            This is an Invitation, Not a Conclusion
          </p>
          <blockquote className="mb-6 text-2xl font-semibold leading-relaxed text-[var(--brand-text)] sm:text-3xl">
            &ldquo;The Northern Star Centre is not being built merely to remember
            the past. It is being built to shape the future. In every generation,
            a few individuals illuminate the path for others. We call them
            Northern Stars. This institution exists to preserve their stories,
            study their leadership, and prepare those who will follow.&rdquo;
          </blockquote>
          <p className="font-medium text-[var(--brand-primary)]">
            The Northern Star shall rise. The constellation begins now.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Help deliver the decade
          </h2>
          <p className="mb-8 text-white/85">
            The foundation has been laid. Partner with {siteConfig.shortName} to
            carry the founding decade through to 2031 — or speak with the team on{" "}
            {siteConfig.contact.phone}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
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
