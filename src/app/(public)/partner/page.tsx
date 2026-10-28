import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Crown,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Landmark,
  Scale,
  Star,
  University,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Call for Strategic Partnerships",
  description: `${siteConfig.formalName} invites partners from every sector and every continent — universities, foundations, development partners, corporations, governments and diaspora communities — to shape an enduring institution.`,
  alternates: { canonical: "/partner" },
};

const anchorAreas = [
  {
    title: "Leadership Laboratory",
    body: "The trans-partisan “How to Govern” Institute, examining the realities of governance through immersive case studies.",
  },
  {
    title: "Indigenous Knowledge Systems Research",
    body: "Research and preservation of the governance traditions, oral histories and ancestral wisdom embedded in Indigenous Knowledge Systems.",
  },
  {
    title: "Fellowship Programmes",
    body: "Cohort-based leadership development for exceptional young leaders from across the continent.",
  },
  {
    title: "Student Leadership Development",
    body: "Preparing students to carry ethical, competent and visionary leadership into public life.",
  },
  {
    title: "Joint Publications",
    body: "Scholarly work arising from shared research on governance, heritage and democratic resilience.",
  },
];

const internationalAreas = [
  "Curriculum Co-Design",
  "Faculty Exchanges",
  "Joint Research",
  "Research Chairs",
  "Governance Studies",
  "Democratic Resilience Research",
  "Indigenous Knowledge Documentation",
];

const sectors = [
  { icon: University, title: "Universities" },
  { icon: Landmark, title: "Foundations" },
  { icon: Globe2, title: "Development Partners" },
  { icon: Building2, title: "Corporations" },
  { icon: HeartHandshake, title: "Philanthropists" },
  { icon: Crown, title: "Traditional Authorities" },
  { icon: Scale, title: "Governments" },
  { icon: Users, title: "Diaspora Communities" },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Call for strategic partnerships"
        description="The Northern Star Centre is not built by one person. It is illuminated by a constellation. We invite partners from every sector and every continent to join us in shaping this enduring institution."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partner" }]}
        actions={
          <>
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/contact">Contact the Centre</Link>
            </Button>
          </>
        }
      />

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                An open invitation
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Illuminated by a constellation
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  The Northern Star Centre is not built by one person. It is
                  illuminated by a constellation. We invite partners from every
                  sector and every continent to join us in shaping this enduring
                  institution.
                </p>
                <p>
                  Africa&rsquo;s transformation is a multi-generational project.
                  It requires institutions capable of preserving memory,
                  transmitting wisdom, strengthening democratic culture and
                  preparing future leaders — and institutions of that scale are
                  built together.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <Handshake
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Funding and intellectual capital
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Partnerships generate both — collaborative arrangements that
                    sustain the institution and deepen its research.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <Star
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Every sector, every continent
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Universities, foundations, governments, traditional
                    authorities and diaspora communities all have a place in the
                    constellation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* University Partnerships — Foundational Anchor */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              University Partnerships
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Foundational Anchor Partner: University for Development Studies
            </h2>
            <p className="text-[var(--brand-text-light)]">
              The University for Development Studies (UDS), Tamale, is the
              Centre&rsquo;s Foundational Anchor Partner. Areas of collaboration
              include:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {anchorAreas.map((area) => (
              <Card key={area.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <University
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {area.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International University Partnerships */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                International University Partnerships
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                A continental and global research network
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  We seek collaboration with universities across Africa, North
                  America, Europe, Asia, and the Caribbean.
                </p>
                <p>
                  The Centre offers scholars access to unique archives, oral
                  histories, leadership datasets and governance case studies
                  unavailable elsewhere.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {internationalAreas.map((item) => (
                <Card key={item} className="border-0 bg-[var(--brand-accent)]">
                  <CardContent className="flex items-center gap-3 p-5">
                    <BookOpen
                      className="h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-[var(--brand-text)]">
                      {item}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All sectors */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              All sectors
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              We invite partners across all sectors
            </h2>
            <p className="text-[var(--brand-text-light)]">
              Sovereign governments, development partners, global foundations,
              academia, the private sector, traditional authorities, diaspora
              communities and youth networks all have a role in co-creating this
              enduring legacy of impact.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <Card key={sector.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <sector.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    {sector.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-center text-lg font-semibold text-[var(--brand-text)]">
            Together, we illuminate the constellation.
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
            The Northern Star Centre belongs to Africa — and to the world.
            Contact us on {siteConfig.contact.phone} to
            explore a partnership.
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
              <Link href="/contact">Contact the Centre</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
