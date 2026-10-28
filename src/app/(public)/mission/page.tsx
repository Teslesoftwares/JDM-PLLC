import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Star,
  Compass,
  Landmark,
  Archive,
  Users,
  GraduationCap,
  Award,
  Leaf,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our vision & mission",
  description: `The vision, mission, scope and purpose of ${siteConfig.formalName} — and the PEECS framework that guides every programme, partnership and initiative of the Centre.`,
  alternates: { canonical: "/mission" },
};

const visionMission = [
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

const peecs = [
  {
    letter: "P",
    icon: Archive,
    title: "Preserve",
    body: "Democratic, cultural, intellectual, and historical heritage for future generations.",
  },
  {
    letter: "E",
    icon: Users,
    title: "Empower",
    body: "Youth, women, and communities through leadership development, skills training, and civic education.",
  },
  {
    letter: "E",
    icon: GraduationCap,
    title: "Educate",
    body: "Through fellowships, case studies, research, policy dialogues, and lifelong learning programmes.",
  },
  {
    letter: "C",
    icon: Award,
    title: "Celebrate",
    body: "African excellence, innovation, service, and achievement — honouring those who illuminate the path.",
  },
  {
    letter: "S",
    icon: Leaf,
    title: "Sustain",
    body: "Long-term institutional resilience, financial independence, and economic transformation for communities.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="The Northern Star Centre"
        title="Our vision & mission"
        description={`${siteConfig.formalName} is built to preserve legacy, strengthen Indigenous Knowledge Systems and cultivate a new generation of ethical leaders for Africa and the world.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Mission" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/partner">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              What we are built to become
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Our Vision &amp; Our Mission
            </h2>
            <p className="text-[var(--brand-text-light)]">
              Operating as the Northern Star Centre, {siteConfig.formalName}{" "}
              illuminates pathways for generations to come — rooted in Northern
              Ghana, serving Africa and the world.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {visionMission.map((item) => (
              <Card key={item.title} className="border-0 bg-[var(--brand-accent)] shadow-sm">
                <CardContent className="p-8">
                  <item.icon
                    className="mb-4 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-3 text-xl font-semibold text-[var(--brand-text)]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--brand-text-light)]">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scope & Purpose */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Our Scope
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                The first light — and the whole constellation
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  While the life and leadership journey of H.E. John Dramani Mahama
                  serves as our foundational case study and primary light, the Centre
                  documents, preserves, and projects the stories of transformational
                  leaders from Northern Ghana, Ghana, Africa, and the global African
                  family.
                </p>
                <p className="font-medium text-[var(--brand-text)]">
                  The Mahama story is the first light we map. Our mission is to
                  illuminate the entire constellation.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Our Purpose
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Not merely to remember the past
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  Not merely to remember the past — but to shape the future.
                  Africa&rsquo;s transformation is a multi-generational project
                  requiring institutions capable of preserving memory, transmitting
                  wisdom, strengthening democratic culture, and preparing future
                  leaders.
                </p>
                <p className="font-medium text-[var(--brand-text)]">
                  Every African carries a Northern Star within them.
                </p>
                <p className="font-medium text-[var(--brand-text)]">
                  The Northern Star shall rise. The constellation begins now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEECS Framework */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Preserve · Empower · Educate · Celebrate · Sustain
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The PEECS Framework
            </h2>
            <p className="text-[var(--brand-text-light)]">
              Our five foundational pillars guiding every programme, partnership,
              and initiative of the Centre.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {peecs.map((pillar) => (
              <Card key={pillar.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <pillar.icon
                      className="h-6 w-6 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <span
                      className="text-lg font-bold text-[var(--brand-accent)]"
                      aria-hidden="true"
                    >
                      {pillar.letter}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {pillar.body}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-md">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <Landmark className="mb-3 h-6 w-6 text-white/80" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-semibold">One framework</h3>
                <p className="text-sm leading-relaxed text-white/85">
                  PEECS holds every initiative of {siteConfig.name} to the same
                  standard — preserving heritage while building the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Conviction band */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
            The Centre&rsquo;s Core Conviction
          </p>
          <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
            Contributing to the Africa We Want
          </h2>
          <p className="text-lg leading-relaxed text-[var(--brand-text-light)]">
            By investing in leadership, education, heritage preservation, civic
            responsibility, and innovation, the Northern Star Centre contributes
            directly to the realization of the Africa We Want.{" "}
            <span className="font-semibold text-[var(--brand-text)]">
              The Northern Star shall rise.
            </span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Join the constellation
          </h2>
          <p className="mb-8 text-white/85">
            The vision is clear and the foundation is laid. Call{" "}
            {siteConfig.contact.phone} or start a conversation with the team at{" "}
            {siteConfig.contact.email}.
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
