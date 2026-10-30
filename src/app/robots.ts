import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Robots policy.
 *
 * Everything is crawlable except authenticated surfaces and API routes, which
 * must never be indexed. Served from the public origin.
 */
export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_APP_URL || siteConfig.url).replace(/\/$/, "");
  const sitemap = process.env.SITEMAP_URL?.trim() || `${base}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin",
          "/dashboard",
          "/portal",
          "/patient",
          "/reset-password",
        ],
      },
    ],
    sitemap,
  };
}