"use client";

import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  MessageCircle,
  Copy,
  Share2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

// metadata moved to layout or removed for client component

const platforms = [
  {
    name: "LinkedIn",
    icon: Share2,
    color: "bg-[#0A66C2]",
    size: "1200×627",
    copy: `The JDM Presidential Library & Legacy Centre — The Northern Star Centre — is now open for strategic partnerships and investment.

🏛️ A world-class presidential library, museum, and leadership academy honouring H.E. John Dramani Mahama — Ghana's 12th & 14th President.

📍 Three campuses: Tamale · Busunu · Bole (Northern Ghana)
🎯 PEECS Framework: Preserve · Empower · Educate · Celebrate · Sustain
💼 Investment opportunities from GHS 50,000 to institutional partnerships

This is more than a building. It is a living institution for Africa and the world.

Partner with us: https://jdmpresidentiallibrary.org/partner
Download the prospectus: https://jdmpresidentiallibrary.org/data/PDF%20-Preserving-Legacy-Building-Futures.pdf

#JDMPresidentialLibrary #NorthernStarCentre #GhanaLeadership #AfricanHeritage #PresidentialLegacy #Investment #Ghana`,
    shareUrl: "https://www.linkedin.com/sharing/share-offsite/?url=https://jdmpresidentiallibrary.org",
  },
  {
    name: "X / Twitter",
    icon: Share2,
    color: "bg-black",
    size: "1200×675",
    copy: `🌟 The JDM Presidential Library & Legacy Centre is seeking partners to build Africa's next great institution of memory and leadership.

H.E. John Dramani Mahama's legacy — preserved, celebrated, and activated for generations.

🏛️ Three campuses across Northern Ghana
📖 Presidential library, museum & leadership academy
🤝 Partnership opportunities open now

https://jdmpresidentiallibrary.org | #NorthernStarCentre #Ghana #PresidentialLegacy`,
    shareUrl: "https://twitter.com/intent/tweet?url=https://jdmpresidentiallibrary.org&text=The%20JDM%20Presidential%20Library%20%26%20Legacy%20Centre%20is%20seeking%20partners%20to%20build%20Africa's%20next%20great%20institution%20of%20memory%20and%20leadership.%20%23NorthernStarCentre%20%23Ghana%20%23PresidentialLegacy",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    size: "1080×1080",
    copy: `*JDM Presidential Library & Legacy Centre*
_The Northern Star Centre_

Greetings,

I wanted to share an exciting opportunity with you. The JDM Presidential Library & Legacy Centre — honouring the legacy of H.E. John Dramani Mahama, Ghana's 12th & 14th President — is now seeking strategic partners and investors.

*What is it?*
A world-class presidential library, museum, leadership academy, and heritage centre across three campuses in Northern Ghana (Tamale, Busunu, and Bole).

*Why it matters:*
• Preserves a defining chapter of Ghana's democratic history
• Creates a Pan-African centre for leadership development
• Drives heritage tourism and economic development in the North

*How to get involved:*
Visit: https://jdmpresidentiallibrary.org
Contact: info@jdmpresidentiallibrary.org
Call: +233 244 020 280

Download the full prospectus at: https://jdmpresidentiallibrary.org/data/PDF%20-Preserving-Legacy-Building-Futures.pdf

The Northern Star Shall Rise. 🌟`,
    shareUrl: "https://wa.me/?text=JDM%20Presidential%20Library%20%26%20Legacy%20Centre%20-%20The%20Northern%20Star%20Centre%20is%20now%20seeking%20strategic%20partners%20and%20investors.%20https://jdmpresidentiallibrary.org",
  },
  {
    name: "Facebook",
    icon: Share2,
    color: "bg-[#1877F2]",
    size: "1200×630",
    copy: `The JDM Presidential Library & Legacy Centre — The Northern Star Centre — is now open for strategic partnerships and investment. A world-class presidential library, museum, and leadership academy honouring H.E. John Dramani Mahama, Ghana's 12th & 14th President. Three campuses: Tamale · Busunu · Bole (Northern Ghana). Partner with us: https://jdmpresidentiallibrary.org/partner`,
    shareUrl: "https://www.facebook.com/sharer/sharer.php?u=https://jdmpresidentiallibrary.org",
  },
  {
    name: "Instagram",
    icon: Share2,
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
    size: "1080×1080",
    copy: `The Northern Star Shall Rise. 🌟

We are building something extraordinary in Northern Ghana — a presidential library, museum, and leadership academy that will honour the legacy of H.E. John Dramani Mahama and inspire generations of African leaders.

The JDM Presidential Library & Legacy Centre — The Northern Star Centre — is now open for partnerships and investment.

Three campuses. One vision. A legacy for Africa.

📍 Tamale · Busunu · Bole, Northern Ghana
🏛️ Presidential Library & Museum
🎓 Leadership Academy & Fellowships
🌍 Pan-African Heritage Centre

Partner with us. Link in bio.

#JDMPresidentialLibrary #NorthernStarCentre #Ghana #GhanaLeadership #PresidentialLegacy #AfricanHeritage #JohnDramaniMahama #NorthernGhana #HeritageGhana #InvestInGhana #PanAfrica #Leadership #LegacyCentre #GhanaHistory`,
    shareUrl: "https://www.instagram.com/",
  },
];

export default function SharePage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership Promotion"
        title="Share the Legacy"
        description="Help us build the Northern Star Centre. Below are ready-to-use posts, captions, and sharing cards — optimised for each platform — so you can spread the word with one click."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Share" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8">
            <p className="mb-2 text-lg font-semibold text-[var(--brand-text)]">Quick share the Legacy page directly:</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://jdmpresidentiallibrary.org" target="_blank" rel="noopener noreferrer">
                  <Share2 className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild className="bg-black text-white hover:bg-black/90">
                <a href="https://twitter.com/intent/tweet?url=https://jdmpresidentiallibrary.org&text=The%20JDM%20Presidential%20Library%20%26%20Legacy%20Centre%20-%20The%20Northern%20Star%20Centre%20is%20now%20open%20for%20strategic%20partnerships%20and%20investment." target="_blank" rel="noopener noreferrer">
                  <Share2 className="mr-2 h-4 w-4" />
                  X / Twitter
                </a>
              </Button>
              <Button asChild className="bg-[#25D366] text-white hover:bg-[#25D366]/90">
                <a href="https://wa.me/?text=JDM%20Presidential%20Library%20%26%20Legacy%20Centre%20-%20The%20Northern%20Star%20Centre%20is%20now%20seeking%20strategic%20partners%20and%20investors.%20https://jdmpresidentiallibrary.org" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://jdmpresidentiallibrary.org" target="_blank" rel="noopener noreferrer">
                  <Share2 className="mr-2 h-4 w-4" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-[var(--brand-text)]">Platform-Optimised Cards</h2>
            <p className="mb-8 text-[var(--brand-text-light)]">Ready-to-Use Sharing Kits</p>

            <div className="space-y-6">
              {platforms.map((platform) => (
                <Card key={platform.name} className="border-0 shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      <div className="p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${platform.color} text-white`}>
                            <platform.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-[var(--brand-text)]">{platform.name}</h3>
                            <p className="text-xs text-[var(--brand-text-light)]">Optimised for {platform.size}</p>
                          </div>
                        </div>
                        <div className="mb-4 rounded-lg bg-[var(--brand-accent)] p-4">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-8 w-8 rounded bg-[var(--brand-primary)] flex items-center justify-center text-white text-xs font-bold">JDM</div>
                            <div>
                              <p className="text-sm font-semibold text-[var(--brand-text)]">JDM Presidential Library & Legacy Centre</p>
                              <p className="text-xs text-[var(--brand-text-light)]">jdmpresidentiallibrary.org</p>
                            </div>
                          </div>
                          <p className="text-sm text-[var(--brand-text)]">
                            {platform.name === "LinkedIn" && "Invest in Africa's Most Significant Presidential Legacy Project"}
                            {platform.name === "X / Twitter" && "The Northern Star Shall Rise"}
                            {platform.name === "WhatsApp" && "Share With Your Network"}
                            {platform.name === "Facebook" && "JDM Presidential Library & Legacy Centre"}
                            {platform.name === "Instagram" && "Caption for Instagram Post"}
                          </p>
                        </div>
                        <div className="mb-4">
                          <p className="mb-2 text-xs font-semibold text-[var(--brand-text)]">Post Copy — {platform.name}</p>
                          <div className="max-h-40 overflow-y-auto rounded bg-gray-50 p-3 text-xs whitespace-pre-wrap text-[var(--brand-text-light)]">
                            {platform.copy}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            className="bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)]"
                            onClick={() => navigator.clipboard.writeText(platform.copy)}
                          >
                            <Copy className="mr-2 h-3 w-3" />
                            Copy for {platform.name}
                          </Button>
                          <Button asChild size="sm" variant="outline" className="border-[var(--brand-primary)] text-[var(--brand-primary)]">
                            <a href={platform.shareUrl} target="_blank" rel="noopener noreferrer">
                              Open {platform.name}
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-warm)] p-6 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-[var(--brand-primary)] flex items-center justify-center text-white font-bold">
                            JDM
                          </div>
                          <p className="font-semibold text-[var(--brand-text)]">JDM Presidential Library & Legacy Centre</p>
                          <p className="text-sm text-[var(--brand-text-light)]">The Northern Star Centre</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            The Northern Star Shall Rise
          </h2>
          <p className="mb-8 text-white/85">
            Every share brings us closer to building this legacy for Africa and the world.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-white/90">
              <Link href="/partner">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)]"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
