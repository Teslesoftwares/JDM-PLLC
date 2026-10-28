import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Globe,
  Compass,
  Star,
  MapPin,
  Users,
  BookOpen,
  Landmark,
  Lightbulb,
  Shield,
  Heart,
  Sprout,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About the Northern Star Centre",
  description: "Global Institution Rooted in Africa — The John Dramani Mahama Presidential Library & Legacy Centre, operating as The Northern Star Centre.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Star,
    title: "Our Vision",
    body: "To become Africa's foremost institution for ethical leadership, living heritage, Indigenous Knowledge Systems, democratic resilience, and transformative learning — illuminating pathways for generations to come.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    body: "To preserve Africa's heritage, codify the lessons of transformational leadership, strengthen Indigenous Knowledge Systems, advance research and innovation for public good, and cultivate a new generation of ethical, competent, and visionary leaders for Africa and the world.",
  },
];

const riseFramework = [
  {
    letter: "R",
    title: "Resilience",
    subtitle: "Turning Threat Zones into Trade Zones",
    body: "We believe leadership is forged in adversity. We empower youth to convert vulnerability into opportunity — reframing historic challenges as foundations for sustainable trade, peace, productivity, and regional stability.",
    icon: Shield,
  },
  {
    letter: "I",
    title: "Integrity",
    subtitle: "The Bedrock of Legacy",
    body: "Inspired by the public service record of H.E. John Dramani Mahama, we uphold the highest standards of ethics, transparency, and accountability. True leadership is defined not by power, but by character.",
    icon: Star,
  },
  {
    letter: "S",
    title: "Stewardship",
    subtitle: "Preserving the Past. Protecting the Future.",
    body: "We are custodians of African memory, democratic values, and shared resources. Stewardship means managing heritage, institutions, and the environment with responsibility to future generations.",
    icon: BookOpen,
  },
  {
    letter: "E",
    title: "Empowerment",
    subtitle: "Innovation and Inclusion from the Savannah to the Sea",
    body: "We deliver 360-degree development — from digital literacy and enterprise readiness to leadership formation — ensuring no youth is left behind and every young African can compete, collaborate, and lead globally.",
    icon: Sprout,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About the Northern Star Centre"
        description="Global Institution Rooted in Africa — The John Dramani Mahama Presidential Library & Legacy Centre, operating as The Northern Star Centre."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/partner">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Who we are */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Global Institution Rooted in Africa
            </p>
            <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The John Dramani Mahama Presidential Library & Legacy Centre
            </h2>
            <p className="mx-auto max-w-3xl leading-relaxed text-[var(--brand-text-light)]">
              Operating as The Northern Star Centre — Africa&apos;s foremost institution for ethical leadership,
              living heritage, Indigenous Knowledge Systems, democratic resilience, and transformative learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card className="border-0 bg-[var(--brand-accent)] text-center">
              <CardContent className="p-6">
                <Star className="mb-3 h-8 w-8 text-[var(--brand-primary)] mx-auto" aria-hidden="true" />
                <h3 className="font-semibold text-[var(--brand-text)] mb-2">Motto</h3>
                <p className="text-[var(--brand-text-light)]">The Northern Star Shall Rise</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[var(--brand-accent)] text-center">
              <CardContent className="p-6">
                <Heart className="mb-3 h-8 w-8 text-[var(--brand-primary)] mx-auto" aria-hidden="true" />
                <h3 className="font-semibold text-[var(--brand-text)] mb-2">Philosophy</h3>
                <p className="text-[var(--brand-text-light)]">Preserving Legacy. Building Futures.</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[var(--brand-accent)] text-center">
              <CardContent className="p-6">
                <Compass className="mb-3 h-8 w-8 text-[var(--brand-primary)] mx-auto" aria-hidden="true" />
                <h3 className="font-semibold text-[var(--brand-text)] mb-2">Guiding Call</h3>
                <p className="text-[var(--brand-text-light)]">Navigate by Principle. Illuminate by Example. Transform by Action.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Vision & Mission
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              What we are built to become
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <pillar.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {pillar.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - RISE Framework */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Our Core Values
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The R.I.S.E. Framework
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {riseFramework.map((item) => (
              <Card key={item.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xl font-bold text-white">
                      {item.letter}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--brand-text)]">{item.title}</h3>
                      <p className="text-sm font-semibold text-[var(--brand-primary)]">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Our Philosophy
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              A Constellation, Not a Single Light
            </h2>
            <p className="mx-auto max-w-2xl text-lg italic text-[var(--brand-text-light)]">
              &ldquo;One tree does not make a forest; a star does not rise to shine alone.&rdquo;
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 leading-relaxed text-[var(--brand-text-light)]">
            <p>
              While the life and leadership journey of H.E. John Dramani Mahama serve as our foundational
              light and primary leadership case study, our purpose is much broader. We exist to document,
              preserve, study, and project the stories of transformational leaders from Northern Ghana,
              Ghana, Africa, and the global African family — the many Northern Stars whose vision,
              sacrifice, and service have expanded human possibility.
            </p>
            <p className="text-center text-lg font-semibold text-[var(--brand-text)]">
              The Mahama story is the first light we map. Our mission is to illuminate the entire constellation.
              Every African carries a Northern Star within them.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              What We Will Do
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Programmes & Signature Initiatives
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-[var(--brand-primary)]">Youth Leadership & Economic Empowerment</h3>
                <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                  <li>— JDM Annual African Youth Fellowship</li>
                  <li>— Green Savannah Initiative</li>
                  <li>— JDM Scholarship Fund</li>
                  <li>— Constellation of Achievers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-[var(--brand-primary)]">Governance Excellence & Policy Innovation</h3>
                <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                  <li>— Centre for Democracy & Parliamentary Leadership (Wa)</li>
                  <li>— Policy Review & Drafting Fellowships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-[var(--brand-primary)]">Heritage Stewardship & Cultural Dialogue</h3>
                <ul className="space-y-2 text-sm text-[var(--brand-text-light)]">
                  <li>— Royal Libraries Network</li>
                  <li>— Continental Reparations Platform</li>
                  <li>— JDM Annual Leadership Awards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md lg:col-span-3">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-[var(--brand-primary)]">Regional Development & Empowerment</h3>
                <p className="text-sm text-[var(--brand-text-light)]">— Northern Tourism & Trade Corridor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            The Northern Star shall rise
          </h2>
          <p className="mb-8 text-white/85">
            The constellation begins now. Partner with us, visit us, or start a
            conversation on {siteConfig.contact.phone}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link href="/partner">Partner With Us</Link>
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
