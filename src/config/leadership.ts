export type LeadershipPerson = {
  name: string;
  role: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  bio: string;
};

/**
 * Global Steering Committee profiles.
 *
 * Images live in `public/images/airo-assets/images/people/committee/`. The
 * intrinsic dimensions are recorded here so `next/image` can reserve the
 * correct space while the optimized image loads.
 */
export const leadershipTeam: LeadershipPerson[] = [
  {
    name: "Chief Siita Sofo Hissan",
    role: "Originator & Founder",
    title:
      "President, AfCFTA Young Entrepreneurs Federation (AfYEF) — Continental Secretariat",
    image: "/images/airo-assets/images/people/committee/originator.png",
    imageWidth: 1145,
    imageHeight: 1374,
    bio: "Chief Siita Sofo Hissan is a Ghanaian entrepreneur and President of the AfCFTA Young Entrepreneurs Federation (AfYEF). A passionate advocate for Africa's youth, he advances entrepreneurship, access to finance, cross-border trade and meaningful participation in the AfCFTA. His leadership connects young African entrepreneurs with markets, investment, policy platforms and continental opportunities.",
  },
  {
    name: "Hon. Joseph Kwame Kumah, MP",
    role: "Chief Patron",
    title: "Chief Patron — JDM-PLLC Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/chief-patron.png",
    imageWidth: 1254,
    imageHeight: 1254,
    bio: "Hon. Joseph Kwame Kumah, MP, serves as Chief Patron of the JDM Presidential Library & Legacy Centre, lending his distinguished parliamentary experience and deep commitment to Ghanaian democratic values to the initiative. As a respected Member of Parliament, he provides ceremonial leadership and high-level advocacy, championing the Centre's mission to preserve and celebrate the legacy of President John Dramani Mahama for future generations.",
  },
];

export const executiveLeadership: LeadershipPerson[] = [
  {
    name: "Prof. Abdulai Abubakar",
    role: "Chairperson",
    title: "Chairperson — JDM-PLLC Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/chairperson.jpg",
    imageWidth: 1024,
    imageHeight: 1024,
    bio: "Prof. Abdulai Abubakar is a distinguished Ghanaian academic, administrator and public intellectual who serves as Chairperson of the JDM Presidential Library & Legacy Centre Global Steering Committee. With an extensive career spanning higher education, policy advisory and institutional governance across West Africa, Prof. Abubakar brings unparalleled scholarly authority and strategic vision to the Centre's leadership. His commitment to preserving African heritage, advancing civic education and building enduring institutions of knowledge makes him an ideal steward of President Mahama's legacy for future generations.",
  },
  {
    name: "Hon. Kwame Deen Yawson",
    role: "Vice Chairperson",
    title: "Vice Chairperson — JDM-PLLC Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/vice-chairperson.jpg",
    imageWidth: 1024,
    imageHeight: 1024,
    bio: "Hon. Kwame Deen Yawson is a distinguished Ghanaian public servant, community leader and political figure with a proven record of grassroots mobilisation and democratic advocacy. As Vice Chairperson of the JDM-PLLC Global Steering Committee, he brings his wealth of experience in governance, constituency development and civic engagement to support the Centre's strategic direction. His deep understanding of Ghana's political landscape and his unwavering commitment to accountability and inclusive development make him an indispensable pillar of the Committee's leadership.",
  },
  {
    name: "Lawyer Abubakar Mutiu-Rahaman",
    role: "Legal Adviser & Counsel",
    title: "Legal Adviser & Counsel — JDM-PLLC Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/legal-adviser.jpg",
    imageWidth: 1024,
    imageHeight: 1024,
    bio: "Lawyer Abubakar Mutiu-Rahaman serves as Legal Adviser and Counsel to the JDM-PLLC Global Steering Committee, providing expert legal guidance on institutional governance, intellectual property and the regulatory frameworks governing the Centre's establishment. His counsel ensures that the Centre's operations and partnerships are grounded in sound legal practice and aligned with both Ghanaian law and international standards.",
  },
];

export const committeeMembers: LeadershipPerson[] = [
  {
    name: "Dr. Roger Adamu Lure Kanton",
    role: "Member",
    title: "Member — Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/member-001.jpg",
    imageWidth: 853,
    imageHeight: 1024,
    bio: "Dr. Roger Adamu Lure Kanton is a seasoned agricultural research scientist with 31 years of service at CSIR-SARI, where he rose to Chief Research Scientist and served as Deputy Director. Now an independent agricultural consultant, his interests include agricultural research, environmental and climate advocacy, rural development and the Fight Against Donkey Extinction initiative.",
  },
  {
    name: "Dr. Bernard Lawer Tetteh-Dumanya",
    role: "Member",
    title: "Member — Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/member-002.png",
    imageWidth: 1536,
    imageHeight: 1024,
    bio: "Dr. Bernard Tetteh-Dumanya is a Pan-African financial economist, academic and management consultant with over 20 years of experience. His expertise spans project finance, investment advisory, corporate strategy, risk, ESG and institutional development. He is committed to mobilising capital, developing bankable projects and connecting African enterprises to global investment opportunities.",
  },
  {
    name: "Mr. Ronnie Dunn",
    role: "Global Ambassador",
    title:
      "Global Ambassador for International Outreach & Strategic Engagement — United Kingdom & Europe",
    image: "/images/airo-assets/images/people/committee/ops-007.jpg",
    imageWidth: 937,
    imageHeight: 1024,
    bio: "Ronnie \"Big Sbuda\" Dunn is a South African-American artist, entrepreneur, cultural ambassador, philanthropist and U.S. military veteran. As Global Ambassador for AUUDA-Africa and Founder of CIGAR Music USA, he advances diaspora reconnection, African heritage, cultural diplomacy and international partnerships. A delegate in the G20 South Africa Presidency 2025 under the Civil Society C20 Working Group 6 on Cultural Diversity Recognition and Embracement, representing the African Union's Sixth Region, Ronnie transforms ancestral reconnection into enduring cultural and economic relationships between Africa and its global diaspora.",
  },
  {
    name: "John Hardy-Bey",
    role: "Member",
    title: "Member — Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/member-003.png",
    imageWidth: 1200,
    imageHeight: 1200,
    bio: "Mr. John Hardy-Bey is a distinguished member of the JDM-PLLC Global Steering Committee, contributing his expertise in international relations and diaspora engagement to the Centre's mission. With a strong background in cross-cultural diplomacy and community mobilisation, he serves as a vital bridge between the Centre and its global network of supporters, partners and advocates.",
  },
  {
    name: "Ms. Stacey Reddy",
    role: "Global Ambassador",
    title: "Global Ambassador — South Africa",
    image: "/images/airo-assets/images/people/committee/ops-008.png",
    imageWidth: 1254,
    imageHeight: 1254,
    bio: "Stacey Reddy is a South African legal professional, entrepreneur and property practitioner with an LLB from the University of South Africa. Her experience spans legal administration, property management, business development and stakeholder engagement. As a JDM-PLLC Global Ambassador, she draws on her professional expertise and international perspective to strengthen relationships between South Africa, the wider African continent, diaspora communities and global partners.",
  },
];

export const internationalOperations: LeadershipPerson[] = [
  {
    name: "Mr. Diakite Abdoulaye Aziz",
    role: "International Operational Lead",
    title:
      "International Operational Lead — Côte d'Ivoire & Francophone West Africa",
    image: "/images/airo-assets/images/people/committee/ops-001.png",
    imageWidth: 1254,
    imageHeight: 1254,
    bio: "Mr. Diakite Abdoulaye Aziz leads the Centre's operational engagement across Côte d'Ivoire and Francophone West Africa. A seasoned professional with deep regional networks, he coordinates outreach, partnership development and programme delivery across French-speaking West African nations, ensuring the Centre's vision resonates across linguistic and cultural boundaries throughout the sub-region.",
  },
  {
    name: "Ms. Mpho Machaka",
    role: "International Operational Lead",
    title: "International Operational Lead — South Africa & Southern Africa",
    image: "/images/airo-assets/images/people/committee/ops-002.png",
    imageWidth: 1254,
    imageHeight: 1254,
    bio: "Ms. Mpho Machaka (MBA, PMP, Adv Dip–Risk) is the Founder and CEO of IETSA, its innovation and commercial arm IETSATech, and Baruwileng Consulting Services (Pty) Ltd. She serves on several boards and continental committees, including the AfYEF Board, and is Continental Director for Women in Trade. Her work advances digital transformation, enterprise development and inclusive economic participation across Africa.",
  },
  {
    name: "Dr. Babajide Ojuola",
    role: "International Operational Lead",
    title: "International Operational Lead — Nigeria & Anglophone West Africa",
    image: "/images/airo-assets/images/people/committee/ops-003.png",
    imageWidth: 1536,
    imageHeight: 1024,
    bio: "Dr. Babajide Ojuola (PhD, FNSE, FIOGRHS, FIMC, COREN) is an accomplished energy and technology executive with nearly two decades of experience delivering major engineering and infrastructure projects across Africa. He specialises in strategic transformation, project management, knowledge systems and human-centred artificial intelligence. A Forbes Technology Council member, he serves as International Operational Lead for Nigeria and Anglophone West Africa.",
  },
  {
    name: "Ms. Patience Mafu",
    role: "International Operational Lead",
    title: "International Operational Lead — United Kingdom & Europe",
    image: "/images/airo-assets/images/people/committee/ops-004.jpg",
    imageWidth: 818,
    imageHeight: 1024,
    bio: "Patience Mafu is a UK-based international development practitioner, diaspora engagement advocate and cultural diplomacy leader. She is the Founder of AUUDA-Africa and serves as JDM-PLLC Global Champion and International Operational Lead for the United Kingdom and Europe. Drawing on her experience in development, accounting and the G20 South Africa Presidency 2025 Civil20 process, she builds strategic partnerships that connect African institutions, cultural leadership and diaspora communities worldwide.",
  },
  {
    name: "Dr. Monohn Prudhomme",
    role: "International Operational Lead",
    title:
      "International Operational Lead — United States of America & North America",
    image: "/images/airo-assets/images/people/committee/ops-005.jpg",
    imageWidth: 1024,
    imageHeight: 1024,
    bio: "Dr. Monohn Prudhomme leads the Centre's operational presence across the United States and North America. Drawing on his academic credentials and extensive professional network in the diaspora community, he champions the Centre's fundraising, advocacy and partnership initiatives across North America, connecting the Ghanaian diaspora and international stakeholders to the legacy and vision of President John Dramani Mahama.",
  },
  {
    name: "Ms. Corelli Lyons",
    role: "International Operational Lead",
    title: "International Operational Lead — Trinidad & Tobago & the Caribbean",
    image: "/images/airo-assets/images/people/committee/ops-006.png",
    imageWidth: 1128,
    imageHeight: 1394,
    bio: "Ms. Corelli Lyons is a Tobago-born multi-entrepreneur, philanthropist and cultural-trade pioneer with over 35 years of banking experience. She is a certified talent coach, founder of a non-profit organisation and Chief Executive of several companies. Her work advances women entrepreneurs, develops young leaders and strengthens trade and cultural connections between Africa and the Caribbean.",
  },
];
