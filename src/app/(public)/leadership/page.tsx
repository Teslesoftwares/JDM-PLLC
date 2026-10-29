import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Global Steering Committee of the JDM Presidential Library & Legacy Centre",
  alternates: { canonical: "/leadership" },
};

const committee = {
  originator: {
    name: "Chief Siita Sofo Hissan",
    title: "President, AfCFTA Young Entrepreneurs Federation (AfYEF) — Continental Secretariat",
    role: "Originator & Founder",
    image: "/images/airo-assets/images/people/committee/originator.png",
    bio: "Chief Siita Sofo Hissan is a Ghanaian entrepreneur and President of the AfCFTA Young Entrepreneurs Federation (AfYEF). A passionate advocate for Africa’s youth, he advances entrepreneurship, access to finance, cross-border trade and meaningful participation in the AfCFTA. His leadership connects young African entrepreneurs with markets, investment, policy platforms and continental opportunities.",
  },
  patron: {
    name: "Hon. Joseph Kwame Kumah, MP",
    title: "Chief Patron — JDM-PLLC Global Steering Committee",
    role: "Chief Patron",
    image: "/images/airo-assets/images/people/committee/chief-patron.png",
    bio: "Hon. Joseph Kwame Kumah, MP, serves as Chief Patron of the JDM Presidential Library & Legacy Centre, lending his distinguished parliamentary experience and deep commitment to Ghanaian democratic values to the initiative. As a respected Member of Parliament, he provides ceremonial leadership and high-level advocacy, championing the Centre's mission to preserve and celebrate the legacy of President John Dramani Mahama for future generations.",
  },
  chair: {
    name: "Prof. Abdulai Abubakar",
    title: "Chairperson — JDM-PLLC Global Steering Committee",
    role: "Chairperson",
    image: "/images/airo-assets/images/people/committee/chairperson.jpg",
    bio: "Prof. Abdulai Abubakar is a distinguished Ghanaian academic, administrator, and public intellectual who serves as Chairperson of the JDM Presidential Library & Legacy Centre Global Steering Committee. With an extensive career spanning higher education, policy advisory, and institutional governance across West Africa, Prof. Abubakar brings unparalleled scholarly authority and strategic vision to the Centre's leadership. His commitment to preserving African heritage, advancing civic education, and building enduring institutions of knowledge makes him an ideal steward of President Mahama's legacy for future generations.",
  },
  viceChair: {
    name: "Hon. Kwame Deen Yawson",
    title: "Vice Chairperson — JDM-PLLC Global Steering Committee",
    role: "Vice Chairperson",
    image: "/images/airo-assets/images/people/committee/vice-chairperson.jpg",
    bio: "Hon. Kwame Deen Yawson is a distinguished Ghanaian public servant, community leader, and political figure with a proven record of grassroots mobilisation and democratic advocacy. As Vice Chairperson of the JDM-PLLC Global Steering Committee, he brings his wealth of experience in governance, constituency development, and civic engagement to support the Centre's strategic direction. His deep understanding of Ghana's political landscape and his unwavering commitment to accountability and inclusive development make him an indispensable pillar of the Committee's leadership.",
  },
  legal: {
    name: "Lawyer Abubakar Mutiu-Rahaman",
    title: "Legal Adviser & Counsel — JDM-PLLC Global Steering Committee",
    role: "Legal Adviser & Counsel",
    image: "/images/airo-assets/images/people/committee/legal-adviser.jpg",
    bio: "Lawyer Abubakar Mutiu-Rahaman serves as Legal Adviser and Counsel to the JDM-PLLC Global Steering Committee, providing expert legal guidance on institutional governance, intellectual property, and the regulatory frameworks governing the Centre's establishment. His counsel ensures that the Centre's operations and partnerships are grounded in sound legal practice and aligned with both Ghanaian law and international standards.",
  },
};

const members = [
  {
    name: "Dr. Roger Adamu Lure Kanton",
    title: "Member — Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/member-001.jpg",
    bio: "Dr. Roger Adamu Lure Kanton is a seasoned agricultural research scientist with 31 years of service at CSIR-SARI, where he rose to Chief Research Scientist and served as Deputy Director. Now an independent agricultural consultant, his interests include agricultural research, environmental and climate advocacy, rural development, and the Fight Against Donkey Extinction initiative.",
  },
  {
    name: "Dr. Bernard Lawer Tetteh-Dumanya",
    title: "Member — Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/member-002.png",
    bio: "Dr. Bernard Tetteh-Dumanya is a Pan-African financial economist, academic and management consultant with over 20 years of experience. His expertise spans project finance, investment advisory, corporate strategy, risk, ESG and institutional development. He is committed to mobilising capital, developing bankable projects and connecting African enterprises to global investment opportunities.",
  },
  {
    name: "Mr. Ronnie Dunn",
    title: "Global Ambassador for International Outreach & Strategic Engagement — United Kingdom & Europe",
    image: "/images/airo-assets/images/people/committee/ops-007.jpg",
    bio: "Ronnie \"Big Sbuda\" Dunn is a South African-American artist, entrepreneur, cultural ambassador, philanthropist and U.S. military veteran. As Global Ambassador for AUUDA-Africa and Founder of CIGAR Music USA, he advances diaspora reconnection, African heritage, cultural diplomacy and international partnerships. A delegate in the G20 South Africa Presidency 2025 under the Civil Society C20: Working Group 6: Cultural Diversity Recognition and Embracement representing the African Union's Sixth Region, Ronnie transforms ancestral reconnection into enduring cultural and economic relationships between Africa and its global diaspora.",
  },
  {
    name: "John Hardy-Bey",
    title: "Member — Global Steering Committee",
    image: "/images/airo-assets/images/people/committee/member-003.png",
    bio: "Mr. John Hardy-Bey is a distinguished member of the JDM-PLLC Global Steering Committee, contributing his expertise in international relations and diaspora engagement to the Centre's mission. With a strong background in cross-cultural diplomacy and community mobilisation, he serves as a vital bridge between the Centre and its global network of supporters, partners, and advocates.",
  },
  {
    name: "Ms. Stacey Reddy",
    title: "Global Ambassador — South Africa",
    image: "/images/airo-assets/images/people/committee/ops-008.png",
    bio: "Stacey Reddy is a South African legal professional, entrepreneur and property practitioner with an LLB from the University of South Africa. Her experience spans legal administration, property management, business development and stakeholder engagement. As a JDM-PLLC Global Ambassador, she draws on her professional expertise and international perspective to strengthen relationships between South Africa, the wider African continent, diaspora communities and global partners.",
  },
];

const opsLeads = [
  {
    name: "Mr. Diakite Abdoulaye Aziz",
    title: "International Operational Lead — Côte d'Ivoire & Francophone West Africa",
    image: "/images/airo-assets/images/people/committee/ops-001.png",
    bio: "Mr. Diakite Abdoulaye Aziz leads the Centre's operational engagement across Côte d'Ivoire and Francophone West Africa. A seasoned professional with deep regional networks, he coordinates outreach, partnership development, and programme delivery across French-speaking West African nations, ensuring the Centre's vision resonates across linguistic and cultural boundaries throughout the sub-region.",
  },
  {
    name: "Ms. Mpho Machaka",
    title: "International Operational Lead — South Africa & Southern Africa",
    image: "/images/airo-assets/images/people/committee/ops-002.png",
    bio: "Ms. Mpho Machaka (MBA, PMP, Adv Dip–Risk) is the Founder and CEO of IETSA, its innovation and commercial arm IETSATech, and Baruwileng Consulting Services (Pty) Ltd. She serves on several boards and continental committees, including the AfYEF Board, and is Continental Director for Women in Trade. Her work advances digital transformation, enterprise development and inclusive economic participation across Africa.",
  },
  {
    name: "Dr. Babajide Ojuola",
    title: "International Operational Lead — Nigeria & Anglophone West Africa",
    image: "/images/airo-assets/images/people/committee/ops-003.png",
    bio: "Dr. Babajide Ojuola (PhD, FNSE, FIOGRHS, FIMC, COREN) is an accomplished energy and technology executive with nearly two decades of experience delivering major engineering and infrastructure projects across Africa. He specialises in strategic transformation, project management, knowledge systems and human-centred artificial intelligence. A Forbes Technology Council member, he serves as a JDM-PLLC Global Steering Committee member and International Operational Lead for Nigeria and Anglophone West Africa.",
  },
  {
    name: "Ms. Patience Mafu",
    title: "International Operational Lead — United Kingdom & Europe",
    image: "/images/airo-assets/images/people/committee/ops-004.jpg",
    bio: "Patience Mafu is a UK-based international development practitioner, diaspora engagement advocate and cultural diplomacy leader. She is the Founder of AUUDA-Africa and serves as JDM-PLLC Global Champion and International Operational Lead for the United Kingdom and Europe. Drawing on her experience in development, accounting and the G20 South Africa Presidency 2025 Civil20 process, she builds strategic partnerships that connect African institutions, cultural leadership and diaspora communities worldwide.",
  },
  {
    name: "Dr. Monohn Prudhomme",
    title: "International Operational Lead — United States of America & North America",
    image: "/images/airo-assets/images/people/committee/ops-005.jpg",
    bio: "Dr. Monohn Prudhomme leads the Centre's operational presence across the United States and North America. Drawing on his academic credentials and extensive professional network in the diaspora community, he champions the Centre's fundraising, advocacy, and partnership initiatives across North America, connecting the Ghanaian diaspora and international stakeholders to the legacy and vision of President John Dramani Mahama.",
  },
  {
    name: "Ms. Corelli Lyons",
    title: "International Operational Lead — Trinidad & Tobago & the Caribbean",
    image: "/images/airo-assets/images/people/committee/ops-006.png",
    bio: "Ms. Corelli Lyons is a Tobago-born multi-entrepreneur, philanthropist and cultural-trade pioneer with over 35 years of banking experience. She is a certified talent coach, founder of a non-profit organisation and Chief Executive of several companies. Her work advances women entrepreneurs, develops young leaders and strengthens trade and cultural connections between Africa and the Caribbean.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Global Steering Committee"
        description="An international body of distinguished leaders appointed to guide the vision, governance, and global reach of the John Dramani Mahama Presidential Library & Legacy Centre."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
      />

      {/* Intro */}
      <section className="bg-[var(--brand-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Appointed to Lead, Empowered to Serve
            </h2>
            <p className="leading-relaxed text-white/90">
              The Global Steering Committee of the JDM Presidential Library & Legacy Centre brings together accomplished leaders from across Africa and the world. Each member has been appointed in recognition of their distinguished service, expertise, and commitment to the values of democracy, education, and African development.
            </p>
            <p className="mt-4 leading-relaxed text-white/90">
              Under the leadership of Prof. Abdulai Abubakar, the Committee provides strategic oversight, international advocacy, and governance support as the Centre moves from concept to reality.
            </p>
          </div>

          {/* Leadership Stream */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold text-white">Leadership</h3>
            <div className="space-y-4">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:flex md:gap-6">
                <div className="mb-4 h-56 w-48 flex-shrink-0 overflow-hidden rounded-lg border-4 border-[var(--brand-accent)] shadow-md md:mb-0">
                  <img
                    src={committee.originator.image}
                    alt={committee.originator.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-[var(--brand-text)]">{committee.originator.name}</h4>
                      <span className="rounded bg-[var(--brand-accent)] px-2 py-1 text-xs font-semibold text-[var(--brand-primary)]">{committee.originator.role}</span>
                    </div>
                    <p className="mb-2 text-sm text-[var(--brand-text-light)]">{committee.originator.title}</p>
                    <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{committee.originator.bio}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:flex md:gap-6">
                <div className="mb-4 h-56 w-48 flex-shrink-0 overflow-hidden rounded-lg border-4 border-[var(--brand-accent)] shadow-md md:mb-0">
                  <img
                    src={committee.patron.image}
                    alt={committee.patron.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-[var(--brand-text)]">{committee.patron.name}</h4>
                      <span className="rounded bg-[var(--brand-accent)] px-2 py-1 text-xs font-semibold text-[var(--brand-primary)]">{committee.patron.role}</span>
                    </div>
                    <p className="mb-2 text-sm text-[var(--brand-text-light)]">{committee.patron.title}</p>
                    <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{committee.patron.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Executive Leadership */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold text-white">Executive Leadership</h3>
            <div className="space-y-4">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:flex md:gap-6">
                  <div className="mb-4 h-56 w-48 flex-shrink-0 overflow-hidden rounded-lg border-4 border-[var(--brand-accent)] shadow-md md:mb-0">
                    <img
                      src={committee.chair.image}
                      alt={committee.chair.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-[var(--brand-text)]">{committee.chair.name}</h4>
                      <span className="rounded bg-[var(--brand-accent)] px-2 py-1 text-xs font-semibold text-[var(--brand-primary)]">{committee.chair.role}</span>
                    </div>
                    <p className="mb-2 text-sm text-[var(--brand-text-light)]">{committee.chair.title}</p>
                    <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{committee.chair.bio}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:flex md:gap-6">
                  <div className="mb-4 h-56 w-48 flex-shrink-0 overflow-hidden rounded-lg border-4 border-[var(--brand-accent)] shadow-md md:mb-0">
                    <img
                      src={committee.viceChair.image}
                      alt={committee.viceChair.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-[var(--brand-text)]">{committee.viceChair.name}</h4>
                      <span className="rounded bg-[var(--brand-accent)] px-2 py-1 text-xs font-semibold text-[var(--brand-primary)]">{committee.viceChair.role}</span>
                    </div>
                    <p className="mb-2 text-sm text-[var(--brand-text-light)]">{committee.viceChair.title}</p>
                    <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{committee.viceChair.bio}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 md:flex md:gap-6">
                  <div className="mb-4 h-56 w-48 flex-shrink-0 overflow-hidden rounded-lg border-4 border-[var(--brand-accent)] shadow-md md:mb-0">
                    <img
                      src={committee.legal.image}
                      alt={committee.legal.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-[var(--brand-text)]">{committee.legal.name}</h4>
                      <span className="rounded bg-[var(--brand-accent)] px-2 py-1 text-xs font-semibold text-[var(--brand-primary)]">{committee.legal.role}</span>
                    </div>
                    <p className="mb-2 text-sm text-[var(--brand-text-light)]">{committee.legal.title}</p>
                    <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{committee.legal.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Committee Members */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold text-white">Committee Members</h3>
            <div className="space-y-4">
              {members.map((member) => (
                <Card key={member.name} className="border-0 shadow-md">
                  <CardContent className="p-6 md:flex md:gap-6">
                    <div className="mb-4 h-56 w-48 flex-shrink-0 overflow-hidden rounded-lg border-4 border-[var(--brand-accent)] shadow-md md:mb-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--brand-text)]">{member.name}</h4>
                      <p className="mb-2 text-sm font-semibold text-[var(--brand-primary)]">{member.title}</p>
                      <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* International Operations */}
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">International Operations</h3>
            <p className="mb-6 text-white/90">Regional leads responsible for driving the Centre's partnerships, programmes, and outreach across Africa and the global diaspora.</p>
            <div className="space-y-4">
              {opsLeads.map((lead) => (
                <Card key={lead.name} className="border-0 shadow-md">
                  <CardContent className="p-6 md:flex md:gap-6">
                    <div className="mb-4 h-56 w-48 flex-shrink-0 overflow-hidden rounded-lg border-4 border-[var(--brand-accent)] shadow-md md:mb-0">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--brand-text)]">{lead.name}</h4>
                      <p className="mb-2 text-sm font-semibold text-[var(--brand-primary)]">{lead.title}</p>
                      <p className="text-sm leading-relaxed text-[var(--brand-text-light)]">{lead.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-primary-dark)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mb-8 text-white/85">
            Join the global network advancing the vision of the JDM Presidential Library & Legacy Centre.
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
