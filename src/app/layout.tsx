import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import Providers from "@/components/providers";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | The Northern Star Centre`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "John Dramani Mahama Presidential Library",
    "Northern Star Centre",
    "presidential library Ghana",
    "leadership development Africa",
    "Pan-African fellowships",
    "Indigenous Knowledge Systems",
    "heritage preservation Ghana",
    "governance research Africa",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | The Northern Star Centre`,
    description,
    images: [
      { url: "/brand/jdm-pllc-logo-brown.png", width: 1200, height: 519, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | The Northern Star Centre`,
    description,
    images: ["/brand/jdm-pllc-logo-brown.png"],
  },
  icons: {
    icon: [
      { url: "/brand/jdm-pllc-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/jdm-pllc-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/jdm-pllc-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: true, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7a4b28",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.locale.language} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <QueryProvider>{children}</QueryProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}