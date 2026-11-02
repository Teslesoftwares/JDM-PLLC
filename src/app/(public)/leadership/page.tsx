import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe2, Landmark, ShieldCheck, Users } from "lucide-react";
import {
  committeeMembers,
  executiveLeadership,
  internationalOperations,
  leadershipTeam,
  type LeadershipPerson,
} from "@/config/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the Global Steering Committee guiding the vision, governance and global reach of the John Dramani Mahama Presidential Library & Legacy Centre.",
  alternates: { canonical: "/leadership" },
};

const pillars = [
  {
    icon: Landmark,
    title: "Institutional stewardship",
    body: "Safeguarding the Centre's historical accuracy, academic standards and non-partisan character.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable governance",
    body: "Providing strategic oversight, transparent decision-making and responsible resource management.",
  },
  {
    icon: Globe2,
    title: "Global reach",
    body: "Connecting Africa and the diaspora through partnerships, advocacy and regional operational leads.",
  },
];

function RoleBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-primary-dark)]">
      {children}
    </span>
  );
}

/**
 * Portraits are presented in a layered mat frame: a soft outer shadow, a
 * white mat with a fine brand-coloured keyline, and an inset image with a
 * gentle bottom gradient so the frame reads as a finished piece rather than
 * a raw image crop.
 */
function PortraitFrame({
  person,
  sizes,
  className = "",
}: {
  person: LeadershipPerson;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="group relative h-full rounded-[1.35rem] bg-white p-2 shadow-[0_18px_40px_-24px_rgba(40,20,5,0.65)] ring-1 ring-[var(--brand-primary)]/25">
        <div className="relative h-full overflow-hidden rounded-[0.95rem] bg-[var(--brand-accent)]/30">
          <Image
            src={person.image}
            alt={`Portrait of ${person.name}`}
            width={person.imageWidth}
            height={person.imageHeight}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes={sizes}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"
          />
        </div>
      </div>
    </div>
  );
}

function FeaturedProfile({ person }: { person: LeadershipPerson }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <CardContent className="p-0 md:grid md:grid-cols-[16rem_1fr] lg:grid-cols-[18rem_1fr]">
        <div className="flex h-full items-center justify-center bg-[var(--brand-accent)]/35 p-5 sm:p-6 md:border-r md:border-[var(--brand-primary)]/10">
          <PortraitFrame
            person={person}
            className="aspect-[4/5] w-full max-w-[15.5rem]"
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 80vw"
          />
        </div>
        <div className="p-6 sm:p-8">
          <RoleBadge>{person.role}</RoleBadge>
          <h3 className="mt-3 text-xl font-bold text-[var(--brand-text)] sm:text-2xl">
            {person.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[var(--brand-primary)]">
            {person.title}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
            {person.bio}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function ProfileCard({ person }: { person: LeadershipPerson }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-0 shadow-md">
      <div className="bg-[var(--brand-accent)]/35 p-4 sm:p-5">
        <PortraitFrame
          person={person}
          className="aspect-[4/5] w-full"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        />
      </div>
      <CardContent className="flex flex-1 flex-col p-6 pt-4">
        <RoleBadge>{person.role}</RoleBadge>
        <h3 className="mt-3 text-lg font-bold text-[var(--brand-text)]">
          {person.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--brand-primary)]">
          {person.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
          {person.bio}
        </p>
      </CardContent>
    </Card>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-[var(--brand-text-light)]">
        {description}
      </p>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Global Steering Committee"
        description="An international body of distinguished leaders appointed to guide the vision, governance and global reach of the John Dramani Mahama Presidential Library & Legacy Centre."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
        actions={
          <Button
            asChild
            size="lg"
            className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
          >
            <Link prefetch={false} href="/contact">
              Contact the Secretariat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Appointed to lead. Empowered to serve.
              </p>
              <h2 className="text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Leadership that connects legacy to the future
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  The Global Steering Committee brings together accomplished
                  leaders from across Africa and the world. Each member has been
                  appointed in recognition of their distinguished service,
                  expertise and commitment to the values of democracy, education
                  and African development.
                </p>
                <p>
                  Under the leadership of Prof. Abdulai Abubakar, the Committee
                  provides strategic oversight, international advocacy and
                  governance support as the Centre moves from concept to
                  reality.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
                  <Link href="/governance">Governance and accountability</Link>
                </Button>
                <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
                  <Link href="/services/leadership-civic-education">
                    Leadership and civic education
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {pillars.map(({ icon: Icon, title, body }) => (
                <Card key={title} className="border-0 shadow-sm">
                  <CardContent className="flex gap-4 p-5">
                    <Icon
                      className="mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-[var(--brand-text)]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--brand-text-light)]">
                        {body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding leadership */}
      <section className="bg-[var(--brand-accent)]/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Founding leadership"
            title="Leadership"
            description="The originator and Chief Patron of the JDM-PLLC initiative, providing founding vision and high-level advocacy."
          />
          <div className="grid gap-5">
            {leadershipTeam.map((person) => (
              <FeaturedProfile key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive leadership */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Executive leadership"
            title="Steering the institution"
            description="The Chairperson, Vice Chairperson and Legal Adviser steer the Committee's governance, strategy and legal framework."
          />
          <div className="grid gap-5">
            {executiveLeadership.map((person) => (
              <FeaturedProfile key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Committee members */}
      <section className="bg-[var(--brand-accent)]/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Committee members"
            title="A continental and global perspective"
            description="Members and global ambassadors contributing expertise in research, finance, law, international relations, culture and diaspora engagement."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {committeeMembers.map((person) => (
              <ProfileCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* International operations */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="International operations"
            title="Regional leads across Africa and the diaspora"
            description="Regional leads responsible for driving the Centre's partnerships, programmes and outreach across Africa, Europe, North America and the Caribbean."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {internationalOperations.map((person) => (
              <ProfileCard key={person.name} person={person} />
            ))}
          </div>
          <p className="mt-8 flex items-start gap-2 text-sm leading-relaxed text-[var(--brand-text-light)]">
            <Users
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
              aria-hidden="true"
            />
            Committee composition and regional responsibilities may evolve as
            the Centre&apos;s partnerships and programmes develop.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Partner with the Committee
          </h2>
          <p className="mb-8 text-white/85">
            Join the global network advancing the vision of the JDM
            Presidential Library &amp; Legacy Centre.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <Link prefetch={false} href="/partner">
                Become a Partner
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
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
