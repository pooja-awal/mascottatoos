import SectionEyebrow from "@/components/section-eyebrow";
import { googleRating, siteConfig, testimonials } from "@/data/site";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.86 13.86 0 0 1 10.94 24c0-1.45.25-2.87.7-4.18v-5.7H4.34A21.93 21.93 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      style={{ color: "#FBBC05" }}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

type Testimonial = (typeof testimonials)[number];

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-72 w-[26rem] shrink-0 flex-col justify-between border border-border bg-surface p-8 sm:w-[28rem]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <p className="text-base font-semibold text-foreground">{t.name}</p>
          <p className="flex shrink-0 items-center gap-2 text-xs text-muted">
            <GoogleG className="h-4 w-4" />
            Posted on Google
          </p>
        </div>
        <div className="mt-4">
          <Stars count={t.rating} />
        </div>
        <p className="mt-4 line-clamp-5 text-sm leading-7 text-foreground/90">
          {t.quote}
        </p>
      </div>
    </div>
  );
}

function Row({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  duration: number;
}) {
  const looped = [...items, ...items];
  const animation =
    direction === "left"
      ? `marquee-left ${duration}s linear infinite`
      : `marquee-right ${duration}s linear infinite`;

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-8 hover:[animation-play-state:paused]"
        style={{ animation }}
      >
        {looped.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const rowA = testimonials.filter((_, i) => i % 2 === 0);
  const rowB = testimonials.filter((_, i) => i % 2 === 1);

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

          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="text-lg font-bold text-foreground">
              {googleRating.score}
            </span>
            <Stars count={5} />
            <span className="text-sm text-muted">
              {googleRating.count} Google reviews
            </span>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <Row items={rowA} direction="right" duration={rowA.length * 10} />
          <Row items={rowB} direction="left" duration={rowB.length * 10} />
        </div>

        <div className="mt-16 text-center">
          <a
            href={siteConfig.googleReview}
            target="_blank"
            rel="noreferrer"
            className="btn-sweep btn-sweep-accent inline-flex items-center justify-center border border-accent px-8 py-3.5 text-sm font-bold tracking-widest text-foreground uppercase transition-colors duration-300"
          >
            Write a Review
          </a>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
