import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils";

/**
 * The institutional lockup: the JDM PLLC emblem and wordmark.
 *
 * Used in the public header, the mobile drawer, the dashboard and portal
 * sidebars, and the sign-in screens. Two colourways are shipped so the mark
 * stays legible on both light surfaces and the dark hero/footer: a brown
 * rendition for light backgrounds and the original gold for dark ones.
 */
export function Logo({
  href = "/",
  size = "default",
  invert = false,
  className,
}: {
  /** `null` renders the lockup without wrapping it in a link. */
  href?: string | null;
  size?: "sm" | "default";
  /** For use on dark surfaces, where the mark must render in its gold colourway. */
  invert?: boolean;
  className?: string;
}) {
  const content = (
    <Image
      src={invert ? "/brand/jdm-pllc-logo-gold.png" : "/brand/jdm-pllc-logo-brown.png"}
      alt={siteConfig.name}
      width={1200}
      height={519}
      priority
      className={cn(
        "w-auto shrink-0",
        size === "sm" ? "h-9 md:h-10 lg:h-11" : "h-12 md:h-14 lg:h-16 xl:h-20"
      )}
    />
  );

  const classes = cn("flex items-center gap-2", className);

  if (href === null) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <Link href={href} className={classes} aria-label={`${siteConfig.name} home`}>
      {content}
    </Link>
  );
}
