"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

const MESSAGE = "Confused? Talk to us directly";
const CYCLE_MS = 6000;
const TYPE_SPEED_MS = 45;
const BACKSPACE_SPEED_MS = 30;
const HOLD_FULL_MS = 1600;
const HOLD_EMPTY_MS = Math.max(
  0,
  CYCLE_MS -
    MESSAGE.length * TYPE_SPEED_MS -
    HOLD_FULL_MS -
    MESSAGE.length * BACKSPACE_SPEED_MS,
);

export default function WhatsappButton() {
  const [text, setText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;
    let i = 0;

    const typeNext = () => {
      if (cancelled) return;
      i += 1;
      setText(MESSAGE.slice(0, i));
      timeout = setTimeout(
        i < MESSAGE.length ? typeNext : eraseNext,
        i < MESSAGE.length ? TYPE_SPEED_MS : HOLD_FULL_MS,
      );
    };

    const eraseNext = () => {
      if (cancelled) return;
      i -= 1;
      setText(MESSAGE.slice(0, i));
      timeout = setTimeout(
        i > 0 ? eraseNext : cycleStart,
        i > 0 ? BACKSPACE_SPEED_MS : HOLD_EMPTY_MS,
      );
    };

    const cycleStart = () => {
      if (cancelled) return;
      i = 0;
      timeout = setTimeout(typeNext, TYPE_SPEED_MS);
    };

    cycleStart();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-30 flex items-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      <FaWhatsapp className="h-[4.5rem] w-[4.5rem] shrink-0 text-[#25D366] sm:h-20 sm:w-20" />
      <span className="whitespace-nowrap border border-border bg-surface px-3 py-2 text-sm text-foreground">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    </a>
  );
}
