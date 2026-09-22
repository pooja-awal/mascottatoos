import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import PromoBanner from "@/components/promo-banner";
import Artists from "@/components/artists";
import Testimonials from "@/components/testimonials";
import MarqueeBand from "@/components/marquee-band";
import GalleryTeaser from "@/components/gallery-teaser";
import BlogTeaser from "@/components/blog-teaser";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PromoBanner />
      <Artists />
      <Testimonials />
      <div
        className="relative my-10 overflow-hidden"
        style={{ height: "clamp(10rem, 28vw, 28rem)" }}
      >
        <MarqueeBand />
        <MarqueeBand reverse />
      </div>
      <GalleryTeaser />
      <BlogTeaser />
      <FAQ />
    </>
  );
}
