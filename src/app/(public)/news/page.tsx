import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Info, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "News and Updates",
  description:
    "Official announcements and project updates from the John Dramani Mahama Presidential Library & Legacy Centre.",
  alternates: { canonical: "/news" },
};

const categories = [
  "Project milestones.",
  "Institutional partnerships.",
  "Construction and facility development.",
  "Programme announcements.",
  "Events and public lectures.",
  "Research and publications.",
  "Youth opportunities.",
  "Media releases.",
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and Updates"
        title="Verified Project Information"
        description="Official announcements and project updates will be published through this website and the Centre's authorised communication channels."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News and Updates" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-start gap-3 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--brand-text)]">
              Only information published through this website and the
              Centre&apos;s authorised channels should be treated as official.
              Unverified partnership, payment or event claims should be checked
              with the Secretariat.
            </p>
          </div>

          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--brand-text)]">
              News categories may include:
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card key={category} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <Newspaper
                    className="mb-4 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <p className="font-semibold text-[var(--brand-text)]">
                    {category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Contact the Secretariat
          </h2>
          <p className="mb-8 text-white/85">
            For media enquiries, interviews or verification of project
            information, contact the Secretariat.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/events">Events &amp; Activities</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
