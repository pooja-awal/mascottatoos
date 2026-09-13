"use client";

import { useMemo, useState } from "react";
import SectionEyebrow from "@/components/section-eyebrow";
import { faqs } from "@/data/site";

const tabs = [
  { key: "all" as const, label: "All" },
  { key: "tattoo" as const, label: "Tattoo" },
  { key: "piercing" as const, label: "Piercing" },
];

export default function FAQ() {
  const [tab, setTab] = useState<"all" | "tattoo" | "piercing">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = useMemo(
    () => (tab === "all" ? faqs : faqs.filter((f) => f.category === tab)),
    [tab],
  );

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="font-display mt-6 text-5xl uppercase sm:text-6xl">
          Frequently
          <br />
          Asked Questions
        </h2>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => {
              setTab(t.key);
              setOpenIndex(0);
            }}
            className={`px-6 py-2 text-sm font-semibold uppercase ${
              tab === t.key
                ? "border border-accent bg-accent text-accent-foreground"
                : "border border-white bg-transparent text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-6 py-6 text-left"
              >
                <span className="font-display shrink-0 text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display flex-1 text-lg uppercase sm:text-xl">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 pl-12 text-sm leading-6 text-muted">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
