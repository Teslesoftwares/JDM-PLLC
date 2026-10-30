import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about JDM-PLLC, its leadership, locations, launch, programmes, research access, donations and relationship with EAM-TERDI.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "What is JDM-PLLC?",
    answer:
      "The John Dramani Mahama Presidential Library & Legacy Centre (JDM-PLLC) is an AfYEF-led initiative to document, preserve and protect the legacy of President John Dramani Mahama and to inspire future generations through history, knowledge, leadership and opportunity.",
  },
  {
    question: "Who leads the project?",
    answer:
      "The AfCFTA Young Entrepreneurs Federation (AfYEF) is the lead organisation. The project is being developed with academic and institutional partners, including the University for Development Studies (UDS) under a Memorandum of Understanding signed on 2 July 2026.",
  },
  {
    question: "Is JDM-PLLC a government institution?",
    answer:
      "No. JDM-PLLC does not claim government ownership, government funding or presidential endorsement. It is an AfYEF-led initiative being developed with partners and supporters.",
  },
  {
    question: "Is the Centre non-partisan?",
    answer:
      "Yes. The Centre will not serve as a platform for partisan political activity. Its educational, historical and cultural work will be conducted in a manner consistent with its non-partisan character.",
  },
  {
    question: "Where is the Centre located?",
    answer:
      "The project is pursuing a multi-location development approach involving Tamale, Damongo, Busunu and Bole. Tamale hosts the Main Secretariat at the University for Development Studies (UDS), Tamale Campus.",
  },
  {
    question: "Is Tamale the principal campus?",
    answer:
      "No. The location of the Secretariat does not designate Tamale as the project's principal physical campus. No location is designated here as the principal campus. Specific functions and development stages depend on planning, consultations, approvals, partnerships and available resources.",
  },
  {
    question: "Is the Centre open to the public?",
    answer:
      "Not yet. Facilities, collections and programmes are being developed progressively. Public opening arrangements, visiting procedures and access conditions will be published when confirmed.",
  },
  {
    question: "When is the launch?",
    answer:
      "The proposed official launch is 30 November 2026 at 10:00 AM at the University for Development Studies, Tamale. The venue is to be confirmed by the Secretariat. Any change will be announced through official channels.",
  },
  {
    question: "How can I support the Centre?",
    answer:
      "You can support through a lawful donation, an in-kind contribution or a partnership. Payment details are only valid when published on this official website after verification. Contact the Secretariat to confirm the approved process.",
  },
  {
    question: "Are donations tax deductible?",
    answer:
      "Tax treatment depends on the donor's circumstances and applicable law. The Centre does not make a general representation that donations are tax deductible. Donors should seek their own advice where relevant.",
  },
  {
    question: "How can my institution partner with JDM-PLLC?",
    answer:
      "Contact the Secretariat with your organisation's details and area of interest. Partnership discussions may cover research, archives, education, cultural heritage, youth development, digital innovation or programme support. Formal recognition follows appropriate documentation.",
  },
  {
    question: "Can I access the archives for research?",
    answer:
      "Archival and research services are being developed. Researchers may contact the Secretariat to enquire about collections, collaboration or access procedures. Formal access will be subject to ownership, copyright, privacy, consent and applicable rules.",
  },
  {
    question: "Can I donate historical materials?",
    answer:
      "Offers of documents, photographs, audio-visual materials and other historical items are welcome. Acceptance is subject to suitability, ownership, condition, rights and documentation requirements. Please contact the Secretariat before sending materials.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Answers about the project"
        description="Clear answers about the Centre's identity, leadership, locations, launch, programmes, research access, donations and related initiatives."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {faq.question}
                  </h2>
                  <p className="leading-relaxed text-[var(--brand-text-light)]">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-[var(--brand-accent)] p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-[var(--brand-text)]">
              Still have a question?
            </h2>
            <p className="mb-6 text-[var(--brand-text-light)]">
              Contact the Secretariat and we will direct your enquiry to the
              right person.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                <Link href="/contact">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
                <Link href="/governance">Governance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
