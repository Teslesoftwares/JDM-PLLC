import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Info, Phone } from "lucide-react";
import { clinicServices, siteConfig, isPending, servicePricingNote } from "@/config/site";

/** Only configured services exist, so the tree is fully static at build time. */
export function generateStaticParams() {
  return clinicServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = clinicServices.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Programme not found" };
  }

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.description,
      url: `/services/${service.slug}`,
    },
  };
}

function getProgrammeOverview(slug: string): string[] {
  switch (slug) {
    case "leadership-laboratory":
      return [
        "Immersive case studies exploring real-world leadership challenges in governance.",
        "Focus areas include crisis management, infrastructure delivery, public accountability, ethical decision-making, democratic governance and national development planning.",
        "Serves as the 'How to Govern' institute where participants study leadership, practice governance and serve humanity.",
        "Based on the Mahama Leadership Framework as a living curriculum for practical application.",
      ];
    case "pan-african-fellowships":
      return [
        "Flagship cohort programme selecting exceptional young leaders from across Africa.",
        "Provides immersive leadership development, mentorship and continental networking.",
        "Builds the next generation of ethical, competent and visionary leaders for Africa and the world.",
        "Supports the Centre’s commitment to nurturing every African’s Northern Star.",
      ];
    case "indigenous-knowledge":
      return [
        "Rooted in the Indigenous Knowledge Systems Centre — recognising the governance traditions embedded within African knowledge systems.",
        "Preserves and studies traditional governance systems, conflict resolution mechanisms, oral histories, African languages, traditional ecological knowledge and intergenerational knowledge transfer.",
        "Ensures ancestral wisdom continues to inform contemporary leadership and development.",
        "Forms a core pillar of heritage preservation at the Centre.",
      ];
    case "library-museum":
      return [
        "Presidential Library & Museum serving as the global headquarters living heritage hub (Heart — Bole).",
        "Preserves, documents and projects Africa’s stories for current and future generations.",
        "Provides a home for archives, exhibits and research materials that illuminate leadership journeys across Africa.",
        "Supports learning, research and public engagement rooted in African heritage.",
      ];
    case "hall-of-fame":
      return [
        "The Northern Star Hall of Fame — premier Pan-African repository celebrating transformational leadership and public service.",
        "Honours individuals whose lives have expanded opportunity, justice, peace, knowledge, innovation and human dignity.",
        "Categories reflect public service, traditional leadership, scholarship, entrepreneurship, arts and culture, and humanitarian service.",
        "Preserves the stories of those whose leadership changed lives and shaped history.",
      ];
    case "digital-archive":
      return [
        "Virtual Northern Star Library & Digital Archive — a globally accessible repository from day one.",
        "Provides leadership case studies, oral histories, governance research and archival materials from across the African continent.",
        "Makes the Centre’s knowledge available to the world as part of the 2026 soft infrastructure launch.",
        "Supports the systematic recording and digitisation of oral histories and traditional knowledge.",
      ];
    default:
      return [];
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = clinicServices.find((item) => item.slug === slug);

  if (!service) notFound();

  const related = clinicServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  const overview = getProgrammeOverview(slug);

  return (
    <>
      <PageHero
        eyebrow={siteConfig.descriptor}
        title={service.name}
        description={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes & Facilities", href: "/services" },
          { label: service.name },
        ]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/contact">
              Ask About This Programme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {isPending(service.status) ? (
                <div className="mb-8 flex items-start gap-3 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5">
                  <Info
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[var(--brand-text)]">
                      Availability to be confirmed
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--brand-text)]">
                      {service.statusNote}
                    </p>
                  </div>
                </div>
              ) : null}

              <h2 className="mb-4 text-2xl font-bold text-[var(--brand-text)]">
                What this covers
              </h2>
              <ul className="mb-10 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-lg border bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--brand-text)]">{highlight}</span>
                  </li>
                ))}
              </ul>

              {overview.length > 0 ? (
                <div className="mb-10 space-y-4 leading-relaxed text-[var(--brand-text-light)]">
                  {overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              <h2 className="mb-4 text-2xl font-bold text-[var(--brand-text)]">
                What to expect
              </h2>
              <div className="space-y-4 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  Engagements are designed to be immersive, scholarly and grounded in practice.
                  Programmes draw from the Mahama Leadership Framework and the PEECS pillars —
                  Preserve, Empower, Educate, Celebrate and Sustain — to ensure each offering
                  contributes to building leadership capital for Africa.
                </p>
                <p>
                  Whether visiting for research, participating in a fellowship, attending a public
                  dialogue or accessing the archives, you can expect clear guidance on access,
                  timings and any requirements before your engagement begins.
                </p>
                <p>
                  All activities are conducted in line with the Centre’s commitment to non-partisan
                  integrity, independent trusteeship, radical transparency and perpetual mission
                  protection.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-lg font-semibold text-[var(--brand-text)]">
                    Plan your visit or enquiry
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {servicePricingNote()} Contact the Centre about programme enrolment,
                    research access or group visits.
                  </p>
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                    >
                      <Link href="/contact">Ask About This Programme</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={siteConfig.contact.phoneHref}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.contact.phone}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Enquire online</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-[var(--brand-text)]">
                    Where we are
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {siteConfig.contact.address}, {siteConfig.contact.city},{" "}
                    {siteConfig.contact.region}, {siteConfig.contact.country}.
                  </p>
                  <p className="mt-2 text-sm text-[var(--brand-text-light)]">
                    {siteConfig.openingHours.summary}
                  </p>
                  <Link
                    href="/branches"
                    className="mt-3 inline-block text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    Location details
                  </Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-[var(--brand-accent)]/40 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-[var(--brand-text)]">
              Related programmes & facilities
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="group">
                  <Card className="h-full border-0 bg-white shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-semibold text-[var(--brand-text)]">
                        {item.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                        {item.description}
                      </p>
                      <span className="mt-3 inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:underline">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
