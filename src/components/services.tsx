import { imgUrl, services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Our Craft
          </p>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            What We Do Best
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            From delicate linework to bold statement pieces, we bring every
            idea to life.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={imgUrl(service.seed, 700, 560)}
                alt={service.title}
                className="h-72 w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3 className="font-display text-xl uppercase text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[22rem] text-sm leading-6 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {service.desc}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
