import Link from "next/link";
import CornerMarks from "@/components/corner-marks";
import { services, unsplashUrl } from "@/data/site";

export default function Services() {
  return (
    <section className="bg-surface/40 py-24">
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="relative">
              <CornerMarks />
              <Link
                href="/contact"
                className="group block border border-border bg-surface p-3"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={unsplashUrl(service.photo, 700, 560)}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg uppercase">
                    {service.title}
                  </h3>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
