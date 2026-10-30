import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using the ${siteConfig.name} website and its institutional information.`,
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "30 October 2026";

const sections = [
  {
    heading: "1. About these terms",
    body: [
      `These terms apply to your use of the ${siteConfig.name} website, which provides information about the Centre, its proposed facilities, programmes, partnerships and project locations.`,
      "By using this website you accept these terms. If you do not accept them, please stop using the site.",
    ],
  },
  {
    heading: "2. Information about plans and facilities",
    body: [
      "Website content is provided for general information. Facilities, programmes and activities are being developed progressively and are subject to planning, approvals, partnerships, funding and available resources.",
      "References to proposed facilities, programmes or dates do not mean that they are operational or confirmed. Contact the Secretariat for current information before making arrangements.",
    ],
  },
  {
    heading: "3. Enquiries",
    body: [
      "A message sent through this website is an enquiry and does not by itself confirm a visit, event registration, partnership, donation or programme place. The Secretariat will respond with any next steps.",
    ],
  },
  {
    heading: "4. Website accounts",
    body: [
      "If you have an account for a restricted area of the site, keep your sign-in details confidential and do not attempt to access areas or information you are not authorised to use.",
    ],
  },
  {
    heading: "5. Payments and donations",
    body: [
      "Payment or donation details are only valid when published on this official website after verification. Do not send money to an account or number that has not been verified through the Secretariat. Donations are subject to the Centre's donation policy.",
    ],
  },
  {
    heading: "6. Acceptable use",
    body: [
      "Use this website lawfully. Do not attempt to disrupt its operation, interfere with its security, or submit unlawful or abusive material through its forms.",
    ],
  },
  {
    heading: "7. Content and third-party links",
    body: [
      "Text and images on this website belong to the Centre or are used with permission. Please contact the Centre before reproducing substantial content for commercial use.",
      "Where we link to another website, we do not control it and we are not responsible for its content or its privacy practices.",
    ],
  },
  {
    heading: "8. Changes",
    body: [
      "We may update these terms. The date at the top of this page shows when they were last revised.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="Terms for using this website and the Centre's institutional information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-10 text-sm text-[var(--brand-text-light)]">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-bold text-[var(--brand-text)]">
                  {section.heading}
                </h2>
                <div className="space-y-3 leading-relaxed text-[var(--brand-text-light)]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-6">
            <h2 className="mb-2 font-semibold text-[var(--brand-text)]">
              Need to talk to us?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text)]">
              Contact the Secretariat with questions about these terms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                <Link href="/contact">Contact the Centre</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/data-protection">Data protection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
