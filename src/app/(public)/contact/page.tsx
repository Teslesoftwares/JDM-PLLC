import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/public/contact-form";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact the ${siteConfig.shortName} Secretariat in Tamale or the AfYEF project coordination office in Accra.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact the Secretariat"
        description="For enquiries, please contact the Secretariat using the form below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-5">
            <Card className="border-0 shadow-md lg:col-span-3">
              <CardContent className="p-8">
                <h2 className="mb-2 text-2xl font-bold text-[var(--brand-text)]">
                  Please include:
                </h2>
                <ul className="mb-6 space-y-1 text-sm text-[var(--brand-text-light)]">
                  <li>Full name.</li>
                  <li>Email address.</li>
                  <li>Organisation, if applicable.</li>
                  <li>Enquiry category.</li>
                  <li>Message.</li>
                  <li>Consent to the Privacy Notice.</li>
                </ul>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-6 lg:col-span-2">
              {siteConfig.offices.map((office) => (
                <Card key={office.name} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-lg font-semibold text-[var(--brand-text)]">
                      {office.name}
                    </h2>
                    <address className="space-y-3 text-sm not-italic">
                      <p className="flex items-start gap-3 text-[var(--brand-text)]">
                        <MapPin
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                          aria-hidden="true"
                        />
                        <span>
                          {office.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </p>
                    </address>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-0 bg-[var(--brand-accent)]">
                <CardContent className="space-y-4 p-6 text-sm">
                  <p className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <span className="break-all text-[var(--brand-text)]">
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                      {" | "}
                      <a
                        href={`mailto:${siteConfig.contact.additionalEmail}`}
                        className="hover:underline"
                      >
                        {siteConfig.contact.additionalEmail}
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="font-medium text-[var(--brand-text)] hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                  <p className="text-[var(--brand-text)]">
                    <span className="font-semibold">Websites:</span>{" "}
                    {siteConfig.websites.map((website, index) => (
                      <span key={website.href}>
                        {index > 0 ? " | " : null}
                        <a
                          href={website.href}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {website.label}
                        </a>
                      </span>
                    ))}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-[var(--brand-text)]">
                    Official channels
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--brand-text-light)]">
                    JDM-PLLC publishes information through this website and its
                    authorised communication channels. Do not send money or
                    personal information to an account, number or address that
                    has not been verified through the Secretariat.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]">
                      <Link href="/branches">
                        Project locations
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
                      <Link href="/faq">Read the FAQ</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
