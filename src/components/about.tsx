import Link from "next/link";
import CornerMarks from "@/components/corner-marks";
import { aboutImage, siteConfig, unsplashUrl } from "@/data/site";

const stats = [
  { value: "12+", label: "Years Inking" },
  { value: "3,000+", label: "Tattoos Completed" },
  { value: "6", label: "Resident Artists" },
];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Since Day One
          </p>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            About {siteConfig.name}
          </h2>
          <p className="mt-6 text-base leading-7 text-muted">
            At {siteConfig.name}, we craft every tattoo with the same intent:
            respect for your story and obsessive attention to detail. From
            first sketch to final line, our resident artists design in the
            open, walking you through every decision before the needle
            touches skin.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            Our {siteConfig.city} studio runs on hospital-grade sterilization,
            single-use needles, and an environment built to make even
            first-timers feel at ease.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-accent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="btn-sweep btn-sweep-accent mt-10 inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-300"
          >
            Read More
          </Link>
        </div>

        <div className="relative">
          <CornerMarks />
          <div className="overflow-hidden border border-border">
            <img
              src={unsplashUrl(aboutImage, 900, 1000)}
              alt="Inside the Mascottatoos studio"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
