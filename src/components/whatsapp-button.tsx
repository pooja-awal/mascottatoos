"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

const MESSAGES = ["Confused?", "Talk to us directly!"];

const TYPE_SPEED = 55;
const BACK_SPEED = 30;
const PAUSE_AFTER_TYPE = 2400;
const GAP_BETWEEN_CYCLES = 8000;

type Phase = "typing" | "pausing" | "erasing" | "gap";

export default function WhatsappButton() {
  const pathname = usePathname();
  const bubbleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (pathname === "/contact") return;

    let msgIndex = 0;
    let charIndex = 0;
    let phase: Phase = "gap";

    function setBubble(visible: boolean) {
      const el = bubbleRef.current;
      if (!el) return;
      el.style.opacity = visible ? "1" : "0";
      el.style.transform = visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.95)";
    }

    function setText(str: string) {
      if (textRef.current) textRef.current.textContent = str;
    }

    function tick() {
      const msg = MESSAGES[msgIndex];

      if (phase === "gap") {
        setBubble(true);
        charIndex = 0;
        phase = "typing";
        timerRef.current = setTimeout(tick, 300);

      } else if (phase === "typing") {
        charIndex++;
        setText(msg.slice(0, charIndex));
        if (charIndex < msg.length) {
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          phase = "pausing";
          timerRef.current = setTimeout(tick, PAUSE_AFTER_TYPE);
        }

      } else if (phase === "pausing") {
        phase = "erasing";
        timerRef.current = setTimeout(tick, 0);

      } else if (phase === "erasing") {
        charIndex--;
        setText(msg.slice(0, charIndex));
        if (charIndex > 0) {
          timerRef.current = setTimeout(tick, BACK_SPEED);
        } else {
          msgIndex = (msgIndex + 1) % MESSAGES.length;
          if (msgIndex === 0) {
            setBubble(false);
            phase = "gap";
            timerRef.current = setTimeout(tick, GAP_BETWEEN_CYCLES);
          } else {
            phase = "typing";
            charIndex = 0;
            timerRef.current = setTimeout(tick, 200);
          }
        }
      }
    }

    timerRef.current = setTimeout(tick, 1500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setBubble(false);
      setText("");
    };
  }, [pathname]);

  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-7 left-7 z-[9999] flex flex-col items-start gap-2.5">
      <div
        ref={bubbleRef}
        className="pointer-events-none rounded-2xl rounded-bl-[4px] bg-white px-[18px] py-3.5 text-base font-medium text-[#111] shadow-[0_4px_18px_rgba(0,0,0,0.13)]"
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          whiteSpace: "nowrap",
          opacity: 0,
          transform: "translateY(8px) scale(0.95)",
          transformOrigin: "bottom left",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        <span ref={textRef} />
        <span
          className="ml-0.5 inline-block h-4 w-0.5 align-middle bg-[#25D366]"
          style={{ animation: "wa-blink 0.6s step-end infinite" }}
        />
      </div>

      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition-[background,transform] duration-200 hover:scale-[1.08] hover:bg-[#1ebe5d]"
      >
        <svg viewBox="0 0 24 24" className="h-[30px] w-[30px] fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @keyframes wa-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
