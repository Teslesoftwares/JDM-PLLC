import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Info,
  Landmark,
  Lightbulb,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Partnership and Collaboration",
  description:
    "Partner with JDM-PLLC in academic research, archival preservation, civic education, cultural heritage, youth development and digital innovation.",
  alternates: { canonical: "/partner" },
};

const partnerTypes = [
  { icon: GraduationCap, title: "Academic and research institutions." },
  { icon: Landmark, title: "Libraries, archives and museums." },
  { icon: Building2, title: "Cultural and heritage organisations." },
  { icon: Users, title: "Youth and community organisations." },
  { icon: Lightbulb, title: "Development and philanthropic partners." },
  { icon: Handshake, title: "Private-sector and technology partners." },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership and Collaboration"
        title="Building the Centre Through Partnership"
        description="JDM-PLLC welcomes collaboration with institutions that share its commitment to historical preservation, education, research and youth opportunity."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/contact">
              Discuss a Partnership
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
                All partnerships will be formalised through appropriate
                agreements.
              </p>
              <p>
                A listing or discussion does not constitute a funding
                commitment, endorsement, ownership interest or formal
                partnership. Partnerships are recognised only after appropriate
                documentation is completed.
              </p>
            </div>
          </div>

          <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((type) => (
              <Card key={type.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <type.icon
                    className="mb-4 h-7 w-7 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h2 className="text-lg font-semibold text-[var(--brand-text)]">
                    {type.title}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)]">
                Named institutional relationships include:
              </h2>
              <ul className="space-y-4">
                {siteConfig.partners.map((partner) => (
                  <li
                    key={partner.name}
                    className="rounded-lg border bg-white p-4 shadow-sm"
                  >
                    <p className="font-semibold text-[var(--brand-text)]">
                      {partner.name}
                    </p>
                    {partner.detail ? (
                      <p className="text-sm text-[var(--brand-text-light)]">
                        {partner.detail}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-0 bg-[var(--brand-primary)] text-white">
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">
                  Contact the Secretariat
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-white/90">
                  For partnership enquiries, contact the Secretariat.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-white text-[var(--brand-primary)] hover:bg-white/90">
                    <Link href="/contact">Contact the Secretariat</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
                  >
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-8">
                <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                  EAM-TERDI
                </h2>
                <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                  Separately, EAM-TERDI is a related initiative honouring
                  Emmanuel Adama Mahama, focused on teacher education, research,
                  professional development and digital innovation.
                </p>
                <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                  <Link href="/eam-terdi">
                    Learn about EAM-TERDI
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-8">
                <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                  Support the work
                </h2>
                <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                  Individuals and organisations can support programmes,
                  facilities, research and educational opportunities through
                  lawful contributions.
                </p>
                <Button asChild variant="link" className="p-0 text-[var(--brand-primary)]">
                  <Link href="/donate">
                    Ways to support
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
