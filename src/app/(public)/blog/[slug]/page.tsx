import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, Clock, Handshake, MapPin } from "lucide-react";
import { articles, getArticle, articlesAuthor } from "@/config/articles";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      modifiedTime: `${article.updated}T00:00:00Z`,
      authors: [articlesAuthor],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  // Unknown slugs must 404 rather than render an in-page "not found" message,
  // otherwise the blog hands out endless soft-404s to search engines.
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  const reviewed = new Date(`${article.updated}T00:00:00Z`).toLocaleDateString(
    siteConfig.locale.language,
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    dateModified: article.updated,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--brand-primary)] py-14 text-white">
        <div className="relative mx-auto max-w-3xl px-4">
          <Button asChild variant="ghost" className="mb-6 text-white hover:bg-white/10 hover:text-white">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All insights
            </Link>
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge className="bg-white/15 text-white">{article.category}</Badge>
            <span className="flex items-center gap-1 text-sm text-white/80">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readTime}
            </span>
          </div>

          <h1 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-white/80">
            <span>{articlesAuthor}</span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              Reviewed {reviewed}
            </span>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4">
          <script
            type="application/ld+json"
            // Static, developer-authored JSON-LD derived from the article above.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />

          <article>
            {article.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.type}-${index}`}
                    className="mb-3 mt-10 text-2xl font-bold text-[var(--brand-text)]"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={`${block.type}-${index}`} className="mb-4 space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 leading-relaxed text-[var(--brand-text-light)]"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "note") {
                return (
                  <aside
                    key={`${block.type}-${index}`}
                    className="mb-4 mt-8 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5 text-sm leading-relaxed text-[var(--brand-text)]"
                  >
                    {block.text}
                  </aside>
                );
              }

              return (
                <p
                  key={`${block.type}-${index}`}
                  className="mb-4 leading-relaxed text-[var(--brand-text-light)]"
                >
                  {block.text}
                </p>
              );
            })}
          </article>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-lg bg-[var(--brand-accent)] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-[var(--brand-text)]">
                See the Centre for yourself
              </p>
              <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                Plan a visit to the Northern Star Centre, or start a
                conversation about partnership.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
              >
                <Link href="/book-appointment">
                  <MapPin className="mr-2 h-4 w-4" />
                  Plan Your Visit
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/partner">
                  <Handshake className="mr-2 h-4 w-4" />
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-[var(--brand-accent)]/40 py-14">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-[var(--brand-text)]">
              Read next
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="group">
                  <Card className="h-full border-0 bg-white shadow-sm transition-all group-hover:shadow-md">
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="mb-3">
                        {item.category}
                      </Badge>
                      <h3 className="font-semibold text-[var(--brand-text)] group-hover:text-[var(--brand-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--brand-text-light)]">
                        {item.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}