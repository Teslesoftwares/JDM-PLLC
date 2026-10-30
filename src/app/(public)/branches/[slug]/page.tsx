import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Building2,
  HeartHandshake,
  Info,
  MapPin,
  Phone,
} from "lucide-react";
import { centreBranches, siteConfig, isPending } from "@/config/site";

export function generateStaticParams() {
  return centreBranches.map((branch) => ({ slug: branch.slug }));
}

const branchContent: Record<
  string,
  { role: string; about: string[]; icon: typeof MapPin }
> = {
  tamale: {
    role: "Secretariat, Research and Institutional Collaboration",
    icon: Building2,
    about: [
      "Hosts the JDM-PLLC Main Secretariat at the University for Development Studies (UDS), Tamale Campus.",
      "The location of the Secretariat does not designate Tamale as the project's principal physical campus.",
    ],
  },
  damongo: {
    role: "Legacy, Culture and Development",
    icon: MapPin,
    about: [
      "Damongo is being considered for activities relating to presidential legacy preservation, historical research, cultural heritage, education, conferences and tourism-linked development.",
    ],
  },
  busunu: {
    role: "Heritage and Community Engagement",
    icon: HeartHandshake,
    about: [
      "Busunu is being considered for activities supporting historical documentation, cultural preservation, community participation and education.",
    ],
  },
  bole: {
    role: "Historical Documentation and Youth Development",
    icon: BookOpen,
    about: [
      "Bole is being considered for legacy-related educational, historical and community development activities.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = centreBranches.find((item) => item.slug === slug);

  if (!branch) return { title: "Location not found" };

  const content = branchContent[slug];

  return {
    title: branch.city,
    description: content
      ? `${content.role} — ${branch.address}, ${branch.region}, Ghana. ${content.about.join(" ")}`
      : `${siteConfig.name}, ${branch.address}, ${branch.region}, ${branch.country}.`,
    alternates: { canonical: `/branches/${branch.slug}` },
  };
}

export default async function BranchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = centreBranches.find((item) => item.slug === slug);

  if (!branch) notFound();

  const content = branchContent[slug];
  const BranchIcon = content?.icon ?? MapPin;

  return (
    <>
      <PageHero
        eyebrow={branch.city}
        title={content?.role ?? branch.name}
        description={`${branch.address}, ${branch.region}, ${branch.country}.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Branches", href: "/branches" },
          { label: branch.city },
        ]}
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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                {isPending(branch.status) ? "Being considered" : "Secretariat location"}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                {branch.city}
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                {(content?.about ?? []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Each location may contribute to the Centre&apos;s historical,
                  educational, cultural and community development objectives.
                  Their specific functions and development stages will depend on
                  documented land arrangements, community consultations,
                  technical planning, approvals, partnerships and available
                  resources.
                </p>
                <p className="font-semibold text-[var(--brand-text)]">
                  No location is designated here as the principal campus.
                </p>
              </div>
            </div>

            <Card className="border-0 bg-[var(--brand-accent)]">
              <CardContent className="p-8">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--brand-text)]">
                  <BranchIcon
                    className="h-5 w-5 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  At a glance
                </h3>
                <dl className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[var(--brand-text-light)]">Location</dt>
                      <dd className="font-medium text-[var(--brand-text)]">
                        {branch.address}, {branch.region}, {branch.country}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[var(--brand-text-light)]">Phone</dt>
                      <dd>
                        <a
                          href={siteConfig.contact.phoneHref}
                          className="font-medium text-[var(--brand-text)] hover:underline"
                        >
                          {branch.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
                <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[var(--brand-text-light)]">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  No location is designated here as the principal campus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Potential areas of activity
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              What this location may contribute
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branch.departments.map((department) => (
              <Card key={department} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <BranchIcon
                    className="mb-3 h-5 w-5 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-[var(--brand-text)]">
                    {department}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Questions about this location?
          </h2>
          <p className="mb-8 text-white/85">
            Contact the Secretariat for the status of arrangements at{" "}
            {branch.city} and how this location contributes to the wider project.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link prefetch={false} href="/contact">Contact the Secretariat</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link prefetch={false} href="/branches">All locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
