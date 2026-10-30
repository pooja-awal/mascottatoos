import type { Metadata } from "next";
import Artists from "@/components/artists";
import BookingSection from "@/components/booking-section";
import PageHero from "@/components/page-hero";
import StudioGallery from "@/components/studio-gallery";
import { aboutImage, siteConfig, unsplashUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Mascot Tattoos",
  description:
    "Learn about the Mascot Tattoos tattoo studio in Raj Nagar, Ghaziabad — our approach, standards, and the numbers behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who We Are" title={`About ${siteConfig.name}`}>
        <img
          src={unsplashUrl(aboutImage, 1600, 760)}
          alt="Inside the Mascot Tattoos studio"
          className="h-[320px] w-full object-cover sm:h-[480px] lg:h-[600px]"
        />
        <p className="mx-auto mt-12 max-w-[768px] text-center text-lg leading-[25.2px]">
          Established in 2012, {siteConfig.name} is home to multi-award winning
          tattoo artists in Raj Nagar, Ghaziabad. From minimalistic linework
          and detailed portrait tattoos to piercings and ombre powder brows, we
          work across all styles. Whether it&apos;s a small meaningful tattoo
          or a full-sleeve statement, we&apos;re dedicated to turning your
          vision into a lasting work of art.
        </p>
      </PageHero>
      <Artists />
      <StudioGallery />
      <BookingSection />
    </>
  );
}
