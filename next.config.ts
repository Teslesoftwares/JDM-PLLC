import type { NextConfig } from "next";

/**
 * Security response headers.
 *
 * Applied globally for defence-in-depth. The CSP is deliberately permissive
 * enough not to break the application (Next.js injects inline scripts and
 * styles for hydration, fonts are self-hosted via next/font, and images are
 * served by the implicit `/_next/image` optimizer): frame protection, MIME
 * sniffing and origin policy are the effective gains here, with CSP as a
 * baseline that can be tightened once the exact inline-script needs are known.
 */
const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "off",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://johnmahama.org https://cdn.modernghana.com",
      "font-src 'self' data:",
      "connect-src 'self'",
      "media-src 'self' blob: data:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

/** Sensitive surfaces never get cached: the dashboard and the patient portal. */
const noStore = [
  {
    key: "Cache-Control",
    value: "private, no-store, max-age=0",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy fertility-era routes, kept alive for old links and hero slides.
      { source: "/fertility", destination: "/legacy", permanent: true },
      { source: "/doctors", destination: "/leadership", permanent: true },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "johnmahama.org" }],
  },
  async headers() {
    return [
      // Everything: baseline security headers.
      { source: "/(.*)", headers: securityHeaders },
      // Session-bearing APIs and screens must not be cached in any form.
      { source: "/api/:path*", headers: noStore },
      { source: "/dashboard/:path*", headers: noStore },
      { source: "/portal/:path*", headers: noStore },
    ];
  },
};

export default nextConfig;