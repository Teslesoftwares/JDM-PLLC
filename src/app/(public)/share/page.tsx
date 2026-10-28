import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Forward,
  Globe,
  Mail,
  Phone,
  Quote,
  Share2,
  Star,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Share the vision",
  description: `Help spread the word about ${siteConfig.formalName} — an invitation, not a conclusion. Share the key facts and forward the vision to someone who should know about it.`,
  alternates: { canonical: "/share" },
};

const keyMessages = [
  {
    stat: siteConfig.tagline,
    title: "The founding promise",
    body: "A continental institution for leadership, heritage, research and human dignity — rooted in Northern Ghana and serving Africa and the world.",
  },
  {
    stat: "2021",
    title: "Vision Established",
    body: "The idea of transforming presidential legacy into leadership capital for future generations was conceived.",
  },
  {
    stat: "3",
    title: "Integrated Branches",
    body: "Mind in Tamale, Soul in Busunu and Heart in Bole — three branches, one constellation.",
  },
  {
    stat: "2031",
    title: "Decade Delivered",
    body: "A fully operational, self-sustaining institution connecting all three branches by the end of the founding decade.",
  },
  {
    stat: "1B+",
    title: "Africans to Serve",
    body: "Africa and the global African family — the scale of the community this institution is built to serve.",
  },
];

const waysToShare = [
  {
    icon: Users,
    title: "Tell someone",
    body: "The simplest way to share the vision: tell a colleague, a student, a traditional authority or a family member about the Centre and what it is being built to become.",
    href: null,
    linkLabel: null,
  },
  {
    icon: Forward,
    title: "Forward the website",
    body: "Send www.jdmpllc.org to anyone who should know about the Centre — a one-link introduction to the vision, the branches and the founding decade.",
    href: siteConfig.website,
    linkLabel: siteConfig.website.replace(/^https?:\/\//, ""),
  },
  {
    icon: Mail,
    title: "Email us",
    body: "Questions, introduction requests and partnership conversations are all welcome by email.",
    href: `mailto:${siteConfig.contact.email}`,
    linkLabel: siteConfig.contact.email,
  },
  {
    icon: Phone,
    title: "Call us",
    body: `Speak to the Centre directly on ${siteConfig.contact.phone}. Visiting hours: ${siteConfig.openingHours.summary}.`,
    href: siteConfig.contact.phoneHref,
    linkLabel: siteConfig.contact.phone,
  },
];

/** Only verified social profiles are listed; empty config entries render nothing. */
const socialLinks = [
  { label: "Facebook", href: siteConfig.links.facebook },
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "X", href: siteConfig.links.x },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
].filter((link) => link.href.length > 0);

export default function SharePage() {
  return (
    <>
      <PageHero
        eyebrow="Spread the word"
        title="Share the vision"
        description="This is an invitation, not a conclusion. Help the Northern Star Centre reach the people — across Africa and the world — who belong in the constellation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Share" }]}
        actions={
          <Button
            asChild
            size="lg"
            className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
          >
            <Link href="/contact">
              Contact the Centre
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Invitation prose */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                This is an invitation, not a conclusion
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                In every generation, a few illuminate the path
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
              <p>
                The Northern Star Centre is not being built merely to remember
                the past. It is being built to shape the future.
              </p>
              <p>
                In every generation, a few individuals illuminate the path for
                others. We call them Northern Stars. This institution exists to
                preserve their stories, study their leadership, and prepare
                those who will follow.
              </p>
              <p>
                Every African carries a Northern Star within them. Sharing the
                vision is how the first light reaches them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key messages / fact sheet */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Key messages
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The facts, in one place
            </h2>
            <p className="text-[var(--brand-text-light)]">
              A short fact sheet you can use when telling others about the
              Centre — every figure comes straight from the institutional
              prospectus.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyMessages.map((item) => (
              <Card key={item.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="mb-2 text-3xl font-bold text-[var(--brand-primary)]">
                    {item.stat}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-md">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div>
                  <Star
                    className="mb-3 h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold">
                    The Northern Star shall rise
                  </h3>
                  <p className="text-sm leading-relaxed text-white/85">
                    The constellation begins now — and it grows every time the
                    vision is shared.
                  </p>
                </div>
                <Button
                  asChild
                  variant="link"
                  className="mt-4 p-0 text-white hover:text-white/85"
                >
                  <Link href="/about">
                    Learn more about the Centre
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to share */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Ways to share
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Four simple ways to carry the light
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {waysToShare.map((way) => (
              <Card key={way.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <way.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {way.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {way.body}
                  </p>
                  {way.href && way.linkLabel ? (
                    <a
                      href={way.href}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                    >
                      {way.linkLabel}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social profiles — only rendered once the Centre has supplied verified links */}
          <div className="mt-10 rounded-xl bg-[var(--brand-accent)]/60 p-6">
            <div className="flex items-start gap-4">
              <Share2
                className="mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-[var(--brand-text)]">
                  Follow and share online
                </h3>
                {socialLinks.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-primary)] shadow-sm hover:bg-[var(--brand-accent)]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Official social media profiles will be published here once
                    they have been verified by the Centre. Until then, the
                    surest ways to share are this website (
                    <a
                      href={siteConfig.website}
                      className="font-semibold text-[var(--brand-primary)] hover:underline"
                    >
                      {siteConfig.website.replace(/^https?:\/\//, "")}
                    </a>
                    ), email and telephone.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-[var(--brand-text)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Quote
            className="mx-auto mb-6 h-10 w-10 text-white/60"
            aria-hidden="true"
          />
          <p className="text-2xl font-bold leading-snug sm:text-3xl">
            The Northern Star shall rise. The constellation begins now.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Keep the conversation going
          </h2>
          <p className="mb-8 text-white/85">
            Questions about the Centre, or want to introduce someone to the
            vision? Reach us on {siteConfig.contact.phone} or at{" "}
            {siteConfig.contact.email}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/donate">Support the Centre</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
