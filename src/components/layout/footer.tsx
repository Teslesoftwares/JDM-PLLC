import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { SocialLinks } from "@/components/brand/social-links";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About JDM-PLLC", href: "/about" },
  { label: "The Library & Legacy Centre", href: "/services" },
  { label: "Branches and Locations", href: "/branches" },
  { label: "Programmes", href: "/programmes" },
  { label: "Research and Archives", href: "/research" },
  { label: "Partners", href: "/partner" },
  { label: "EAMMC-TERDI", href: "/eammc-terdi" },
  { label: "Support the Project", href: "/donate" },
  { label: "News and Updates", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

const policies = [
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Donation Policy", href: "/donation-policy" },
  { label: "Website Terms of Use", href: "/terms" },
  { label: "Data Protection", href: "/data-protection" },
  { label: "Accessibility", href: "/accessibility" },
];

/**
 * Public site footer.
 *
 * Contact details come from `@/config/site`, so the footer shows the
 * Secretariat and AfYEF coordination office separately and accurately.
 */
export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="motion-fade-in border-t border-[var(--brand-primary-dark)] bg-[var(--brand-primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo href={null} invert className="mb-4" />
            <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              LEGACY → KNOWLEDGE → SKILLS → ENTERPRISE → OPPORTUNITY
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    prefetch={false}
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                Main Secretariat (Tamale)
              </h3>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>
                  University for Development Studies (UDS), Tamale Campus
                  <br />
                  P.O. Box TL 1350
                  <br />
                  Digital Address: NT-0272-1946
                  <br />
                  Tamale, Northern Region, Ghana.
                </span>
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                Project Coordination Office (Accra)
              </h3>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>
                  AfCFTA Young Entrepreneurs Federation (AfYEF)
                  <br />
                  26 Atomic Hills Estates Street, Dome-Kwabenya
                  <br />
                  Accra, Ghana.
                </span>
              </p>
            </div>
          </div>

          {/* Contact and policies */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>
                  Phone:{" "}
                  <a href={contact.phoneHref} className="hover:text-white">
                    {contact.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>
                  Email:{" "}
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                  {" | "}
                  <a href={`mailto:${contact.additionalEmail}`} className="hover:text-white">
                    {contact.additionalEmail}
                  </a>
                </span>
              </li>
              <li className="text-sm leading-relaxed text-white/75">
                Websites:{" "}
                {siteConfig.websites.map((website, index) => (
                  <span key={website.href}>
                    {index > 0 ? " | " : null}
                    <a
                      href={website.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {website.label}
                    </a>
                  </span>
                ))}
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider">
              Policies
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              {policies.map((policy) => (
                <li key={policy.href}>
                  <Link
                    prefetch={false}
                    href={policy.href}
                    className="transition-colors hover:text-white"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>

            <SocialLinks
              className="mt-6 flex-wrap"
              linkClassName="bg-white/10 text-white hover:bg-white hover:text-[var(--brand-primary)]"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-lg border border-white/15 bg-black/10 p-5 text-xs leading-relaxed text-white/75">
          <p>
            JDM-PLLC is a proposed legacy and youth-development initiative led
            by AfYEF. It does not claim government ownership, government
            funding or presidential endorsement. References to institutions,
            partners, locations and facilities are subject to formal agreements,
            approvals and applicable laws. No partnership listing constitutes a
            funding commitment, endorsement, ownership interest or other
            obligation unless confirmed through appropriate formal
            documentation.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-white/75">
            ©️ 2026 John Dramani Mahama Presidential Library &amp; Legacy Centre
            (JDM-PLLC). All rights reserved.
          </p>
          <p className="text-sm text-white/75">
            An AfYEF-led initiative ·{" "}
            <a
              href="https://www.afyef.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              www.afyef.org
            </a>
            {" · "}
            Powered by TEGPA
          </p>
        </div>
      </div>
    </footer>
  );
}
