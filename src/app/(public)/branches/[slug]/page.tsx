import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  GraduationCap,
  Heart,
  Info,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Ticket,
} from "lucide-react";
import { centreBranches, siteConfig } from "@/config/site";

export function generateStaticParams() {
  return centreBranches.map((branch) => ({ slug: branch.slug }));
}

/**
 * Branch identity taken verbatim from the institutional prospectus: the
 * Mind–Soul–Heart roles, the wing each branch is named after, and the one-line
 * description of what the branch is for.
 */
const branchContent: Record<
  string,
  { role: string; wing: string; about: string[]; icon: typeof GraduationCap }
> = {
  tamale: {
    role: "The Mind",
    wing: "Academic and Leadership Development Wing",
    icon: GraduationCap,
    about: [
      "The Mind is the engine of analysis, innovation, and leadership development — where ideas are tested, frameworks are built, and future leaders are trained.",
      "It is the Centre's academic home in Tamale, where the Leadership Laboratory, Pan-African Fellowships and Public Policy Dialogues are carried.",
    ],
  },
  busunu: {
    role: "The Soul",
    wing: "Mama Habiba Wing for Character and Ethical Formation",
    icon: Heart,
    about: [
      "The Soul is a sanctuary dedicated to the moral foundations of leadership — inspired by the enduring legacy of Mama Nnaba Habiba Mahama.",
      "At the Mama Habiba Wing in Busunu, character formation, integrity and values, and intergenerational dialogue are nurtured for leaders of every generation.",
    ],
  },
  bole: {
    role: "The Heart",
    wing: "Global Headquarters and Living Heritage Hub",
    icon: Landmark,
    about: [
      "The Heart is the historical and emotional core of the institution — where Africa's stories are preserved, celebrated, and projected to the world.",
      "As the Global Headquarters in Bole, it anchors the Presidential Library & Museum, the Northern Star Hall of Fame and the Skills Transformation Hub.",
    ],
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = centreBranches.find((item) => item.slug === slug);

  if (!branch) return { title: "Branch not found" };

  const content = branchContent[slug];

  return {
    title: branch.name,
    description: content
      ? `${content.role} of the Northern Star Centre — ${content.wing}. ${branch.address}, ${branch.city}, ${branch.region} Region, Ghana. Departments, visiting hours and contact details.`
      : `${siteConfig.name}, ${branch.address}, ${branch.city}, ${branch.country}. Departments, visiting hours and contact details.`,
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
        eyebrow={content?.role ?? "Our branches"}
        title={branch.name}
        description={
          content
            ? `${content.wing} — ${branch.address}, ${branch.city}, ${branch.region} Region, Ghana.`
            : `${branch.address}, ${branch.city}, ${branch.region} Region, Ghana.`
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Branches", href: "/branches" },
          { label: branch.name },
        ]}
        actions={
          <>
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <a href={siteConfig.contact.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                Call {siteConfig.contact.phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/contact">
                Ask About a Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </>
        }
      />

      {/* What this branch is */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                {content?.role ?? "The branch"}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                {content?.wing ?? `${branch.name} branch`}
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                {(content?.about ?? []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Three branches. One constellation. An institution built to
                  last for generations — with {branch.city} carrying its part of
                  the whole.
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
                      <dt className="text-[var(--brand-text-light)]">
                        Location
                      </dt>
                      <dd className="font-medium text-[var(--brand-text)]">
                        {branch.address}, {branch.city}, {branch.region} Region,{" "}
                        {branch.country}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[var(--brand-text-light)]">
                        Opening hours
                      </dt>
                      <dd className="font-medium text-[var(--brand-text)]">
                        {siteConfig.openingHours.summary}
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Departments
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              What happens at this branch
            </h2>
            <p className="text-[var(--brand-text-light)]">
              The departments and wings carried by {branch.name}, as set out in
              the Centre&rsquo;s institutional prospectus.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {branch.departments.map((department) => (
              <Card key={department} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-accent)]">
                    <BranchIcon
                      className="h-5 w-5 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--brand-text)]">
                    {department}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Plan your visit
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Visiting this branch
            </h2>
            <p className="text-[var(--brand-text-light)]">
              Opening hours, admission and the fastest way to reach us before
              you travel.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-bold text-[var(--brand-text)]">
                    Getting here
                  </h3>
                  <p className="leading-relaxed text-[var(--brand-text-light)]">
                    The branch is at{" "}
                    <span className="font-medium text-[var(--brand-text)]">
                      {branch.address}, {branch.city}, {branch.region} Region
                    </span>
                    . Directions are confirmed when you contact the Centre —
                    call{" "}
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="font-medium text-[var(--brand-primary)] hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>{" "}
                    or write to{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-[var(--brand-primary)] hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>{" "}
                    before you travel and we will confirm the route and the
                    entrance to use.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-bold text-[var(--brand-text)]">
                    Inquiries welcome
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Research access",
                      "Event registration",
                      "Partnership proposals",
                      "Media inquiries",
                      "Scholarship applications",
                      "General enquiries",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-[var(--brand-accent)] bg-[var(--brand-accent)]/40 px-4 py-3 text-sm font-medium text-[var(--brand-text)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Tell us what you would like to do at {branch.name} when you
                    get in touch, and we will confirm arrangements with you.
                  </p>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-semibold text-[var(--brand-text)]">
                    <Clock
                      className="h-4 w-4 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    Opening hours
                  </h3>
                  <dl className="space-y-1.5 text-sm">
                    {days.map((day) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="text-[var(--brand-text-light)]">
                          {day}
                        </dt>
                        <dd className="font-medium text-[var(--brand-text)]">
                          {siteConfig.openingHours.schedule[day]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-[var(--brand-text-light)]">
                    <Info
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    Sunday and public holidays are closed unless otherwise
                    announced.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-semibold text-[var(--brand-text)]">
                    <Phone
                      className="h-4 w-4 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    Contact the Centre
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="text-[var(--brand-text)] hover:underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[var(--brand-text)] hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <span className="text-[var(--brand-text)]">
                        <span className="block font-medium">
                          Administrative office
                        </span>
                        {siteConfig.contact.address}
                      </span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full bg-[var(--brand-primary)] text-white hover:opacity-90"
                  >
                    <Link href="/contact">Contact the Centre</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-[var(--brand-text)]">
                    <Ticket
                      className="h-4 w-4 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    Admission
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Admission to the Presidential Library &amp; Museum at the
                    Heart branch in Bole is free for Ghanaian citizens;
                    international visitors pay GHS 50. Admission for this branch
                    is confirmed with the Centre before you travel.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Questions before you arrive?
          </h2>
          <p className="mb-8 text-white/85">
            Call {siteConfig.contact.phone} or write to{" "}
            {siteConfig.contact.email} — directions to {branch.name} are
            confirmed when you contact the Centre.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <a href={siteConfig.contact.phoneHref}>
                Call the Centre
              </a>
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
