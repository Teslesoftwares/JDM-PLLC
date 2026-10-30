import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Eye,
  Heart,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About JDM-PLLC",
  description:
    "Who we are, our vision, mission, guiding principle and core values. The John Dramani Mahama Presidential Library & Legacy Centre is an AfYEF-led educational, historical and cultural initiative.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "Upholding honesty, ethical conduct and responsible stewardship.",
  },
  {
    icon: Scale,
    title: "Accountability",
    body: "Managing resources and responsibilities transparently.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    body: "Promoting research, documentation and informed learning.",
  },
  {
    icon: Users,
    title: "Inclusion",
    body: "Encouraging participation by young people, communities and diverse stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Using technology and new ideas to expand access to knowledge and opportunity.",
  },
  {
    icon: Heart,
    title: "Heritage",
    body: "Preserving Ghanaian, African and Indigenous histories and cultural traditions.",
  },
  {
    icon: Eye,
    title: "Service",
    body: "Promoting leadership that contributes to the public good.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About JDM-PLLC"
        title="A Legacy of Leadership. A Future of Transformation."
        description="The John Dramani Mahama Presidential Library & Legacy Centre is an initiative led by the AfCFTA Young Entrepreneurs Federation (AfYEF)."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/partner">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Who we are */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Who We Are
            </h2>
            <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
              <p>
                The John Dramani Mahama Presidential Library &amp; Legacy Centre
                is an initiative led by the AfCFTA Young Entrepreneurs Federation
                (AfYEF).
              </p>
              <p>
                It seeks to establish a lasting institution dedicated to
                preserving presidential and democratic history, documenting the
                public-service journey of President John Dramani Mahama, and
                inspiring future generations through education, research,
                leadership and youth empowerment.
              </p>
              <p>
                While President Mahama&apos;s legacy provides the central
                inspiration, the Centre also seeks to contribute to the broader
                preservation and study of Ghanaian and African leadership,
                history and cultural heritage.
              </p>
              <p>
                JDM-PLLC is intended to be a non-partisan educational,
                historical and cultural institution. Its purpose is to preserve
                historical records, encourage informed reflection and promote
                learning rather than serve as a platform for partisan political
                activity.
              </p>
              <p>
                The project is being developed through institutional
                collaboration, stakeholder engagement, planning and resource
                mobilisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, mission, principle */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-8">
                <Target className="mb-4 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                <h2 className="mb-3 text-xl font-bold text-[var(--brand-text)]">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-[var(--brand-text-light)]">
                  To preserve the legacy of President John Dramani Mahama and
                  other leaders who have shaped Ghana and Africa, ensuring that
                  their contributions, ideas and aspirations remain a source of
                  knowledge and inspiration for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-8">
                <Compass className="mb-4 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                <h2 className="mb-3 text-xl font-bold text-[var(--brand-text)]">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-[var(--brand-text-light)]">
                  To document, preserve and protect historical legacies, promote
                  research and civic education, and inspire young people to
                  learn from the past and contribute to Ghana&apos;s and
                  Africa&apos;s future.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-sm">
              <CardContent className="p-8">
                <Sparkles className="mb-4 h-8 w-8 text-white/85" aria-hidden="true" />
                <h2 className="mb-3 text-xl font-bold">Our Guiding Principle</h2>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                  LEGACY → KNOWLEDGE → SKILLS → ENTERPRISE → OPPORTUNITY
                </p>
                <p className="leading-relaxed text-white/85">
                  We believe that the value of a preserved legacy lies not only
                  in remembering the past, but also in using its lessons to
                  expand knowledge, develop skills, encourage enterprise and
                  create opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <value.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {value.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional character */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Our Institutional Character
          </h2>
          <div className="space-y-5 leading-relaxed text-white/85">
            <p>
              JDM-PLLC is being developed as an educational, cultural,
              historical and developmental initiative. Its governance, funding
              and operating arrangements will be established in accordance with
              applicable laws and documented agreements.
            </p>
            <p>
              The project&apos;s name and purpose should not be interpreted as
              proof of presidential endorsement, personal financial commitment
              or government ownership or funding unless formally confirmed.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link prefetch={false} href="/governance">
                Governance &amp; Accountability
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link prefetch={false} href="/contact">
                Contact the Secretariat
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
            Explore the project
          </h2>
          <p className="mb-8 leading-relaxed text-[var(--brand-text-light)]">
            Learn about the inspiration behind the Centre, the facilities it is
            developing and the programmes it intends to deliver.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <Link prefetch={false} href="/legacy">
                The Inspiration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]"
            >
              <Link prefetch={false} href="/services">
                The Library &amp; Legacy Centre
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
