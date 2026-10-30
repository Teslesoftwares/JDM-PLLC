import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Archive,
  BookOpen,
  Database,
  FileText,
  Info,
  MonitorPlay,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Research, Archives and Knowledge Preservation",
  description:
    "JDM-PLLC intends to develop a trusted centre for historical research, archival preservation, oral history, digital collections and public knowledge.",
  alternates: { canonical: "/research" },
};

const areas = [
  {
    icon: Archive,
    title: "Archival Collections",
    body: "Historical documents, photographs, audio-visual materials, speeches, publications and other records relating to the life and public service of President John Dramani Mahama and the broader democratic history of Ghana.",
  },
  {
    icon: Users,
    title: "Oral History",
    body: "Oral history and recorded testimonies from individuals, communities and institutions connected to significant historical events and experiences.",
  },
  {
    icon: BookOpen,
    title: "Research Collections",
    body: "Reference materials on leadership, governance, public policy, constitutional development, African integration, education, youth development and cultural heritage.",
  },
  {
    icon: MonitorPlay,
    title: "Digital Preservation",
    body: "Digital preservation, cataloguing and appropriate online access, subject to ownership, copyright and privacy requirements.",
  },
  {
    icon: FileText,
    title: "Publications and Knowledge Products",
    body: "Research publications, policy briefs, exhibition narratives and educational resources.",
  },
  {
    icon: Database,
    title: "Research Partnerships",
    body: "Collaboration with universities, libraries, archives, museums, research institutions and cultural organisations in Ghana and internationally.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research, Archives and Knowledge Preservation"
        title="A Trusted Home for Historical Evidence and Public Knowledge"
        description="The Centre intends to collect, organise, preserve and make accessible materials that deepen public understanding of leadership, governance and national development."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Research & Archives" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/contact">
              Make a Research Enquiry
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
              Archival and research services are being developed. Collections,
              catalogues and access procedures will be published progressively
              as materials are processed and approved for public use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Card key={area.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <area.icon
                    className="mb-4 h-7 w-7 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {area.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {area.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="leading-relaxed text-[var(--brand-text-light)]">
            All archival and research activities will be guided by applicable
            laws and professional standards, including those relating to
            copyright, privacy, data protection, consent and cultural heritage.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)]">
                Research access and enquiries
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                Researchers, students, institutions and members of the public
                may contact the Secretariat to enquire about available
                collections, research collaboration or the donation of
                historical materials.
              </p>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                Formal access procedures, reading-room arrangements and any
                applicable conditions will be communicated as facilities become
                available.
              </p>
            </div>
            <Card className="border-0 bg-[var(--brand-primary)] text-white">
              <CardContent className="p-8">
                <h3 className="mb-3 text-xl font-bold">Contact the Secretariat</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/85">
                  For research enquiries, archival donations or institutional
                  collaboration.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-white text-[var(--brand-primary)] hover:bg-white/90">
                    <Link href="/contact">Send an enquiry</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
                  >
                    <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
