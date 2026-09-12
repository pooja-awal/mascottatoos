"use client";

import { useMemo, useState } from "react";
import { galleryCategories, galleryImages, imgUrl } from "@/data/site";

const heights = [420, 300, 360, 460, 320, 400, 340, 380, 440, 310];

export default function GalleryGrid() {
  const [category, setCategory] =
    useState<(typeof galleryCategories)[number]>("All");

  const items = useMemo(
    () =>
      category === "All"
        ? galleryImages
        : galleryImages.filter((i) => i.category === category),
    [category],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              category === cat
                ? "bg-accent text-accent-foreground"
                : "border border-border text-muted hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {items.map((item, i) => (
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
    </div>
  );
}
