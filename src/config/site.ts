/**
 * Central institutional configuration.
 *
 * Every piece of institutional identity used by the public site is read from
 * this file. The content follows the approved JDM-PLLC website copy: it
 * describes the initiative accurately, keeps proposed facilities clearly
 * labelled, and never presents an unconfirmed partnership, payment channel or
 * endorsement as established.
 */

/** How a configurable item is presented until confirmation. */
export type PublicationStatus = "CONFIRMED" | "PENDING_CONFIRMATION";

export interface CentreService {
  name: string;
  slug: string;
  /** One-line summary shown on cards. */
  description: string;
  /** Bulleted detail shown on the service page. */
  highlights: string[];
  status: PublicationStatus;
  /** Shown under the title while the offering is unconfirmed. */
  statusNote: string;
}

export interface CentreBranch {
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

export interface CentreTeamMember {
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
  children?: { label: string; href: string }[];
}

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
  tertiary?: { label: string; href: string; external?: boolean };
}

/**
 * Facilities of the Library & Legacy Centre. These are proposed facilities and
 * programme areas, implemented progressively and subject to planning,
 * agreements, approvals, funding and available resources.
 */
const SERVICES = [
  {
    name: "Presidential Library and Archives",
    slug: "presidential-library-archives",
    description:
      "A proposed facility for preserving and interpreting records relating to President Mahama, presidential leadership and Ghana's democratic history.",
    highlights: [
      "Historical document and archival preservation.",
      "Digital records and electronic catalogues.",
      "Preservation of speeches, publications and photographs.",
      "Audiovisual collections and oral histories.",
      "Research access for approved users.",
      "Historical exhibitions and educational resources.",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote:
      "All materials will be managed in accordance with applicable ownership, copyright, privacy and access requirements.",
  },
  {
    name: "Historical Research and Knowledge Centre",
    slug: "research-knowledge-centre",
    description:
      "A platform for research, scholarship and public learning on leadership, democratic development, public policy, Ghanaian history and African transformation.",
    highlights: [
      "Research projects",
      "Publications",
      "Academic seminars",
      "Public lectures",
      "Oral history",
      "Student research",
      "Collaboration with universities",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote: "",
  },
  {
    name: "Leadership and Civic Education",
    slug: "leadership-civic-education",
    description:
      "Programmes designed to promote ethical leadership, responsible citizenship, democratic learning and public-service values.",
    highlights: [
      "Leadership workshops",
      "Civic education",
      "Governance seminars",
      "Mentorship and youth dialogue",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote: "",
  },
  {
    name: "Youth Skills and Enterprise Development",
    slug: "youth-skills-enterprise",
    description:
      "In alignment with AfYEF's youth empowerment mission, the Centre seeks to connect learning with practical opportunities for young people.",
    highlights: [
      "Digital and technology skills.",
      "Entrepreneurship and enterprise readiness.",
      "Innovation and problem-solving.",
      "Career development and mentorship.",
      "Youth enterprise exhibitions.",
      "Partnerships with relevant training institutions.",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote: "",
  },
  {
    name: "Conference and Public Dialogue Facilities",
    slug: "conference-public-dialogue",
    description:
      "Subject to the final development plans, the Centre may provide facilities for conferences, lectures, seminars, workshops, exhibitions and public dialogue.",
    highlights: [
      "Conferences",
      "Lectures",
      "Seminars",
      "Workshops",
      "Exhibitions",
      "Public dialogue",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote: "",
  },
  {
    name: "Museum and Cultural Heritage",
    slug: "museum-cultural-heritage",
    description:
      "The project seeks to contribute to the preservation and presentation of Ghanaian, Northern Ghanaian and wider African history and culture.",
    highlights: [
      "Historical exhibitions",
      "Traditional leadership histories",
      "Indigenous Knowledge documentation",
      "Cultural education",
      "Collaboration with museums and cultural institutions",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote: "",
  },
  {
    name: "Digital and Virtual Learning",
    slug: "digital-virtual-learning",
    description:
      "Digital systems may expand access to historical records and educational resources through:",
    highlights: [
      "Digitised archival collections.",
      "Virtual exhibitions and tours.",
      "Online learning resources.",
      "Digital research tools.",
      "Recorded lectures and discussions.",
      "Remote access for researchers and students.",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote: "",
  },
  {
    name: "Family and Community History",
    slug: "family-community-history",
    description:
      "Where supported by credible documentation and appropriate permissions, the Centre may examine the family, community and social influences that contributed to President Mahama's journey and public service.",
    highlights: [
      "Family and community documentation",
      "Responsible historical interpretation",
      "Oral history with consent",
      "Respect for source materials and privacy",
    ],
    status: "PENDING_CONFIRMATION" as PublicationStatus,
    statusNote:
      "The aim will be to preserve relevant history responsibly and accurately.",
  },
] satisfies CentreService[];

export const siteConfig = {
  /** Full legal-facing name used in metadata, footers and documents. */
  name: "John Dramani Mahama Presidential Library & Legacy Centre",
  /** Formal name including the compact acronym. */
  formalName:
    "John Dramani Mahama Presidential Library & Legacy Centre (JDM-PLLC)",
  /** Compact name used where the full name will not fit. */
  shortName: "JDM-PLLC",
  /** Descriptor shown under the short name. */
  descriptor: "Preserving Legacy. Empowering the Youth.",
  /** Used in the browser tab, emails and document headers. */
  tagline: "Preserving Legacy. Empowering the Youth.",
  launchDate: "30 November 2026",
  description:
    "The John Dramani Mahama Presidential Library & Legacy Centre (JDM-PLLC) is an AfYEF-led initiative to document, preserve and protect the legacy of President John Dramani Mahama, while inspiring young people and future generations through history, knowledge, leadership and opportunity.",
  /** Homepage hero carousel. */
  heroSlides: [
    {
      id: "welcome",
      eyebrow: "JDM-PLLC",
      title: "Preserving Legacy. Empowering the Youth.",
      body: "The John Dramani Mahama Presidential Library & Legacy Centre (JDM-PLLC) is an AfYEF-led initiative to document, preserve and protect the legacy of President John Dramani Mahama, while inspiring young people and future generations through history, knowledge, leadership and opportunity.",
      mobileBody:
        "Preserving Legacy. Empowering the Youth.",
      image: "/images/hero/northern-star-sunset.png",
      duration: 9000,
      videoLoop: false,
      primary: { label: "Explore the Project", href: "/about" },
      secondary: { label: "Become a Partner", href: "/partner" },
    },
    {
      id: "legacy",
      eyebrow: "PRESIDENT JOHN DRAMANI MAHAMA: THE INSPIRATION",
      title: "Documenting a Journey of Leadership and Public Service",
      body: "The Centre seeks to document his life, leadership experiences, ideas, development aspirations and contributions to Ghana, preserving relevant historical records so that present and future generations can study his journey and understand its wider national and African context.",
      mobileBody:
        "President John Dramani Mahama's public-service journey is the central inspiration for JDM-PLLC.",
      image: "/images/hero/architectural-pan-poster.jpg",
      video: "/images/hero/architectural-pan.mp4",
      duration: 15000,
      videoLoop: false,
      primary: { label: "The Inspiration", href: "/legacy" },
      secondary: { label: "About JDM-PLLC", href: "/about" },
    },
    {
      id: "knowledge",
      eyebrow: "LEGACY → KNOWLEDGE → SKILLS → ENTERPRISE → OPPORTUNITY",
      title: "A Living Institution for History, Knowledge and Opportunity",
      body: "JDM-PLLC is being developed as a centre for historical preservation, research, education, cultural heritage and youth empowerment.",
      mobileBody:
        "JDM-PLLC is being developed as a centre for historical preservation, research, education, cultural heritage and youth empowerment.",
      image: "/images/hero/campus-walk-poster.jpg",
      video: "/images/hero/campus-walk.mp4",
      duration: 12000,
      videoLoop: false,
      primary: { label: "The Library & Legacy Centre", href: "/services" },
      secondary: { label: "Programmes", href: "/programmes" },
    },
    {
      id: "support",
      eyebrow: "One Vision. Four Project Locations.",
      title: "Tamale, Damongo, Busunu and Bole",
      body: "JDM-PLLC is pursuing a multi-location development approach involving Tamale, Damongo, Busunu and Bole. Each location may contribute to the Centre's historical, educational, cultural and community development objectives.",
      mobileBody:
        "JDM-PLLC is pursuing a multi-location development approach involving Tamale, Damongo, Busunu and Bole.",
      image: "/images/hero/ghana-neon-route-map-at-sunset.png",
      duration: 12000,
      videoLoop: false,
      primary: { label: "Branches & Locations", href: "/branches" },
      secondary: { label: "Support the Initiative", href: "/donate" },
    },
  ] as HeroSlide[],
  /** Canonical origin. Overridden by APP_URL for a deployment. */
  url: process.env.APP_URL || "http://localhost:3000",
  /** Public website address. */
  website: process.env.CLINIC_WEBSITE || "https://www.jdmpllc.org",
  /** Contact details for the JDM-PLLC Secretariat. */
  contact: {
    phone: "+233 244 030 280",
    phoneHref: "tel:+233244030280",
    email: process.env.CLINIC_EMAIL || "president@afyef.org",
    additionalEmail: "info@afyef.org",
    address: "University for Development Studies (UDS), Tamale Campus",
    addressShort: "Tamale, Northern Region, Ghana",
    city: "Tamale",
    region: "Northern Region",
    country: "Ghana",
    countryCode: "GH",
    postalAddress: "P.O. Box TL 1350, Digital Address NT-0272-1946",
    latitude: null as number | null,
    longitude: null as number | null,
  },
  /** The two offices are kept separate and labelled accurately. */
  offices: [
    {
      name: "Main Secretariat (Tamale)",
      role: "",
      lines: [
        "University for Development Studies (UDS), Tamale Campus",
        "P.O. Box TL 1350",
        "Digital Address: NT-0272-1946",
        "Tamale, Northern Region, Ghana",
      ],
    },
    {
      name: "Project Coordination Office (Accra)",
      role: "",
      lines: [
        "AfCFTA Young Entrepreneurs Federation (AfYEF)",
        "26 Atomic Hills Estates Street, Dome-Kwabenya",
        "Accra, Ghana",
      ],
    },
  ],
  websites: [
    { label: "www.jdmpllc.org", href: "https://www.jdmpllc.org" },
    {
      label: "www.jdmpresidentiallibrary.org",
      href: "https://www.jdmpresidentiallibrary.org",
    },
    { label: "www.afyef.org", href: "https://www.afyef.org" },
  ],
  locale: {
    language: "en-GH",
    currency: "GHS",
    currencySymbol: "GH₵",
    timeZone: "Africa/Accra",
  },
  /** Social profiles. Empty strings render nothing until supplied. */
  links: {
    facebook:
      process.env.CLINIC_FACEBOOK || "https://www.facebook.com/share/1CYwsvnias/",
    instagram: process.env.CLINIC_INSTAGRAM || "https://instagram.com/jdmpllc",
    tiktok: process.env.CLINIC_TIKTOK || "https://tiktok.com/@jdmpllc",
    x: process.env.CLINIC_X || "https://x.com/jdmpllc",
    linkedin: process.env.CLINIC_LINKEDIN || "",
  },
  /** Kept for compatibility; the review badge is not part of this content. */
  googleReview: {
    url: "",
    label: "",
  },
  /**
   * Partner institutions named in the approved website copy. A listing does not
   * constitute a funding commitment, endorsement, ownership interest or other
   * obligation unless confirmed through appropriate formal documentation.
   */
  partners: [
    {
      name: "University for Development Studies (UDS)",
      logo: "/images/partners/university-for-development-studies.png",
      detail: "MoU signed 2 July 2026",
    },
    {
      name: "Ghana Library Authority (GhLA)",
      logo: "",
      detail: "",
    },
    {
      name: "National Commission on Culture (NCC)",
      logo: "/images/partners/national-commission-on-culture.png",
      detail: "",
    },
    {
      name: "Tamale Technical University (TaTU)",
      logo: "",
      detail: "",
    },
    {
      name: "Center for Local Development and Culture (CLDC)",
      logo: "",
      detail: "",
    },
    {
      name: "Traditional authorities and community stakeholders",
      logo: "",
      detail: "",
    },
    {
      name: "Relevant public institutions",
      logo: "",
      detail: "",
    },
    {
      name: "University Administrators Association of Ghana (UACE)",
      logo: "",
      detail: "",
    },
  ],
  /**
   * Ways to give. Payment details are not published until verified; the site
   * directs donors to the approved channel on confirmation.
   */
  donation: {
    amounts: [100, 250, 500, 1000],
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
  /** WhatsApp line behind the mobile floating button. */
  whatsapp: {
    number: "233244030280",
    message: "Hello JDM-PLLC, I would like to make an enquiry.",
    quickReplies: [
      "I would like to partner with JDM-PLLC.",
      "I have a question about the Library.",
    ],
  },
  /** The Secretariat is contactable on working days. */
  openingHours: {
    summary: "Monday – Friday, 9:00 AM – 5:00 PM",
    schedule: {
      Monday: "9:00 AM – 5:00 PM",
      Tuesday: "9:00 AM – 5:00 PM",
      Wednesday: "9:00 AM – 5:00 PM",
      Thursday: "9:00 AM – 5:00 PM",
      Friday: "9:00 AM – 5:00 PM",
      Saturday: "Closed",
      Sunday: "Closed",
    } as OpeningHours,
  },
  /**
   * Project locations. No location is designated as the principal campus.
   * Specific functions and development stages depend on documented land
   * arrangements, consultations, technical planning, approvals, partnerships
   * and available resources.
   */
  branches: [
    {
      name: "Tamale — Secretariat, Research and Institutional Collaboration",
      slug: "tamale",
      address: "University for Development Studies (UDS), Tamale Campus",
      city: "Tamale",
      region: "Northern Region",
      country: "Ghana",
      phone: "+233 244 030 280",
      status: "CONFIRMED" as PublicationStatus,
      departments: [
        "Secretariat and administrative coordination",
        "Academic and institutional collaboration",
        "Research and archival planning",
        "Leadership and civic education",
        "Youth development programmes",
        "Digital knowledge and innovation",
        "Academic seminars and public engagement",
      ],
    },
    {
      name: "Damongo — Legacy, Culture and Development",
      slug: "damongo",
      address: "Damongo",
      city: "Damongo",
      region: "Savannah Region",
      country: "Ghana",
      phone: "+233 244 030 280",
      status: "PENDING_CONFIRMATION" as PublicationStatus,
      departments: [
        "Historical and cultural interpretation",
        "Research and educational programmes",
        "Conferences and public dialogue",
        "Heritage tourism initiatives",
        "Community and traditional authority engagement",
        "Hospitality-related development, subject to feasibility and approvals",
      ],
    },
    {
      name: "Busunu — Heritage and Community Engagement",
      slug: "busunu",
      address: "Busunu",
      city: "Busunu",
      region: "Savannah Region",
      country: "Ghana",
      phone: "+233 244 030 280",
      status: "PENDING_CONFIRMATION" as PublicationStatus,
      departments: [
        "Oral history and community documentation",
        "Cultural heritage programmes",
        "Educational outreach",
        "Intergenerational dialogue",
        "Youth development",
        "Collaboration with local stakeholders and traditional authorities",
      ],
    },
    {
      name: "Bole — Historical Documentation and Youth Development",
      slug: "bole",
      address: "Bole",
      city: "Bole",
      region: "Savannah Region",
      country: "Ghana",
      phone: "+233 244 030 280",
      status: "PENDING_CONFIRMATION" as PublicationStatus,
      departments: [
        "Historical and community documentation",
        "Educational outreach",
        "Cultural preservation",
        "Youth leadership and skills development",
        "Research and oral history",
        "Collaboration with local authorities and communities",
      ],
    },
  ] satisfies CentreBranch[],
  /** Facilities and programme areas of the Library & Legacy Centre. */
  services: SERVICES,
  /** Public team directory. Empty until profiles are verified. */
  team: [] as CentreTeamMember[],
  /** Published testimonials. Empty until written consent is given. */
  testimonials: [] as Array<{
    name: string;
    content: string;
    service: string;
  }>,
  /** Institutional milestones described in the approved copy. */
  milestones: [
    {
      year: "2 July 2026",
      event:
        "UDS and AfYEF sign a Memorandum of Understanding to support collaboration in academic research, archival documentation, civic education, leadership studies, digital knowledge preservation and student skills development.",
    },
    {
      year: "30 November 2026",
      event:
        "Proposed official launch at the University for Development Studies, Tamale, at 10:00 AM. Venue to be confirmed by the secretariat.",
    },
  ] as Array<{ year: string; event: string }>,
  /** Photography of the facilities. Empty until genuine photographs are supplied. */
  facilityPhotos: [] as string[],
  /** Primary navigation. `href` values are real routes in this application. */
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "The Centre",
      href: "/services",
      children: [
        { label: "Library & Legacy Centre", href: "/services" },
        { label: "Programmes", href: "/programmes" },
        { label: "Leadership", href: "/leadership" },
        { label: "Research & Archives", href: "/research" },
        { label: "Governance", href: "/governance" },
      ],
    },
    { label: "Branches", href: "/branches" },
    {
      label: "Partners",
      href: "/partner",
      children: [
        { label: "Institutional Partners", href: "/partner" },
        { label: "EAMMC-TERDI", href: "/eammc-terdi" },
      ],
    },
    { label: "Support", href: "/donate" },
    {
      label: "News & Events",
      href: "/news",
      children: [
        { label: "News & Updates", href: "/news" },
        { label: "Events & Activities", href: "/events" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
} as const;

export type SiteConfig = typeof siteConfig;

/** Convenience accessor for the current institutional name (honours APP_NAME). */
export function centreName(): string {
  return process.env.APP_NAME || siteConfig.name;
}

export const clinicName = centreName;

/** Every location, used by the branch pages. */
export const centreBranches = siteConfig.branches;
export const clinicBranches = centreBranches;

/** Facilities grouped for the Centre hub. */
export const centreServices = siteConfig.services;
export const clinicServices = centreServices;

/** True while an item still needs the Centre's sign-off before publication. */
export function isPending(status: PublicationStatus): boolean {
  return status === "PENDING_CONFIRMATION";
}

/**
 * Programme dates and enrolment details are shared as initiatives open.
 */
export function servicePricingNote(): string {
  return "Programme dates and participation details are shared by the Centre as initiatives open.";
}
