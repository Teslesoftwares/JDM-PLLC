import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Donation Policy",
  description:
    "How JDM-PLLC accepts, records and manages donations, including lawful-source declarations and restrictions.",
  alternates: { canonical: "/donation-policy" },
};

export default function DonationPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Donation Policy"
        description="How JDM-PLLC accepts, records and manages donations and in-kind contributions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donation Policy" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-8 text-sm text-[var(--brand-text-light)]">
            Last updated: 30 October 2026
          </p>

          <div className="space-y-10 text-[var(--brand-text-light)]">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                1. Purpose
              </h2>
              <p className="leading-relaxed">
                This policy sets out the principles JDM-PLLC applies when
                accepting, recording and using donations and in-kind
                contributions. It is intended to support lawful, transparent and
                accountable stewardship of resources.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                2. Lawful sources
              </h2>
              <p className="leading-relaxed">
                Donors must confirm that funds or assets contributed are from
                lawful sources and are not connected to unlawful activity. The
                Centre may decline or return a contribution, or request further
                information, where necessary to meet legal, governance or
                reputational obligations.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                3. Use of donations
              </h2>
              <p className="leading-relaxed">
                Donations will be applied to the Centre&apos;s approved purposes,
                which may include historical preservation, research, education,
                cultural heritage, youth development, facilities and
                administration. Where a donor expresses a preference, the Centre
                will seek to honour it if it is consistent with the project and
                applicable rules.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                4. No ownership or control
              </h2>
              <p className="leading-relaxed">
                A donation does not confer ownership, control, governance
                rights, endorsement or any interest in JDM-PLLC, AfYEF or any
                partner institution. Naming or recognition arrangements require
                separate written agreement.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                5. Payment channels
              </h2>
              <p className="leading-relaxed">
                Bank and mobile-money details are only valid when published on
                this official website after verification. JDM-PLLC is not
                responsible for payments made to unverified accounts or
                numbers. Online payment facilities will only be described as
                available once they have been tested and confirmed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                6. Records and acknowledgements
              </h2>
              <p className="leading-relaxed">
                The Centre will maintain appropriate records of donations and
                may issue acknowledgements or receipts. Donors should retain
                their own transaction records. Tax treatment, where applicable,
                depends on the donor&apos;s circumstances and applicable law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                7. In-kind contributions
              </h2>
              <p className="leading-relaxed">
                Books, archival materials, equipment and professional services
                may be accepted where they support the Centre&apos;s purposes.
                Acceptance is subject to suitability, ownership, condition,
                rights and documentation requirements.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                8. Questions
              </h2>
              <p className="leading-relaxed">
                Questions about this policy or a proposed contribution may be
                directed to the Secretariat through the{" "}
                <Link href="/contact" className="font-semibold text-[var(--brand-primary)] hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <Link href="/donate">Ways to support</Link>
            </Button>
            <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
              <Link href="/contact">Contact the Secretariat</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
