import { describe, expect, it } from "vitest";
import { siteConfig } from "./site";
import { shouldPlayAudioForSlide } from "@/components/home/hero-slider";

describe("homepage hero configuration", () => {
  it("uses the requested video backgrounds for the video slides", () => {
    expect(siteConfig.heroSlides[1]?.video).toBe(
      "/videos/couple-holding-hands-on-sofa.mp4",
    );
    expect(siteConfig.heroSlides[2]?.video).toBeUndefined();
    expect(siteConfig.heroSlides[5]?.video).toBe(
      "/videos/baby-sleeping-in-nursery.mp4",
    );
  });

  it("keeps six slides total with the current final slide last", () => {
    expect(siteConfig.heroSlides).toHaveLength(6);
    expect(siteConfig.heroSlides.at(-1)?.id).toBe("visit");
  });

  it("plays sound only on the final video slide while active", () => {
    expect(shouldPlayAudioForSlide(0, 6, true)).toBe(false);
    expect(shouldPlayAudioForSlide(1, 6, true)).toBe(false);
    expect(shouldPlayAudioForSlide(2, 6, true)).toBe(false);
    expect(shouldPlayAudioForSlide(3, 6, true)).toBe(false);
    expect(shouldPlayAudioForSlide(4, 6, true)).toBe(false);
    expect(shouldPlayAudioForSlide(5, 6, true)).toBe(true);
    expect(shouldPlayAudioForSlide(5, 6, false)).toBe(false);
  });

  it("sets a duration for every slide and gives the second slide more time", () => {
    expect(siteConfig.heroSlides.every((slide) => typeof slide.duration === "number" && slide.duration > 0)).toBe(true);
    expect(siteConfig.heroSlides[1]?.duration).toBe(15000);
  });
});
