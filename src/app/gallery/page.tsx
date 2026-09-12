import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery-grid";
import SectionEyebrow from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Gallery — Mascottatoos",
  description:
    "Browse tattoo work from the Mascottatoos studio — black & grey, color, fine line, traditional, and piercing.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="text-center">
        <SectionEyebrow>Full Gallery</SectionEyebrow>
        <h1 className="font-display mt-3 text-6xl uppercase sm:text-7xl lg:text-8xl">
          Stories on Skin
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          Every piece reflects a story, a moment, or a meaning. Filter by
          style to explore our work.
        </p>
      </div>

      <div className="mt-14">
        <GalleryGrid />
      </div>
    </section>
  );
}
