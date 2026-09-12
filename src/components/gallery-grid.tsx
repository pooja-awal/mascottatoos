"use client";

import { useMemo, useState } from "react";
import { galleryCategories, galleryImages, unsplashUrl } from "@/data/site";

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
            className={`btn-sweep px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
              category === cat
                ? "btn-sweep-solid bg-accent text-accent-foreground"
                : "btn-sweep-accent border border-border text-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {items.map((item, i) => (
          <div
            key={item.photo}
            className="group mb-4 overflow-hidden border border-border break-inside-avoid"
          >
            <img
              src={unsplashUrl(item.photo, 500, heights[i % heights.length])}
              alt={`${item.category} tattoo example`}
              className="w-full scale-100 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
