import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, MapPin, Clock3, ArrowRight, BookOpen, Users, Landmark } from "lucide-react";
import { LaunchRegistrationForm } from "@/components/public/launch-registration-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Register for the Official Launch",
  description: "Register your interest in attending the proposed launch of the John Dramani Mahama Presidential Library & Legacy Centre.",
  alternates: { canonical: "/launch-registration" },
};

export default function LaunchRegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b2612] via-[#704018] to-[#a06435] px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/events" className="mb-6 inline-flex items-center text-sm font-medium text-white/90 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> All events
        </Link>

        <div className="overflow-hidden rounded-2xl bg-[#fbf7f2] shadow-2xl ring-1 ring-white/15">
          <div className="relative flex min-h-[760px] items-center overflow-hidden sm:min-h-[560px]">
            <Image
              src="/images/hero/northern-star-sunset.webp"
              alt="Illustrative image of President Mahama and the proposed Centre at sunset"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-(--brand-primary)/25 via-(--brand-primary)/35 to-(--brand-primary)/60 sm:bg-gradient-to-r sm:from-(--brand-primary)/80 sm:via-(--brand-primary)/50 sm:to-(--brand-primary)/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-(--brand-primary)/65 via-(--brand-primary)/20 to-transparent" />
            <div className="relative z-10 w-full px-5 py-10 text-center sm:px-10 sm:py-12">
              <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-(--brand-primary)/75 p-5 text-white shadow-2xl backdrop-blur-md sm:max-w-[820px] sm:p-8">
                <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full border border-white/30 bg-(--brand-primary-dark)/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">Proposed official launch</span>
                  <span className="rounded-full border border-white/30 bg-(--brand-primary-dark)/80 px-4 py-1.5 text-xs font-medium">Hosted by <a href="https://www.afyef.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">AfYEF</a> · Tamale, Ghana</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight drop-shadow sm:text-5xl">Official Launch</h1>
                <p className="mx-auto mt-3 max-w-3xl text-xl font-semibold leading-snug drop-shadow sm:text-2xl">John Dramani Mahama Presidential Library &amp; Legacy Centre</p>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white sm:text-base">A national launch for a new platform for history, leadership, knowledge and opportunity.</p>
                <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 text-center sm:grid-cols-[0.9fr_0.8fr_1.5fr]">
                  <div className="min-w-0 rounded-xl border border-white/25 bg-(--brand-primary-dark)/85 px-3 py-4 sm:px-4">
                    <div className="mb-2 flex items-center justify-center gap-2"><CalendarDays className="h-5 w-5 shrink-0 text-white" /><strong className="text-sm font-bold uppercase tracking-wider text-white">Date</strong></div>
                    <span className="block text-base font-bold leading-snug text-white">{siteConfig.launchDate}</span>
                  </div>
                  <div className="min-w-0 rounded-xl border border-white/25 bg-(--brand-primary-dark)/85 px-3 py-4 sm:px-4">
                    <div className="mb-2 flex items-center justify-center gap-2"><Clock3 className="h-5 w-5 shrink-0 text-white" /><strong className="text-sm font-bold uppercase tracking-wider text-white">Time</strong></div>
                    <span className="block text-base font-bold leading-snug text-white">10:00 AM</span>
                  </div>
                  <div className="col-span-2 min-w-0 rounded-xl border border-white/25 bg-(--brand-primary-dark)/85 px-3 py-4 text-center sm:col-span-1 sm:px-4">
                    <div className="mb-2 flex items-center justify-center gap-2"><MapPin className="h-5 w-5 shrink-0 text-white" /><strong className="text-sm font-bold uppercase tracking-wider text-white">Location</strong></div>
                    <span className="block text-base font-bold leading-snug text-white">University for Development Studies, Tamale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fbf7f2] p-6 sm:p-10">
            <div className="mx-auto mt-2 grid max-w-5xl items-start gap-10 lg:grid-cols-[1fr_380px]">
              <article className="max-w-3xl">
                <h2 className="mb-4 text-2xl font-bold text-gray-950">About this event</h2>
                <p className="leading-7 text-gray-700">
                  Join the proposed national launch of the John Dramani Mahama Presidential Library &amp; Legacy Centre, an initiative led by <a href="https://www.afyef.org" target="_blank" rel="noopener noreferrer" className="font-medium text-(--brand-primary) underline">AfYEF</a> to document and preserve historical records while inspiring future generations through learning and leadership.
                </p>
                <p className="mt-3 text-xs font-medium text-(--brand-primary)">
                  <a href="https://www.afyef.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.afyef.org</a>
                  {" · "}
                  <a href="https://www.afyef.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.afyef.com</a>
                </p>
                <p className="mt-4 leading-7 text-gray-700">
                  The Centre is being developed as an independent educational, historical and cultural institution. Its work brings together preservation, research, civic learning and youth opportunity.
                </p>
                <h2 className="mb-4 mt-9 text-2xl font-bold text-gray-950">The Centre&apos;s focus</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3"><BookOpen className="mt-1 h-5 w-5 shrink-0 text-(--brand-primary)" /><span className="text-sm leading-6 text-gray-700"><strong className="text-gray-950">Preserve knowledge</strong><br />Build a lasting home for historical records, research and public learning.</span></li>
                  <li className="flex gap-3"><Landmark className="mt-1 h-5 w-5 shrink-0 text-(--brand-primary)" /><span className="text-sm leading-6 text-gray-700"><strong className="text-gray-950">Explore leadership and heritage</strong><br />Create space for civic education, cultural history and public dialogue.</span></li>
                  <li className="flex gap-3"><Users className="mt-1 h-5 w-5 shrink-0 text-(--brand-primary)" /><span className="text-sm leading-6 text-gray-700"><strong className="text-gray-950">Inspire opportunity</strong><br />Connect young people with skills, enterprise and future possibilities.</span></li>
                </ul>
                <p className="mt-8 rounded-lg border-l-4 border-(--brand-primary) bg-gray-50 p-4 text-sm leading-6 text-gray-600">
                  The launch is proposed and subject to confirmation. Any change to the date, time, venue or programme will be announced through official channels.
                </p>
              </article>

              <aside id="reserve-your-seat" className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-(--brand-primary)">Registration</p>
                <h2 className="mb-2 text-xl font-bold text-gray-950">Reserve your seat</h2>
                <p className="mb-6 text-sm leading-6 text-gray-600">Register your interest and receive event updates by email. Registration is free.</p>
                <LaunchRegistrationForm />
                <p className="mt-5 border-t pt-4 text-xs leading-5 text-gray-500">Your details are used to manage this event registration. JDM-PLLC will not request payment through this form.</p>
                <Link href="/privacy" className="mt-3 inline-flex items-center text-xs font-semibold text-(--brand-primary) hover:underline">Privacy Notice <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
