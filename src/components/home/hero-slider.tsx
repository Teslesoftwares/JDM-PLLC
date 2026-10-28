"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils";

const AUTOPLAY_MS = 7000;
/** Minimum horizontal travel (px) that counts as a swipe. */
const SWIPE_PX = 45;

export function shouldPlayAudioForSlide(index: number, totalSlides: number, slideHasVideo = true) {
  return slideHasVideo && totalSlides > 0 && index === totalSlides - 1;
}

function startSlideVideo(video: HTMLVideoElement, index: number, totalSlides: number) {
  const shouldPlayAudio = shouldPlayAudioForSlide(index, totalSlides, true);
  video.volume = 0.5;
  video.muted = !shouldPlayAudio;
  void video.play().catch(() => {
    video.muted = true;
    void video.play().catch(() => {});
  });
}

/**
 * Homepage hero carousel.
 *
 * The first slide carries the page `h1`; later slides use `h2` so the document
 * keeps a single top-level heading. Inactive slides stay mounted for the
 * crossfade but are marked `inert`, which removes them from the tab order and
 * from assistive technology without needing `display: none` (which would kill
 * the transition). Autoplay pauses on hover/focus, when the tab is hidden and
 * when the visitor prefers reduced motion, and can be toggled with the
 * play/pause control.
 */
export function HeroSlider() {
  const slides = siteConfig.heroSlides;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const goTo = useCallback(
    (index: number) => setActive((index + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const currentDuration = slides[active]?.duration ?? AUTOPLAY_MS;
    const timer = setInterval(
      () => setActive((index) => (index + 1) % slides.length),
      currentDuration,
    );
    return () => clearInterval(timer);
  }, [active, paused, slides]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index !== active) {
        video.pause();
        return;
      }

      video.currentTime = 0;
      startSlideVideo(video, index, slides.length);
    });
  }, [active, slides.length]);

  // Rotating slides must not steal focus or announce themselves mid-read.
  const live = paused ? "polite" : "off";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[var(--brand-primary)] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (start == null || end == null) return;
        if (Math.abs(end - start) < SWIPE_PX) return;
        goTo(end < start ? active + 1 : active - 1);
      }}
    >
      {/* Full-bleed stage: the photograph covers the whole viewport, so it must not
          be width-capped like the copy inside it. */}
      <div className="relative z-10 mx-auto flex min-h-[34rem] w-full flex-1 flex-col justify-center">
        {slides.map((slide, index) => {
          const isActive = index === active;
          const hasVideo = Boolean(slide.video);
          const shouldPlayAudio = shouldPlayAudioForSlide(index, slides.length, hasVideo) && isActive;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={cn(
                "absolute inset-0 z-0 flex items-center px-4 pt-20 pb-24 transition-all duration-700 ease-out sm:px-4 sm:py-24 lg:py-28",
                isActive
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0",
              )}
            >
              {slide.video ? (
                <>
                  <video
                    key={slide.video}
                    ref={(video) => {
                      videoRefs.current[index] = video;
                    }}
                    src={slide.video}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover",
                      isActive && "motion-hero-image",
                    )}
                    poster={slide.image}
                    autoPlay={isActive}
                    loop={slide.videoLoop ?? false}
                    playsInline
                    preload="auto"
                    controls={false}
                    muted={!shouldPlayAudio}
                    onCanPlay={(event) => {
                      if (isActive) {
                        startSlideVideo(event.currentTarget, index, slides.length);
                      }
                    }}
                    onPause={(event) => {
                      const video = event.currentTarget;
                      const nearEnd = video.duration - video.currentTime < 0.1;
                      if (isActive && !video.ended && !nearEnd) {
                        startSlideVideo(event.currentTarget, index, slides.length);
                      }
                    }}
                    onEnded={() => {
                      if (isActive) {
                        setActive((current) => (current + 1) % slides.length);
                      }
                    }}
                  />
                  {/* Scrim keeps the copy legible over any moving background. */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-primary)]/25 via-[var(--brand-primary)]/35 to-[var(--brand-primary)]/60 sm:bg-gradient-to-r sm:from-[var(--brand-primary)]/80 sm:via-[var(--brand-primary)]/50 sm:to-[var(--brand-primary)]/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/65 via-[var(--brand-primary)]/20 to-transparent" />
                </>
              ) : slide.image ? (
                <>
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    preload={index === 0}
                    sizes="100vw"
                    className={cn("object-cover", isActive && "motion-hero-image")}
                  />
                  {/* Scrim keeps the copy legible over any photograph. */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-primary)]/25 via-[var(--brand-primary)]/35 to-[var(--brand-primary)]/60 sm:bg-gradient-to-r sm:from-[var(--brand-primary)]/80 sm:via-[var(--brand-primary)]/50 sm:to-[var(--brand-primary)]/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/65 via-[var(--brand-primary)]/20 to-transparent" />
                </>
              ) : (
                <BrandMotif />
              )}

              <div
                className={cn(
                  "relative mx-auto w-full max-w-3xl text-center sm:text-left",
                  isActive && "motion-hero-copy",
                )}
              >
                <p className="mx-auto mb-2 max-w-xs text-xs font-semibold uppercase tracking-wider text-white/90 sm:mx-0 sm:mb-4 sm:max-w-none sm:text-sm">
                  {slide.eyebrow}
                </p>
                {index === 0 ? (
                  <h1 className="mx-auto max-w-[20rem] text-[1.75rem] font-bold leading-[1.14] tracking-tight sm:mx-0 sm:max-w-none sm:text-5xl sm:leading-[1.15] lg:text-6xl">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="mx-auto max-w-[20rem] text-[1.625rem] font-bold leading-[1.16] tracking-tight sm:mx-0 sm:max-w-none sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h2>
                )}
                <p className="mx-auto mt-3 max-w-[26rem] text-[0.9375rem] leading-6 text-white/90 sm:mx-0 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-relaxed">
                  <span className="sm:hidden">{slide.mobileBody ?? slide.body}</span>
                  <span className="hidden sm:inline">{slide.body}</span>
                </p>
                <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-start sm:gap-4">
                  {slide.primary.href.startsWith("tel:") ? (
                    <Button
                      asChild
                      size="lg"
                      className="w-full max-w-sm justify-center px-4 text-center text-sm bg-white text-[var(--brand-primary)] sm:w-auto sm:max-w-none sm:px-8"
                    >
                      <a href={slide.primary.href}>{slide.primary.label}</a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      size="lg"
                      className="w-full max-w-sm justify-center px-4 text-center text-sm bg-white text-[var(--brand-primary)] sm:w-auto sm:max-w-none sm:px-8"
                    >
                      <Link href={slide.primary.href}>
                        {slide.primary.label}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full max-w-sm justify-center px-4 text-center text-sm border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)] sm:w-auto sm:max-w-none sm:px-8"
                  >
                    <Link href={slide.secondary.href}>{slide.secondary.label}</Link>
                  </Button>
                  {(slide as any).tertiary ? (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full max-w-sm justify-center px-4 text-center text-sm border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-primary)] sm:w-auto sm:max-w-none sm:px-8"
                    >
                      <Link href={(slide as any).tertiary.href} target={(slide as any).tertiary.external ? "_blank" : undefined} rel={(slide as any).tertiary.external ? "noopener noreferrer" : undefined}>
                        {(slide as any).tertiary.label}
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute inset-x-0 bottom-4 z-10 px-4 pb-[env(safe-area-inset-bottom)] sm:bottom-7 lg:bottom-9">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-current={index === active}
                  aria-label={`Show slide ${index + 1}: ${slide.title}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "h-2.5 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70",
                    index === active ? "w-8 bg-white" : "w-2.5",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? "Resume slide rotation" : "Pause slide rotation"}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
              >
                {paused ? (
                  <Play className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous slide"
                className="hidden h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25 sm:flex"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next slide"
                className="hidden h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25 sm:flex"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p aria-live={live} className="sr-only">
          Slide {active + 1} of {slides.length}: {slides[active]?.title}
        </p>
      </div>

      {/* Static sub-bar — partnership stays put while the slides rotate. */}
      <div className="relative z-10 shrink-0 border-t border-white/10 bg-[var(--brand-primary)]">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <p className="text-sm text-white/75">
            Interested in partnering with us?{" "}
            <Link href="/partner" className="underline underline-offset-4 hover:text-white">
              Partner with the Centre
            </Link>{" "}
            to help shape this enduring institution.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Brand fallback for slides that have no photograph yet. */
function BrandMotif() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 600"
      >
        <defs>
          <pattern id="mc-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1200" height="600" fill="url(#mc-grid)" />
        <circle cx="980" cy="120" r="220" fill="#ffffff" fillOpacity="0.35" />
        <circle cx="1040" cy="480" r="150" fill="#ffffff" fillOpacity="0.25" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary)] to-[var(--brand-primary-dark)]" />
    </>
  );
}
