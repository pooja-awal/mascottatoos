"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

const PHRASES = ["Confused?", "Talk to us directly!"];
const CYCLE_MS = 6000;
const TYPE_SPEED_MS = 45;
const BACKSPACE_SPEED_MS = 30;
const HOLD_MS = 450;
const GAP_BETWEEN_PHRASES_MS = 250;

const activePhrasesMs = PHRASES.reduce(
  (total, phrase) =>
    total + phrase.length * TYPE_SPEED_MS + HOLD_MS + phrase.length * BACKSPACE_SPEED_MS,
  0,
);
const TAIL_GAP_MS = Math.max(
  0,
  CYCLE_MS - activePhrasesMs - GAP_BETWEEN_PHRASES_MS * (PHRASES.length - 1),
);

export default function WhatsappButton() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const runPhrase = (phraseIndex: number) => {
      if (cancelled) return;
      const phrase = PHRASES[phraseIndex];
      const isLastPhrase = phraseIndex === PHRASES.length - 1;
      let i = 0;

      setOpen(true);
      setText("");

      const eraseNext = () => {
        if (cancelled) return;
        i -= 1;
        setText(phrase.slice(0, i));
        if (i > 0) {
          timeout = setTimeout(eraseNext, BACKSPACE_SPEED_MS);
          return;
        }
        setOpen(false);
        timeout = setTimeout(
          () => runPhrase(isLastPhrase ? 0 : phraseIndex + 1),
          isLastPhrase ? TAIL_GAP_MS : GAP_BETWEEN_PHRASES_MS,
        );
      };

      const typeNext = () => {
        if (cancelled) return;
        i += 1;
        setText(phrase.slice(0, i));
        timeout = setTimeout(
          i < phrase.length ? typeNext : eraseNext,
          i < phrase.length ? TYPE_SPEED_MS : HOLD_MS,
        );
      };

      timeout = setTimeout(typeNext, TYPE_SPEED_MS);
    };

    runPhrase(0);

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
      className="fixed bottom-6 left-6 z-30 flex flex-col items-center transition-transform duration-300 hover:scale-105"
    >
      {open && (
        <span className="mb-2 whitespace-nowrap border border-border bg-surface px-3 py-2 text-sm text-foreground">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      )}
      <FaWhatsapp className="h-[3.825rem] w-[3.825rem] shrink-0 text-[#25D366] sm:h-[4.25rem] sm:w-[4.25rem]" />
    </a>
  );
}
