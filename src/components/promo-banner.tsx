import Link from "next/link";
import { imgUrl } from "@/data/site";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={imgUrl("mascot-promo", 1920, 700)}
        alt="Close-up tattoo detail"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Limited Time Offer
        </p>
        <h2 className="font-display mt-3 text-3xl uppercase text-white sm:text-5xl">
          Get 15% Off Your First Tattoo
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
          Start your ink journey with us. Book your first session this month
          and enjoy an exclusive discount on custom tattoo work.
        </p>
        <Link
          href="/#booking"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
