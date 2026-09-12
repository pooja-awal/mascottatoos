import BookAppointmentButton from "@/components/book-appointment-button";
import RotatingShowcaseCard from "@/components/rotating-showcase-card";
import { heroImage, unsplashUrl } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={unsplashUrl(heroImage, 1920, 1200)}
        alt="Tattoo artist finishing a piece"
        className="absolute inset-0 h-full w-full object-cover object-[70%_30%] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <h1 className="font-display max-w-3xl text-6xl leading-[0.95] tracking-wide uppercase sm:text-7xl lg:text-8xl xl:text-9xl">
          Art Beneath
          <br />
          the Skin
        </h1>
        <p className="mt-8 max-w-md text-lg leading-7 text-muted">
          Where creativity meets precision. Custom tattoo designs inked to
          tell your story.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <BookAppointmentButton />
        </div>
      </div>

      <div className="absolute right-6 bottom-6 z-20 sm:right-10 sm:bottom-10">
        <RotatingShowcaseCard />
      </div>
    </section>
  );
}
