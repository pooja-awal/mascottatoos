import type { Metadata } from "next";
import BookingSection from "@/components/booking-section";
import FAQ from "@/components/faq";
import PageHero from "@/components/page-hero";
import { ServiceGrid } from "@/components/services";

export const metadata: Metadata = {
  title: "Services — Mascot Tattoos",
  description:
    "Custom tattoo, black & grey, minimalistic, portrait tattoo, ombre powder brows, and piercing services at Mascot Tattoos.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="What We Do Best">
        <ServiceGrid />
      </PageHero>
      <FAQ />
      <BookingSection />
    </>
  );
}
