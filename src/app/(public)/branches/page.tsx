import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Info,
  MapPin,
} from "lucide-react";
import { siteConfig, isPending } from "@/config/site";

export const metadata: Metadata = {
  title: "Branches and Geographic Development",
  description:
    "JDM-PLLC is pursuing a multi-location development approach involving Tamale, Damongo, Busunu and Bole. No location is designated as the principal campus.",
  alternates: { canonical: "/branches" },
};

const branchRoles: Record<
  string,
  { role: string; points: string[]; icon: typeof GraduationCap }
> = {
  tamale: {
    role: "Secretariat, Research and Institutional Collaboration",
    points: [
      "Hosts the JDM-PLLC Main Secretariat at the University for Development Studies (UDS), Tamale Campus.",
      "The location of the Secretariat does not designate Tamale as the project's principal physical campus.",
    ],
    icon: Building2,
  },
  damongo: {
    role: "Legacy, Culture and Development",
    points: [
      "Being considered for activities relating to presidential legacy preservation, historical research, cultural heritage, education, conferences and tourism-linked development.",
    ],
    icon: MapPin,
  },
  busunu: {
    role: "Heritage and Community Engagement",
    points: [
      "Being considered for activities supporting historical documentation, cultural preservation, community participation and education.",
    ],
    icon: HeartHandshake,
  },
  bole: {
    role: "Historical Documentation and Youth Development",
    points: [
      "Being considered for legacy-related educational, historical and community development activities.",
    ],
    icon: BookOpen,
  },
};

export default function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Branches and Geographic Development"
        title="One Vision. Four Project Locations."
        description="JDM-PLLC is pursuing a multi-location development approach involving Tamale, Damongo, Busunu and Bole."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Branches" }]}
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
          <div className="mb-10 flex items-start gap-3 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
            <div className="space-y-3 text-sm leading-relaxed text-[var(--brand-text)]">
              <p>
                Each location may contribute to the Centre&apos;s historical,
                educational, cultural and community development objectives.
                Their specific functions and development stages will depend on
                documented land arrangements, community consultations,
                technical planning, approvals, partnerships and available
                resources.
              </p>
              <p className="font-semibold">
                No location is designated here as the principal campus.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.branches.map((branch) => {
              const role = branchRoles[branch.slug];
              return (
                <Card key={branch.slug} className="border-0 bg-white shadow-md">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-4 flex items-start gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)]">
                        <role.icon
                          className="h-6 w-6 text-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                          {branch.city}
                        </p>
                        <h2 className="text-xl font-bold text-[var(--brand-text)]">
                          {role.role}
                        </h2>
                      </div>
                    </div>

                    <div className="mb-4 space-y-2 text-sm leading-relaxed text-[var(--brand-text-light)]">
                      {role.points.map((point) => (
                        <p key={point}>{point}</p>
                      ))}
                    </div>

                    <p className="mb-4 flex items-start gap-2 text-sm text-[var(--brand-text)]">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <span>
                        {branch.address}, {branch.region}, {branch.country}
                      </span>
                    </p>

                    {isPending(branch.status) ? (
                      <p className="mb-4 rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs font-semibold text-[var(--brand-primary)]">
                        Being considered
                      </p>
                    ) : (
                      <p className="mb-4 rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs font-semibold text-[var(--brand-primary)]">
                        Secretariat location
                      </p>
                    )}

                    <ul className="mb-6 flex flex-wrap gap-2">
                      {branch.departments.slice(0, 4).map((department) => (
                        <li
                          key={department}
                          className="rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs font-medium text-[var(--brand-primary)]"
                        >
                          {department}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      className="mt-auto self-start border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]"
                    >
                      <Link href={`/branches/${branch.slug}`}>
                        Explore this location
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
            A Coordinated Network
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            One connected institutional vision
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-white/85">
            The four locations are intended to contribute to one connected
            institutional vision. Their activities may complement one another
            through shared research, educational programmes, digital resources,
            events and community engagement. Their precise roles will be
            confirmed as the project advances.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link prefetch={false} href="/services">The Library &amp; Legacy Centre</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link prefetch={false} href="/contact">Contact the Secretariat</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
