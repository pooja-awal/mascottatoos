import { marqueeItems } from "@/data/site";

export default function MarqueeBand({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`absolute inset-x-0 top-1/2 w-[106%] -translate-x-[3%] -translate-y-1/2 overflow-hidden bg-accent py-4 ${
        reverse ? "rotate-[8deg]" : "-rotate-[8deg]"
      }`}
    >
      <div
        className={`flex w-max gap-8 ${
          reverse
            ? "animate-[marquee-reverse_28s_linear_infinite]"
            : "animate-[marquee_28s_linear_infinite]"
        }`}
      >
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

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
