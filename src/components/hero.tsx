import Link from "next/link";
import { imgUrl } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={imgUrl("mascot-hero", 1920, 1200)}
        alt="Tattoo artist finishing a piece"
        className="absolute inset-0 h-full w-full object-cover object-[70%_30%] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium tracking-widest text-muted uppercase">
          New York City · Est. Studio
        </p>
        <h1 className="font-display max-w-2xl text-5xl leading-[1.05] tracking-wide uppercase sm:text-6xl lg:text-7xl">
          Art Beneath
          <br />
          the Skin
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-muted">
          Where creativity meets precision. Custom tattoo designs inked to
          tell your story.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/#booking"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book Appointment
          </Link>
          <span className="font-display text-2xl tracking-widest uppercase">
            Tattoo
          </span>
        </div>
      </div>
    </section>
  );
}
