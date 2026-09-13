import BookAppointmentButton from "@/components/book-appointment-button";
import SectionEyebrow from "@/components/section-eyebrow";
import { promoImage, unsplashUrl } from "@/data/site";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={unsplashUrl(promoImage, 1920, 700)}
        alt="Close-up tattoo detail"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center sm:py-24 lg:px-8">
        <SectionEyebrow>Free Consultation</SectionEyebrow>
        <h2 className="font-display mt-3 text-3xl uppercase text-white sm:text-5xl">
          Book a Free Consultation
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
          Not sure where to start? Sit down with one of our artists to talk
          through your idea, placement, and design, no obligation, before you
          commit to anything.
        </p>
        <BookAppointmentButton className="mt-8" />
      </div>
    </section>
  );
}
