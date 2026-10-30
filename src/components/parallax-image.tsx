"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  /** Vertical travel in px each way (the reference uses 60). */
  amount?: number;
  className?: string;
};

/**
 * Background image that drifts vertically as the section scrolls through
 * the viewport — the reference's "ParallaxImage" (vertical amount 60).
 */
export default function ParallaxImage({
  src,
  alt,
  amount = 60,
  className = "",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section enters at the bottom, 1 when it leaves the top.
      const progress = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      img.style.transform = `translate3d(0, ${(0.5 - progress) * 2 * amount}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [amount]);

  return (
    <div ref={wrapRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-x-0 block w-full object-cover will-change-transform"
        style={{ top: -amount, height: `calc(100% + ${amount * 2}px)` }}
      />
    </div>
  );
}
