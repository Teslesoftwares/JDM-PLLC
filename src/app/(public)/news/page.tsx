import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { NewsImageActions } from "@/components/public/news-image-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Info, Newspaper } from "lucide-react";
import { websiteNewsUpdates } from "@/config/website-content";

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
          <div className="mb-10 flex items-start gap-3 rounded-lg border-l-4 border-(--brand-primary) bg-(--brand-accent) p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-(--brand-primary)" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-(--brand-text)">
              Only information published through this website and the
              Centre&apos;s authorised channels should be treated as official.
              Unverified partnership, payment or event claims should be checked
              with the Secretariat.
            </p>
          </div>

          <div className="mb-16 space-y-12">
            <div className="max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-(--brand-text)">
                Latest News &amp; Updates
              </h2>
              <p className="leading-relaxed text-(--brand-text-light)">
                Project messages, concept visuals and endorsement materials
                from the Centre&apos;s communications.
              </p>
            </div>

            {websiteNewsUpdates.map((update) => (
              <article
                key={update.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/10 sm:p-8"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-(--brand-primary)">
                  {update.date}
                </p>
                <h3 className="mb-3 text-2xl font-bold text-(--brand-text)">
                  {update.title}
                </h3>
                <p className="mb-6 max-w-4xl leading-relaxed text-(--brand-text-light)">
                  {update.body}
                </p>
                {update.articleUrl ? (
                  <a
                    href={update.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6 inline-flex items-center font-semibold text-(--brand-primary) hover:underline"
                  >
                    Read the report on MyJoyOnline
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
                {update.title.includes("AfYEF") ? (
                  <p className="mb-6 text-xs font-medium text-(--brand-primary)">
                    AfYEF: <a href="https://www.afyef.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.afyef.org</a>
                    {" · "}<a href="https://www.afyef.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.afyef.com</a>
                  </p>
                ) : null}
                <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {update.images.map((image) => {
                    const dimensions = getImageDimensions(image.file);
                    const imageSrc = `/endorsements-news-updates/${image.file}`;
                    return (
                      <figure
                        key={image.file}
                        className="overflow-hidden rounded-xl bg-(--brand-accent)/30"
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
                          <p className="text-sm leading-relaxed text-(--brand-text)">
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
            <h2 className="text-3xl font-bold text-(--brand-text)">
              News categories may include:
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card key={category} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <Newspaper
                    className="mb-4 h-6 w-6 text-(--brand-primary)"
                    aria-hidden="true"
                  />
                  <p className="font-semibold text-(--brand-text)">
                    {category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--brand-primary) py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Contact the Secretariat
          </h2>
          <p className="mb-8 text-white/85">
            For media enquiries, interviews or verification of project
            information, contact the Secretariat.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-(--brand-primary) hover:bg-white/90">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-(--brand-primary)"
            >
              <Link href="/events">Events &amp; Activities</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
