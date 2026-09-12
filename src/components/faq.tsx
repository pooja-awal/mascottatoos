"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/data/site";

const tabs = [
  { key: "tattoo" as const, label: "Tattoo" },
  { key: "piercing" as const, label: "Piercing" },
];

export default function FAQ() {
  const [tab, setTab] = useState<"tattoo" | "piercing">("tattoo");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = useMemo(() => faqs.filter((f) => f.category === tab), [tab]);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          FAQ
        </p>
        <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
          Frequently Asked Questions
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
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              tab === t.key
                ? "bg-accent text-accent-foreground"
                : "border border-border text-muted hover:text-foreground"
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
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-sm font-semibold sm:text-base">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-xl text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 text-sm leading-6 text-muted">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
