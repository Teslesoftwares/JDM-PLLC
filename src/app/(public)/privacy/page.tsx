import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How the ${siteConfig.name} website uses information submitted through its contact form.`,
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "1 October 2026";

const sections = [
  {
    heading: "1. Who we are",
    body: [
      `${siteConfig.name} is the John Dramani Mahama Presidential Library & Legacy Centre, operating as The Northern Star Centre. The administrative contact address listed by the Centre is ${siteConfig.contact.address}. For questions about this policy, contact the Centre at ${siteConfig.contact.email}.`,
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "If you contact the Centre through the website, we receive the information you choose to include in your message and the contact details needed to reply.",
      "The website also includes sign-in areas for authorised users. This public policy page does not describe the separate operational systems used in those areas.",
    ],
  },
  {
    heading: "3. Why we use your information",
    body: [
      "The Centre uses an enquiry to respond to the message and to consider any requested information about visits, research access, partnerships, media, events or scholarships.",
    ],
  },
  {
    heading: "4. Who can see your information",
    body: [
      "The Centre may make an enquiry available to the people responsible for responding to it. Do not send sensitive personal information through the public contact form.",
    ],
  },
  {
    heading: "5. Retention and requests",
    body: [
      "Contact the Centre to ask about an enquiry you have submitted or to request its correction or deletion. The Centre will review the request and respond.",
    ],
  },
  {
    heading: "6. Website security and third parties",
    body: [
      "Website services may be hosted or provided by third parties. Where you follow a link to another website, that site's own privacy information applies.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "We update this policy when our practices change. The date at the top of this page shows when it was last revised.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description={`How the ${siteConfig.name} website uses information submitted through its contact form.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
              Questions about your information
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text)]">
              Email {siteConfig.contact.email} or use the contact form to ask the Centre a question.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                <Link href="/contact">Contact the Centre</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
