import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: `Visiting hours, admission, the three branches, programmes, research access, partnerships and giving at ${siteConfig.name}, operating as The Northern Star Centre.`,
  alternates: { canonical: "/faq" },
};

const slug = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const faqs = [
  {
    category: "Visiting & admission",
    items: [
      {
        q: "What are your visiting hours?",
        a: `${siteConfig.openingHours.summary}. Sunday and public holidays: closed.`,
      },
      {
        q: "What does admission cost?",
        a: "Admission is free for Ghanaian citizens. International visitors pay GHS 50.",
      },
      {
        q: "Where are you located?",
        a: `${siteConfig.contact.address} is the Centre's contact office. The Centre's work is carried through three integrated branches in Northern Ghana — Mind in Tamale, Soul in Busunu and Heart in Bole.`,
      },
      {
        q: "How do I arrange a visit?",
        a: `Send a request through the Plan Your Visit form on this website, or call ${siteConfig.contact.phone} during opening hours. Visit arrangements are confirmed with the Centre on enquiry.`,
      },
      {
        q: "Can I arrive without arranging a visit in advance?",
        a: `Whether you can be received without a prior arrangement is confirmed with the Centre on enquiry — please call ${siteConfig.contact.phone} before you travel.`,
      },
      {
        q: "Can I visit all three branches?",
        a: "Each branch has its own focus, so the branch you need depends on why you are visiting. Which branches are open to you, and when, are confirmed with the Centre on enquiry.",
      },
    ],
  },
  {
    category: "The three branches",
    items: [
      {
        q: "What are the Centre's three branches?",
        a: "Mind — Tamale, the Academic and Leadership Development Wing; Soul — Busunu, the Mama Habiba Wing for Character and Ethical Formation; and Heart — Bole, the Global Headquarters and Living Heritage Hub. Three branches. One constellation.",
      },
      {
        q: "What happens at the Mind branch in Tamale?",
        a: "Mind is the engine of analysis, innovation and leadership development — home to the Leadership Laboratory, the Pan-African Fellowships and Public Policy Dialogues, where ideas are tested and future leaders are trained.",
      },
      {
        q: "What happens at the Soul branch in Busunu?",
        a: "Soul is a sanctuary dedicated to the moral foundations of leadership, inspired by the enduring legacy of Mama Nnaba Habiba Mahama — character formation, integrity and values, and intergenerational dialogue.",
      },
      {
        q: "What happens at the Heart branch in Bole?",
        a: "Heart is the historical and emotional core of the institution and its Global Headquarters: the Presidential Library & Museum, the Northern Star Hall of Fame and the Skills Transformation Hub, where Africa's stories are preserved, celebrated and projected to the world.",
      },
      {
        q: "Do the branches keep the same visiting hours?",
        a: `${siteConfig.openingHours.summary} are the Centre's published hours. Branch-specific arrangements are confirmed with the Centre on enquiry.`,
      },
    ],
  },
  {
    category: "Programmes & fellowships",
    items: [
      {
        q: "What programmes does the Centre run?",
        a: "The Leadership Laboratory, the Pan-African Fellowship Programme, the Indigenous Knowledge Systems Centre, the Virtual Northern Star Library & Digital Archive, and the Northern Star Annual Lecture, which launches in 2026.",
      },
      {
        q: "What is the Leadership Laboratory?",
        a: "The Leadership Laboratory is the \"How to Govern\" Institute — a first-of-its-kind, trans-partisan training ground where participants examine the realities of governance through immersive case studies covering crisis management, infrastructure delivery, public accountability, ethical decision-making, democratic governance and national development planning. It is a training ground for future leaders, not a monument to any individual.",
      },
      {
        q: "When can I apply for a Pan-African Fellowship?",
        a: "The Pan-African Fellowship Programme selects exceptional young leaders from across Africa for immersive leadership development, mentorship and continental networking — the first cohort of the Northern Star generation. Cohort dates, eligibility and application windows are confirmed with the Centre at the time of enquiry.",
      },
      {
        q: "When does the Northern Star Annual Lecture begin?",
        a: "The Northern Star Annual Lecture is part of the Centre's 2026 soft-infrastructure launch, convening leaders, scholars, policymakers and innovators on governance, development and African futures. The date and programme of the first lecture are confirmed with the Centre on enquiry.",
      },
      {
        q: "Is there a fee for your programmes?",
        a: "Fees and dates are confirmed with the Centre before your visit or application — please enquire for the programme you are interested in.",
      },
    ],
  },
  {
    category: "Research & archives",
    items: [
      {
        q: "What is the Virtual Northern Star Library & Digital Archive?",
        a: "A globally accessible digital repository of leadership case studies, oral histories, governance research and archival materials from across the African continent, making the Centre's knowledge available to the world from day one. It launches as part of the Centre's 2026 soft infrastructure; launch dates and access terms are confirmed with the Centre at the time of enquiry.",
      },
      {
        q: "How do I get research access?",
        a: `Research access is one of the inquiries the Centre welcomes. Scholars are offered access to unique archives, oral histories, leadership datasets and governance case studies. Access terms are agreed with the Centre before any visit — send a Research access enquiry through the contact form, or call ${siteConfig.contact.phone}.`,
      },
      {
        q: "Do you record oral histories?",
        a: "Yes. The Indigenous Knowledge Systems Oral History Blitz, launching in 2026, is a systematic, urgent effort to record, preserve and digitize the oral histories and traditional governance wisdom of communities across Northern Ghana and beyond — before these irreplaceable voices are lost. How to contribute or nominate a story is confirmed with the Centre on enquiry.",
      },
      {
        q: "What does the Indigenous Knowledge Systems Centre cover?",
        a: "Research and preservation across traditional governance systems, conflict resolution mechanisms, oral histories, African languages, traditional ecological knowledge and intergenerational knowledge transfer — so that ancestral wisdom continues to inform contemporary leadership and development.",
      },
    ],
  },
  {
    category: "Partnerships",
    items: [
      {
        q: "Who can partner with the Centre?",
        a: "The Centre is not built by one person — it is illuminated by a constellation. Partners are invited from every sector and every continent: universities, foundations, development partners, corporations, philanthropists, traditional authorities, governments and diaspora communities.",
      },
      {
        q: "Who is your founding anchor partner?",
        a: "The University for Development Studies (UDS), Tamale, is the foundational anchor partner. Areas of collaboration include the Leadership Laboratory, Indigenous Knowledge Systems research, fellowship programmes, student leadership development and joint publications.",
      },
      {
        q: "Do you work with universities outside Ghana?",
        a: "Yes — the Centre seeks international university partnerships across Africa, North America, Europe, Asia and the Caribbean in curriculum co-design, faculty exchanges, joint research, research chairs, governance studies, democratic resilience research and Indigenous Knowledge documentation.",
      },
      {
        q: "How do I propose a partnership?",
        a: `Send a Partnership proposal through the contact form on this website, or call ${siteConfig.contact.phone}. The next step in reviewing your proposal is confirmed with the Centre on enquiry.`,
      },
    ],
  },
  {
    category: "Giving & support",
    items: [
      {
        q: "How can I support the Centre?",
        a: "Philanthropic support underpins the Centre's long-term independence: the Endowment Fund, naming rights, fellowship sponsorships and the Friends of the Northern Star Network. See our support page for the ways of giving that are currently open.",
      },
      {
        q: "Can my organisation sponsor a fellowship?",
        a: "Fellowship sponsorships and fellowship endowments are part of the Centre's sustainability model, alongside research chairs and joint programmes. Sponsorship options and terms are confirmed with the Centre on enquiry — start with a Partnership proposal or the support page.",
      },
      {
        q: "Is there a naming or endowment opportunity?",
        a: "Naming rights and the Endowment Fund are the two standing routes for major philanthropic support. What can be named, and on what terms, is confirmed with the Centre on enquiry.",
      },
      {
        q: "Where do I go to make a gift?",
        a: "See our donate page for current ways to give. If your gift is for a specific purpose — a fellowship, an endowment or a programme — mention it in your message and it will be confirmed with the Centre.",
      },
    ],
  },
];

export default function FAQPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.items.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      }))
    ),
  };

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description={`Visiting, admission, the three branches, programmes, research access, partnerships and giving at ${siteConfig.name}.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <script
            type="application/ld+json"
            // Static, developer-authored JSON-LD built from the FAQ content above.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {faqs.map((category) => (
                <div
                  key={category.category}
                  id={slug(category.category)}
                  className="mb-12 scroll-mt-28 last:mb-0"
                >
                  <h2 className="mb-5 text-xl font-bold text-[var(--brand-text)]">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.items.map((faq) => (
                      <Card key={faq.q} className="border-0 shadow-sm">
                        <CardContent className="p-5">
                          <h3 className="mb-2 font-semibold text-[var(--brand-text)]">
                            {faq.q}
                          </h3>
                          <p className="leading-relaxed text-[var(--brand-text-light)]">
                            {faq.a}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-md">
                <CardContent className="p-6">
                  <h2 className="mb-2 text-lg font-semibold">Question not answered here?</h2>
                  <p className="mb-5 text-sm leading-relaxed text-white/85">
                    The Centre can help with visiting, research access, partnerships,
                    events and scholarships.
                  </p>
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-white text-[var(--brand-primary)] hover:bg-white/90"
                    >
                      <a href={siteConfig.contact.phoneHref}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.contact.phone}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
                    >
                      <Link href="/contact">Send a message</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-[var(--brand-text)]">
                    On this page
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {faqs.map((category) => (
                      <li key={category.category}>
                        <a
                          href={`#${slug(category.category)}`}
                          className="text-[var(--brand-text-light)] transition-colors hover:text-[var(--brand-primary)]"
                        >
                          {category.category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-[var(--brand-text)]">
                    Plan your visit
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Request a visit, research access or a conversation with the Centre.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                  >
                    <Link href="/contact">
                      Contact the Centre
                      <ArrowRight className="mr-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Inquiries welcome</h2>
          <p className="mb-8 text-white/85">
            Research access, partnership proposals, media inquiries, event
            registration and scholarship applications — tell us what you need on{" "}
            {siteConfig.contact.phone}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link href="/contact">Contact the Centre</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
