import Link from "next/link";
import { galleryImages, imgUrl } from "@/data/site";

const heights = [420, 300, 360, 460, 320, 400, 340, 380];

export default function GalleryTeaser() {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Gallery
        </p>
        <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
          Stories on Skin
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          Every piece reflects a story, a moment, or a meaning. Explore them
          all.
        </p>
      </div>

      <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {preview.map((item, i) => (
          <div key={item.seed} className="mb-4 break-inside-avoid">
            <img
              src={imgUrl(item.seed, 500, heights[i % heights.length])}
              alt={`${item.category} tattoo example`}
              className="w-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
