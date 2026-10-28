import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";

/**
 * Shared page header for the public site.
 *
 * Gives every marketing page the same gradient treatment, an optional
 * breadcrumb trail and an H1, which keeps the heading hierarchy correct (one
 * H1 per page) now that the content of each page is driven by configuration.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** `[{ label, href? }]`; the last item is rendered as the current page. */
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "cinematic-page-hero relative isolate overflow-hidden bg-[var(--brand-primary)] bg-cover bg-center py-16 text-white lg:py-20",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.14), transparent 55%), linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-text) 100%)",
      }}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 400"
      >
        <defs>
          <pattern id="mc-hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="1200" height="400" fill="url(#mc-hero-dots)" />
      </svg>

      <div className="motion-hero-copy relative z-10 mx-auto max-w-7xl px-4">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/75">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {description}
          </p>
        ) : null}

        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  );
}