/**
 * Central institutional configuration.
 *
 * Every piece of institutional identity used by the public site, the staff
 * dashboard, the portal, emails and generated documents is read from this file.
 * Nothing about the Centre is hardcoded in a page component, so a content
 * change is a single-file change.
 *
 * Values marked `pendingConfirmation: true` are placeholders. They are shown in
 * the interface only where it would be dishonest to hide them (an empty link or
 * an empty phone number renders worse than an explicit "to be confirmed" note).
 *
 * Nothing in this file may claim an accreditation, a success rate, a
 * qualification or a price that has not been confirmed by the Centre.
 */

/** How a configurable item is presented until the clinic confirms it. */
export type PublicationStatus = "CONFIRMED" | "PENDING_CONFIRMATION";

export interface ClinicService {
  name: string;
  slug: string;
  /** One-line summary shown on cards. Never includes a price or a claim. */
  description: string;
  /** Bulleted detail shown on the service page. */
  highlights: string[];
  status: PublicationStatus;
  /** Shown under the title while the offering is unconfirmed. */
  statusNote: string;
}

export interface ClinicBranch {
  name: string;
  slug: string;
  address: string;
  city: string;
  region: string;
  country: string;
  phone: string;
  status: PublicationStatus;
  departments: string[];
}

export interface ClinicTeamMember {
  name: string;
  slug: string;
  specialty: string;
  qualifications: string;
  branch: string;
  bio: string;
  education: string[];
  specializations: string[];
  status: PublicationStatus;
}

/** `Mon`…`Sun` keys mapped to an open/closed day description. */
export type OpeningHours = Record<string, string>;

/** A single primary-navigation entry, optionally owning a submenu. */
export interface NavItem {
  label: string;
  href: string;
  /**
   * Child links rendered as a dropdown on desktop and an accordion on mobile.
   * Absent for plain links.
   */
  children?: { label: string; href: string }[];
}

/**
 * Hero photograph shared by every slide. Swap to per-slide paths once the
 * clinic supplies a photo for each one.
 */

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  mobileBody?: string;
  image?: string;
  video?: string;
  duration?: number;
  videoLoop?: boolean;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

/**
 * Programme and facilities catalogue, hoisted so the primary navigation can
 * build its submenu from the same list the pages render.
 */
const SERVICES = [
  {
    name: "Leadership Laboratory",
    slug: "leadership-laboratory",
    description:
      "\"How to Govern\" Institute — a trans-partisan training ground where participants examine the realities of governance through immersive case studies.",
    highlights: [
      "Crisis management and infrastructure delivery",
      "Public accountability and ethical decision-making",
      "Democratic governance and national development planning",
      "Immersive, real-world leadership case studies",
    ],
    status: "CONFIRMED" as PublicationStatus,
    statusNote:
      "Cohort dates, fees and application windows are confirmed with the Centre at the time of enquiry.",
  },
  {
    name: "Pan-African Fellowship Programme",
    slug: "pan-african-fellowships",
    description:
      "A flagship cohort programme selecting exceptional young leaders from across Africa for immersive leadership development, mentorship and continental networking.",
    highlights: [
      "Cohort-based selection of exceptional young leaders",
      "Mentorship and continental networking",
      "The first cohort of the Northern Star generation",
      "Applications open ahead of each annual cohort",
    ],
    status: "CONFIRMED" as PublicationStatus,
    statusNote:
      "Cohort dates, eligibility and application windows are confirmed with the Centre at the time of enquiry.",
  },
  {
    name: "Indigenous Knowledge Systems Centre",
    slug: "indigenous-knowledge",
    description:
      "The root system of the institution — researching and preserving the governance traditions, oral histories and ancestral wisdom embedded in Indigenous Knowledge Systems.",
    highlights: [
      "Traditional governance systems and conflict resolution",
      "Oral histories and African languages",
      "Traditional ecological knowledge",
      "Intergenerational knowledge transfer",
    ],
    status: "CONFIRMED" as PublicationStatus,
    statusNote:
      "Research access and collaboration terms are agreed with the Centre before any visit.",
  },
  {
    name: "Presidential Library & Museum",
    slug: "library-museum",
    description:
      "The historical and emotional core of the institution at the Heart branch in Bole — where Africa's stories are preserved, celebrated and projected to the world.",
    highlights: [
      "Presidential archives and exhibits",
      "Museum collections and public galleries",
      "Research access for scholars and students",
      "Admission free for Ghanaian citizens",
    ],
    status: "CONFIRMED" as PublicationStatus,
    statusNote:
      "Visiting hours: Monday–Friday, 9:00 AM–5:00 PM; Saturday, 10:00 AM–4:00 PM. Admission is free for Ghanaian citizens; international visitors: GHS 50.",
  },
  {
    name: "Northern Star Hall of Fame",
    slug: "hall-of-fame",
    description:
      "The premier Pan-African repository celebrating transformational leadership and public service — honouring those whose leadership changed lives and shaped history.",
    highlights: [
      "Public service and traditional leadership",
      "Scholarship and entrepreneurship",
      "Arts and culture, humanitarian service",
      "Preserving the stories of those who illuminated the path",
    ],
    status: "CONFIRMED" as PublicationStatus,
    statusNote:
      "Nomination procedures and induction timelines are confirmed with the Centre.",
  },
  {
    name: "Virtual Northern Star Library & Digital Archive",
    slug: "digital-archive",
    description:
      "A globally accessible digital repository of leadership case studies, oral histories, governance research and archival materials from across the African continent.",
    highlights: [
      "Leadership case studies and governance research",
      "Oral histories from across the continent",
      "Archival materials available worldwide from day one",
      "Remote research access on request",
    ],
    status: "CONFIRMED" as PublicationStatus,
    statusNote:
      "Archive access terms and launch dates are confirmed with the Centre at the time of enquiry.",
  },
] satisfies ClinicService[];

export const siteConfig = {
  /** Full legal-facing name used in metadata, footers and documents. */
  name: "JDM Presidential Library & Legacy Centre",
  /** Formal name. */
  formalName: "John Dramani Mahama Presidential Library & Legacy Centre (JDM PLLC)",
  /** Compact name used where the full name will not fit (logo lockups, tabs). */
  shortName: "JDM PLLC",
  /** Descriptor shown under the short name. */
  descriptor: "Operating as The Northern Star Centre",
  /** Used in the browser tab, emails and document headers. */
  tagline: "Preserving Legacy. Building Futures.",
  launchDate: "30 November 2026",
  description:
    "A continental institution for leadership, heritage, research and human dignity — rooted in Northern Ghana and serving Africa and the world.",
  /**
   * Homepage hero carousel. Slides without an `image` fall back to the brand
   * green treatment, so the clinic can add photography one slide at a time.
   */
  heroSlides: [
    {
      id: "welcome",
      eyebrow: "The Northern Star Centre",
      title: "Preserving legacy. Building futures.",
      body: "A continental institution for leadership, heritage, research and human dignity — rooted in Northern Ghana and serving Africa and the world.",
      mobileBody: "Rooted in Northern Ghana, serving Africa and the world.",
      image: "/images/hero/northern-star-sunset.png",
      duration: 9000,
      videoLoop: false,
      primary: { label: "Discover the Centre", href: "/about" },
      secondary: { label: "Explore our programmes", href: "/services" },
    },
    {
      id: "consultations",
      eyebrow: "A Living Curriculum for Africa's Future",
      title: "Study leadership. Practice governance. Serve humanity.",
      body: "The Mahama Leadership Framework turns decades of public service and governance experience into case studies for leadership education, research and practical application.",
      mobileBody: "A living leadership curriculum grounded in public service and governance.",
      image: "/images/hero/architectural-pan-poster.jpg",
      video: "/images/hero/architectural-pan.mp4",
      duration: 15000,
      videoLoop: false,
      primary: { label: "Explore the framework", href: "/legacy" },
      secondary: { label: "Our mission", href: "/mission" },
    },
    {
      id: "investigations",
      eyebrow: "Indigenous Knowledge Systems",
      title: "Ancestral wisdom informing today's leadership",
      body: "The Centre researches and preserves traditional governance, conflict resolution, oral histories, African languages and ecological knowledge for future generations.",
      mobileBody: "Preserving Indigenous knowledge and bringing it into conversation with contemporary development.",
      image: "/images/hero/campus-walk-poster.jpg",
      video: "/images/hero/campus-walk.mp4",
      duration: 12000,
      videoLoop: false,
      primary: { label: "Explore our programmes", href: "/services" },
      secondary: { label: "Partner with us", href: "/partner" },
    },
    {
      id: "care-plan",
      eyebrow: "Mind · Soul · Heart",
      title: "Three branches. One constellation.",
      body: "The academic and leadership wing in Tamale, character and ethical formation in Busunu, and the global headquarters and living heritage hub in Bole form one integrated institution.",
      mobileBody: "Tamale, Busunu and Bole: three integrated branches with one shared purpose.",
      duration: 12000,
      videoLoop: false,
      primary: { label: "Explore the branches", href: "/branches" },
      secondary: { label: "Our founding decade", href: "/legacy" },
    },
    {
      id: "support",
      eyebrow: "2026 · The Year of First Light",
      title: "The work begins while the institution is being built.",
      body: "The Centre is launching its intellectual and programmatic foundations: a digital archive, the Northern Star Annual Lecture, Pan-African fellowships and an Indigenous Knowledge oral history initiative.",
      mobileBody: "Programmes, partnerships, fellowships and archives establish the Centre's intellectual footprint.",
      duration: 12000,
      videoLoop: false,
      primary: { label: "See the 2026 initiatives", href: "/news" },
      secondary: { label: "Become a partner", href: "/partner" },
    },
    {
      id: "visit",
      eyebrow: "Join the constellation",
      title: "An invitation to shape an enduring African institution",
      body: "We welcome universities, foundations, development partners, corporations, philanthropists, traditional authorities, governments and diaspora communities.",
      mobileBody: "Help shape a lasting institution for Africa and the world.",
      duration: 12000,
      videoLoop: false,
      primary: { label: "Partner with us", href: "/partner" },
      secondary: { label: "Contact the Centre", href: "/contact" },
    },
  ] as HeroSlide[],
  /**
   * Canonical origin. Overridden by APP_URL so a deployment can point at its
   * own domain without a code change.
   */
  url: process.env.APP_URL || "http://localhost:3000",
  /**
   * Public website address.
   */
  website: process.env.CLINIC_WEBSITE || "https://www.jdmpllc.org",
  /** Contact details for The Northern Star Centre in Accra, Ghana. */
  contact: {
    phone: "+233 244 020 280",
    phoneHref: "tel:+233244020280",
    email: process.env.CLINIC_EMAIL || "info@jdmpresidentiallibrary.org",
    additionalEmail: "president@afyef.org",
    address: "Dome-Kwabenya, Accra, Ghana",
    addressShort: "Dome-Kwabenya, Accra, Ghana",
    city: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    countryCode: "GH",
    latitude: null as number | null,
    longitude: null as number | null,
  },
  locale: {
    /** BCP-47 tag used for metadata and number/date formatting. */
    language: "en-GH",
    currency: "GHS",
    currencySymbol: "GH₵",
    timeZone: "Africa/Accra",
  },
  /** Social profiles. Empty strings render nothing until the Centre supplies them. */
  links: {
    /**
     * Social profiles for the Centre (@jdmpllc). Each can still be overridden
     * via environment variable; an empty string renders nothing, so an
     * unverified handle is never published.
     */
    facebook:
      process.env.CLINIC_FACEBOOK || "https://www.facebook.com/share/1CYwsvnias/",
    instagram: process.env.CLINIC_INSTAGRAM || "https://instagram.com/jdmpllc",
    tiktok: process.env.CLINIC_TIKTOK || "https://tiktok.com/@jdmpllc",
    x: process.env.CLINIC_X || "https://x.com/jdmpllc",
    /** Pending confirmation by the Centre — left empty until then. */
    linkedin: process.env.CLINIC_LINKEDIN || "",
  },
  /**
   * Google Business Profile review link, shown as a badge in the footer.
   * Google's share link lands the visitor on the listing's review prompt; the
   * footer opens it in a new tab so nobody loses their place on the site.
   */
  googleReview: {
    url: "https://share.google/G47fxjDAC79bIbrv1",
    label: "Review us on Google",
  },
  /**
   * Institutional partners and endorsing bodies, shown on the homepage.
   * Logos are the Centre's own assets; descriptions are limited to what the
   * Centre has confirmed (see the partner and FAQ pages).
   */
  partners: [
    {
      name: "University for Development Studies",
      logo: "/images/partners/university-for-development-studies.png",
      detail: "Foundational anchor partner",
    },
    {
      name: "National Commission on Culture, Ghana",
      logo: "/images/partners/national-commission-on-culture.png",
    },
    {
      name: "Sagnerigu Municipal Assembly",
      logo: "/images/partners/sagnerigu-municipal-assembly.jpg",
    },
    {
      name: "AfCFTA Young Entrepreneurs Federation (AfyEF)",
      logo: "/images/partners/afyef.jpg",
    },
  ],
  /**
   * Ways to give.
   *
   * Institutional bank and Mobile Money details are published only once the
   * Centre supplies them. An empty value renders a "shared on request" note
   * instead of an unverified account number, so a donor is never sent money to
   * an account the Centre has not confirmed.
   */
  donation: {
    bank: {
      bankName: process.env.CLINIC_DONATION_BANK_NAME || "",
      accountName: process.env.CLINIC_DONATION_ACCOUNT_NAME || "",
      accountNumber: process.env.CLINIC_DONATION_ACCOUNT_NUMBER || "",
      branch: process.env.CLINIC_DONATION_BRANCH || "",
      swift: process.env.CLINIC_DONATION_SWIFT || "",
    },
    mobileMoney: {
      provider: process.env.CLINIC_DONATION_MOMO_PROVIDER || "",
      number: process.env.CLINIC_DONATION_MOMO_NUMBER || "",
      name: process.env.CLINIC_DONATION_MOMO_NAME || "",
    },
  },
  /**
   * WhatsApp line behind the mobile floating button. `wa.me` needs the number in
   * digits-only international form; an empty value hides the button entirely.
   */
  whatsapp: {
    number: "233244020280",
    /** Message pre-filled when the visitor opens the chat. */
    message: "Hello JDM-PLLC, I would like to make an enquiry.",
    /** One-tap openers offered in the floating panel. */
    quickReplies: [
      "I would like to partner with JDM-PLLC.",
      "I have a question about the Library.",
    ],
  },
  openingHours: {
    summary: "Monday – Friday, 9:00 AM – 5:00 PM · Saturday, 10:00 AM – 4:00 PM",
    /** Per-day detail. Sunday and public holidays are closed. */
    schedule: {
      Monday: "9:00 AM – 5:00 PM",
      Tuesday: "9:00 AM – 5:00 PM",
      Wednesday: "9:00 AM – 5:00 PM",
      Thursday: "9:00 AM – 5:00 PM",
      Friday: "9:00 AM – 5:00 PM",
      Saturday: "10:00 AM – 4:00 PM",
      Sunday: "Closed",
    } as OpeningHours,
  },
  /**
   * Operational locations. The Centre is structured around three integrated
   * branches — Mind (Tamale), Soul (Busunu) and Heart (Bole) — with its
   * administrative contact office in Accra.
   */
  branches: [
    {
      name: "Mind — Tamale",
      slug: "tamale",
      address: "GHANASCO, Tamale",
      city: "Tamale",
      region: "Northern",
      country: "Ghana",
      phone: "+233 244 020 280",
      status: "CONFIRMED" as PublicationStatus,
      departments: [
        "Academic & Leadership Development Wing",
        "Leadership Laboratory",
        "Pan-African Fellowships",
        "Public Policy Dialogues",
      ],
    },
    {
      name: "Soul — Busunu",
      slug: "busunu",
      address: "Mama Habiba Wing, Busunu",
      city: "Busunu",
      region: "Savannah",
      country: "Ghana",
      phone: "+233 244 020 280",
      status: "CONFIRMED" as PublicationStatus,
      departments: [
        "Character & Ethical Formation Wing",
        "Character Formation",
        "Integrity and Values",
        "Intergenerational Dialogue",
      ],
    },
    {
      name: "Heart — Bole",
      slug: "bole",
      address: "Global Headquarters, Bole",
      city: "Bole",
      region: "Savannah",
      country: "Ghana",
      phone: "+233 244 020 280",
      status: "CONFIRMED" as PublicationStatus,
      departments: [
        "Global Headquarters & Living Heritage Hub",
        "Presidential Library & Museum",
        "Northern Star Hall of Fame",
        "Skills Transformation Hub",
      ],
    },
  ] satisfies ClinicBranch[],
  /**
   * Programme catalogue — the Centre's public offerings, as described in the
   * institutional prospectus.
   */
  services: SERVICES,
  /**
   * Public team directory.
   *
   * Empty by design: a person's name, role and credentials are not published
   * until the Centre verifies them. Add verified profiles here and the
   * directory renders.
   */
  team: [] as ClinicTeamMember[],
  /**
   * Published testimonials.
   *
   * Empty by design. Only add an entry once the person has given written
   * consent.
   */
  testimonials: [] as Array<{
    name: string;
    content: string;
    service: string;
  }>,
  /**
   * Institutional milestones shown on the About and Legacy pages — the
   * founding decade, 2021–2031.
   */
  milestones: [
    { year: "2021", event: "The Vision Emerges — the idea of transforming presidential legacy into leadership capital is conceived." },
    { year: "2021–2025", event: "Foundations Secured — land acquisition, institutional endorsements and conceptual, architectural and programmatic frameworks completed." },
    { year: "2026", event: "The Inflection Point — soft infrastructure launches: programmes, partnerships, fellowships, archives and digital platforms." },
    { year: "2031", event: "The Decade Delivered — a fully operational, self-sustaining institution connecting Mind (Tamale), Soul (Busunu) and Heart (Bole)." },
  ] as Array<{ year: string; event: string }>,
  /** Photography of the facilities. Empty until genuine photographs are supplied. */
  facilityPhotos: [] as string[],
  /** Primary navigation. `href` values are real routes in this application. */
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Legacy", href: "/legacy" },
    { label: "Events", href: "/events" },
    { label: "Leadership", href: "/leadership" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
    { label: "Share", href: "/share" },
  ] satisfies NavItem[],
} as const;

export type SiteConfig = typeof siteConfig;

/** Convenience accessor for the current institutional name (honours APP_NAME). */
export function clinicName(): string {
  return process.env.APP_NAME || siteConfig.name;
}

/** Every location, used by the branch pages. */
export const clinicBranches = siteConfig.branches;

/** Programmes grouped for the programmes hub. */
export const clinicServices = siteConfig.services;

/** True while an item still needs the Centre's sign-off before publication. */
export function isPending(status: PublicationStatus): boolean {
  return status === "PENDING_CONFIRMATION";
}

/**
 * Programme dates and enrolment details are shared as initiatives open.
 */
export function servicePricingNote(): string {
  return "Programme dates and enrolment details are shared by the Centre as initiatives open.";
}
