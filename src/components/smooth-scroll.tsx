"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Site-wide smooth scrolling. The reference runs Lenis with an intensity of
 * 20, which its wrapper maps to `duration: intensity / 10`.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 2 });

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    // Pause while the fullscreen menu locks the page (body overflow hidden).
    const sync = () => {
      if (document.body.style.overflow === "hidden") lenis.stop();
      else lenis.start();
    };
    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
