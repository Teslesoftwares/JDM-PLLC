import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { HeroSlider } from "@/components/home/hero-slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Users,
  MapPin,
  Star,
  ArrowRight,
  Archive,
  Sprout,
  GraduationCap,
  Award,
  Leaf,
  Landmark,
  Scale,
  Globe,
  BookOpen,
  Eye,
  ChevronRight,
  Phone,
  Quote,
} from "lucide-react";
import { siteConfig, isPending } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | The Northern Star Centre`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

/** Icon per programme slug, so the grid stays visual without extra config noise. */
const SERVICE_ICONS: Record<string, typeof Heart> = {
  "leadership-laboratory": GraduationCap,
  "pan-african-fellowships": Users,
  "indigenous-knowledge": Sprout,
  "library-museum": Landmark,
  "hall-of-fame": Award,
  "digital-archive": Archive,
};

const foundingDecade = [
  {
    title: "2021 — The Vision Emerges",
    body: "A bold idea was conceived: to transform presidential legacy into leadership capital for future generations, rooted in Northern Ghana and serving the continent.",
  },
  {
    title: "2021–2025 — Foundations Secured",
    body: "Land acquisition completed, institutional endorsements secured, and conceptual, architectural and programmatic frameworks refined.",
  },
  {
    title: "2026 — The Inflection Point",
    body: "While physical construction is mobilized, we launch the soft infrastructure — programmes, partnerships, fellowships, archives and digital platforms.",
  },
  {
    title: "2031 — The Decade Delivered",
    body: "A fully operational, self-sustaining institution connecting three integrated branches: Mind (Tamale), Soul (Busunu) and Heart (Bole).",
  },
];

const firewallCharter = [
  {
    icon: Scale,
    title: "Non-Partisan Integrity",
    body: "Serving all Ghanaians and all Africans, regardless of political affiliation.",
  },
  {
    icon: Shield,
    title: "Independent Trusteeship",
    body: "Governed by an independent board of trustees with no political mandate.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    body: "Full public accountability for all finances, programmes and decisions.",
  },
  {
    icon: Archive,
    title: "Perpetual Mission Protection",
    body: "Constitutional safeguards ensuring the mission cannot be altered or captured.",
  },
];

const peecsPillars = [
  {
    icon: Archive,
    title: "Preserve",
  },
  {
    icon: Sprout,
    title: "Empower",
  },
  {
    icon: GraduationCap,
    title: "Educate",
  },
  {
    icon: Award,
    title: "Celebrate",
  },
  {
    icon: Leaf,
    title: "Sustain",
  },
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Library",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.countryCode,
      streetAddress: siteConfig.contact.address,
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <script
          type="application/ld+json"
          // Static, developer-authored JSON-LD; no user input reaches this value.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero — rotating highlights; first slide is the page h1 */}
        <HeroSlider />

        {/* Our Vision & Purpose — the pillars the institution is built on */}
        <section className="border-b bg-white text-[var(--brand-text)]">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-0 md:divide-x md:divide-border">
              {peecsPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex w-full items-center justify-center gap-2 px-4 sm:w-auto sm:justify-start"
                >
                  <pillar.icon
                    className="h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-semibold whitespace-pre-line text-[var(--brand-text)]">
                    {pillar.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  Where Legacy Becomes Leadership
                </p>
                <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                  A continental institution rooted in Northern Ghana
                </h2>
                <p className="mb-6 leading-relaxed text-[var(--brand-text-light)]">
                  {siteConfig.formalName} is a continental institution for
                  leadership, heritage, research and human dignity — rooted in
                  Northern Ghana and serving Africa and the world. We preserve
                  Africa&rsquo;s heritage, codify the lessons of transformational
                  leadership, and cultivate a new generation of ethical,
                  competent and visionary leaders.
                </p>
                <p className="mb-8 leading-relaxed text-[var(--brand-text-light)]">
                  Not merely to remember the past — but to shape the future.
                  Africa&rsquo;s transformation is a multi-generational project,
                  and every African carries a Northern Star within them.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]"
                >
                  <Link href="/about">
                    Learn more about the Centre
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-0 bg-[var(--brand-accent)]">
                  <CardContent className="p-6">
                    <GraduationCap className="mb-3 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                    <h3 className="font-semibold text-[var(--brand-text)]">
                      Ethical leadership
                    </h3>
                    <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                      The Leadership Laboratory trains future leaders through
                      immersive, trans-partisan case studies.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-[var(--brand-accent)]">
                  <CardContent className="p-6">
                    <Landmark className="mb-3 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                    <h3 className="font-semibold text-[var(--brand-text)]">
                      Living heritage
                    </h3>
                    <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                      A Presidential Library, Museum and Hall of Fame preserving
                      the stories of those who changed lives.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-[var(--brand-accent)]">
                  <CardContent className="p-6">
                    <BookOpen className="mb-3 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                    <h3 className="font-semibold text-[var(--brand-text)]">
                      Research &amp; knowledge
                    </h3>
                    <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                      Indigenous Knowledge Systems, governance research and a
                      virtual library open to the world.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-[var(--brand-accent)]">
                  <CardContent className="p-6">
                    <Globe className="mb-3 h-8 w-8 text-[var(--brand-primary)]" aria-hidden="true" />
                    <h3 className="font-semibold text-[var(--brand-text)]">
                      Africa-facing
                    </h3>
                    <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                      Home to the world&rsquo;s youngest population — a platform
                      for Pan-African development studied in real time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Programmes */}
        <section className="bg-[var(--brand-accent)]/40 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Programmes &amp; Facilities
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                What the Centre offers
              </h2>
              <p className="mx-auto max-w-2xl text-[var(--brand-text-light)]">
                From the Leadership Laboratory to the Virtual Northern Star
                Library, every programme serves the same purpose: preserving
                memory, transmitting wisdom and preparing future leaders.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {siteConfig.services.map((service) => {
                const Icon = SERVICE_ICONS[service.slug] ?? Heart;
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                    <Card className="h-full border-0 shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <Icon
                            className="h-10 w-10 text-[var(--brand-primary)]"
                            aria-hidden="true"
                          />
                          {isPending(service.status) ? (
                            <span className="rounded-full bg-[var(--brand-accent)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--brand-primary)]">
                              Confirm on enquiry
                            </span>
                          ) : null}
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                          {service.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founding decade */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Founding Decade · 2021–2031
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                From vision to continental institution
              </h2>
              <p className="mx-auto max-w-2xl text-[var(--brand-text-light)]">
                The Mahama story is the first light we map. Our mission is to
                illuminate the entire constellation.
              </p>
            </div>

            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {foundingDecade.map((step, index) => (
                <li
                  key={step.title}
                  className="flex h-full flex-col rounded-lg border bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-primary)] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-1 font-semibold text-[var(--brand-text)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Governance — the Firewall Charter */}
        <section className="bg-[var(--brand-primary)] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/70">
                Governance — The Firewall Charter
              </p>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                An institution forever larger than any individual
              </h2>
              <p className="text-white/80">
                Our independence is protected by four inviolable principles that
                ensure the institution remains forever larger than any
                individual, political party, government or administration.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {firewallCharter.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg bg-white/10 p-6 ring-1 ring-white/15"
                >
                  <item.icon className="mb-3 h-6 w-6 text-white" aria-hidden="true" />
                  <h3 className="mb-1 font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/80">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
              >
                <Link href="/partner">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials — only rendered once consented testimonials are published */}
        {siteConfig.testimonials.length > 0 ? (
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4">
              <div className="mb-12 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  Testimonials
                </p>
                <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                  What our partners say
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {siteConfig.testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-4 flex gap-1" aria-label="Five star review">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[var(--brand-primary)] text-[var(--brand-primary)]"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <Quote
                        className="mb-2 h-5 w-5 text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                      <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div>
                        <p className="font-semibold text-[var(--brand-text)]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[var(--brand-text-light)]">
                          {testimonial.service}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Partners — institutional partners and endorsing bodies */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Institutional partners &amp; endorsing bodies
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Standing with the Northern Star
              </h2>
              <p className="mx-auto max-w-2xl text-[var(--brand-text-light)]">
                Universities, cultural institutions and public bodies whose
                endorsement and collaboration anchor the Centre&rsquo;s founding
                decade.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {siteConfig.partners.map((partner) => (
                <li
                  key={partner.name}
                  className="flex flex-col items-center justify-center gap-4 rounded-xl border-0 bg-white p-6 text-center shadow-sm"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={120}
                    className="h-16 w-auto object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[var(--brand-text)]">
                      {partner.name}
                    </p>
                    {partner.detail ? (
                      <p className="mt-1 text-xs text-[var(--brand-text-light)]">
                        {partner.detail}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <p className="mb-4 text-[var(--brand-text-light)]">
                Inviting founding partners across every sector and continent.
              </p>
              <Button
                asChild
                className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
              >
                <Link href="/partner">
                  Join as a Founding Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-[var(--brand-accent)]/60 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Where we are
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Three branches. One constellation.
              </h2>
              <p className="mx-auto max-w-2xl text-[var(--brand-text-light)]">
                Mind in Tamale, Soul in Busunu and Heart in Bole — an institution
                built to last for generations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {siteConfig.branches.map((branch) => (
                <Card key={branch.slug} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <MapPin
                      className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                      {branch.name}
                    </h3>
                    <p className="mb-1 text-sm text-[var(--brand-text-light)]">
                      {branch.address}, {branch.city}
                    </p>
                    <p className="mb-1 text-sm text-[var(--brand-text-light)]">
                      {branch.region} Region, {branch.country}
                    </p>
                    <p className="text-sm text-[var(--brand-text-light)]">
                      {branch.phone}
                    </p>
                    <p className="mt-3 text-sm text-[var(--brand-text-light)]">
                        Centre visiting hours: {siteConfig.openingHours.summary}
                    </p>
                    <Button asChild variant="link" className="mt-4 p-0 text-[var(--brand-primary)]">
                      <Link href={`/branches/${branch.slug}`}>
                        View branch details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-md">
                <CardContent className="p-6">
                  <Phone className="mb-3 h-8 w-8" aria-hidden="true" />
                  <h3 className="mb-2 text-lg font-semibold">Prefer to call?</h3>
                  <p className="mb-4 text-sm text-white/85">
                    Speak to us about visits, research access, partnerships or
                    anything you need before you come.
                  </p>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex items-center gap-2 font-semibold underline underline-offset-4"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--brand-text)] py-20 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Join the constellation
            </h2>
            <p className="mb-8 text-lg text-white/80">
              This is an invitation, not a conclusion. The Northern Star Centre
              belongs to Africa — and to the world.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-light)]"
              >
                <Link href="/contact">
                  Contact the Centre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-text)]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
