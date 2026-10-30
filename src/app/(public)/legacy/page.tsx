import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "President John Dramani Mahama: The Inspiration",
  description:
    "President John Dramani Mahama's public-service journey is the central inspiration for JDM-PLLC. The Centre seeks to document his life, leadership and contributions to Ghana and Africa.",
  alternates: { canonical: "/legacy" },
};

const collections = [
  "President Mahama's life, education and public service.",
  "His parliamentary and executive leadership.",
  "His presidency and place in Ghana's democratic history.",
  "Ghana's constitutional development and democratic institutions.",
  "Public policy and national development.",
  "Ghana's role in African cooperation and international relations.",
  "The history and cultural heritage of Northern Ghana.",
  "Relevant speeches, photographs, publications, oral histories and documentary records.",
];

export default function InspirationPage() {
  return (
    <>
      <PageHero
        eyebrow="The Inspiration"
        title="Documenting a Journey of Leadership and Public Service"
        description="President John Dramani Mahama's public-service journey is the central inspiration for JDM-PLLC."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "The Inspiration" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/services">
              The Library &amp; Legacy Centre
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
              <p>
                President John Dramani Mahama&apos;s public-service journey is
                the central inspiration for JDM-PLLC.
              </p>
              <p>
                The Centre seeks to document his life, leadership experiences,
                ideas, development aspirations and contributions to Ghana,
                preserving relevant historical records so that present and
                future generations can study his journey and understand its
                wider national and African context.
              </p>
              <p>
                The objective is to preserve the historical record, encourage
                research and reflection, and inspire young people to engage
                meaningfully with leadership, public service and national
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the Centre seeks to preserve */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              What the Centre Seeks to Preserve
            </h2>
            <p className="text-white/85">
              Subject to research, permissions and access to relevant materials,
              the Centre intends to develop collections relating to:
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {collections.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white/85" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wider African legacy */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Preserving a Wider African Legacy
            </h2>
            <p className="mb-5 leading-relaxed text-[var(--brand-text-light)]">
              JDM-PLLC will seek to document and study other Ghanaian and
              African leaders whose contributions to public service, education,
              democracy, culture and development deserve preservation.
            </p>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              The Centre will encourage responsible historical interpretation,
              drawing on credible evidence and appropriate permissions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-accent)]/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
            Help preserve the record
          </h2>
          <p className="mb-8 leading-relaxed text-[var(--brand-text-light)]">
            Researchers, institutions and individuals with relevant materials,
            expertise or partnership interests are invited to contact the
            Secretariat.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <Link prefetch={false} href="/research">
                Research &amp; Archives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-white"
            >
              <Link prefetch={false} href="/contact">
                Contact the Secretariat
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--brand-text-light)]">
            {siteConfig.contact.email} · {siteConfig.contact.phone}
          </p>
        </div>
      </section>
    </>
  );
}
