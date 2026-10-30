import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { HeroSlider } from "@/components/home/hero-slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Archive,
  BookOpen,
  Building2,
  Compass,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  MapPin,
  MonitorPlay,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `JDM-PLLC | ${siteConfig.name}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const priorities = [
  "Presidential and democratic legacy preservation.",
  "Historical archives, research and documentation.",
  "Leadership development and civic education.",
  "Youth skills, innovation and enterprise.",
  "Digital knowledge and learning.",
  "Ghanaian and African cultural heritage.",
  "Institutional partnerships and public dialogue.",
  "Sustainable institutional development.",
];

const facilities = [
  {
    icon: Landmark,
    title: "Presidential Library and Archives",
    body: "Preserving and interpreting records relating to President Mahama, presidential leadership and Ghana's democratic history.",
  },
  {
    icon: BookOpen,
    title: "Historical Research and Knowledge",
    body: "Research, scholarship and public learning on leadership, democracy, public policy and African transformation.",
  },
  {
    icon: Users,
    title: "Leadership and Civic Education",
    body: "Programmes promoting ethical leadership, responsible citizenship and public-service values.",
  },
  {
    icon: Lightbulb,
    title: "Youth Skills and Enterprise",
    body: "Connecting learning with practical opportunities for young people through skills, innovation and enterprise.",
  },
  {
    icon: MonitorPlay,
    title: "Digital and Virtual Learning",
    body: "Digitised collections, virtual exhibitions, online learning resources and remote research access.",
  },
  {
    icon: Archive,
    title: "Museum and Cultural Heritage",
    body: "Contributing to the preservation and presentation of Ghanaian, Northern Ghanaian and wider African history and culture.",
  },
  {
    icon: Building2,
    title: "Conference and Public Dialogue Facilities",
    body: "Subject to the final development plans, facilities for conferences, lectures, seminars, workshops, exhibitions and public dialogue.",
  },
  {
    icon: Users,
    title: "Family and Community History",
    body: "Where supported by credible documentation and appropriate permissions, the family, community and social influences that contributed to President Mahama's journey and public service.",
  },
];

const programmes = [
  {
    title: "African Youth Leadership and Fellowship",
    body: "A proposed platform for young people interested in leadership, public service, civic engagement, research and enterprise.",
    icon: GraduationCap,
  },
  {
    title: "Presidential Legacy and Democratic Learning",
    body: "Educational programmes designed to help students, researchers and the public engage with presidential history, constitutional governance and democratic development.",
    icon: Landmark,
  },
  {
    title: "Youth Skills and Enterprise",
    body: "Programmes intended to connect learning with practical economic opportunities.",
    icon: Lightbulb,
  },
  {
    title: "Research, Policy and Public Dialogue",
    body: "A platform for research and discussion on democratic governance, public policy, national development, youth employment, education, African integration and cultural heritage.",
    icon: Compass,
  },
  {
    title: "Northern Ghana Heritage and Knowledge",
    body: "A programme area dedicated to documenting the history, cultural traditions and knowledge systems of Northern Ghana.",
    icon: Archive,
  },
  {
    title: "Digital Knowledge and Innovation",
    body: "Programmes supporting digitisation, digital learning, technology skills, virtual exhibitions and improved access to research resources.",
    icon: MonitorPlay,
  },
  {
    title: "Scholarships and Educational Support",
    body: "Subject to funding and formal programme rules, the Centre may develop scholarships, research grants, fellowships or other educational support initiatives.",
    icon: GraduationCap,
  },
];

const principles = [
  "Document",
  "Preserve",
  "Protect",
  "Inspire",
  "Empower",
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
      <ScrollProgress />
      <Header />

      <main className="motion-page-enter flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <HeroSlider />

        {/* Introduction */}
        <section className="border-b bg-white py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                A Legacy of Leadership. A Future of Transformation.
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Preserving Legacy. Empowering the Youth.
              </h2>
              <p className="text-lg leading-relaxed text-[var(--brand-text-light)]">
                The John Dramani Mahama Presidential Library &amp; Legacy Centre
                (JDM-PLLC) is an AfYEF-led initiative to document, preserve and
                protect the legacy of President John Dramani Mahama, while
                inspiring young people and future generations through history,
                knowledge, leadership and opportunity.
              </p>
              <p className="mt-5 leading-relaxed text-[var(--brand-text-light)]">
                The Centre seeks to preserve his vision, ideas, aspirations and
                contributions to Ghana&apos;s development, recognising that some
                ambitions may extend beyond his lifetime. It will also provide a
                platform for documenting and studying the legacies of other
                leaders whose contributions have shaped Ghana and Africa.
              </p>
              <p className="mt-5 leading-relaxed text-[var(--brand-text-light)]">
                Through historical preservation, research, education, cultural
                heritage and youth development, JDM-PLLC will connect the lessons
                of leadership and public service with the aspirations of future
                generations.
              </p>
            </div>
          </div>
        </section>

        {/* Vision, mission and guiding principle */}
        <section className="bg-[var(--brand-accent)]/40 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-0 bg-white shadow-sm">
                <CardContent className="p-8">
                  <Target
                    className="mb-4 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h2 className="mb-3 text-xl font-bold text-[var(--brand-text)]">
                    Our Vision
                  </h2>
                  <p className="leading-relaxed text-[var(--brand-text-light)]">
                    To preserve the legacy of President John Dramani Mahama and
                    other leaders who have shaped Ghana and Africa, ensuring
                    that their contributions, ideas and aspirations remain a
                    source of knowledge and inspiration for future generations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-sm">
                <CardContent className="p-8">
                  <Compass
                    className="mb-4 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h2 className="mb-3 text-xl font-bold text-[var(--brand-text)]">
                    Our Mission
                  </h2>
                  <p className="leading-relaxed text-[var(--brand-text-light)]">
                    To document, preserve and protect historical legacies,
                    promote research and civic education, and inspire young
                    people to learn from the past and contribute to Ghana&apos;s
                    and Africa&apos;s future.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-sm">
                <CardContent className="p-8">
                  <Sparkles
                    className="mb-4 h-8 w-8 text-white/85"
                    aria-hidden="true"
                  />
                  <h2 className="mb-3 text-xl font-bold">
                    Our Guiding Principle
                  </h2>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                    DOCUMENT → PRESERVE → PROTECT → INSPIRE → EMPOWER
                  </p>
                  <p className="leading-relaxed text-white/85">
                    We believe that preserving a legacy means more than
                    remembering the past. It means protecting its lessons,
                    making them accessible and inspiring future generations to
                    create meaningful change.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {principles.map((principle, index) => (
                <div key={principle} className="flex items-center gap-3">
                  <span className="rounded-full border border-[var(--brand-primary)]/25 bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-primary)]">
                    {principle}
                  </span>
                  {index < principles.length - 1 ? (
                    <ArrowRight
                      className="h-4 w-4 text-[var(--brand-primary)]/60"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic priorities */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Our Strategic Priorities
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                What the Centre is built to do
              </h2>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                Eight priorities guide the Centre&apos;s planning, partnerships
                and programmes.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {priorities.map((priority) => (
                <li
                  key={priority}
                  className="flex items-start gap-3 rounded-xl border border-[var(--brand-accent)] bg-white p-5 shadow-sm"
                >
                  <Shield
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-[var(--brand-text)]">
                    {priority}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The Centre */}
        <section className="bg-[var(--brand-primary)] py-16 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                The Library &amp; Legacy Centre
              </p>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                A Living Institution for History, Knowledge and Opportunity
              </h2>
              <p className="mx-auto max-w-3xl text-white/85">
                Facilities and programmes will be implemented progressively,
                subject to planning, institutional agreements, approvals,
                funding and available resources.
              </p>
            </div>

            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-white/80">
              The Centre will include:
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {facilities.map((facility) => (
                <div
                  key={facility.title}
                  className="rounded-xl border border-white/15 bg-white/5 p-6"
                >
                  <facility.icon
                    className="mb-4 h-7 w-7 text-white/85"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold">{facility.title}</h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {facility.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
              >
                <Link prefetch={false} href="/services">
                  Explore the Centre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Programmes */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  Programmes and Signature Initiatives
                </p>
                <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                  Connecting Legacy Preservation with Opportunity
                </h2>
                <p className="leading-relaxed text-[var(--brand-text-light)]">
                  JDM-PLLC intends to develop programmes connecting legacy
                  preservation with education, research and opportunities for
                  young people.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]"
              >
                <Link prefetch={false} href="/programmes">
                  All programmes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programmes.map((programme) => (
                <Card key={programme.title} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <programme.icon
                      className="mb-4 h-7 w-7 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                      {programme.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                      {programme.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Branches */}
        <section className="bg-[var(--brand-accent)]/40 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Our Locations
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                One Vision. Four Project Locations.
              </h2>
              <p className="mx-auto max-w-3xl leading-relaxed text-[var(--brand-text-light)]">
                JDM-PLLC is pursuing a multi-location development approach
                involving Tamale, Damongo, Busunu and Bole. No location is
                designated as the principal campus.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {siteConfig.branches.map((branch) => (
                <Card key={branch.slug} className="border-0 bg-white shadow-sm">
                  <CardContent className="flex h-full flex-col p-6">
                    <MapPin
                      className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                      {branch.city}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                      {branch.name.split("—")[1]?.trim() ?? branch.name}
                    </p>
                    <Link
                      prefetch={false}
                      href={`/branches/${branch.slug}`}
                      className="mt-auto inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  Partnership and Collaboration
                </p>
                <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                  Partner institutions include:
                </h2>
                <p className="mb-6 leading-relaxed text-[var(--brand-text-light)]">
                  All partnerships will be formalised through appropriate
                  agreements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                  >
                    <Link prefetch={false} href="/partner">
                      Become a Project Partner
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]"
                  >
                    <Link prefetch={false} href="/eam-terdi">
                      EAM-TERDI
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {siteConfig.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-xl border border-[var(--brand-accent)] bg-white p-5 shadow-sm"
                  >
                    <Handshake
                      className="mb-3 h-5 w-5 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-[var(--brand-text)]">
                      {partner.name}
                    </p>
                    {partner.detail ? (
                      <p className="mt-1 text-xs text-[var(--brand-text-light)]">
                        {partner.detail}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="bg-[var(--brand-primary)] py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <Building2 className="mx-auto mb-4 h-10 w-10 text-white/85" aria-hidden="true" />
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Help preserve a legacy. Inspire future generations.
            </h2>
            <p className="mb-8 text-lg text-white/85">
              JDM-PLLC requires institutional collaboration, expertise,
              partnerships and financial support to advance its planning,
              research, archival development and educational programmes.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
              >
                <Link prefetch={false} href="/donate">
                  Support the Initiative
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
              >
                <Link prefetch={false} href="/contact">
                  Contact the Secretariat
                </Link>
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
