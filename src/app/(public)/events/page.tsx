import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  GraduationCap,
  Info,
  MapPin,
  Mic,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Events and Activities",
  description:
    "Proposed launch and planned public activities of the John Dramani Mahama Presidential Library & Legacy Centre.",
  alternates: { canonical: "/events" },
};

const plannedActivities = [
  { icon: Mic, title: "Public lectures and dialogue." },
  { icon: BookOpen, title: "Exhibitions and heritage programming." },
  { icon: GraduationCap, title: "Academic and youth programmes." },
  { icon: Users, title: "Community engagement." },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Activities"
        title="Gather. Learn. Participate."
        description="The Centre's public programme is being developed. The proposed official launch is the next confirmed milestone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events & Activities" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/contact">
              Enquire About Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-start gap-3 rounded-lg border-l-4 border-[var(--brand-primary)] bg-[var(--brand-accent)] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--brand-text)]">
              Confirmed events will be published with date, venue, registration
              and participation details.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-0 bg-[var(--brand-primary)] text-white shadow-md lg:col-span-2">
              <CardContent className="p-8 md:p-10">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                  Proposed Official Launch
                </h2>
                <div className="mb-6 space-y-3 text-white/90">
                  <p className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Date:</strong> {siteConfig.launchDate}
                      <br />
                      <strong>Time:</strong> 10:00 AM
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Venue:</strong> University for Development Studies
                      (UDS), Tamale Campus (venue to be confirmed)
                    </span>
                  </p>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-white/85">
                  The launch is proposed and subject to confirmation. Any change
                  to the date, venue or programme will be announced through
                  official channels.
                </p>
                <Button asChild className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
                  <Link href="/contact">Contact the Secretariat</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="mb-4 text-xl font-bold text-[var(--brand-text)]">
                  Event enquiries
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Institutions and individuals interested in hosting, sponsoring
                  or attending a future event may contact the Secretariat.
                </p>
                <p className="mb-6 text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Please do not rely on invitations or payment requests from
                  unverified sources.
                </p>
                <Button asChild variant="outline" className="w-full border-[var(--brand-primary)] text-[var(--brand-primary)]">
                  <Link href="/contact">Send an enquiry</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Planned activities
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              A public programme in development
            </h2>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              The Centre intends to host and support:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {plannedActivities.map((activity) => (
              <Card key={activity.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <activity.icon
                    className="mb-4 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    {activity.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)]">
            Follow official updates
          </h2>
          <p className="mb-8 leading-relaxed text-[var(--brand-text-light)]">
            Confirmed events and registration details will be published through
            this website and authorised channels.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <Link href="/news">News &amp; Updates</Link>
            </Button>
            <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
              <Link href="/programmes">Programmes</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
