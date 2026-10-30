"use client";

import { useEffect, useRef } from "react";

/**
 * Framer "parallax" effect: the wrapped layer scrolls at `speed`% of the
 * page's scroll rate (the reference hero image uses 120).
 */
export default function ScrollParallax({
  speed = 120,
  className = "",
  children,
}: {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (ref.current) {
        ref.current.style.transform = `translate3d(0, ${window.scrollY * (1 - speed / 100)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
