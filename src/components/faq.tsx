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
  const [visible, setVisible] = useState(6);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (tab === "all" ? faqs : faqs.filter((f) => f.category === tab)),
    [tab],
  );

  return (
    <section className="bg-background px-5 py-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            Frequently
            <br />
            Asked Questions
          </h2>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              aria-pressed={tab === t.key}
              onClick={() => {
                setTab(t.key);
                setOpenIndex(null);
                setVisible(6);
              }}
              className="tab cursor-pointer"
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 w-full border-t border-separator lg:w-[60%]">
          {items.slice(0, visible).map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-separator">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-start py-[28.5px] text-left"
                >
                  <span className="font-display w-[29px] shrink-0 text-xs leading-[16.8px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display ml-6 flex-1 text-lg leading-[25.2px] sm:ml-20">
                    {item.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="pb-[28.5px] pl-[53px] text-base leading-[22.4px] text-foreground/80 sm:pl-[109px]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {items.length > visible && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + 6)}
              className="btn btn-sm cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
