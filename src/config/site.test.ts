import { describe, expect, it } from "vitest";
import { siteConfig } from "./site";
import { shouldPlayAudioForSlide } from "@/components/home/hero-slider";

describe("homepage hero configuration", () => {
  it("uses the approved video backgrounds for the video slides", () => {
    expect(siteConfig.heroSlides[0]?.video).toBeUndefined();
    expect(siteConfig.heroSlides[1]?.video).toBe(
      "/images/hero/architectural-pan.mp4",
    );
    expect(siteConfig.heroSlides[2]?.video).toBe(
      "/images/hero/campus-walk.mp4",
    );
    expect(siteConfig.heroSlides[3]?.video).toBeUndefined();
  });

  it("keeps four slides total with the locations slide last", () => {
    expect(siteConfig.heroSlides).toHaveLength(4);
    expect(siteConfig.heroSlides.at(-1)?.id).toBe("support");
  });

  it("plays sound only on the final video slide while active", () => {
    expect(shouldPlayAudioForSlide(0, 4, true)).toBe(false);
    expect(shouldPlayAudioForSlide(1, 4, true)).toBe(false);
    expect(shouldPlayAudioForSlide(2, 4, true)).toBe(false);
    expect(shouldPlayAudioForSlide(3, 4, true)).toBe(true);
    expect(shouldPlayAudioForSlide(3, 4, false)).toBe(false);
  });

  it("sets a duration for every slide and gives the legacy slide more time", () => {
    expect(siteConfig.heroSlides.every((slide) => typeof slide.duration === "number" && slide.duration > 0)).toBe(true);
    expect(siteConfig.heroSlides[1]?.duration).toBe(15000);
  });
});
