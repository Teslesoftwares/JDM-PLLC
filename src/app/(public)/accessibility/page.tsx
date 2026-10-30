import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "JDM-PLLC's commitment to making its website, facilities and programmes as accessible as reasonably possible.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Accessibility"
        description="Our commitment to making the Centre's website, facilities and programmes as accessible as reasonably possible."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-8 text-sm text-[var(--brand-text-light)]">
            Last updated: 30 October 2026
          </p>

          <div className="space-y-10 text-[var(--brand-text-light)]">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                Our commitment
              </h2>
              <p className="leading-relaxed">
                JDM-PLLC aims to make its website and services usable by as many
                people as reasonably possible, including people with
                disabilities. Accessibility will be considered as facilities,
                collections and programmes are developed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                Website accessibility
              </h2>
              <p className="leading-relaxed">
                The website is designed with clear headings, readable text,
                keyboard-accessible navigation and alternative text for
                meaningful images where available. We welcome reports of
                barriers so that they can be addressed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                Facilities and collections
              </h2>
              <p className="leading-relaxed">
                As physical facilities and archival services are developed, the
                Centre will seek to incorporate appropriate access
                considerations, including physical access, reading support and
                accessible formats where feasible.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                Feedback
              </h2>
              <p className="leading-relaxed">
                If you encounter an accessibility barrier on this website or
                would like to discuss access to a programme or service, please
                contact the Secretariat through the{" "}
                <Link href="/contact" className="font-semibold text-[var(--brand-primary)] hover:underline">
                  contact page
                </Link>
                . Please describe the issue and the format or assistance you
                need.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <Link href="/contact">Report an accessibility issue</Link>
            </Button>
            <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
              <Link href="/data-protection">Data Protection</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
