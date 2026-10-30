"use client";

import { motion, type Transition } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
  scale?: number;
  perspective?: boolean;
  transition: Transition;
};

/**
 * Load-in animation matching Framer's "appear" effect: starts at
 * opacity 0.001 offset by (x, y) / scaled, then animates to rest.
 */
export default function Appear({
  children,
  className,
  x = 0,
  y = 0,
  scale = 1,
  perspective = false,
  transition,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0.001,
        x,
        y,
        scale,
        ...(perspective ? { transformPerspective: 1200 } : {}),
      }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, transition }}
    >
      {children}
    </motion.div>
  );
}

/** Spring presets lifted from the reference's appear-animation data. */
export const springs = {
  hero: { type: "spring", stiffness: 121, damping: 27, mass: 0.3, delay: 0.2 },
  soft: { type: "spring", stiffness: 200, damping: 40, mass: 1, delay: 0.2 },
  header: { type: "spring", stiffness: 200, damping: 40, mass: 1, delay: 0.4 },
  card: { type: "spring", bounce: 0.2, duration: 0.6, delay: 0.6 },
  image: { type: "tween", duration: 1, ease: [0.44, 0, 0.56, 1], delay: 0 },
} satisfies Record<string, Transition>;
