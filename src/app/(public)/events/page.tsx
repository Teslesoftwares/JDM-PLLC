import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Users,
  BookOpen,
  FileText,
  Lightbulb,
  GraduationCap,
  Globe,
  TreePine,
  Award,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Programmes & Initiatives",
  description: "Study Leadership. Practice Governance. Serve Humanity. — The Northern Star Centre's planned intellectual and programmatic offerings for Africa and the world.",
  alternates: { canonical: "/events" },
};

const softInfrastructure = [
  {
    number: "01",
    title: "Virtual Northern Star Library & Digital Archive",
    body: "A globally accessible digital repository of presidential records, governance case studies, oral histories, and leadership research.",
  },
  {
    number: "02",
    title: "Northern Star Annual Lecture",
    body: "A premier intellectual forum convening scholars, statesmen, and civil society leaders to advance democratic and leadership discourse.",
  },
  {
    number: "03",
    title: "Pan-African Fellowship Programme",
    body: "The inaugural cohort of Pan-African Fellows — young leaders immersed in the Mahama Leadership Framework and continental service.",
  },
  {
    number: "04",
    title: "Indigenous Knowledge Systems Oral History Blitz",
    body: "A continent-wide effort to document, preserve, and digitise oral histories and traditional governance wisdom before they are lost.",
  },
];

const mahamaFramework = [
  { number: "1", title: "Service Above Self", body: "Leadership defined by sacrifice, not privilege." },
  { number: "2", title: "Infrastructure-Led Human Development", body: "Building the physical and social foundations of progress." },
  { number: "3", title: "Democratic Resilience", body: "Protecting institutions, processes, and the peaceful transfer of power." },
  { number: "4", title: "Pragmatic Inclusion & Peacebuilding", body: "Governing across difference with equity and vision." },
  { number: "5", title: "Pan-African Realism", body: "Advancing continental integration through practical engagement." },
  { number: "6", title: "Accountability as a Core System", body: "Transparency and responsibility as non-negotiable governance principles." },
];

const laboratory = [
  "Crisis Management",
  "Infrastructure Delivery",
  "Public Accountability",
  "Ethical Decision-Making",
  "Democratic Governance",
  "National Development Planning",
];

const iks = [
  "Traditional Governance Systems",
  "Conflict Resolution Mechanisms",
  "Oral Histories & African Languages",
  "Traditional Ecological Knowledge",
  "Intergenerational Knowledge Transfer",
  "Pan-African Repository",
];

const hallOfFame = [
  "Public Service",
  "Traditional Leadership",
  "Scholarship",
  "Entrepreneurship",
  "Arts & Culture",
  "Humanitarian Service",
];

const events = [
  {
    month: "AUG",
    day: "12",
    year: "2026",
    type: "Exhibition",
    title: "Opening Exhibition: The Road to the Presidency",
    body: "A curated exhibition tracing President Mahama's journey from Bole-Bamboi to the Jubilee House — through photographs, documents, and personal artefacts.",
    location: "Northern Star Centre, Bole",
    duration: "Full day",
  },
  {
    month: "SEP",
    day: "05",
    year: "2026",
    type: "Lecture",
    title: "Northern Star Annual Lecture",
    body: "The inaugural Northern Star Annual Lecture — a premier intellectual forum on democratic governance, leadership, and Africa's transformation.",
    location: "Leadership Laboratory, Tamale",
    duration: "Full day",
  },
  {
    month: "OCT",
    day: "18",
    year: "2026",
    type: "Fellowship",
    title: "Pan-African Fellowship Programme Launch",
    body: "The launch of the Pan-African Fellowship Programme — establishing the Centre's intellectual footprint and connecting Africa's next generation of ethical leaders.",
    location: "Northern Star Centre",
    duration: "3 days",
  },
];

const initiatives = [
  {
    category: "Youth Leadership",
    title: "JDM Annual African Youth Fellowship",
    body: "An immersive leadership development programme for exceptional young Africans — grounded in the Mahama Leadership Framework and oriented toward continental service.",
    timing: "Annual — applications open January",
    icon: GraduationCap,
  },
  {
    category: "Governance",
    title: "Centre for Democracy & Parliamentary Leadership",
    body: "Based in Wa, this centre offers policy fellowships, parliamentary leadership training, and governance research for elected officials and civil servants.",
    timing: "Year-round intake",
    icon: Users,
  },
  {
    category: "Heritage",
    title: "Royal Libraries Network",
    body: "A continental network connecting traditional royal libraries, palace archives, and oral history repositories — preserving Africa's pre-colonial governance wisdom.",
    timing: "Ongoing",
    icon: BookOpen,
  },
  {
    category: "Regional Development",
    title: "Green Savannah Initiative",
    body: "A climate-resilient development programme for the Savannah belt — combining environmental stewardship, agricultural innovation, and youth enterprise.",
    timing: "Ongoing",
    icon: TreePine,
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes & Initiatives"
        title="The Northern Star Centre"
        description="Study Leadership. Practice Governance. Serve Humanity. — The Northern Star Centre's planned intellectual and programmatic offerings for Africa and the world. Partner with us to bring them to life."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/partner">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Soft Infrastructure Launch */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
              Soft Infrastructure Launch
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              2026: The Year of First Light
            </h2>
            <p className="mx-auto max-w-3xl leading-relaxed text-white/90">
              While physical construction is mobilised across our three branches, we launch the soft infrastructure — programmes, partnerships, fellowships, archives, and digital platforms — that will establish the Centre&apos;s intellectual credibility and continental relevance from day one.
            </p>
            <blockquote className="mt-6 mx-auto max-w-2xl text-lg italic text-white/90">
              &ldquo;The land is secured. The endorsements are granted. The vision is clear. Now, we activate.&rdquo;
            </blockquote>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {softInfrastructure.map((item) => (
              <div key={item.number} className="relative">
                <div className="absolute left-2 top-2 h-full w-full rounded-lg bg-black/10"></div>
                <Card className="relative border-0 bg-white shadow-lg">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-[var(--brand-primary)] text-lg font-bold text-white">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-[var(--brand-text)]">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{item.body}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mahama Leadership Framework */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Flagship Intellectual Product
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The Mahama Leadership Framework
            </h2>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              A structured body of leadership knowledge to be distilled from decades of public service and governance experience. A living curriculum for Africa&apos;s future — each pillar a case study for leadership education, research, and practical application.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mahamaFramework.map((item) => (
              <div key={item.number} className="relative">
                <div className="absolute left-2 top-2 h-full w-full rounded-lg bg-black/10"></div>
                <Card className="relative border-0 bg-white shadow-lg">
                  <CardContent className="flex gap-3 p-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-[var(--brand-primary)] text-sm font-bold text-white">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[var(--brand-text)]">{item.title}</h3>
                      <p className="text-xs leading-relaxed text-[var(--brand-text-light)]">{item.body}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The How to Govern Institute */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                The &ldquo;How to Govern&rdquo; Institute
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                The Leadership Laboratory
              </h2>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                A first-of-its-kind, trans-partisan institute where participants examine the realities of governance through immersive case studies. Rather than focusing on theory alone, the Laboratory explores real-world leadership challenges — crisis management, infrastructure delivery, public accountability, ethical decision-making, democratic governance, and national development planning.
              </p>
              <p className="mt-3 font-medium text-[var(--brand-text)]">
                The Laboratory is not a monument to any individual. It is a training ground for future leaders.
              </p>
            </div>
            <Card className="border-0 bg-[var(--brand-accent)]/60">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold text-[var(--brand-text)]">Focus Areas</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {laboratory.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[var(--brand-text)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Indigenous Knowledge Systems */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              The Root System
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Indigenous Knowledge Systems Centre
            </h2>
            <p className="max-w-3xl leading-relaxed text-[var(--brand-text-light)]">
              The Centre recognises that many of Africa&apos;s most enduring governance traditions are embedded within Indigenous Knowledge Systems. Our research and preservation efforts ensure that ancestral wisdom continues to inform contemporary leadership and development.
            </p>
            <p className="mt-3 leading-relaxed text-[var(--brand-text-light)]">
              Northern Ghana has historically served as a crossroads of trade, governance, culture, scholarship, and Indigenous Knowledge Systems — producing statesmen, traditional leaders, scholars, entrepreneurs, and visionaries whose stories deserve continental recognition.
            </p>
            <p className="mt-4 font-semibold text-[var(--brand-text)]">Research & preservation focus areas:</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {iks.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 text-sm text-[var(--brand-text)] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                {item}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="mb-4 text-2xl font-bold text-[var(--brand-text)]">Northern Star Hall of Fame</h3>
            <p className="mb-6 text-[var(--brand-text-light)]">
              The premier Pan-African repository celebrating transformational leadership and public service — honouring individuals whose lives have expanded opportunity, justice, peace, knowledge, innovation, and human dignity.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {hallOfFame.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 text-sm text-[var(--brand-text)] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Calendar */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              2026 Calendar
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Upcoming Events
            </h2>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.title} className="border-0 shadow-md">
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center">
                  <div className="flex flex-shrink-0 flex-col items-center rounded-lg bg-[var(--brand-accent)] px-4 py-3">
                    <p className="text-xs font-bold text-[var(--brand-primary)]">{event.month}</p>
                    <p className="text-2xl font-bold text-[var(--brand-text)]">{event.day}</p>
                    <p className="text-xs text-[var(--brand-text-light)]">{event.year}</p>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded bg-[var(--brand-primary)] px-2 py-1 text-xs font-semibold text-white">{event.type}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">{event.title}</h3>
                    <p className="mb-2 text-sm text-[var(--brand-text-light)]">{event.body}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--brand-text-light)]">
                      <span>📍 {event.location}</span>
                      <span>⏱ {event.duration}</span>
                    </div>
                  </div>
                  <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                    <Link href="/contact">Register</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Signature Initiatives */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Planned Signature Initiatives
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Programmes in Development
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {initiatives.map((item) => (
              <Card key={item.title} className="border-0 bg-white shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-accent)]">
                      <item.icon className="h-5 w-5 text-[var(--brand-primary)]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">{item.category}</p>
                      <h3 className="font-semibold text-[var(--brand-text)]">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-[var(--brand-text-light)]">{item.body}</p>
                  <p className="text-xs font-semibold text-[var(--brand-primary)]">{item.timing}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mb-8 text-white/85">
            Help bring these programmes to life. Contact the Secretariat to discuss partnership opportunities.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link href="/partner">
                Partner With Us
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
    </>
  );
}
