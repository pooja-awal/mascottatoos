import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import PromoBanner from "@/components/promo-banner";
import Artists from "@/components/artists";
import Testimonials from "@/components/testimonials";
import MarqueeBand from "@/components/marquee-band";
import FAQ from "@/components/faq";
import GalleryTeaser from "@/components/gallery-teaser";
import BookingSection from "@/components/booking-section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PromoBanner />
      <Artists />
      <Testimonials />
      <MarqueeBand />
      <FAQ />
      <GalleryTeaser />
      <BookingSection />
    </>
  );
}
