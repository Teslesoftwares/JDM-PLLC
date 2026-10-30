import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Info,
  MonitorPlay,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EAM-TERDI",
  description:
    "EAM-TERDI refers to the E.A. Mahama Memorial Centre for Teacher Education, Research and Digital Innovation. It is a related initiative honouring Emmanuel Adama Mahama.",
  alternates: { canonical: "/eam-terdi" },
};

const focusAreas = [
  { icon: GraduationCap, title: "Teacher education." },
  { icon: BookOpen, title: "Educational research." },
  { icon: Users, title: "Professional development." },
  { icon: MonitorPlay, title: "Digital innovation." },
];

export default function EamTerdiPage() {
  return (
    <>
      <PageHero
        eyebrow="A Related Educational Initiative"
        title="EAM-TERDI"
        description="EAM-TERDI refers to the E.A. Mahama Memorial Centre for Teacher Education, Research and Digital Innovation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partner" },
          { label: "EAM-TERDI" },
        ]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link prefetch={false} href="/contact">
              Enquire About EAM-TERDI
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
              EAM-TERDI is separate from JDM-PLLC. It has its own identity,
              planning and governance. It is not an operational department of
              the Centre, and its activities are subject to separate
              arrangements and approvals.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)]">
                A Related Initiative Honouring Emmanuel Adama Mahama
              </h2>
              <div className="space-y-4 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  EAM-TERDI refers to the E.A. Mahama Memorial Centre for
                  Teacher Education, Research and Digital Innovation.
                </p>
                <p>
                  It is a related initiative honouring Emmanuel Adama Mahama, a
                  teacher and educationist whose life and work reflected a
                  commitment to learning and public service.
                </p>
                <p>
                  EAM-TERDI is separate from JDM-PLLC. It has its own identity,
                  planning and governance. It is not an operational department
                  of the Centre, and its activities are subject to separate
                  arrangements and approvals.
                </p>
              </div>
            </div>

            <Card className="border-0 bg-[var(--brand-primary)] text-white">
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-bold">At a glance</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-white/70">Full name</dt>
                    <dd className="font-medium">
                      E.A. Mahama Memorial Centre for Teacher Education,
                      Research and Digital Innovation
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/70">Relationship</dt>
                    <dd className="font-medium">
                      Separate related initiative, not a JDM-PLLC department
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/70">Focus</dt>
                    <dd className="font-medium">
                      Teacher education, educational research, professional
                      development and digital innovation
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              The initiative is intended to support:
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <Card key={area.title} className="border-0 bg-white shadow-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <area.icon
                    className="h-7 w-7 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-[var(--brand-text)]">
                    {area.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-5 px-4 leading-relaxed text-[var(--brand-text-light)]">
          <p>
            Its focus is on strengthening the teaching profession and
            contributing to improved learning outcomes.
          </p>
          <p>
            Further information about EAM-TERDI will be published as its plans,
            partnerships and governance arrangements are confirmed.
          </p>
          <p>
            EAM-TERDI is associated with Bagabaga College of Education (BACE),
            where Emmanuel Adama Mahama served as Principal. Its relationship
            with BACE is intended to support teacher education, research,
            professional development and digital innovation.
          </p>
          <p>
            For institutional collaboration, contact the Secretariat. A
            dedicated EAM-TERDI website may be developed and published
            separately.
          </p>
          <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
            <Link href="/contact">
              Contact the Secretariat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
