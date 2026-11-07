import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { NewsImageActions } from "@/components/public/news-image-actions";
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

const newsUpdates = [
  {
    date: "13 October 2026",
    title: "The Question, the Answer and the Possibility",
    body: "A three-part campaign asks what happens when stories fade, answers with the value of preserving records and knowledge, and imagines future generations learning from the past. Together, the messages describe the Centre's purpose: preserve history and pass its lessons forward.",
    images: [
      {
        file: "WhatsApp Image 2026-10-13 at 05.23.31.jpeg",
        alt: "Campaign graphic: The Question — what happens when stories fade and history is lost?",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 05.23.38.jpeg",
        alt: "Campaign graphic: The Answer — preserve memories and records so they become knowledge.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 05.23.45.jpeg",
        alt: "Campaign graphic: The Possibility — history inspires knowledge and tomorrow's leaders.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 17.07.43.jpeg",
        alt: "The Question campaign graphic, alternate design.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 17.08.07.jpeg",
        alt: "The Answer campaign graphic, alternate design.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 17.08.26.jpeg",
        alt: "The Possibility campaign graphic, alternate design.",
      },
    ],
  },
  {
    date: "13 October 2026",
    title: "A vision for knowledge and opportunity in Northern Ghana",
    body: "These project graphics present Northern Ghana as a place for knowledge and opportunity and describe the aspiration for a Presidential Library and Legacy Centre with a wider African future. The architectural views are conceptual images, not photographs of a completed facility.",
    images: [
      {
        file: "WhatsApp Image 2026-10-13 at 06.35.00.jpeg",
        alt: "Project graphic describing Northern Ghana as a destination for knowledge and opportunity.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 06.35.01 (1).jpeg",
        alt: "Project concept graphic: Not just a library, a centre for Africa's future.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 06.35.01.jpeg",
        alt: "Project graphic describing a presidential legacy, a national treasure and an African future.",
      },
    ],
  },
  {
    date: "28 October 2026",
    title: "Endorsement messages and project supporters",
    body: "A collection of endorsement artwork and project-support visuals. The names, titles and statements included in each graphic are reproduced as shown in the supplied materials.",
    images: [
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.26 (1).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.26.jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (1).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (2).jpeg",
        alt: "Project-support visual titled Powerful Africa.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (3).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (4).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27.jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.29 (1).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.29 (2).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.29.jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
    ],
  },
  {
    date: "2 November 2026",
    title: "The Centre's vision and mission on display",
    body: "A project display stand presents the Centre's vision, mission and legacy theme alongside an architectural concept image.",
    images: [
      {
        file: "WhatsApp Image 2026-11-02 at 13.35.26.jpeg",
        alt: "A JDM-PLLC display stand showing the Centre's vision, mission and an architectural concept image.",
      },
    ],
  },
];

function getImageDimensions(file: string) {
  if (file.startsWith("WhatsApp Image 2026-11-02")) {
    return { width: 1024, height: 1536 };
  }
  if (file.includes(" at 05.23.")) {
    return { width: 1024, height: 1280 };
  }
  return { width: 1080, height: 1080 };
}

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

          <div className="mb-16 space-y-12">
            <div className="max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-[var(--brand-text)]">
                Latest News &amp; Updates
              </h2>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                Project messages, concept visuals and endorsement materials
                from the Centre&apos;s communications.
              </p>
            </div>

            {newsUpdates.map((update) => (
              <article
                key={update.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/10 sm:p-8"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  {update.date}
                </p>
                <h3 className="mb-3 text-2xl font-bold text-[var(--brand-text)]">
                  {update.title}
                </h3>
                <p className="mb-6 max-w-4xl leading-relaxed text-[var(--brand-text-light)]">
                  {update.body}
                </p>
                <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {update.images.map((image) => {
                    const dimensions = getImageDimensions(image.file);
                    const imageSrc = `/endorsements-news-updates/${image.file}`;
                    return (
                      <figure
                        key={image.file}
                        className="overflow-hidden rounded-xl bg-[var(--brand-accent)]/30"
                      >
                        <Image
                          src={imageSrc}
                          alt={image.alt}
                          width={dimensions.width}
                          height={dimensions.height}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-auto w-full"
                        />
                        <figcaption className="space-y-3 p-3">
                          <p className="text-sm leading-relaxed text-[var(--brand-text)]">
                            {image.alt}
                          </p>
                          <NewsImageActions
                            src={imageSrc}
                            filename={image.file}
                            title={update.title}
                          />
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              </article>
            ))}
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
