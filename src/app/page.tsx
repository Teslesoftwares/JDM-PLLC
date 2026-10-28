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
  Lightbulb,
} from "lucide-react";
import { siteConfig } from "@/config/site";

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

const visionPillars = [
  {
    icon: Lightbulb,
    title: "Innovation, Policy & Public Dialogue",
  },
  {
    icon: GraduationCap,
    title: "Youth Leadership & Civic Education",
  },
  {
    icon: Users,
    title: "Community Engagement & Impact",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero — rotating highlights; first slide is the page h1 */}
        <HeroSlider />

        {/* Our Vision & Purpose — the pillars the institution is built on */}
        <section className="border-b bg-white text-[var(--brand-text)]">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Our Vision & Purpose
              </p>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--brand-text-light)]">
                The JDM-PLLC is a dynamic, living civic ecosystem integrating heritage
                preservation with leadership development, practical skills training,
                and continental dialogue — being built for Africa and the world.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-0 md:divide-x md:divide-border">
              {visionPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex w-full items-center justify-center gap-3 px-6 sm:w-auto sm:justify-start"
                >
                  <pillar.icon
                    className="h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold text-[var(--brand-text)]">
                    {pillar.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>


                {/* Partners — institutional partners and endorsing bodies */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                The Foundation of the Institution
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                A Proven Record. A Continental Vision.
              </h2>
              <p className="mx-auto max-w-3xl leading-relaxed text-[var(--brand-text-light)]">
                The JDM Presidential Library & Legacy Centre will be grounded in a documented
                legacy of transformational governance. This record is not a monument — it is
                the curriculum, the case study, and the proof of concept for everything we are
                building together.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/Images/airo-assets/images/review/ietsa-9.jpg"
                    alt="Building the Foundations of Progress - Infrastructure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      Building the Foundations of Progress
                    </p>
                    <h3 className="text-xl font-bold text-white">Infrastructure</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                    Under President Mahama&apos;s leadership, Ghana witnessed an unprecedented
                    expansion of roads, bridges, hospitals, and energy infrastructure.
                  </p>
                  <p className="mb-4 font-semibold text-[var(--brand-text)]">
                    We are building not just roads and bridges, but pathways to opportunity for
                    every Ghanaian.
                  </p>
                  <div className="rounded-lg bg-[var(--brand-accent)] p-4 text-center">
                    <div className="text-2xl font-bold text-[var(--brand-primary)]">216</div>
                    <div className="text-sm text-[var(--brand-text-light)]">major infrastructure projects completed</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/Images/airo-assets/images/review/ietsa-6.jpg"
                    alt="Investing in Ghana's Future - Education"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      Investing in Ghana&apos;s Future
                    </p>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                    The Mahama administration expanded access to quality education through new
                    schools, free school feeding programs, and increased investment in tertiary
                    institutions.
                  </p>
                  <p className="mb-4 font-semibold text-[var(--brand-text)]">
                    Education is the great equalizer. Every child in Ghana deserves the chance to
                    learn and to lead.
                  </p>
                  <div className="rounded-lg bg-[var(--brand-accent)] p-4 text-center">
                    <div className="text-2xl font-bold text-[var(--brand-primary)]">2.4 million</div>
                    <div className="text-sm text-[var(--brand-text-light)]">students reached through education programs</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/Images/airo-assets/images/review/ietsa-2.jpg"
                    alt="Strengthening Democratic Institutions - Democracy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      Strengthening Democratic Institutions
                    </p>
                    <h3 className="text-xl font-bold text-white">Democracy</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                    President Mahama&apos;s tenure was marked by a steadfast commitment to
                    democratic governance, press freedom, and the peaceful transfer of power.
                  </p>
                  <p className="mb-4 font-semibold text-[var(--brand-text)]">
                    Democracy is not just a system of government. It is a covenant between
                    leaders and the people they serve.
                  </p>
                  <div className="rounded-lg bg-[var(--brand-accent)] p-4 text-center">
                    <div className="text-lg font-bold text-[var(--brand-primary)]">
                      Ghana ranked among Africa&apos;s top 3 democracies
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section className="bg-[var(--brand-primary)] py-12 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">2021</div>
                <div className="text-base font-semibold">Vision Established</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">3</div>
                <div className="text-base font-semibold">Integrated Branches</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">2031</div>
                <div className="text-base font-semibold">Decade Delivered</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">1B+</div>
                <div className="text-base font-semibold">Lives Impacted</div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg lg:h-[500px]">
                  <Image
                    src="/Images/airo-assets/images/pages/home/president-mahama-family.jpg"
                    alt="President John Dramani Mahama and First Lady Lordina Mahama"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  President John Dramani Mahama & First Lady Lordina Mahama
                </p>
                <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                  President John Dramani Mahama & First Lady Lordina Mahama
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-[var(--brand-text-light)]">
                  The JDM Presidential Library & Legacy Centre will honour a legacy of family,
                  service, and vision — help us build it
                </p>
                <blockquote className="mb-8 border-l-4 border-[var(--brand-primary)] pl-6">
                  <p className="mb-4 italic leading-relaxed text-[var(--brand-text)]">
                    &ldquo;The JDM Presidential Library & Legacy Centre is not being built merely to
                    remember the past. It is being built to shape the future — and we need partners
                    who share that conviction.&rdquo;
                  </p>
                  <cite className="text-sm font-semibold text-[var(--brand-text-light)] not-italic">
                    — JDM-PLLC Founding Charter
                  </cite>
                </blockquote>
                <div className="mb-6">
                  <h3 className="mb-3 text-xl font-bold text-[var(--brand-text)]">Our Mission</h3>
                  <p className="mb-4 text-lg font-semibold text-[var(--brand-primary)]">
                    A Living Institution for Africa and the World In the Making
                  </p>
                  <p className="mb-6 leading-relaxed text-[var(--brand-text-light)]">
                    To preserve Africa&apos;s heritage, codify the lessons of transformational
                    leadership, strengthen Indigenous Knowledge Systems, advance research and
                    innovation for public good, and cultivate a new generation of ethical,
                    competent, and visionary leaders for Africa and the world.
                  </p>
                  <Button
                    asChild
                    className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                  >
                    <Link href="/about">
                      Learn About the Centre
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                What We Do
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                The PEECS Framework
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <Card className="border-0 bg-[var(--brand-accent)] shadow-sm">
                <CardContent className="p-5 text-center">
                  <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xl font-bold text-white">
                    P
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--brand-text)]">Preserve</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Democratic, cultural, intellectual, and historical heritage.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)] shadow-sm">
                <CardContent className="p-5 text-center">
                  <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xl font-bold text-white">
                    E
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--brand-text)]">Empower</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Youth, women, and communities through leadership and skills development.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)] shadow-sm">
                <CardContent className="p-5 text-center">
                  <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xl font-bold text-white">
                    E
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--brand-text)]">Educate</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Through fellowships, case studies, research, and lifelong learning.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)] shadow-sm">
                <CardContent className="p-5 text-center">
                  <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xl font-bold text-white">
                    C
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--brand-text)]">Celebrate</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    African excellence, innovation, service, and achievement.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)] shadow-sm">
                <CardContent className="p-5 text-center">
                  <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xl font-bold text-white">
                    S
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--brand-text)]">Sustain</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Long-term institutional resilience and economic transformation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visit Centre Video */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Discover the Centre
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                A Glimpse of the JDM Presidential Library & Legacy Centre
              </h2>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <video
                src="/videos/visit-centre.mp4"
                controls
                className="w-full h-auto"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
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

        {/* Credibility & Endorsement */}
        <section className="py-20 bg-[var(--brand-accent)]/40">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Credibility & Endorsement
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Trusted by Leaders. Backed by Vision.
              </h2>
              <p className="mx-auto max-w-3xl text-[var(--brand-text-light)]">
                The JDM Presidential Library & Legacy Centre carries the personal endorsement of
                President Mahama and is being built in partnership with institutions, governments,
                and visionary individuals across Africa and the diaspora.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                    <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src="/Images/airo-assets/images/people/president-mahama-portrait.jpg"
                        alt="H.E. John Dramani Mahama"
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="mb-6">
                        <p className="text-lg leading-relaxed text-[var(--brand-text)] italic">
                          &ldquo;This centre will stand as a testament to what servant leadership can
                          achieve — and as a school for the leaders Africa needs next.&rdquo;
                        </p>
                      </blockquote>
                      <div className="mb-2">
                        <div className="text-lg font-bold text-[var(--brand-text)]">
                          H.E. John Dramani Mahama
                        </div>
                        <div className="text-sm text-[var(--brand-text-light)]">
                          President of the Republic of Ghana · Patron, JDM-PLLC
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-[var(--brand-text-light)]">
                        H.E. John Dramani Mahama — Patron, JDM Presidential Library & Legacy Centre
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
                    {"detail" in partner && partner.detail ? (
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

        {/* Where we are */}
        <section className="bg-[var(--brand-accent)]/60 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                JDM PLLC
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                A Journey Through Mind, Soul & Heart
              </h2>
              <p className="mx-auto max-w-2xl text-[var(--brand-text-light)]">
                Three integrated branches across Northern Ghana — conceived as a fully self-sustaining
                institution by 2031. Your partnership makes it real.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/Images/airo-assets/images/review/ietsa-7.jpg"
                    alt="The Mind"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      The Mind — Academic & Leadership Development Wing
                    </p>
                    <h3 className="text-xl font-bold text-white">The Mind</h3>
                    <p className="text-sm text-white/90">Tamale (GHANASCO)</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                    The Mind — Academic & Leadership Development Wing
                  </p>
                  <p className="mb-1 text-sm text-[var(--brand-text-light)]">Tamale (GHANASCO)</p>
                  <p className="mb-4 text-sm font-semibold text-[var(--brand-text)]">
                    Academic & Leadership Development Wing
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    The engine of analysis, innovation, and leadership development.
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                    <li>◆ Leadership Laboratory</li>
                    <li>◆ Pan-African Fellowships</li>
                    <li>◆ University Partnerships</li>
                    <li>◆ Public Policy Dialogues</li>
                    <li>◆ Leadership Research</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/Images/airo-assets/images/review/ietsa-6.jpg"
                    alt="The Soul"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      The Soul — Mama Habiba Wing
                    </p>
                    <h3 className="text-xl font-bold text-white">The Soul</h3>
                    <p className="text-sm text-white/90">Busunu</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                    The Soul — Mama Habiba Wing
                  </p>
                  <p className="mb-1 text-sm text-[var(--brand-text-light)]">Busunu</p>
                  <p className="mb-4 text-sm font-semibold text-[var(--brand-text)]">
                    Mama Habiba Wing for Character & Ethical Formation
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    A sanctuary dedicated to the moral foundations of leadership.
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                    <li>◆ Character Formation</li>
                    <li>◆ Integrity and Values</li>
                    <li>◆ Family & Community Leadership</li>
                    <li>◆ Intergenerational Dialogue</li>
                    <li>◆ Youth Retreats</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/Images/airo-assets/images/review/ietsa-8.jpg"
                    alt="The Heart"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      The Heart — Global Headquarters
                    </p>
                    <h3 className="text-xl font-bold text-white">The Heart</h3>
                    <p className="text-sm text-white/90">Bole</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                    The Heart — Global Headquarters
                  </p>
                  <p className="mb-1 text-sm text-[var(--brand-text-light)]">Bole</p>
                  <p className="mb-4 text-sm font-semibold text-[var(--brand-text)]">
                    Global Headquarters & Living Heritage Hub
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    The historical and emotional core of the institution.
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                    <li>◆ Presidential Library & Museum</li>
                    <li>◆ JDM Hall of Fame</li>
                    <li>◆ Conference Centre</li>
                    <li>◆ National Knowledge Centre</li>
                    <li>◆ Heritage Tourism Facilities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Inviting Founding Partners */}
        <section className="bg-[var(--brand-primary)] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                JDM PLLC
              </p>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Inviting Founding Partners
              </h2>
              <p className="mx-auto max-w-2xl text-white/90">
                Governments & Multilaterals, Corporations & Foundations, Universities & Research Bodies,
                and Diaspora & Philanthropists — together we build a generational institution.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 bg-white text-[var(--brand-text)] shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">Governments & Multilaterals</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    African Union member states, development banks, and multilateral institutions invited as founding sovereign partners.
                  </p>
                  <Button asChild className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                    <Link href="/partner">Express Interest</Link>
                  </Button>
                  <p className="mt-3 text-center text-xs text-[var(--brand-text-light)]">Partnership Window Open</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white text-[var(--brand-text)] shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">Corporations & Foundations</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Pan-African and international corporations seeking legacy CSR investment with naming rights and board representation.
                  </p>
                  <Button asChild className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                    <Link href="/partner">Express Interest</Link>
                  </Button>
                  <p className="mt-3 text-center text-xs text-[var(--brand-text-light)]">MoU Discussions Active</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white text-[var(--brand-text)] shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">Universities & Research Bodies</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Academic institutions invited to co-design the research agenda, curriculum, and fellowship programmes.
                  </p>
                  <Button asChild className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                    <Link href="/partner">Express Interest</Link>
                  </Button>
                  <p className="mt-3 text-center text-xs text-[var(--brand-text-light)]">Open to All Contributions</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white text-[var(--brand-text)] shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">Diaspora & Philanthropists</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Individual visionaries and diaspora communities who believe in the power of preserved legacy to shape the future.
                  </p>
                  <Button asChild className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                    <Link href="/partner">Express Interest</Link>
                  </Button>
                  <p className="mt-3 text-center text-xs text-[var(--brand-text-light)]">2026 Year of First Light</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">2026</div>
                <div className="text-sm font-semibold">Year of First Light</div>
                <div className="text-xs text-white/80">Partnership window open now</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">AU</div>
                <div className="text-sm font-semibold">Pan-African Scope</div>
                <div className="text-xs text-white/80">Aligned with Agenda 2063</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">5</div>
                <div className="text-sm font-semibold">Programme Branches</div>
                <div className="text-xs text-white/80">Fully integrated ecosystem</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold">∞</div>
                <div className="text-sm font-semibold">Generational Impact</div>
                <div className="text-xs text-white/80">Built to outlast its founders</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 The Year of First Light */}
        <section className="bg-[var(--brand-accent)] py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                2026
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                The Year of First Light — Partnership Window Now Open
              </h2>
              <p className="mx-auto max-w-2xl text-[var(--brand-text-light)]">
                Concept approved. Presidential endorsement granted. Vision codified. Founding partners are
                being onboarded now — before a single brick is laid.
              </p>
              <div className="mt-6">
                <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                  <Link href="/partner">Join as a Founding Partner</Link>
                </Button>
              </div>
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-2">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="mb-3 text-xl font-bold text-[var(--brand-text)]">Strategic Partnership & Investment</h3>
                  <h4 className="mb-4 text-lg font-semibold text-[var(--brand-primary)]">Illuminate the Constellation</h4>
                  <p className="mb-4 leading-relaxed text-[var(--brand-text-light)]">
                    We are building Africa&apos;s foremost leadership institution. We are looking for partners who
                    want to build it with us.
                  </p>
                  <p className="mb-6 leading-relaxed text-[var(--brand-text-light)]">
                    The JDM Presidential Library & Legacy Centre is not built by one person. It is illuminated by
                    a constellation. We invite visionary partners — universities, foundations, governments,
                    corporations, philanthropists, and diaspora communities — to co-invest in an institution
                    that will serve Africa for generations.
                  </p>
                  <h5 className="mb-3 font-semibold text-[var(--brand-text)]">Long-term sustainability through three revenue streams:</h5>
                  <div className="mb-6 space-y-3">
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Earned Income</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Heritage Tourism · Legacy Presidential Hotel · Conference Services · Executive Education · Consultancy
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Philanthropic Capital</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Endowment Fund · Naming Rights · Fellowship Sponsorships · Friends of JDM PLLC
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Strategic Partnerships</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Research Chairs · Fellowship Endowments · Joint Programmes · University Partnerships
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                      <Link href="/partner">Explore Partnership Opportunities</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]">
                      <Link href="/share">Share This</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-bold text-[var(--brand-text)]">We invite the following partners to join the constellation:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Universities & Research Institutions</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Curriculum co-design, faculty exchanges, joint research chairs, and governance studies.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Foundations & Philanthropists</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Endowment fund, naming rights, fellowship sponsorships, and the Friends of the JDM PLLC Network.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Development Partners & Governments</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Infrastructure co-investment, programme funding, and strategic institutional endorsements.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Corporations & Private Sector</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Executive education, conference services, heritage tourism, and the Legacy Presidential Hotel.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Diaspora Communities</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Cultural connection, knowledge transfer, and investment in the continent&apos;s leadership future.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-text)]">Traditional Authorities</p>
                      <p className="text-sm text-[var(--brand-text-light)]">
                        Partnership in heritage stewardship, Indigenous Knowledge Systems, and cultural dialogue.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg bg-[var(--brand-accent)] p-4">
                    <p className="mb-3 font-semibold text-[var(--brand-text)]">Ready to illuminate the constellation?</p>
                    <p className="mb-4 text-sm text-[var(--brand-text-light)]">
                      Contact our Secretariat to discuss partnership and investment opportunities. Founding partner
                      positions are limited.
                    </p>
                    <Button asChild className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visit & Engage */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Visit & Engage
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Visit the Centre
              </h2>
              <p className="mx-auto max-w-2xl text-[var(--brand-text-light)]">
                Whether you are a researcher, a prospective partner, a student, or a future visitor — the JDM
                Presidential Library & Legacy Centre is being built for you. Our Secretariat is open to all
                enquiries, from investment discussions to research collaboration and programme partnerships.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-[var(--brand-text)]">Location</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    26 Atomic Hills Estates Street, Dome-Kwabenya, East Legon, Accra, Ghana
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-[var(--brand-text)]">Visiting Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--brand-text-light)]">Monday – Friday</span>
                      <span className="font-medium text-[var(--brand-text)]">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--brand-text-light)]">Saturday</span>
                      <span className="font-medium text-[var(--brand-text)]">10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--brand-text-light)]">Sunday & Public Holidays</span>
                      <span className="font-medium text-[var(--brand-text)]">Closed</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[var(--brand-text-light)]">
                    Admission is free for all Ghanaian citizens. International visitors: GHS 50.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold text-[var(--brand-text)]">Get in Touch</h3>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                      <Link href="/contact">Contact the Secretariat</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]">
                      <Link href="/partner">Partner With Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--brand-primary)] py-20 text-white">
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
                className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
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
