import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Web app manifest. Keeps the installed-app name and theme colour in step with
 * the brand tokens in `globals.css` and the JDM PLLC mark in `public/brand`.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#7a4b28",
    lang: siteConfig.locale.language,
    dir: "ltr",
    categories: ["health", "medical"],
    icons: [
      {
        src: "/brand/jdm-pllc-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/jdm-pllc-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 16x16",
        type: "image/x-icon",
        purpose: "any",
      },
    ],
  };
}