"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** Seconds. The reference gallery images use 0.5. */
  duration?: number;
  delay?: number;
};

/**
 * Image that wipes in from the bottom (clip-path inset) the first time it
 * scrolls into view (threshold 0.1, ease-out) — the reference's
 * "ScrollRevealImage" component.
 */
export default function ScrollRevealImage({
  src,
  alt,
  className = "",
  style,
  duration = 0.5,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <div
        className="h-full w-full"
        style={{
          clipPath: shown ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
          transition: `clip-path ${duration}s cubic-bezier(0, 0, 0.58, 1) ${delay}s`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="block h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
