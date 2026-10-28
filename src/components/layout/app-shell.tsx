"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEffect, useId, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft, LockKeyhole, LogOut, Menu } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/utils";

export interface AppNavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Application frame shared by the staff dashboard and the patient portal.
 *
 * The public marketing header is deliberately not reused here: a signed-in
 * clinician or patient does not need the site navigation, and the portal must
 * not offer links to areas that do not exist for them. The clinic identity comes
 * from `@/config/site` through `Logo`, so a rename is a single-file change.
 *
 * The drawer is rendered only while it is open so its links never sit in the tab
 * order behind a hidden overlay, and navigation closes it.
 */
export function AppShell({
  nav,
  homeHref,
  navLabel,
  userName,
  userRole,
  children,
}: {
  nav: AppNavItem[];
  /** Route the wordmark links to, usually the section's own dashboard. */
  homeHref: string;
  /** Accessible name for the navigation landmark, e.g. "Clinic dashboard". */
  navLabel: string;
  userName: string;
  userRole: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerId = useId();

  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setDrawerOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const navClass = (active: boolean, centred = false) =>
    cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
      active
        ? "bg-[var(--brand-accent)] text-[var(--brand-primary)]"
        : "text-[var(--brand-text-light)] hover:bg-gray-100",
      centred && "justify-center px-2"
    );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside
        className={cn(
          "hidden shrink-0 flex-col border-r bg-white transition-[width] duration-300 lg:flex",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex h-16 items-center justify-between gap-1 border-b px-3">
          {collapsed ? (
            <Logo href={homeHref} size="sm" className="mx-auto" />
          ) : (
            <Logo href={homeHref} size="sm" />
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            onClick={() => setCollapsed((value) => !value)}
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                collapsed && "rotate-180"
              )}
            />
          </Button>
        </div>

        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-1 px-2" aria-label={navLabel}>
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={navClass(isActive(item.href), collapsed)}
                aria-current={isActive(item.href) ? "page" : undefined}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {!collapsed ? <span>{item.name}</span> : null}
              </Link>
            ))}
          </nav>
        </ScrollArea>

        <div className="border-t p-3">
          <div
            className={cn(
              "flex items-center",
              collapsed ? "justify-center" : "gap-3"
            )}
          >
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarFallback className="bg-[var(--brand-primary)] text-xs font-bold text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            {!collapsed ? (
              <>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--brand-text)]">
                    {userName}
                  </p>
                  <p className="truncate text-xs text-[var(--brand-text-light)]">
                    {userRole}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Sign out"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : null}
          </div>
          <Link
            href="/account/password"
            className={cn(navClass(false, collapsed), "mt-2")}
            title={collapsed ? "Change password" : undefined}
          >
            <LockKeyhole className="h-5 w-5 shrink-0" aria-hidden="true" />
            {!collapsed ? <span>Change password</span> : null}
          </Link>
        </div>
      </aside>

      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setDrawerOpen(false)}
          />
          <div
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label={navLabel}
            className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-white shadow-xl"
          >
            <div className="flex h-16 items-center border-b px-3">
              <Logo href={homeHref} size="sm" />
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-2" aria-label={navLabel}>
              {nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={navClass(isActive(item.href))}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setDrawerOpen(false)}
                >
                  <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            <div className="border-t p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="bg-[var(--brand-primary)] text-xs font-bold text-white">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--brand-text)]">
                    {userName}
                  </p>
                  <p className="truncate text-xs text-[var(--brand-text-light)]">
                    {userRole}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Sign out"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
              <Link
                href="/account/password"
                onClick={() => setDrawerOpen(false)}
                className={cn(navClass(false), "mt-3")}
              >
                <LockKeyhole className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Change password</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b bg-white px-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls={drawerId}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Logo href={homeHref} size="sm" />
          <div className="ml-auto flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-[var(--brand-primary)] text-xs font-bold text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Sign out"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <main className="motion-page-enter flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}