import { imgUrl, testimonials } from "@/data/site";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Testimonials
          </p>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            Trusted by Ink Lovers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            See why our clients choose us for meaningful, high-quality
            tattoos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <img
                src={imgUrl(t.seed, 600, 380)}
                alt=""
                className="h-44 w-full object-cover grayscale"
                loading="lazy"
              />
              <div className="p-6">
                <Stars count={t.rating} />
                <p className="mt-4 text-sm leading-6 text-foreground/80">
                  “{t.quote}”
                </p>
                <p className="mt-4 font-display text-sm tracking-wide uppercase text-muted">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
