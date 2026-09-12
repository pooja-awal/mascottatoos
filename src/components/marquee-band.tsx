import { marqueeItems } from "@/data/site";

export default function MarqueeBand() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="my-10 overflow-hidden">
      <div className="relative w-[115%] -translate-x-[2.5%] -rotate-2 overflow-hidden bg-accent py-4">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8">
          {items.map((item, i) => (
            <span
              key={i}
              className="font-display flex items-center gap-8 text-sm tracking-widest text-accent-foreground uppercase sm:text-base"
            >
              {item}
              <span aria-hidden className="text-lg">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
