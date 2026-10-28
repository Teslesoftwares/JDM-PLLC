import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Quote,
  Download,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Legacy of H.E. John Dramani Mahama",
  description: "H.E. John Dramani Mahama — 12th and 14th President of the Republic of Ghana. A Life Dedicated to Ghana.",
  alternates: { canonical: "/legacy" },
};

const achievements = [
  { number: "216+", label: "Major Projects", desc: "Roads, bridges, interchanges, hospitals, and schools constructed across all regions of Ghana." },
  { number: "1,000 MW", label: "Power Added", desc: "Significant expansion of Ghana's energy generation capacity, including the Bui Hydroelectric Dam." },
  { number: "2.4M", label: "Students Reached", desc: "Expanded access to education through new schools, feeding programs, and tertiary investment." },
  { number: "Top 3", label: "African Democracy", desc: "Ghana ranked among Africa's top three democracies during the Mahama presidency." },
];

const timeline = [
  {
    year: "1958",
    title: "Early Life",
    body: "Born in Damongo, Northern Ghana. John Dramani Mahama is born on November 29, 1958, in Damongo, in the Savannah Region of Northern Ghana — a region that would shape his lifelong commitment to equity and development.",
  },
  {
    year: "1981",
    title: "Education",
    body: "Graduates with a Bachelor of Arts in History from the University of Ghana, Legon. Later pursues postgraduate studies in Communication at the Institute of Social Studies, The Hague, Netherlands.",
  },
  {
    year: "1992",
    title: "Political Career",
    body: "Elected to Parliament as the Member of Parliament for Bole-Bamboi constituency — beginning a parliamentary career that would span multiple terms and cement his reputation as a voice for Northern Ghana.",
  },
  {
    year: "1998",
    title: "H.E. John Dramani Mahama — 12th President of Ghana",
    body: "Appointed as the National Communications Officer of the National Democratic Congress (NDC), demonstrating his growing influence within Ghana's democratic landscape. Inaugurated as 12th President",
    image: "/images/president-mahama-inauguration.jpg",
    imageCaption: "Inaugurated as 12th President",
  },
  {
    year: "2009",
    title: "Vice Presidency",
    body: "Sworn in as Vice President of Ghana under President John Evans Atta Mills, bringing his experience in communications, governance, and development to the second-highest office in the land.",
  },
  {
    year: "2012",
    title: "Presidency",
    body: "Following the passing of President Mills, John Dramani Mahama is sworn in as Ghana's 12th President — the first Ghanaian head of state from Northern Ghana. He wins the December 2012 general election in his own right. Oversees an unprecedented expansion of Ghana's infrastructure — roads, bridges, hospitals, schools, and energy projects. The Accra–Kumasi highway, multiple interchanges, and the Bui Dam expansion mark a transformative era of national development.",
  },
  {
    year: "2013–2016",
    title: "Democratic Legacy",
    body: "In a defining act of democratic leadership, President Mahama concedes the 2016 election and facilitates a peaceful transfer of power — reinforcing Ghana's standing as a beacon of democracy in Africa.",
    image: "/images/president-mahama-lordina-2016.png",
    imageCaption: "President Mahama and First Lady Lordina Mahama",
  },
  {
    year: "2024",
    title: "Return to Service",
    body: "John Dramani Mahama wins the December 2024 presidential election, returning to the Jubilee House as Ghana's 14th President — the only Ghanaian leader to have served at every elected and appointed level of public life.",
  },
  {
    year: "2026",
    title: "Legacy",
    body: "The John Dramani Mahama Presidential Library & Legacy Centre is established in Accra — a living institution dedicated to preserving the presidential record, empowering African youth, and advancing democratic governance across the continent.",
  },
];

export default function LegacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Republic of Ghana"
        title="H.E. John Dramani Mahama — 12th and 14th President of the Republic of Ghana"
        description="12th & 14th President · 2012–2017 · 2025–Present"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legacy" }]}
        actions={
          <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
            <Link href="/partner">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* The Legacy of Service */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
              The Legacy of Service
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              A Life Dedicated to Ghana
            </h2>
            <p className="mx-auto max-w-3xl leading-relaxed text-white/90">
              From the Savannah of Northern Ghana to the Jubilee House — the remarkable journey of H.E. John Dramani Mahama,
              Ghana&apos;s 12th and 14th President.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="flex justify-center">
              <img
                src="/images/president-mahama.jpg"
                alt="H.E. John Dramani Mahama, President of the Republic of Ghana"
                className="w-full max-w-sm h-auto object-contain object-top"
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-base font-semibold uppercase tracking-wider text-white/80">Born</p>
                <p className="text-lg text-white">29 November 1958 · Damongo, Northern Region</p>
              </div>
              <div>
                <p className="text-base font-semibold uppercase tracking-wider text-white/80">Education</p>
                <p className="text-lg text-white">University of Ghana, Legon · Institute of Social Studies, The Hague</p>
              </div>
              <div>
                <p className="text-base font-semibold uppercase tracking-wider text-white/80">Presidency</p>
                <p className="text-lg text-white">12th President (2012–2017) · 14th President (2025–Present)</p>
              </div>
              <div>
                <p className="text-base font-semibold uppercase tracking-wider text-white/80">Legacy</p>
                <p className="text-lg text-white">Infrastructure, Education, Democracy & Pan-African Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Development */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">Infrastructure</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <Card key={item.label} className="border-0 bg-white shadow-sm text-center">
                <CardContent className="p-6">
                  <p className="mb-2 text-3xl font-bold text-[var(--brand-primary)]">{item.number}</p>
                  <p className="mb-2 font-semibold text-[var(--brand-text)]">{item.label}</p>
                  <p className="text-xs leading-relaxed text-[var(--brand-text-light)]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Quote className="mb-6 h-10 w-10 text-[var(--brand-primary)] mx-auto" aria-hidden="true" />
          <blockquote className="mb-6 text-xl font-medium leading-relaxed text-[var(--brand-text)] sm:text-2xl">
            &ldquo;I have always believed that the measure of a leader is not the power they accumulate, but the legacy they leave — in the lives they improve, the institutions they strengthen, and the democracy they protect.&rdquo;
          </blockquote>
          <p className="text-[var(--brand-text-light)]">— H.E. John Dramani Mahama</p>
        </div>
      </section>

      {/* Family */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                Behind every great leader
              </p>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                A partnership of service, compassion, and national vision
              </h2>
              <p className="mb-6 leading-relaxed text-white/90">
                President Mahama and First Lady Lordina Mahama have together championed education, healthcare, and the welfare of Ghanaian families — a partnership that defines the human heart of this legacy.
              </p>
              <p className="font-semibold text-white">President John Dramani Mahama and First Lady Lordina Mahama</p>
              <p className="text-white/80">President & First Lady Lordina Mahama</p>
            </div>
            <div className="relative h-[450px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/airo-assets/images/pages/legacy/president-john-dramani-mahama-and-first-.png"
                alt="President John Dramani Mahama and First Lady Lordina Mahama"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Presidential Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Presidential Timeline
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              A Life in Service
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[var(--brand-accent)] md:left-1/2"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 h-3 w-3 rounded-full bg-[var(--brand-primary)] md:left-1/2 md:-ml-1.5"></div>
                  <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="rounded bg-[var(--brand-primary)] px-2 py-1 text-xs font-bold text-white">{item.year}</span>
                          <h3 className="font-bold text-[var(--brand-text)]">{item.title}</h3>
                        </div>
                        {item.year === "1998" && (item as any).image ? (
                          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
                            <div className="overflow-hidden rounded-lg w-[100px] flex-shrink-0">
                              <img
                                src={(item as any).image}
                                alt={(item as any).imageCaption || item.title}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            <p className="text-sm leading-relaxed text-[var(--brand-text-light)] flex-1">{item.body}</p>
                          </div>
                        ) : item.year === "2013–2016" && (item as any).image ? (
                          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
                            <div className="overflow-hidden rounded-lg w-[120px] flex-shrink-0">
                              <img
                                src={(item as any).image}
                                alt={(item as any).imageCaption || item.title}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            <p className="text-sm leading-relaxed text-[var(--brand-text-light)] flex-1">{item.body}</p>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{item.body}</p>
                            {(item as any).image ? (
                              <div className="mt-4">
                                <div className="overflow-hidden rounded-lg mx-auto max-w-[200px]">
                                  <img
                                    src={(item as any).image}
                                    alt={(item as any).imageCaption || item.title}
                                    className="w-full h-auto object-cover"
                                  />
                                </div>
                                {(item as any).imageCaption ? (
                                  <p className="mt-2 text-xs text-center text-[var(--brand-text-light)]">{(item as any).imageCaption}</p>
                                ) : null}
                              </div>
                            ) : null}
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Centre */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
            The Northern Star Centre
          </p>
          <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
            A Legacy Worth Preserving
          </h2>
          <p className="mb-8 leading-relaxed text-[var(--brand-text-light)]">
            The JDM Presidential Library & Legacy Centre is being built to ensure that the story of H.E. John Dramani Mahama — his service,
            his vision, and his humanity — endures as an inspiration for generations of African leaders yet to come. Your partnership makes this possible.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <Link href="/partner">
                Partner With the Centre
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-accent)]">
              <a href="https://www.jdmpresidentiallibrary.org/data/Preserving-Legacy-Building-Futures_draft%20v04_260629_162509.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Prospectus
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
