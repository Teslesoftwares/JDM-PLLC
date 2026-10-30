import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Info,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Support the Centre",
  description:
    "JDM-PLLC welcomes lawful financial, material and professional contributions towards its approved priorities.",
  alternates: { canonical: "/donate" },
};

const priorities = [
  { icon: Landmark, title: "Library and archives." },
  { icon: BookOpen, title: "Research and education." },
  { icon: HeartHandshake, title: "Youth leadership and skills." },
  { icon: Building2, title: "Facilities and access." },
];

const givingSteps = [
  "Contact the Secretariat to confirm the current approved giving process.",
  "Receive written or published payment instructions from an authorised JDM-PLLC representative.",
  "State the intended purpose of the contribution, where applicable.",
  "Request an official receipt or acknowledgement.",
  "Retain the receipt and transaction records.",
];

const transparencyRecords = [
  "Donations received.",
  "Purposes and approved allocations.",
  "Receipts and acknowledgements.",
  "Programme and project expenditure.",
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support the Centre"
        title="Preserving Legacy. Creating Opportunity."
        description="JDM-PLLC welcomes lawful financial, material and professional contributions towards its approved priorities."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Support" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="#how-to-give">
              How to Give
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-start gap-3 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--brand-text)]">
              Online payment integration will be added only after formal
              approval and verification of the receiving account or payment
              provider.
            </p>
          </div>

          <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {priorities.map((priority) => (
              <Card key={priority.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <priority.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h2 className="font-semibold text-[var(--brand-text)]">
                    {priority.title}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mb-14 leading-relaxed text-[var(--brand-text-light)]">
            Donations will be applied to approved priorities and managed with
            transparency and accountability.
          </p>

          <div id="how-to-give" className="scroll-mt-24">
            <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)]">
              How to Give
            </h2>
            <ol className="grid gap-4 md:grid-cols-5">
              {givingSteps.map((step, index) => (
                <li key={step} className="rounded-lg border bg-white p-5 shadow-sm">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-bold text-[var(--brand-primary)]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--brand-text)]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)]">
                Suggested giving levels:
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-3">
                {siteConfig.donation.amounts.map((amount) => (
                  <div
                    key={amount}
                    className="rounded-lg border bg-white p-4 text-center shadow-sm"
                  >
                    <p className="text-lg font-bold text-[var(--brand-primary)]">
                      GH₵{amount.toLocaleString("en-GH")}
                    </p>
                  </div>
                ))}
                <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
                  <p className="text-lg font-bold text-[var(--brand-primary)]">
                    Any other amount
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-8">
                <ShieldCheck
                  className="mb-4 h-8 w-8 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                  Donor Declaration
                </h2>
                <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                  All donors must confirm that the funds or assets contributed
                  are from lawful sources and are not connected to unlawful
                  activity. The Centre may request information necessary to
                  meet its legal and governance obligations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)]">
                Transparency
              </h2>
              <p className="mb-6 leading-relaxed text-[var(--brand-text-light)]">
                The Centre intends to maintain proper records of:
              </p>
              <ul className="space-y-3">
                {transparencyRecords.map((record) => (
                  <li key={record} className="flex items-start gap-3 text-[var(--brand-text)]">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    {record}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)]">
                Corporate and Major Contributions
              </h2>
              <p className="mb-6 leading-relaxed text-[var(--brand-text-light)]">
                Corporate, institutional and major individual contributions may
                be discussed with the Secretariat and documented through
                appropriate agreements.
              </p>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                All contributions must comply with applicable laws and the
                Centre&apos;s governance and financial policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Discuss your support
          </h2>
          <p className="mb-8 text-white/85">
            Contact the Secretariat to confirm the current approved giving
            process.
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
              <Link href="/donation-policy">Donation Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
