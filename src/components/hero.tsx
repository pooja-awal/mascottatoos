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

      <div className="relative mt-24 flex w-full flex-col items-start gap-10 px-6 py-16 sm:mt-32 sm:px-10 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:px-20 lg:py-24">
        <div className="mt-40 sm:mt-0">
          <h1 className="font-display max-w-3xl text-5xl leading-[0.95] tracking-wide capitalize sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Art Beneath
            <br />
            the Skin
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted sm:mt-8 sm:text-lg">
            Where creativity meets precision. Custom tattoo designs inked to
            tell your story.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10">
            <BookAppointmentButton />
          </div>
        </div>

        <div className="z-20 hidden self-center sm:block lg:self-auto">
          <RotatingShowcaseCard />
        </div>
      </div>
    </section>
  );
}
