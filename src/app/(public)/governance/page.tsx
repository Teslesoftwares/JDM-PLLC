import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Scale,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Governance and Accountability",
  description:
    "JDM-PLLC is a non-partisan legacy institution led by the AfCFTA Young Entrepreneurs Federation (AfYEF), developed with academic and institutional partners and committed to transparent, accountable stewardship.",
  alternates: { canonical: "/governance" },
};

const priorities = [
  "Protecting the integrity and historical accuracy of the project.",
  "Ensuring appropriate academic, archival and professional standards.",
  "Safeguarding the Centre's non-partisan character.",
  "Promoting transparency in programmes, partnerships and financial management.",
  "Ensuring accountable stewardship of resources and donations.",
  "Complying with applicable legal and regulatory requirements.",
  "Promoting inclusive participation, including young people and communities.",
  "Supporting long-term institutional sustainability.",
];

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance and Accountability"
        title="A Non-Partisan Institution Built on Trust"
        description="JDM-PLLC is a non-partisan legacy institution. It is led by the AfCFTA Young Entrepreneurs Federation (AfYEF), developed with academic and institutional partners and committed to transparent, accountable stewardship."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Governance" }]}
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
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)]">
                Governance priorities include:
              </h2>
              <ul className="space-y-3">
                {priorities.map((priority) => (
                  <li
                    key={priority}
                    className="flex items-start gap-3 rounded-lg border bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-[var(--brand-text)]">
                      {priority}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)]">
                Institutional relationships
              </h2>
              <div className="space-y-4">
                <Card className="border-0 shadow-sm">
                  <CardContent className="flex gap-4 p-6">
                    <Building2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-[var(--brand-text)]">
                        AfCFTA Young Entrepreneurs Federation (AfYEF)
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--brand-text-light)]">
                        AfYEF is the lead organisation for the JDM-PLLC project.
                        The Centre is a flagship legacy and youth-development
                        initiative of the Federation.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="flex gap-4 p-6">
                    <GraduationCap
                      className="mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-[var(--brand-text)]">
                        University for Development Studies (UDS)
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--brand-text-light)]">
                        UDS and AfYEF signed an MoU on 2 July 2026 to collaborate
                        in academic research, archival documentation, civic
                        education, leadership studies, digital knowledge
                        preservation and student skills development. Tamale hosts
                        the JDM-PLLC Main Secretariat at the UDS Tamale Campus.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="flex gap-4 p-6">
                    <Users
                      className="mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-[var(--brand-text)]">
                        EAM-TERDI
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--brand-text-light)]">
                        EAM-TERDI is a separate related initiative honouring
                        Emmanuel Adama Mahama. It is not an operational
                        department of JDM-PLLC.
                      </p>
                      <Link
                        href="/eam-terdi"
                        className="mt-2 inline-block text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                      >
                        Learn about EAM-TERDI
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <Scale
                className="mb-4 h-8 w-8 text-[var(--brand-primary)]"
                aria-hidden="true"
              />
              <p className="mb-4 text-xl font-semibold leading-relaxed text-[var(--brand-text)]">
                The Centre will not serve as a platform for partisan political
                activity.
              </p>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                JDM-PLLC does not claim government ownership, government
                funding or presidential endorsement.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--brand-text-light)]">
                The project is being developed by AfYEF with partners and
                supporters.
              </p>
            </div>
            <div>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                All donations and contributions will be handled in accordance
                with the Centre&apos;s donation policy and applicable laws.
                Donors must confirm that funds are from lawful sources. Payment
                details will only be published after they have been formally
                verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)]">
            Policies and public information
          </h2>
          <p className="mb-8 leading-relaxed text-[var(--brand-text-light)]">
            Our published policies set out how the Centre handles donations,
            personal information and accessibility.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
              <Link href="/donation-policy">Donation Policy</Link>
            </Button>
            <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
              <Link href="/data-protection">Data Protection</Link>
            </Button>
            <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
              <Link href="/accessibility">Accessibility</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
