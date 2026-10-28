import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Hammer,
  Shield,
  Handshake,
  Globe,
  Scale,
  Quote,
  GraduationCap,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "The Mahama Leadership Framework",
  description: `The Mahama Leadership Framework (MLF) is ${siteConfig.formalName}'s flagship intellectual product — six pillars of leadership knowledge distilled from decades of public service and governance.`,
  alternates: { canonical: "/leadership" },
};

const pillars = [
  {
    icon: Heart,
    title: "Service Above Self",
    body: "Grounding leadership in the primacy of public good over personal gain — the foundational ethic of every transformational leader.",
  },
  {
    icon: Hammer,
    title: "Infrastructure-Led Human Development",
    body: "Demonstrating how strategic infrastructure investment unlocks opportunity, dignity, and economic transformation for communities.",
  },
  {
    icon: Shield,
    title: "Democratic Resilience",
    body: "Navigating electoral pressures, constitutional transitions, and institutional preservation — protecting democracy even under strain.",
  },
  {
    icon: Handshake,
    title: "Pragmatic Inclusion & Peacebuilding",
    body: "Bridging ethnic, regional, and political divides through principled, evidence-based leadership and dialogue.",
  },
  {
    icon: Globe,
    title: "Pan-African Realism",
    body: "Engaging continental development with pragmatic, evidence-based strategy — building African solutions for African challenges.",
  },
  {
    icon: Scale,
    title: "Accountability as a Core System",
    body: "Building transparency and integrity into governance institutions themselves — not as an afterthought, but as a design principle.",
  },
];

const laboratoryFocus = [
  "Crisis Management",
  "Infrastructure Delivery",
  "Public Accountability",
  "Ethical Decision-Making",
  "Democratic Governance",
  "National Development Planning",
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="A living curriculum for Africa's future"
        title="The Mahama Leadership Framework"
        description="The MLF is the Centre's flagship intellectual product — a structured body of leadership knowledge distilled from decades of public service and governance experience."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/services/leadership-laboratory">
              Visit the Leadership Laboratory
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* MLF intro + pillars */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              The Mahama Leadership Framework
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Six pillars of transformational leadership
            </h2>
            <p className="text-[var(--brand-text-light)]">
              Each pillar serves as a living case study for leadership
              education, research, and practical application across Africa and
              the world — distilled from decades of public service and
              governance experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-0 shadow-md">
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

      {/* Quote band */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Quote className="mx-auto mb-6 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
          <blockquote className="text-2xl font-semibold leading-relaxed text-[var(--brand-text)] sm:text-3xl">
            &ldquo;The Centre does not exist simply because John Dramani Mahama
            became President. It exists because his public service journey — from
            Assemblyman to President — provides a uniquely comprehensive
            framework through which future leaders can study governance,
            democratic resilience, and national development.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Leadership Laboratory */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                The Leadership Laboratory
              </p>
              <h2 className="mb-3 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                The &ldquo;How to Govern&rdquo; Institute
              </h2>
              <p className="mb-6 text-lg font-medium text-[var(--brand-primary)]">
                Study Leadership. Practice Governance. Serve Humanity.
              </p>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  A first-of-its-kind, trans-partisan institute where
                  participants examine the realities of governance through
                  immersive case studies exploring real-world leadership
                  challenges.
                </p>
                <p className="font-medium text-[var(--brand-text)]">
                  The Laboratory is not a monument to any individual. It is a
                  training ground for future leaders.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90">
                  <Link href="/services/leadership-laboratory">
                    Explore the Leadership Laboratory
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="border-0 bg-[var(--brand-accent)]">
              <CardContent className="p-8">
                <GraduationCap
                  className="mb-4 h-8 w-8 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-4 text-lg font-semibold text-[var(--brand-text)]">
                  Immersive case studies explore six focus areas
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {laboratoryFocus.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2 text-sm text-[var(--brand-text-light)]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Study leadership. Serve humanity.
          </h2>
          <p className="mb-8 text-white/85">
            Whether you are a scholar, a public servant or a young leader — the
            framework is open to you. Speak with the team on{" "}
            {siteConfig.contact.phone} or send a message.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link href="/contact">Ask About the Framework</Link>
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
