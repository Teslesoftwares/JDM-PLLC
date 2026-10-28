import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Crown,
  Gift,
  Globe2,
  GraduationCap,
  Heart,
  Landmark,
  Mail,
  Phone,
  Scale,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Support the Centre",
  description: `Ways to give to ${siteConfig.formalName} — the Endowment Fund, fellowship sponsorships, research chairs, naming opportunities and the Friends of the Northern Star Network.`,
  alternates: { canonical: "/donate" },
};

/** A single charitable route. Copy never promises a benefit or a price. */
const givingPriorities = [
  {
    icon: Landmark,
    title: "Endowment Fund",
    body: "The Endowment Fund is the Centre's permanent capital: the principal is invested and held, and only the returns support the mission. It is what allows the institution to outlast any single donor, government or generation.",
  },
  {
    icon: GraduationCap,
    title: "Fellowship Sponsorships",
    body: "Sponsor a cohort or an individual fellowship. Fellowships carry exceptional young leaders from across the continent through the Leadership Laboratory and into public life.",
  },
  {
    icon: BookOpen,
    title: "Research Chairs",
    body: "Endow a chair in governance, Indigenous Knowledge Systems, democratic resilience or heritage studies — anchoring a field of inquiry at the Centre for a decade or more.",
  },
  {
    icon: Crown,
    title: "Naming Opportunities",
    body: "Named spaces, programmes and endowed positions recognise a gift in enduring form. What can be named, and on what terms, is confirmed with the Centre on enquiry.",
  },
  {
    icon: ScrollText,
    title: "Heritage & Archives",
    body: "Support the preservation of papers, oral histories and artefacts — and the digital archive that will make them available to scholars across the world.",
  },
  {
    icon: Users,
    title: "Community & Outreach",
    body: "Fund educational outreach, exhibitions, public lectures and student programmes that carry the Centre's work into schools, towns and diaspora communities.",
  },
];

/** Purposes a donor may designate. Kept to what the Centre already describes. */
const designations = [
  "Endowment Fund",
  "Fellowship Programme",
  "Leadership Laboratory",
  "Indigenous Knowledge Systems Research",
  "Scholarships & Bursaries",
  "Library & Museum",
  "Hall of Fame",
  "Digital Heritage Archive",
  "Educational Outreach",
  "Wherever the need is greatest",
];

const faqs = [
  {
    q: "How do I make a gift?",
    a: "Contact the Secretariat and tell us the purpose you have in mind. Bank transfer, Mobile Money and international transfer details are shared with donors on request, together with the acknowledgement for your gift.",
  },
  {
    q: "Can I give for a specific purpose?",
    a: "Yes. A gift may be designated to a fellowship, chair, archive, programme or the Endowment Fund. State the purpose when you get in touch and it will be confirmed with you before the gift is made.",
  },
  {
    q: "Do you accept gifts from outside Ghana?",
    a: "The Centre welcomes support from across the diaspora and internationally. Contact the Secretariat and the correct route for an international gift is confirmed for your country and currency.",
  },
  {
    q: "How will I be recognised?",
    a: "Gifts are acknowledged, and donors may be recognised publicly or remain anonymous, as they prefer. The form that recognition takes is agreed with you in advance — including any naming, which is confirmed on enquiry.",
  },
  {
    q: "How do I know gifts are used well?",
    a: "The Centre is governed by the four inviolable principles of the Firewall Charter — non-partisan integrity, independent trusteeship, radical transparency and perpetual mission protection — and reports on the use of philanthropic funds on request.",
  },
];

export default function DonatePage() {
  const { bank, mobileMoney } = siteConfig.donation;

  const bankDetails = [
    { label: "Bank", value: bank.bankName },
    { label: "Account name", value: bank.accountName },
    { label: "Account number", value: bank.accountNumber },
    { label: "Branch", value: bank.branch },
    { label: "SWIFT / BIC", value: bank.swift },
  ].filter((detail) => detail.value);

  const momoDetails = [
    { label: "Network", value: mobileMoney.provider },
    { label: "Registered name", value: mobileMoney.name },
    { label: "Number", value: mobileMoney.number },
  ].filter((detail) => detail.value);

  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Support the Northern Star Centre"
        description="Philanthropic support is what makes the Centre independent — and permanent. Every gift, whatever its size, helps build an institution that belongs to Africa and serves the world."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate" }]}
        actions={
          <>
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <a href={`mailto:${siteConfig.contact.email}?subject=Giving%20to%20the%20Centre`}>
                Talk to the Secretariat
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/partner">Partner with us</Link>
            </Button>
          </>
        }
      />

      {/* Why giving matters */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Why giving matters
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Built to last for generations
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  Institutions that preserve memory and form leaders are not
                  funded by a single source. The Centre&rsquo;s long-term
                  sustainability rests on diversified income, an Endowment Fund
                  and philanthropic capital — held apart from politics and
                  protected from the pressures of any one funder.
                </p>
                <p>
                  Giving to the Centre is giving to the founding decade: the
                  years in which the programmes, fellowships, archives and
                  digital platforms that establish its intellectual credibility
                  are being built.
                </p>
                <p>
                  Whether you give once or every month, whether you are at home
                  in Ghana or part of the diaspora, you are part of the
                  constellation. The Northern Star is not the work of one person
                  — it is illuminated by many.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <Landmark
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Independence
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    An Endowment Fund keeps the mission from depending on any
                    single funder.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <Heart
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Perpetuity
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Principal is held and grown so the Centre supports its work
                    for generations.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <Globe2
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Continental reach
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Gifts carry fellowships, research and heritage work across
                    Africa and beyond.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="p-6">
                  <ShieldCheck
                    className="mb-3 h-8 w-8 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[var(--brand-text)]">
                    Radical transparency
                  </h3>
                  <p className="mt-1 text-sm text-[var(--brand-text-light)]">
                    Reports on the use of philanthropic funds are available on
                    request.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What your gift builds */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              What your gift builds
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              Priorities for the founding decade
            </h2>
            <p className="text-[var(--brand-text-light)]">
              These are the standing routes for philanthropic support. Terms for
              any major gift are confirmed with the Centre on enquiry.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {givingPriorities.map((priority) => (
              <Card key={priority.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <priority.icon
                    className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                    {priority.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    {priority.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              Ways to give
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
              How to make your gift
            </h2>
            <p className="text-[var(--brand-text-light)]">
              Contact the Secretariat first and tell us what you would like to
              support. We confirm the correct route for your gift — domestic or
              international — and send the details together with your
              acknowledgement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <Landmark
                  className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Bank transfer
                </h3>
                {bankDetails.length > 0 ? (
                  <dl className="space-y-1 text-sm text-[var(--brand-text-light)]">
                    {bankDetails.map((detail) => (
                      <div key={detail.label}>
                        <dt className="font-medium text-[var(--brand-text)]">
                          {detail.label}
                        </dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Account details are shared with donors on request. Contact
                    the Secretariat and they will be sent to you directly.
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <Gift
                  className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Mobile Money
                </h3>
                {momoDetails.length > 0 ? (
                  <dl className="space-y-1 text-sm text-[var(--brand-text-light)]">
                    {momoDetails.map((detail) => (
                      <div key={detail.label}>
                        <dt className="font-medium text-[var(--brand-text)]">
                          {detail.label}
                        </dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                    Mobile Money details are shared with donors on request.
                    Contact the Secretariat before sending a gift.
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <Globe2
                  className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  From the diaspora
                </h3>
                <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Supporters outside Ghana are welcome. Get in touch and the
                  correct international route is confirmed for your country and
                  currency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <Building2
                  className="mb-3 h-6 w-6 text-[var(--brand-primary)]"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold text-[var(--brand-text)]">
                  Organisations & foundations
                </h3>
                <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">
                  Institutional gifts, sponsorships and endowments are arranged
                  with the Centre. See{" "}
                  <Link
                    href="/partner"
                    className="font-medium text-[var(--brand-primary)] hover:underline"
                  >
                    Partner with us
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-xl border border-[var(--brand-primary)]/20 bg-[var(--brand-accent)]/50 p-6">
            <p className="flex-1 text-sm leading-relaxed text-[var(--brand-text-light)]">
              To give today, contact the Secretariat on {siteConfig.contact.phone}{" "}
              or at {siteConfig.contact.email}. Tell us the purpose of your gift
              and we will send the correct details and a reference for your
              donation.
            </p>
            <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
              <a href={`mailto:${siteConfig.contact.email}?subject=Giving%20to%20the%20Centre`}>
                <Mail className="mr-2 h-4 w-4" />
                Email the Secretariat
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[var(--brand-primary)] bg-transparent text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
            >
              <a href={siteConfig.contact.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                Call the Centre
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Designate your gift */}
      <section className="bg-[var(--brand-accent)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Giving with purpose
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Direct your gift where it matters most to you
              </h2>
              <p className="leading-relaxed text-[var(--brand-text-light)]">
                A gift may be designated to a particular programme, or left to
                the Centre to apply wherever the need is greatest. Whichever you
                choose, the purpose is recorded and confirmed with you before the
                gift is made.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {designations.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                >
                  <BadgeCheck
                    className="h-5 w-5 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-[var(--brand-text)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accountability + FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                Accountability
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--brand-text)] sm:text-4xl">
                Your gift, held to the highest standard
              </h2>
              <div className="space-y-5 leading-relaxed text-[var(--brand-text-light)]">
                <p>
                  The Centre is built on the four inviolable principles of the
                  Firewall Charter: non-partisan integrity, independent
                  trusteeship, radical transparency and perpetual mission
                  protection.
                </p>
                <p>
                  Gifts are acknowledged, recorded and reported on. Donors may
                  give anonymously, and any recognition — including naming — is
                  agreed in advance.
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--brand-text-light)]">
                <li className="flex items-start gap-2">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  Independently governed, protected from political pressure.
                </li>
                <li className="flex items-start gap-2">
                  <Scale
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  Reports on the use of philanthropic funds on request.
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                    aria-hidden="true"
                  />
                  Every gift acknowledged, and every purpose confirmed.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h2 className="mb-6 text-2xl font-bold text-[var(--brand-text)]">
                Giving questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-lg border border-black/10 bg-white p-5 open:shadow-sm"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-[var(--brand-text)] [&::-webkit-details-marker]:hidden">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--brand-text-light)]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Every gift illuminates the constellation
          </h2>
          <p className="mb-8 text-white/85">
            This is an invitation, not a conclusion. To discuss a gift — however
            large or small — call {siteConfig.contact.phone} or write to{" "}
            {siteConfig.contact.email}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--brand-primary)] hover:bg-white/90"
            >
              <a href={`mailto:${siteConfig.contact.email}?subject=Giving%20to%20the%20Centre`}>
                Contact the Secretariat
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/contact">Contact the Centre</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
