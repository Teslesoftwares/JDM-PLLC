import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { SocialLinks } from "@/components/brand/social-links";
import { siteConfig } from "@/config/site";

/**
 * Public site footer.
 *
 * Contact details come from `@/config/site`, so the footer shows the Centre's
 * verified details without any per-page hardcoding. Social profiles render
 * through `SocialLinks`, which only shows networks the Centre has supplied in
 * `siteConfig.links`.
 */
export function Footer() {
  const { contact, openingHours } = siteConfig;

  /** All footer navigation in one merged list, deduplicated by href. */
  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Legacy", href: "/legacy" },
    { label: "Events", href: "/events" },
    { label: "Leadership", href: "/leadership" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
    { label: "Partner", href: "/partner" },
    { label: "Share", href: "/share" },
    { label: "Donate", href: "/donate" },
    { label: "Mission & Vision", href: "/mission" },
    { label: "Plan Your Visit", href: "/visit" },
    { label: "Library & Museum", href: "/services/library-museum" },
    { label: "Hall of Fame", href: "/services/hall-of-fame" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Research Programs", href: "/research" },
    { label: "Educational Outreach", href: "/outreach" },
  ];

  return (
    <footer className="border-t border-[var(--brand-primary-dark)] bg-[var(--brand-primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo href={null} invert className="mb-4" />
            <p className="text-sm leading-relaxed text-white/75">
              {siteConfig.tagline}. {siteConfig.description}
            </p>
          </div>

          {/* Explore — merged site links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/75 sm:grid-cols-1 lg:grid-cols-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              {contact.additionalEmail && (
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                  <a href={`mailto:${contact.additionalEmail}`} className="hover:text-white">
                    {contact.additionalEmail}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>
                  {contact.address}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>
                  Monday – Friday: {openingHours.schedule.Monday}
                  <br />
                  Saturday: {openingHours.schedule.Saturday}
                  <br />
                  Sunday &amp; Public Holidays: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </h3>
            <SocialLinks
              className="flex-wrap"
              linkClassName="bg-white/10 text-white hover:bg-white hover:text-[var(--brand-primary)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="transition-colors hover:text-white">
              Accessibility
            </Link>
            <span className="text-white/40">Powered by IETSA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
