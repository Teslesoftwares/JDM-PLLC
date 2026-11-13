import { siteConfig } from "./site";

/**
 * Content published on the public website.
 *
 * The public `/news` and `/events` pages and the dashboard's "News and Project
 * Updates" screen all read from this file, so what the Secretariat sees in the
 * dashboard matches what visitors see on the site.
 */

export interface WebsiteNewsImage {
  file: string;
  alt: string;
}

export interface WebsiteNewsUpdate {
  date: string;
  title: string;
  body: string;
  images: WebsiteNewsImage[];
  articleUrl?: string;
}

export interface WebsiteEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

export const websiteNewsUpdates: WebsiteNewsUpdate[] = [
  {
    date: "11 November 2026",
    title:
      "AfYEF to launch John Mahama Presidential Library and Legacy Centre to drive leadership, tourism",
    body: "MyJoyOnline reports on AfYEF's upcoming national launch of the John Dramani Mahama Presidential Library and Legacy Centre in Tamale on 30 November 2026, and the initiative's plans to connect heritage, leadership education and tourism in Northern Ghana.",
    images: [],
    articleUrl:
      "https://www.myjoyonline.com/afyef-to-launch-john-mahama-presidential-library-and-legacy-centre-to-drive-leadership-tourism/",
  },
  {
    date: "13 October 2026",
    title: "The Question, the Answer and the Possibility",
    body: "A three-part campaign asks what happens when stories fade, answers with the value of preserving records and knowledge, and imagines future generations learning from the past. Together, the messages describe the Centre's purpose: preserve history and pass its lessons forward.",
    images: [
      {
        file: "WhatsApp Image 2026-10-13 at 05.23.31.jpeg",
        alt: "Campaign graphic: The Question — what happens when stories fade and history is lost?",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 05.23.38.jpeg",
        alt: "Campaign graphic: The Answer — preserve memories and records so they become knowledge.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 05.23.45.jpeg",
        alt: "Campaign graphic: The Possibility — history inspires knowledge and tomorrow's leaders.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 17.07.43.jpeg",
        alt: "The Question campaign graphic, alternate design.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 17.08.07.jpeg",
        alt: "The Answer campaign graphic, alternate design.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 17.08.26.jpeg",
        alt: "The Possibility campaign graphic, alternate design.",
      },
    ],
  },
  {
    date: "13 October 2026",
    title: "A vision for knowledge and opportunity in Northern Ghana",
    body: "These project graphics present Northern Ghana as a place for knowledge and opportunity and describe the aspiration for a Presidential Library and Legacy Centre with a wider African future. The architectural views are conceptual images, not photographs of a completed facility.",
    images: [
      {
        file: "WhatsApp Image 2026-10-13 at 06.35.00.jpeg",
        alt: "Project graphic describing Northern Ghana as a destination for knowledge and opportunity.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 06.35.01 (1).jpeg",
        alt: "Project concept graphic: Not just a library, a centre for Africa's future.",
      },
      {
        file: "WhatsApp Image 2026-10-13 at 06.35.01.jpeg",
        alt: "Project graphic describing a presidential legacy, a national treasure and an African future.",
      },
    ],
  },
  {
    date: "28 October 2026",
    title: "Endorsement messages and project supporters",
    body: "A collection of endorsement artwork and project-support visuals. The names, titles and statements included in each graphic are reproduced as shown in the supplied materials.",
    images: [
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.26 (1).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.26.jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (1).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (2).jpeg",
        alt: "Project-support visual titled Powerful Africa.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (3).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27 (4).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.27.jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.29 (1).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.29 (2).jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
      {
        file: "WhatsApp Image 2026-10-28 at 16.25.29.jpeg",
        alt: "Official endorsement graphic featuring the endorser and statement shown in the artwork.",
      },
    ],
  },
  {
    date: "2 November 2026",
    title: "The Centre's vision and mission on display",
    body: "A project display stand presents the Centre's vision, mission and legacy theme alongside an architectural concept image.",
    images: [
      {
        file: "WhatsApp Image 2026-11-02 at 13.35.26.jpeg",
        alt: "A JDM-PLLC display stand showing the Centre's vision, mission and an architectural concept image.",
      },
    ],
  },
];

export const websiteEvents: WebsiteEvent[] = [
  {
    title: "Proposed Official Launch",
    date: siteConfig.launchDate,
    time: "10:00 AM",
    venue:
      "University for Development Studies (UDS), Tamale Campus (venue to be confirmed)",
    description:
      "The launch is proposed and subject to confirmation. Any change to the date, venue or programme will be announced through official channels.",
  },
];

/** Planned activities listed on the public `/events` page. */
export const websiteEventActivities = [
  { title: "Public lectures and dialogue." },
  { title: "Exhibitions and heritage programming." },
  { title: "Academic and youth programmes." },
  { title: "Community engagement." },
];
