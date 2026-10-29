"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const endorsementFlyers = [
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.29.jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.26%20(1).jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.26.jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.27%20(1).jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.27%20(2).jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.27%20(3).jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.27%20(4).jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.27.jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.29%20(1).jpeg",
  "/Endorsements/WhatsApp%20Image%202026-10-28%20at%2016.25.29%20(2).jpeg",
];

export function EndorsementSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="mt-12">
      <div className="relative mb-5 flex items-center justify-center gap-4">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
          Official Endorsement
        </p>
        <div className="absolute right-0 hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous endorsement"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--brand-text)] shadow-sm transition-colors hover:bg-[var(--brand-accent)]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next endorsement"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--brand-text)] shadow-sm transition-colors hover:bg-[var(--brand-accent)]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Endorsement flyers"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {endorsementFlyers.map((src, index) => (
          <figure
            key={src}
            className="w-[min(80vw,20rem)] flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg"
          >
            <Image
              src={src}
              alt={`Endorsement flyer ${index + 1}`}
              width={640}
              height={800}
              className="h-auto w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
