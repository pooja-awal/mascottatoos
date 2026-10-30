import { marqueeItems } from "@/data/site";

export default function MarqueeBand({ reverse = false }: { reverse?: boolean }) {
  // Four identical groups, each with trailing padding instead of a flex gap,
  // so shifting by exactly one group width (25%) loops seamlessly.
  const groups = [0, 1, 2, 3];

  return (
    <div
      className={`absolute top-[calc(50%-32px)] left-[-2%] flex h-16 w-[104%] items-center overflow-hidden bg-accent ${
        reverse ? "rotate-[9deg]" : "-rotate-[9deg]"
      }`}
    >
      <div
        className={`flex w-max ${
          reverse
            ? "animate-[marquee-reverse_42s_linear_infinite]"
            : "animate-[marquee_42s_linear_infinite]"
        }`}
      >
        {groups.map((g) => (
          <div
            key={g}
            aria-hidden={g > 0}
            className="flex shrink-0 items-center gap-[10px] pr-[10px]"
          >
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-[14px] text-lg leading-[25.2px] font-semibold whitespace-nowrap text-background uppercase"
              >
                {item}
                <span aria-hidden className="h-[5px] w-[5px] bg-background" />
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
