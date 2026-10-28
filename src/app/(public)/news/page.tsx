import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from the JDM Presidential Library & Legacy Centre",
  alternates: { canonical: "/news" },
};

const tags = ["#AfYEF", "#Ghana", "#JDM", "#MoU", "#Northern Ghana"];

const posts = [
  {
    id: 1,
    category: "Design & Planning",
    title: "JDM Presidential Library Concept Design Unveiled: A Three-Branch Institution for Ghana and Africa",
    excerpt: "AfYEF has shared the architectural and institutional concept for the JDM Presidential Library & Legacy Centre, revealing a three-branch design that integrates a presidential archive, a civic education centre, and a cultural heritage museum under one roof.",
    date: "Aug 20, 2026",
    readTime: "3 min read",
    author: "AfYEF Communications",
    tags: ["#architecture", "#concept", "#design"],
    image: "/images/airo-assets/images/pages/home/architecture-campus.jpg",
  },
  {
    id: 2,
    category: "Development",
    title: "Northern Ghana Investment Forum Highlights JDM Presidential Library as Anchor Development Project",
    excerpt: "The JDM Presidential Library & Legacy Centre has been identified as a flagship anchor project for Northern Ghana's cultural and knowledge economy, drawing attention from investors, development partners, and civic leaders at a regional investment forum.",
    date: "Aug 5, 2026",
    readTime: "3 min read",
    author: "AfYEF Communications",
    tags: ["#Northern Ghana", "#investment", "#development"],
    image: "/images/airo-assets/images/pages/home/architecture-entrance.jpg",
  },
  {
    id: 3,
    category: "Partnership",
    title: "Telecel Ghana Joins as Communications & Digital Solutions Partner for JDM Presidential Library",
    excerpt: "Telecel Ghana has confirmed its partnership with AfYEF in support of the JDM Presidential Library & Legacy Centre, providing communications infrastructure and digital solutions expertise to the initiative.",
    date: "Jul 20, 2026",
    readTime: "2 min read",
    author: "AfYEF Communications",
    tags: ["#Telecel", "#Ghana", "#digital"],
    image: "/images/airo-assets/images/pages/home/architecture-interior.jpg",
  },
  {
    id: 4,
    category: "Announcement",
    title: "AfYEF Formally Launches the JDM Presidential Library & Legacy Centre Initiative",
    excerpt: "The AfcFTA Young Entrepreneurs Federation has formally announced the establishment of the JDM Presidential Library & Legacy Centre, a landmark institution dedicated to preserving the legacy of President John Dramani Mahama and advancing civic education across Africa.",
    date: "Jul 15, 2026",
    readTime: "3 min read",
    author: "AfYEF Communications",
    tags: ["#AfYEF", "#launch", "#legacy"],
    image: "/images/airo-assets/images/pages/home/architecture-rotunda.jpg",
  },
  {
    id: 5,
    category: "Partnership",
    title: "UDS Partners AfYEF to Advance Plans for John Dramani Mahama Presidential Library and Legacy Centre",
    excerpt: "The University for Development Studies has signed a Memorandum of Understanding with the AfcFTA Young Entrepreneurs Federation to support the development of the proposed JDM Presidential Library and Legacy Centre.",
    date: "Jul 6, 2026",
    readTime: "2 min read",
    author: "Osman Najaht, UDS Media",
    tags: ["#UDS", "#AfYEF", "#MoU"],
    image: "/images/airo-assets/images/pages/home/architecture-campus.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Latest Updates"
        description="News and announcements from the JDM Presidential Library & Legacy Centre"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-[var(--brand-text)]">Filter by category</span>
            <span className="text-sm text-[var(--brand-text-light)]">|</span>
            <span className="text-sm text-[var(--brand-text-light)]">Tags:</span>
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs text-[var(--brand-primary)]">
                {tag}
              </span>
            ))}
            <span className="ml-auto text-sm text-[var(--brand-text-light)]">{posts.length} posts</span>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="border-0 shadow-sm transition-shadow hover:shadow-md overflow-hidden">
                <div className="md:flex">
                  {(post as any).image && (
                    <div className="md:w-80 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={(post as any).image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex-1">
                    <div className="mb-3">
                      <span className="rounded bg-[var(--brand-primary)]/10 px-2 py-1 text-xs font-semibold text-[var(--brand-primary)]">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-[var(--brand-text)] hover:text-[var(--brand-primary)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                      {post.excerpt}
                    </p>
                    <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-[var(--brand-text-light)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[var(--brand-primary)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Stay Connected
          </h2>
          <p className="mb-8 text-white/85">
            Get the latest news and updates about the JDM Presidential Library & Legacy Centre.
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
              <Link href="/partner">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
