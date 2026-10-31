import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, Users, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership and Civic Education",
  description:
    "Programmes designed to promote ethical leadership, responsible citizenship, democratic learning and public-service values.",
  alternates: { canonical: "/leadership" },
};

const activities = [
  { icon: Users, title: "Leadership workshops" },
  { icon: BookOpen, title: "Civic education" },
  { icon: Landmark, title: "Governance seminars" },
  { icon: GraduationCap, title: "Mentorship and youth dialogue" },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Strategic Priorities"
        title="Leadership and Civic Education"
        description="Programmes designed to promote ethical leadership, responsible citizenship, democratic learning and public-service values."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/contact">
              Contact the Secretariat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-3 text-3xl font-bold text-[var(--brand-text)]">
              Potential activities include:
            </h2>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              The objective is to preserve the historical record, encourage research and reflection, and inspire young people to engage meaningfully with leadership, public service and national development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map(({ icon: Icon, title }) => (
              <Card key={title} className="border-0 shadow-sm">
                <CardContent className="flex h-full items-start gap-4 p-6">
                  <Icon
                    className="h-7 w-7 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-[var(--brand-text)]">
                    {title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 sm:flex-row sm:items-center">
          <p className="max-w-3xl leading-relaxed text-[var(--brand-text)]">
            The following are proposed programme areas, subject to confirmed plans, partnerships and resources.
          </p>
          <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
            <Link prefetch={false} href="/programmes">
              Programmes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
