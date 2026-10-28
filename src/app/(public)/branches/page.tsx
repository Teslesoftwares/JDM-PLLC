import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  Info,
  Landmark,
  MapPin,
  Phone,
  Ticket,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our branches",
  description: `Mind in Tamale, Soul in Busunu and Heart in Bole — three integrated branches of ${siteConfig.formalName}, rooted in Northern Ghana and serving Africa and the world.`,
  alternates: { canonical: "/branches" },
};

const branchRoles: Record<
  string,
  { role: string; summary: string; icon: typeof GraduationCap }
> = {
  tamale: {
    role: "The Mind",
    summary:
      "The engine of analysis, innovation and leadership development — where ideas are tested, frameworks are built, and future leaders are trained.",
    icon: GraduationCap,
  },
  busunu: {
    role: "The Soul",
    summary:
      "A sanctuary dedicated to the moral foundations of leadership — inspired by the enduring legacy of Mama Nnaba Habiba Mahama.",
    icon: Heart,
  },
  bole: {
    role: "The Heart",
    summary:
      "The historical and emotional core of the institution — where Africa's stories are preserved, celebrated and projected to the world.",
    icon: Landmark,
  },
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Three integrated branches"
        title="Three branches. One constellation."
        description="Mind in Tamale, Soul in Busunu and Heart in Bole — three integrated branches of a continental institution for leadership, heritage, research and human dignity, built to last for generations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Branches" }]}
        actions={
          <>
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link href="/contact">
                Ask About a Visit
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

      {/* The three branches */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Mind · Soul · Heart
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              A journey through three integrated branches
            </h2>
            <p className="text-[var(--brand-text-light)]">
              The Northern Star Centre is structured around three branches, each
              carrying one dimension of the institution — and together forming a
              single constellation serving Africa and the world.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.branches.map((branch) => {
              const role = branchRoles[branch.slug];

              return (
                <Card
                  key={branch.slug}
                  className="border-0 bg-white shadow-md"
                >
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)]">
                        <role.icon
                          className="h-6 w-6 text-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                          {role.role}
                        </p>
                        <h3 className="text-xl font-bold text-[var(--brand-text)]">
                          {branch.name}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-[var(--brand-text-light)]">
                      {role.summary}
                    </p>

                    <p className="mb-5 flex items-start gap-2 text-sm text-[var(--brand-text)]">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <span>
                        {branch.address}, {branch.region} Region, {branch.country}
                      </span>
                    </p>

                    <ul className="mb-6 flex flex-wrap gap-2">
                      {branch.departments.map((department) => (
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
                        Explore this branch
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

      {/* Directions and visits */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Plan your visit
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Before you travel
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  Each branch has its own setting, from GHANASCO in Tamale to
                  the Global Headquarters in Bole. Exact directions and entrance
                  details are confirmed when you contact the Centre — call or
                  write ahead and we will make sure you arrive at the right
                  place.
                </p>
                <p>
                  The Centre&rsquo;s administrative office is at{" "}
                  <span className="font-medium text-[var(--brand-text)]">
                    {siteConfig.contact.address}
                  </span>
                  . Enquiries are welcome for research access, event
                  registration, partnerships, media and scholarship enquiries.
                </p>
              </div>
            </div>

            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-8">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--brand-text)]">
                  <Clock
                    className="h-5 w-5 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  Directions and visits
                </h3>

                <dl className="mb-6 space-y-1.5 text-sm">
                  {days.map((day) => (
                    <div
                      key={day}
                      className="flex justify-between gap-4 border-b border-[var(--brand-accent)] pb-1.5 last:border-0"
                    >
                      <dt className="text-[var(--brand-text-light)]">{day}</dt>
                      <dd className="font-medium text-[var(--brand-text)]">
                        {siteConfig.openingHours.schedule[day]}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mb-6 flex items-start gap-3 rounded-lg bg-[var(--brand-accent)]/60 p-4">
                  <Ticket
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-[var(--brand-text)]">
                    Admission to the Presidential Library &amp; Museum at the
                    Heart branch in Bole is free for Ghanaian citizens.
                    International visitors: GHS 50.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-[var(--brand-primary)] text-white hover:opacity-90"
                  >
                    <Link href="/contact">
                      Ask About a Visit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]"
                  >
                    <a href={siteConfig.contact.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" />
                      {siteConfig.contact.phone}
                    </a>
                  </Button>
                </div>

                <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-[var(--brand-text-light)]">
                  <Info
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  Sunday and public holidays are closed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            See the constellation for yourself
          </h2>
          <p className="mb-8 text-white/85">
            Visit us at any of the three branches, or start a conversation on{" "}
            {siteConfig.contact.phone}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link href="/contact">Ask About a Visit</Link>
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
