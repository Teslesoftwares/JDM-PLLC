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
  Info,
  Lightbulb,
  MonitorPlay,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Programmes and Signature Initiatives",
  description:
    "Proposed JDM-PLLC programmes: African youth leadership and fellowship, presidential legacy and democratic learning, youth skills and enterprise, research and public dialogue, Northern Ghana heritage, digital knowledge, scholarships and educational support.",
  alternates: { canonical: "/programmes" },
};

const programmes = [
  {
    icon: GraduationCap,
    title: "African Youth Leadership and Fellowship",
    body: "A proposed platform for young people interested in leadership, public service, civic engagement, research and enterprise.",
    activities: [
      "mentorship",
      "leadership development",
      "community service",
      "research",
      "youth-led innovation",
    ],
  },
  {
    icon: BookOpen,
    title: "Presidential Legacy and Democratic Learning",
    body: "Educational programmes designed to help students, researchers and the public engage with presidential history, constitutional governance and democratic development.",
    activities: [
      "historical exhibitions",
      "public lectures",
      "leadership case studies",
      "civic education",
      "documentary projects",
    ],
  },
  {
    icon: Lightbulb,
    title: "Youth Skills and Enterprise",
    body: "Programmes intended to connect learning with practical economic opportunities.",
    activities: [
      "entrepreneurship workshops",
      "digital skills",
      "innovation challenges",
      "business mentorship",
      "partnerships with training institutions and the private sector",
    ],
  },
  {
    icon: Users,
    title: "Research, Policy and Public Dialogue",
    body: "A platform for research and discussion on democratic governance, public policy, national development, youth employment, education, African integration and cultural heritage.",
    activities: [
      "research projects",
      "publications",
      "policy dialogue",
      "public lectures",
      "academic seminars",
      "workshops",
    ],
  },
  {
    icon: Archive,
    title: "Northern Ghana Heritage and Knowledge",
    body: "A programme area dedicated to documenting the history, cultural traditions and knowledge systems of Northern Ghana.",
    activities: [
      "oral history",
      "community archives",
      "cultural exhibitions",
      "research partnerships",
      "educational visits",
    ],
  },
  {
    icon: MonitorPlay,
    title: "Digital Knowledge and Innovation",
    body: "Programmes supporting digitisation, digital learning, technology skills, virtual exhibitions and improved access to research resources.",
    activities: [],
  },
  {
    icon: GraduationCap,
    title: "Scholarships and Educational Support",
    body: "Subject to funding and formal programme rules, the Centre may develop scholarships, research grants, fellowships or other educational support initiatives.",
    activities: [],
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes and Signature Initiatives"
        title="Connecting Legacy Preservation with Opportunity"
        description="JDM-PLLC intends to develop programmes connecting legacy preservation with education, research and opportunities for young people."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programmes" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/partner">
              Support a Programme
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
              Programme dates, eligibility and application procedures will be
              published when programmes are formally established.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {programmes.map((programme) => (
              <Card key={programme.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <programme.icon
                    className="mb-4 h-7 w-7 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {programme.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {programme.body}
                  </p>
                  {programme.activities.length > 0 ? (
                    <>
                      <p className="mb-2 text-sm font-medium text-[var(--brand-text)]">
                        Activities may include:
                      </p>
                      <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                        {programme.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]"
                              aria-hidden="true"
                            />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-3 text-3xl font-bold">
                Programmes in development
              </h2>
              <p className="text-lg text-white/90">
                Institutions, educators, researchers and funders interested in
                supporting an approved programme are invited to contact the
                Secretariat.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
                <Link prefetch={false} href="/contact">
                  Contact the Secretariat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link prefetch={false} href="/donate">Support a Programme</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[var(--brand-text)]">
            Stay informed
          </h2>
          <p className="mb-6 leading-relaxed text-[var(--brand-text-light)]">
            Updates on confirmed programmes and implementation milestones are
            published through the official website and authorised communication
            channels.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <Link prefetch={false} href="/news">News &amp; Updates</Link>
            </Button>
            <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
              <Link prefetch={false} href="/events">Events &amp; Activities</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--brand-text-light)]">
            {siteConfig.contact.email} · {siteConfig.contact.phone}
          </p>
        </div>
      </section>
    </>
  );
}
