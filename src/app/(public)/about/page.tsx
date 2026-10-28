import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Globe,
  Compass,
  Star,
  MapPin,
  Users,
  BookOpen,
  Landmark,
  Lightbulb,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About the Northern Star Centre",
  description: `${siteConfig.formalName} is a continental institution for leadership, heritage, research and human dignity — rooted in Northern Ghana and serving Africa and the world.`,
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Star,
    title: "Our Vision",
    body: "To become Africa's foremost institution for ethical leadership, living heritage, Indigenous Knowledge Systems, democratic resilience, and transformative learning — illuminating pathways for generations to come.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    body: "To preserve Africa's heritage, codify the lessons of transformational leadership, strengthen Indigenous Knowledge Systems, advance research and innovation for public good, and cultivate a new generation of ethical, competent, and visionary leaders for Africa and the world.",
  },
];

const whyItMatters = [
  {
    icon: MapPin,
    title: "Why Northern Ghana?",
    body: "A historic crossroads of trade, governance, culture, scholarship and Indigenous Knowledge Systems — producing statesmen, scholars, diplomats and visionaries whose stories deserve continental recognition.",
  },
  {
    icon: Globe,
    title: "A global institution rooted in Africa",
    body: "Africa is home to the world's youngest population. The Northern Star Centre offers a unique platform where leadership practice, democratic resilience and Pan-African development can be studied and applied in real time.",
  },
  {
    icon: Lightbulb,
    title: "One journey, many lights",
    body: "H.E. John Dramani Mahama — the only Ghanaian to serve at every level of elected and appointed office — provides a uniquely comprehensive framework for studying governance and democratic resilience.",
  },
  {
    icon: Users,
    title: "Every African carries a Northern Star",
    body: "Millions of young Africans possess extraordinary potential. The Centre exists to identify, nurture and empower these future leaders — building the Africa We Want, one leader at a time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Where legacy becomes leadership"
        description={`${siteConfig.formalName} is a continental institution for leadership, heritage, research and human dignity — rooted in Northern Ghana and serving Africa and the world.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/partner">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Who we are */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Who we are
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                A continental institution, operating as the Northern Star Centre
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  While the life and leadership journey of H.E. John Dramani
                  Mahama serves as our foundational case study and primary light,
                  the Centre documents, preserves, and projects the stories of
                  transformational leaders from Northern Ghana, Ghana, Africa and
                  the global African family.
                </p>
                <p>
                  The Mahama story is the first light we map. Our mission is to
                  illuminate the entire constellation.
                </p>
                <p>
                  Not merely to remember the past — but to shape the future.
                  Africa&rsquo;s transformation is a multi-generational project
                  requiring institutions capable of preserving memory,
                  transmitting wisdom, strengthening democratic culture, and
                  preparing future leaders.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <Landmark className="mb-3 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    A living institution
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    A Presidential Library, Museum, Hall of Fame and Conference
                    Centre across three integrated branches.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <MapPin
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Rooted in Northern Ghana
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Mind in Tamale, Soul in Busunu and Heart in Bole — serving
                    Africa and the world.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <BookOpen className="mb-3 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    The first light
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    The Mahama public service journey — from Assemblyman to
                    President — is the foundational case study.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <Users className="mb-3 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Every African carries a Northern Star
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Identify, nurture and empower future leaders — building the
                    Africa We Want, one leader at a time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Vision &amp; Mission
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              What we are built to become
            </h2>
            <p className="text-[var(--brand-text-light)]">
              Our scope is continental: the Mahama story is our founding case
              study, but the constellation we map reaches every transformational
              leader of the African family.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <pillar.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {pillar.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why this centre matters */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              A continental imperative
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Why this Centre matters
            </h2>
            <p className="text-[var(--brand-text-light)]">
              By investing in leadership, education, heritage preservation,
              civic responsibility and innovation, the Northern Star Centre
              contributes directly to the realization of the Africa We Want.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyItMatters.map((item) => (
              <Card key={item.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <item.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones — the founding decade */}
      {siteConfig.milestones.length > 0 ? (
        <section className="bg-[var(--brand-accent)]/40 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Founding Decade · 2021–2031
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                From vision to continental institution
              </h2>
            </div>
            <ol className="space-y-6 border-l-2 border-[var(--brand-accent)] pl-6">
              {siteConfig.milestones.map((milestone) => (
                <li key={`${milestone.year}-${milestone.event}`}>
                  <p className="text-sm font-semibold text-[var(--brand-primary)]">
                    {milestone.year}
                  </p>
                  <p className="text-[var(--brand-text)]">{milestone.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            The Northern Star shall rise
          </h2>
          <p className="mb-8 text-white/85">
            The constellation begins now. Partner with us, visit us, or start a
            conversation on {siteConfig.contact.phone}.
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
