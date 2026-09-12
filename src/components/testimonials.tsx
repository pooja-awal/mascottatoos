import SectionEyebrow from "@/components/section-eyebrow";
import { testimonials, unsplashUrl } from "@/data/site";

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-1 text-yellow-400"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

type Testimonial = (typeof testimonials)[number];

// Literal Tailwind class names (Tailwind's scanner needs the full class
// string to appear verbatim in the source — a lookup table keeps these
// "dynamic" placements while staying detectable at build time).
const COL_START: Record<number, string> = {
  1: "lg:col-start-1",
  2: "lg:col-start-2",
  3: "lg:col-start-3",
  4: "lg:col-start-4",
};
const ROW_START: Record<number, string> = {
  1: "lg:row-start-1",
  2: "lg:row-start-2",
  3: "lg:row-start-3",
  4: "lg:row-start-4",
};
const ROW_SPAN_2 = "lg:row-span-2";

function gridPlacement(colStart: number, rowStart: number, tall?: boolean) {
  return `${COL_START[colStart]} ${ROW_START[rowStart]} ${tall ? ROW_SPAN_2 : ""}`;
}

function Photo({
  t,
  colStart,
  rowStart,
  tall,
}: {
  t: Testimonial;
  colStart: number;
  rowStart: number;
  tall?: boolean;
}) {
  return (
    <div
      className={`h-72 bg-background sm:h-80 lg:h-full ${gridPlacement(colStart, rowStart, tall)}`}
    >
      <img
        src={unsplashUrl(t.photo, 500, 500)}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function Quote({
  t,
  colStart,
  rowStart,
  tall,
}: {
  t: Testimonial;
  colStart: number;
  rowStart: number;
  tall?: boolean;
}) {
  return (
    <div
      className={`flex h-72 flex-col bg-background p-8 sm:h-80 lg:h-full ${tall ? "justify-between" : "justify-center"} ${gridPlacement(colStart, rowStart, tall)}`}
    >
      <div>
        <Stars count={t.rating} />
        <p className="mt-4 text-sm leading-6 text-foreground/90">
          “{t.quote}”
        </p>
      </div>
      <p className={tall ? "text-sm text-foreground/60" : "mt-4 text-sm text-foreground/60"}>
        {t.name}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [jenny, devon, emily, sofia, chris, olivia] = testimonials;

  return (
    <section className="bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            Trusted by Ink Lovers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            See why our clients choose us for meaningful, high-quality
            tattoos.
          </p>
        </div>

        {/*
          A collage rather than a repeating card grid: two testimonials
          (Sofia, Chris) get a tall cell spanning two rows for visual
          rhythm; the rest sit in ordinary single-row cells. Explicit grid
          placement only kicks in at `lg`; below that everything stacks in
          plain reading order.
        */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[22rem]">
          <Photo t={jenny} colStart={1} rowStart={1} />
          <Quote t={jenny} colStart={2} rowStart={1} />
          <Quote t={devon} colStart={1} rowStart={2} />
          <Photo t={devon} colStart={2} rowStart={2} />

          <Quote t={sofia} colStart={3} rowStart={1} tall />
          <Photo t={sofia} colStart={4} rowStart={1} tall />

          <Quote t={chris} colStart={1} rowStart={3} tall />
          <Photo t={chris} colStart={2} rowStart={3} tall />

          <Photo t={emily} colStart={3} rowStart={3} />
          <Quote t={emily} colStart={4} rowStart={3} />
          <Quote t={olivia} colStart={3} rowStart={4} />
          <Photo t={olivia} colStart={4} rowStart={4} />
        </div>
      </div>
    </section>
  );
}
