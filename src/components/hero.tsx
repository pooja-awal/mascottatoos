import Appear, { springs } from "@/components/appear";
import ScrollParallax from "@/components/scroll-parallax";
import BookAppointmentButton from "@/components/book-appointment-button";
import RotatingShowcaseCard from "@/components/rotating-showcase-card";
import { heroImage, unsplashUrl } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Appear
        scale={1.2}
        transition={springs.image}
        className="absolute inset-0 will-change-transform"
      >
        <ScrollParallax speed={120} className="h-full w-full">
          <img
            src={unsplashUrl(heroImage, 1920, 1200)}
            alt="Tattoo artist finishing a piece"
            className="h-full w-full object-cover object-[70%_30%] grayscale"
          />
        </ScrollParallax>
      </Appear>
      {/* Fade to the page background along the bottom edge. */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,1,1,0.01)_42%,#010101_98%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative mx-auto flex w-full max-w-[1560px] flex-col items-start justify-between gap-10 px-5 pt-40 pb-16 sm:px-[30px] lg:flex-row lg:items-end lg:px-20 lg:pb-[100px]">
        <Appear y={60} transition={springs.hero}>
          <h1 className="font-display max-w-[1021px] text-[64px] leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[88px] lg:text-[120px] lg:leading-[132px]">
            Art Beneath
            <br />
            the Skin
          </h1>
          <Appear y={-40} transition={springs.hero}>
            <p className="mt-2.5 max-w-[511px] text-lg leading-[25.2px]">
              Where creativity meets precision. Custom tattoo designs crafted
              to tell your story.
            </p>
          </Appear>
          <Appear y={-40} transition={springs.hero}>
            <BookAppointmentButton className="mt-[25px]" />
          </Appear>
        </Appear>

        <div className="z-20 hidden sm:block">
          <RotatingShowcaseCard />
        </div>
      </div>
    </section>
  );
}
