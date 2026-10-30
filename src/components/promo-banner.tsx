import BookAppointmentButton from "@/components/book-appointment-button";
import ParallaxImage from "@/components/parallax-image";
import { promoImage, unsplashUrl } from "@/data/site";

export default function PromoBanner() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-24 sm:px-[30px]">
      <ParallaxImage
        src={unsplashUrl(promoImage, 1920, 1000)}
        alt="Close-up tattoo detail"
        amount={60}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,1,1,0.01)_12%,#010101_100%)]" />

      <div className="relative flex max-w-[834px] flex-col items-center text-center">
        <h2 className="font-display text-4xl leading-[1.2] uppercase sm:text-5xl">
          Book a Free Consultation
        </h2>
        <p className="mt-3 text-lg leading-[25.2px]">
          Not sure where to start? Sit down with one of our artists to talk
          through your idea, placement, and design, no obligation, before you
          commit to anything.
        </p>
        <BookAppointmentButton className="mt-9" />
      </div>
    </section>
  );
}
