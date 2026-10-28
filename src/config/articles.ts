import { siteConfig } from "@/config/site";

/**
 * Institutional articles for the public site of the John Dramani Mahama
 * Presidential Library & Legacy Centre, operating as the Northern Star Centre.
 *
 * Content is written and reviewed by the Centre's research team and held in
 * configuration rather than in the page: one source, so the list and the
 * article page can never disagree.
 *
 * Every article is drawn from the Centre's institutional prospectus. They
 * describe vision, frameworks and programmes — they never invent dates, fees,
 * names or statistics beyond what the prospectus states.
 */

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** Date the article was last reviewed, ISO `YYYY-MM-DD`. */
  updated: string;
  readTime: string;
  blocks: ArticleBlock[];
}

/** Byline for research-reviewed content: the team, never an invented person. */
const AUTHOR = `${siteConfig.name} research team`;

export const articles: Article[] = [
  {
    slug: "what-is-the-northern-star-centre",
    title: "What is the Northern Star Centre?",
    category: "Vision",
    excerpt:
      "The vision, mission, scope and purpose of a continental institution for leadership, heritage, research and human dignity — rooted in Northern Ghana.",
    updated: "2026-10-12",
    readTime: "6 min read",
    blocks: [
      {
        type: "paragraph",
        text: "The John Dramani Mahama Presidential Library & Legacy Centre, operating as the Northern Star Centre, is a continental institution for leadership, heritage, research and human dignity — rooted in Northern Ghana and serving Africa and the world. It is not a monument. It is a working institution with a defined vision, a defined mission, a defined scope and a defined purpose, each of which is worth understanding on its own terms.",
      },
      {
        type: "heading",
        text: "The vision and the mission",
      },
      {
        type: "paragraph",
        text: "The Centre's vision is to become Africa's foremost institution for ethical leadership, living heritage, Indigenous Knowledge Systems, democratic resilience and transformative learning — illuminating pathways for generations to come. Its mission follows from that: to preserve Africa's heritage, codify the lessons of transformational leadership, strengthen Indigenous Knowledge Systems, advance research and innovation for public good, and cultivate a new generation of ethical, competent and visionary leaders for Africa and the world.",
      },
      {
        type: "paragraph",
        text: "These are not abstract aspirations. Each element of the mission maps to a programme, a branch or a framework the Centre is building — from the Leadership Laboratory to the Indigenous Knowledge Systems Centre to the Pan-African Fellowship Programme.",
      },
      {
        type: "heading",
        text: "The scope: one story, then a constellation",
      },
      {
        type: "paragraph",
        text: "While the life and leadership journey of H.E. John Dramani Mahama serves as the Centre's foundational case study and primary light, the institution documents, preserves and projects the stories of transformational leaders from Northern Ghana, Ghana, Africa and the global African family. The Mahama story is the first light the Centre maps. The mission is to illuminate the entire constellation.",
      },
      {
        type: "heading",
        text: "The purpose: shaping the future, not only remembering the past",
      },
      {
        type: "paragraph",
        text: "Africa's transformation is a multi-generational project. It requires institutions capable of preserving memory, transmitting wisdom, strengthening democratic culture and preparing future leaders. The Northern Star Centre exists to be one of those institutions. From Bole, a young John Dramani Mahama rose through every level of public service to become President of Ghana — demonstrating that leadership is cultivated through service, learning, resilience and commitment to the public good.",
      },
      {
        type: "paragraph",
        text: "Across Africa today, millions of young people carry similar potential. The Centre exists to help identify, nurture and empower these future leaders — building the Africa We Want, one leader at a time. Every African carries a Northern Star within them.",
      },
      {
        type: "note",
        text: "This article summarises the Centre's founding prospectus. Programme dates, visiting hours and any fees are confirmed with the Centre directly.",
      },
    ],
  },
  {
    slug: "the-mahama-leadership-framework",
    title: "The Mahama Leadership Framework: six pillars",
    category: "Leadership",
    excerpt:
      "The Centre's flagship intellectual product: a structured body of leadership knowledge distilled from decades of public service, organised into six living pillars.",
    updated: "2026-10-05",
    readTime: "7 min read",
    blocks: [
      {
        type: "paragraph",
        text: "The Mahama Leadership Framework (MLF) is the Centre's flagship intellectual product — a structured body of leadership knowledge distilled from decades of public service and governance experience. Each pillar serves as a living case study for leadership education, research and practical application across Africa and the world.",
      },
      {
        type: "heading",
        text: "Why the framework exists",
      },
      {
        type: "paragraph",
        text: "The Centre does not exist simply because John Dramani Mahama became President. It exists because his public service journey — from Assemblyman to President — provides a uniquely comprehensive framework through which future leaders can study governance, democratic resilience and national development. H.E. Mahama is the only Ghanaian to serve at every level of elected and appointed office, which is what makes that framework unusually complete.",
      },
      {
        type: "heading",
        text: "The six pillars",
      },
      {
        type: "list",
        items: [
          "Service Above Self — grounding leadership in the primacy of public good over personal gain, the foundational ethic of every transformational leader.",
          "Infrastructure-Led Human Development — demonstrating how strategic infrastructure investment unlocks opportunity, dignity and economic transformation for communities.",
          "Democratic Resilience — navigating electoral pressures, constitutional transitions and institutional preservation, protecting democracy even under strain.",
          "Pragmatic Inclusion & Peacebuilding — bridging ethnic, regional and political divides through principled, evidence-based leadership and dialogue.",
          "Pan-African Realism — engaging continental development with pragmatic, evidence-based strategy, building African solutions for African challenges.",
          "Accountability as a Core System — building transparency and integrity into governance institutions themselves, not as an afterthought but as a design principle.",
        ],
      },
      {
        type: "paragraph",
        text: "Together the pillars describe a theory of leadership in which public service is the entry point, infrastructure is a vehicle for human development, democracy is a discipline to be protected, inclusion is a method rather than a slogan, continental engagement is pragmatic, and accountability is engineered into institutions rather than left to goodwill.",
      },
      {
        type: "note",
        text: "The framework is developed and delivered through the Centre's Leadership Laboratory and fellowship programmes. Cohort dates and participation details are confirmed with the Centre.",
      },
    ],
  },
  {
    slug: "mind-soul-and-heart",
    title: "Mind, soul and heart: three integrated branches",
    category: "Institution",
    excerpt:
      "Tamale, Busunu and Bole — the academic wing, the ethical formation wing and the living heritage hub that together form one constellation.",
    updated: "2026-09-28",
    readTime: "5 min read",
    blocks: [
      {
        type: "paragraph",
        text: "The Northern Star Centre is built as three integrated branches — Mind, Soul and Heart — each in a different town in Northern Ghana, each with a distinct role. Three branches. One constellation. An institution built to last for generations.",
      },
      {
        type: "heading",
        text: "The Mind — Tamale (GHANASCO)",
      },
      {
        type: "paragraph",
        text: "The Mind is the Academic and Leadership Development Wing, based in Tamale at GHANASCO. It is the engine of analysis, innovation and leadership development — where ideas are tested, frameworks are built and future leaders are trained. Its programme areas include the Leadership Laboratory, Pan-African Fellowships and Public Policy Dialogues.",
      },
      {
        type: "heading",
        text: "The Soul — Busunu",
      },
      {
        type: "paragraph",
        text: "The Soul is the Mama Habiba Wing for Character and Ethical Formation, based in Busunu — a sanctuary dedicated to the moral foundations of leadership, inspired by the enduring legacy of Mama Nnaba Habiba Mahama. Its work centres on character formation, integrity and values, and intergenerational dialogue.",
      },
      {
        type: "heading",
        text: "The Heart — Bole",
      },
      {
        type: "paragraph",
        text: "The Heart is the Global Headquarters and Living Heritage Hub, based in Bole — the historical and emotional core of the institution, where Africa's stories are preserved, celebrated and projected to the world. It houses the Presidential Library & Museum, the Northern Star Hall of Fame and the Skills Transformation Hub.",
      },
      {
        type: "paragraph",
        text: "The three wings answer three different questions: how leaders are trained (Mind), how they are formed in character (Soul), and how the stories that shaped them are kept alive for the next generation (Heart). By 2031, the vision is for all three branches to be fully operational as a living civic, intellectual, cultural and developmental engine serving Africa and the world.",
      },
      {
        type: "note",
        text: "Branch-level facilities are being developed through the founding decade ending 2031. Programme locations and visiting arrangements are confirmed with the Centre.",
      },
    ],
  },
  {
    slug: "indigenous-knowledge-systems",
    title: "Indigenous Knowledge Systems: the root system",
    category: "Heritage",
    excerpt:
      "Why the Centre treats Africa's indigenous governance traditions as the root system of the entire institution — and what it is doing to preserve them.",
    updated: "2026-09-21",
    readTime: "6 min read",
    blocks: [
      {
        type: "paragraph",
        text: "The Indigenous Knowledge Systems Centre is described in the prospectus as the root system of the entire institution. That framing matters: the Centre recognises that many of Africa's most enduring governance traditions are embedded within Indigenous Knowledge Systems, and that contemporary leadership has something to learn from them.",
      },
      {
        type: "heading",
        text: "What the research focuses on",
      },
      {
        type: "list",
        items: [
          "Traditional governance systems.",
          "Conflict resolution mechanisms.",
          "Oral histories.",
          "African languages.",
          "Traditional ecological knowledge.",
          "Intergenerational knowledge transfer.",
        ],
      },
      {
        type: "paragraph",
        text: "The goal is to ensure that ancestral wisdom continues to inform contemporary leadership and development — not as folklore set apart from modern governance, but as a living body of knowledge that contemporary institutions can draw on.",
      },
      {
        type: "heading",
        text: "Why Northern Ghana is the right place for this work",
      },
      {
        type: "paragraph",
        text: "Northern Ghana is a historic crossroads of trade, governance, culture, scholarship and Indigenous Knowledge Systems — producing statesmen, scholars, diplomats and visionaries whose stories deserve continental recognition. It is precisely the kind of place where this repository of knowledge has accumulated over generations, and precisely the kind of place where that knowledge is most at risk of being lost.",
      },
      {
        type: "heading",
        text: "The urgency of documentation",
      },
      {
        type: "paragraph",
        text: "Oral histories and traditional governance wisdom live in the memories of elder custodians. The Centre's 2026 Oral History Blitz is a systematic, urgent effort to record, preserve and digitize these accounts across Northern Ghana and beyond — before these irreplaceable voices are lost. In the longer term, the prospectus sets out a pathway toward international recognition of the Indigenous Knowledge Systems Centre, including future UNESCO-level recognition.",
      },
      {
        type: "note",
        text: "Documentation partnerships and research access arrangements are coordinated with the Centre. Communities and scholars interested in contributing can reach the research team through the contact details on this site.",
      },
    ],
  },
  {
    slug: "the-peecs-framework",
    title: "The PEECS framework: five foundational pillars",
    category: "Programmes",
    excerpt:
      "Preserve, Empower, Educate, Celebrate, Sustain — the five pillars that guide every programme, partnership and initiative of the Centre.",
    updated: "2026-09-14",
    readTime: "5 min read",
    blocks: [
      {
        type: "paragraph",
        text: "PEECS is the Centre's five-pillar operating framework — Preserve, Empower, Educate, Celebrate, Sustain. It guides every programme, partnership and initiative the Centre undertakes, and it is the shortest honest description of what the institution is for.",
      },
      {
        type: "heading",
        text: "The five pillars",
      },
      {
        type: "list",
        items: [
          "Preserve — democratic, cultural, intellectual and historical heritage for future generations.",
          "Empower — youth, women and communities through leadership development, skills training and civic education.",
          "Educate — through fellowships, case studies, research, policy dialogues and lifelong learning programmes.",
          "Celebrate — African excellence, innovation, service and achievement, honouring those who illuminate the path.",
          "Sustain — long-term institutional resilience, financial independence and economic transformation for communities.",
        ],
      },
      {
        type: "heading",
        text: "How the pillars connect to the rest of the institution",
      },
      {
        type: "paragraph",
        text: "Preserve is the work of the Presidential Library, Museum and the Indigenous Knowledge Systems Centre. Empower and Educate run through the Leadership Laboratory, the Pan-African Fellowship Programme and public policy dialogues. Celebrate is embodied in the Northern Star Hall of Fame, the premier Pan-African repository celebrating transformational leadership and public service — honouring individuals whose lives have expanded opportunity, justice, peace, knowledge, innovation and human dignity across fields including public service, traditional leadership, scholarship, entrepreneurship, arts and culture, and humanitarian service.",
      },
      {
        type: "paragraph",
        text: "Sustain is what holds the rest together. The Centre's long-term sustainability strategy combines earned income — heritage tourism, the Legacy Presidential Hotel, conference services, executive education and consultancy — with philanthropic capital such as an endowment fund and fellowship sponsorships, and with strategic partnerships including research chairs, joint programmes and government grants. The ambition is a permanently independent institution, protected by the four inviolable principles of the Firewall Charter: non-partisan integrity, independent trusteeship, radical transparency and perpetual mission protection.",
      },
      {
        type: "note",
        text: "PEECS is the Centre's stated framework from the founding prospectus. Individual programmes within it launch on their own timelines; details are confirmed with the Centre.",
      },
    ],
  },
  {
    slug: "2026-year-of-first-light",
    title: "2026: the Year of First Light",
    category: "Programmes",
    excerpt:
      "Four soft-infrastructure launches — digital archive, annual lecture, fellowship cohort and oral history blitz — that establish the Centre's intellectual footprint.",
    updated: "2026-09-07",
    readTime: "6 min read",
    blocks: [
      {
        type: "paragraph",
        text: "2026 is the inflection point in the Centre's founding decade (2021–2031). The land is secured, the endorsements are granted, the vision is clear. While physical construction is mobilised, the Centre launches its soft infrastructure — the intellectual and programmatic work that establishes its credibility and continental relevance from day one. The light begins.",
      },
      {
        type: "heading",
        text: "The four launches",
      },
      {
        type: "list",
        items: [
          "Virtual Northern Star Library & Digital Archive — a globally accessible digital repository of leadership case studies, oral histories, governance research and archival materials from across the African continent, making the Centre's knowledge available to the world from day one.",
          "Northern Star Annual Lecture — a premier annual intellectual forum convening leaders, scholars, policymakers and innovators to advance dialogue on governance, development and African futures, positioning the Centre as a continental thought leader.",
          "Pan-African Fellowship Programme — a flagship cohort programme selecting exceptional young leaders from across Africa for immersive leadership development, mentorship and continental networking — the first cohort of the Northern Star generation.",
          "Indigenous Knowledge Systems Oral History Blitz — a systematic, urgent effort to record, preserve and digitize the oral histories and traditional governance wisdom of communities across Northern Ghana and beyond, before these irreplaceable voices are lost.",
        ],
      },
      {
        type: "heading",
        text: "Why soft infrastructure comes first",
      },
      {
        type: "paragraph",
        text: "The sequencing is deliberate. A library is its collection before it is its building; a fellowship is its cohort before it is its campus. By launching the archive, the lecture, the fellowship and the documentation effort now, the Centre establishes its intellectual footprint while physical infrastructure is being developed — and by 2031 these same initiatives underpin the Vision of a fully operational institution with global digital reach, the Annual Lecture established as a premier forum, annual fellowship cohorts, and a thriving heritage tourism economy creating thousands of direct and indirect jobs.",
      },
      {
        type: "note",
        text: "2026 programme dates, fellowship application windows and lecture details are announced by the Centre and confirmed at the time of registration.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export { AUTHOR as articlesAuthor };
