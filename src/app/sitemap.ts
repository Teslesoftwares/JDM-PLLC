import type { MetadataRoute } from "next";
import { clinicServices, clinicBranches, siteConfig } from "@/config/site";

/**
 * Public sitemap.
 *
 * Only pages that are safe to index are listed. Authenticated surfaces
 * (`/dashboard`, `/portal`, `/admin`, `/patient`) and every API route are
 * excluded, and `/reset-password` is omitted because it is only reachable with
 * a single-use token.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  const staticPaths: Array<{ path: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mission", changeFrequency: "monthly", priority: 0.8 },
    { path: "/legacy", changeFrequency: "monthly", priority: 0.8 },
    { path: "/leadership", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/branches", changeFrequency: "monthly", priority: 0.6 },
    { path: "/visit", changeFrequency: "monthly", priority: 0.8 },
    { path: "/events", changeFrequency: "weekly", priority: 0.7 },
    { path: "/news", changeFrequency: "weekly", priority: 0.7 },
    { path: "/research", changeFrequency: "monthly", priority: 0.7 },
    { path: "/outreach", changeFrequency: "monthly", priority: 0.6 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
    { path: "/partner", changeFrequency: "monthly", priority: 0.8 },
    { path: "/share", changeFrequency: "monthly", priority: 0.5 },
    { path: "/donate", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/book-appointment", changeFrequency: "monthly", priority: 0.9 },
    { path: "/login", changeFrequency: "monthly", priority: 0.3 },
    { path: "/forgot-password", changeFrequency: "monthly", priority: 0.2 },
    { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
  ];

  return [
    ...staticPaths.map((entry) => ({
      url: `${base}${entry.path}`,
      lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })),
    ...clinicServices.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...clinicBranches.map((branch) => ({
      url: `${base}/branches/${branch.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}