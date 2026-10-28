import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Robots policy.
 *
 * Everything is crawlable except authenticated surfaces and API routes, which
 * must never be indexed. Served from the public origin.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");

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
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}