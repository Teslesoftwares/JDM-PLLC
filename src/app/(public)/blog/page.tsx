import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { articles, articlesAuthor } from "@/config/articles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Insights",
  description: `Research and perspectives from the ${siteConfig.name} research team: leadership, heritage, Indigenous Knowledge Systems and the programmes of the Northern Star Centre.`,
  alternates: { canonical: "/blog" },
};

/** Renders an ISO date as e.g. "28 September 2026" in the Centre's locale. */
function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(siteConfig.locale.language, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Leadership, heritage and research, explained"
        description={`Research-backed articles from the ${siteConfig.name} research team on the vision, frameworks and programmes of the Northern Star Centre — drawn from the Centre's institutional prospectus.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="flex h-full flex-col border-0 shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-[var(--brand-text-light)]">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="mb-3 text-lg font-semibold text-[var(--brand-text)] transition-colors group-hover:text-[var(--brand-primary)]">
                      {post.title}
                    </h2>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--brand-text-light)]">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--brand-text-light)]">
                      <span>{articlesAuthor}</span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" aria-hidden="true" />
                        Reviewed {formatDate(post.updated)}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:underline">
                      Read the article
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}