"use client";

import { useState } from "react";
import ScrollRevealImage from "@/components/scroll-reveal-image";
import { galleryImages, unsplashUrl } from "@/data/site";

// Per-column image heights lifted from the reference gallery page.
const columnHeights = [
  [260, 360, 280, 240, 360],
  [300, 380, 260, 300, 240],
  [320, 200, 360, 260, 360],
  [180, 360, 300, 340, 360],
];

const PAGE_SIZE = 20;

export default function GalleryGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = galleryImages.slice(0, visible);

  // Deal images across the 4 columns, row by row, so every row is filled.
  const columns: { item: (typeof galleryImages)[number]; h: number }[][] = [
    [],
    [],
    [],
    [],
  ];
  shown.forEach((item, i) => {
    const col = i % 4;
    const row = columns[col].length;
    const heights = columnHeights[col];
    columns[col].push({ item, h: heights[row % heights.length] });
  });

  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {columns.map((col, c) => (
          <div key={c} className="flex flex-col gap-2.5">
            {col.map(({ item, h }) => (
              <ScrollRevealImage
                key={item.photo}
                src={unsplashUrl(item.photo, 600, h * 2)}
                alt={`${item.category} tattoo example`}
                className="w-full"
                style={{ height: h }}
              />
            ))}
          </div>
        ))}
      </div>

      {visible < galleryImages.length && (
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn btn-lg cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
