import Link from "next/link";
import ScrollRevealImage from "@/components/scroll-reveal-image";
import SectionEyebrow from "@/components/section-eyebrow";
import { galleryImages, unsplashUrl } from "@/data/site";

// Per-column image heights lifted from the reference masonry.
const columns = [
  [260, 360, 280],
  [300, 380, 260],
  [260, 240, 360],
  [180, 360, 300],
];

export default function GalleryTeaser() {
  return (
    <section className="bg-background px-5 py-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            Stories on Skin
          </h2>
          <p className="mt-[18px] max-w-[547px] text-lg leading-[25.2px] italic">
            Every piece reflects a story, a moment, or a meaning. Explore them
            all.
          </p>
        </div>

        <div className="mt-[46px] grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {columns.map((heights, col) => (
            <div
              key={col}
              className={`flex flex-col gap-2.5 ${col % 2 ? "max-lg:mt-0" : ""}`}
            >
              {heights.map((h, row) => {
                const item = galleryImages[(col * 3 + row) % galleryImages.length];
                return (
                  <ScrollRevealImage
                    key={`${col}-${row}`}
                    src={unsplashUrl(item.photo, 600, h * 2)}
                    alt={`${item.category} tattoo example`}
                    className="w-full"
                    style={{ height: h }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/gallery" className="btn btn-sm">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
