import type { MetadataRoute } from "next";
import { centreServices, centreBranches, siteConfig } from "@/config/site";

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
  const base = (process.env.NEXT_PUBLIC_APP_URL || siteConfig.url).replace(/\/$/, "");

  const staticPaths: Array<{ path: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/legacy", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/programmes", changeFrequency: "monthly", priority: 0.8 },
    { path: "/research", changeFrequency: "monthly", priority: 0.8 },
    { path: "/governance", changeFrequency: "monthly", priority: 0.7 },
    { path: "/branches", changeFrequency: "monthly", priority: 0.6 },
    { path: "/events", changeFrequency: "weekly", priority: 0.7 },
    { path: "/news", changeFrequency: "weekly", priority: 0.7 },
    { path: "/partner", changeFrequency: "monthly", priority: 0.8 },
    { path: "/eam-terdi", changeFrequency: "monthly", priority: 0.6 },
    { path: "/donate", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
    { path: "/donation-policy", changeFrequency: "monthly", priority: 0.4 },
    { path: "/data-protection", changeFrequency: "monthly", priority: 0.4 },
    { path: "/accessibility", changeFrequency: "monthly", priority: 0.4 },
  ];

  return [
    ...staticPaths.map((entry) => ({
      url: `${base}${entry.path}`,
      lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })),
    ...centreServices.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...centreBranches.map((branch) => ({
      url: `${base}/branches/${branch.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}