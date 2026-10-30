import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { centreServices, siteConfig } from "@/config/site";

/** Only configured facilities exist, so the tree is fully static at build time. */
export function generateStaticParams() {
  return centreServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = centreServices.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Facility not found" };
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

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = centreServices.find((item) => item.slug === slug);

  if (!service) notFound();

  const related = centreServices.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="The Library & Legacy Centre"
        title={service.name}
        description={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Centre", href: "/services" },
          { label: service.name },
        ]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/contact">
              Enquire About This Facility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8 space-y-2 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5 text-sm leading-relaxed text-[var(--brand-text)]">
                <p>
                  JDM-PLLC is being developed as a centre for historical
                  preservation, research, education, cultural heritage and
                  youth empowerment.
                </p>
                <p>
                  Its facilities and programmes will be implemented
                  progressively, subject to planning, institutional agreements,
                  approvals, funding and available resources.
                </p>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-[var(--brand-text)]">
                Potential activities include:
              </h2>
              <ul className="mb-8 grid gap-3 sm:grid-cols-2">
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

              {service.statusNote ? (
                <p className="leading-relaxed text-[var(--brand-text-light)]">
                  {service.statusNote}
                </p>
              ) : null}
            </div>

            <aside className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-lg font-semibold text-[var(--brand-text)]">
                    Contact the Secretariat
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Enquiries about this facility, research access or
                    partnership are welcome.
                  </p>
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                    >
                      <Link href="/contact">Send an enquiry</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={siteConfig.contact.phoneHref}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.contact.phone}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-[var(--brand-text)]">
                    Main Secretariat
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    University for Development Studies (UDS), Tamale Campus
                    <br />
                    P.O. Box TL 1350
                    <br />
                    Digital Address: NT-0272-1946
                    <br />
                    Tamale, Northern Region, Ghana.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-3 inline-block text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    All contact details
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
              Related facilities
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
