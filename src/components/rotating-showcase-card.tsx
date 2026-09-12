"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CornerMarks from "@/components/corner-marks";
import {
  showcaseAvatars,
  showcasePhotos,
  showcaseStat,
  unsplashUrl,
} from "@/data/site";

export default function RotatingShowcaseCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % showcasePhotos.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    // ~3in wide overall; the photo card and the rating card are two
    // separate boxes stacked with a gap, not one combined container.
    <div className="w-[3in] space-y-3">
      <div className="relative">
        <CornerMarks />

        <div className="rounded-lg border border-border bg-surface p-2.5">
          <div className="relative h-36 overflow-hidden rounded-md">
            {showcasePhotos.map((photo, i) => (
              <img
                key={photo}
                src={unsplashUrl(photo, 450, 560)}
                alt="Recent tattoo work"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <Link
            href="/gallery"
            className="group mt-2 flex items-center justify-between text-xs font-semibold tracking-widest text-foreground uppercase"
          >
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-lg bg-surface p-3">
        <div className="flex -space-x-2.5">
          {showcaseAvatars.map((photo) => (
            <img
              key={photo}
              src={unsplashUrl(photo, 80, 80)}
              alt=""
              className="h-7 w-7 rounded-full border border-surface object-cover"
            />
          ))}
        </div>

        <div>
          <div className="flex gap-0.5 text-sm text-accent" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-[10px] leading-tight font-semibold tracking-wide text-muted uppercase">
            {showcaseStat.value} {showcaseStat.label}
          </p>
        </div>
      </div>
    </div>
  );
}
