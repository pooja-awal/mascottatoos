import Link from "next/link";
import { galleryImages, unsplashUrl } from "@/data/site";

const heights = [420, 300, 360, 460, 320, 400, 340, 380];

export default function GalleryTeaser() {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Gallery
        </p>
        <h2 className="font-display mt-3 text-6xl uppercase sm:text-7xl lg:text-8xl">
          Stories on Skin
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          Every piece reflects a story, a moment, or a meaning. Explore them
          all.
        </p>
      </div>

      <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {preview.map((item, i) => (
          <div
            key={item.photo}
            className="group mb-4 overflow-hidden border border-border break-inside-avoid"
          >
            <img
              src={unsplashUrl(item.photo, 500, heights[i % heights.length])}
              alt={`${item.category} tattoo example`}
              className="w-full scale-100 object-cover grayscale transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/gallery"
          className="btn-sweep btn-sweep-solid inline-flex items-center justify-center bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
