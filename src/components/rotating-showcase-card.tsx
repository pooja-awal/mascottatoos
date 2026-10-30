"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Appear, { springs } from "@/components/appear";
import HoverArrow from "@/components/hover-arrow";
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
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-[220px] flex-col items-end gap-[26px]">
      <Appear x={12} transition={springs.card} className="w-full">
      <div className="relative w-full">
        <CornerMarks />

        <div className="frame bg-card p-3">
          <div className="relative h-[150px] overflow-hidden">
            {showcasePhotos.map((photo, i) => (
              <img
                key={photo}
                src={unsplashUrl(photo, 450, 560)}
                alt="Recent tattoo work"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <Link
            href="/gallery"
            className="group mt-4 flex h-6 items-center justify-between text-sm leading-[16.8px] font-semibold uppercase"
          >
            Learn More
            <HoverArrow />
          </Link>
        </div>
      </div>
      </Appear>

      <Appear y={40} transition={springs.soft}>
      <div className="flex w-max items-center gap-3.5 whitespace-nowrap">
        <div className="flex">
          {showcaseAvatars.map((photo, i) => (
            <img
              key={photo}
              src={unsplashUrl(photo, 80, 80)}
              alt=""
              className={`h-7 w-7 rounded-full object-cover ${i ? "-ml-1.5" : ""}`}
            />
          ))}
        </div>

        <div>
          <div className="flex gap-[5px] text-[10px] leading-[10px] text-[#ffd700]" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="mt-1 text-xs leading-[14.4px] font-semibold uppercase">
            {showcaseStat.value} {showcaseStat.label}
          </p>
        </div>
      </div>
      </Appear>
    </div>
  );
}
