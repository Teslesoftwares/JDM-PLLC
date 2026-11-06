import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Proposed Project Site",
  description:
    "Explore concept visuals and a project video for the proposed John Dramani Mahama Presidential Library & Legacy Centre development.",
  alternates: { canonical: "/project-site" },
};

const conceptViews = [
  {
    src: "/images/airo-assets/images/pages/home/architecture-entrance.jpg",
    alt: "Concept rendering of the proposed Centre entrance",
  },
  {
    src: "/images/airo-assets/images/pages/home/architecture-campus.jpg",
    alt: "Concept rendering of the proposed Centre campus",
  },
  {
    src: "/images/airo-assets/images/pages/home/architecture-rotunda.jpg",
    alt: "Concept rendering of a proposed rotunda",
  },
  {
    src: "/images/airo-assets/images/pages/home/architecture-interior.jpg",
    alt: "Concept rendering of a proposed interior space",
  },
];

export default function ProjectSitePage() {
  return (
    <>
      <PageHero
        eyebrow="Proposed Project Site"
        title="Envisioning the Presidential Library & Legacy Centre"
        description="Explore concept views and a project video showing the vision for the proposed development."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Proposed Project Site" },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)]">
              Project concept gallery
            </h2>
            <p className="leading-relaxed text-[var(--brand-text-light)]">
              These architectural images are concept visualisations of the
              proposed development, not photographs of a completed facility.
              Project locations and plans remain subject to consultation,
              technical planning, land arrangements, approvals, partnerships
              and available resources.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {conceptViews.map((view) => (
              <figure
                key={view.src}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={view.src}
                    alt={view.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-medium text-[var(--brand-text)]">
                  {view.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 max-w-3xl">
            <h2 className="mb-3 text-3xl font-bold text-[var(--brand-text)]">
              Project video
            </h2>
            <p className="text-[var(--brand-text-light)]">
              A visual walkthrough of the proposed campus concept.
            </p>
          </div>
          <video
            className="aspect-video w-full rounded-2xl bg-black shadow-lg"
            controls
            preload="metadata"
            poster="/images/hero/campus-walk-poster.jpg"
            aria-label="Video walkthrough of the proposed Centre campus concept"
          >
            <source src="/images/hero/campus-walk.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
      </section>
    </>
  );
}
