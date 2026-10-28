"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils";

/** A nav item is active on its own route and on any nested route it owns. */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  /** Href of the mobile submenu that is currently expanded. */
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(false);
      return;
    }

    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [isHomePage]);

  const homeAtTop = isHomePage && !isScrolled;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header
      className={cn(
        "top-0 z-50 w-full border-b transition-colors duration-300",
        isHomePage ? "fixed" : "sticky",
        homeAtTop
          ? "border-white/20 bg-transparent"
          : "border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60",
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "hidden border-b text-white lg:block",
          homeAtTop ? "border-white/15 bg-transparent" : "bg-[var(--brand-primary)]",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={siteConfig.contact.phoneHref} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <Link href="/branches" className="flex items-center gap-1.5 hover:underline">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.contact.addressShort}
            </Link>
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 hover:underline"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo invert={homeAtTop} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {siteConfig.navigation.map((item) =>
            (item as any).children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-haspopup="true"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    homeAtTop
                      ? "text-white hover:bg-white/15 hover:text-white"
                      : "hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)]",
                    isActive(pathname, item.href)
                      ? homeAtTop
                        ? "bg-white/15 text-white"
                        : "bg-[var(--brand-accent)] text-[var(--brand-primary)]"
                      : homeAtTop
                        ? "text-white/90"
                        : "text-[var(--brand-text-light)]"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                </Link>

                {/* Opens on hover and on keyboard focus, so Tab reaches the links. */}
                <div
                  className="invisible absolute left-0 top-full z-50 w-64 pt-1 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                >
                  <ul className="overflow-hidden rounded-xl border border-black/10 bg-white py-2 shadow-lg">
                    {(item as any).children.map((child: any, index: number) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)]",
                            pathname === child.href
                              ? "bg-[var(--brand-accent)] text-[var(--brand-primary)]"
                              : "text-[var(--brand-text)]",
                            index === 0 &&
                              "border-b border-black/5 pb-2 font-semibold text-[var(--brand-primary)]"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  homeAtTop
                    ? "text-white hover:bg-white/15 hover:text-white"
                    : "hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)]",
                  isActive(pathname, item.href)
                    ? homeAtTop
                      ? "bg-white/15 text-white"
                      : "bg-[var(--brand-accent)] text-[var(--brand-primary)]"
                    : homeAtTop
                      ? "text-white/90"
                      : "text-[var(--brand-text-light)]"
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-[var(--brand-yellow)] text-[var(--brand-on-yellow)] hover:bg-[var(--brand-yellow-dark)] lg:inline-flex"
          >
            <Link href="/partner">Partner With Us</Link>
          </Button>
          <Button
            asChild
            className="hidden bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-dark)] lg:inline-flex"
          >
            <Link href="/donate">Donate</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden",
              homeAtTop && "text-white hover:bg-white/15 hover:text-white",
            )}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              if (mobileMenuOpen) closeMobileMenu();
              else setMobileMenuOpen(true);
            }}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile sidebar */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-white shadow-xl transition-transform duration-300 on-light lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <Logo size="sm" />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-1 px-3 py-4" aria-label="Mobile">
          {siteConfig.navigation.map((item) =>
            (item as any).children ? (
              <div key={item.href}>
                <div className="flex items-stretch gap-1">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex-1 rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--brand-accent)]",
                      isActive(pathname, item.href)
                        ? "bg-[var(--brand-accent)] text-[var(--brand-primary)]"
                        : "text-[var(--brand-text-light)]"
                    )}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSubmenu((current) =>
                        current === item.href ? null : item.href,
                      )
                    }
                    aria-expanded={openSubmenu === item.href}
                    aria-controls={"mobile-submenu-" + item.href.replace(/\//g, "")}
                    aria-label={
                      openSubmenu === item.href
                        ? `Hide ${item.label} links`
                        : `Show ${item.label} links`
                    }
                    className="flex w-11 items-center justify-center rounded-md text-[var(--brand-text-light)] transition-colors hover:bg-[var(--brand-accent)]"
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openSubmenu === item.href && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {openSubmenu === item.href ? (
                  <ul
                    id={"mobile-submenu-" + item.href.replace(/\//g, "")}
                    className="mt-1 space-y-0.5 border-l-2 border-[var(--brand-primary)]/20 pl-3"
                  >
                    {(item as any).children.map((child: any) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-[var(--brand-accent)]",
                            pathname === child.href
                              ? "bg-[var(--brand-accent)] font-medium text-[var(--brand-primary)]"
                              : "text-[var(--brand-text-light)]"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--brand-accent)]",
                  isActive(pathname, item.href)
                    ? "bg-[var(--brand-accent)] text-[var(--brand-primary)]"
                    : "text-[var(--brand-text-light)]"
                )}
              >
                {item.label}
              </Link>
            ),
          )}
          <Button
            asChild
            className="mt-3 w-full bg-[var(--brand-yellow)] text-[var(--brand-on-yellow)] hover:bg-[var(--brand-yellow-dark)]"
          >
            <Link
              href="/partner"
              onClick={closeMobileMenu}
            >
              Partner With Us
            </Link>
          </Button>
          <Button
            asChild
            className="mt-3 w-full bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-dark)]"
          >
            <Link
              href="/donate"
              onClick={closeMobileMenu}
            >
              Donate
            </Link>
          </Button>
          <a
            href={siteConfig.contact.phoneHref}
            className="mt-4 flex items-center gap-2 px-3 text-sm font-medium text-[var(--brand-primary)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
