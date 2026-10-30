import type { Metadata } from "next";
import BookingSection from "@/components/booking-section";
import GalleryGrid from "@/components/gallery-grid";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Gallery — Mascot Tattoos",
  description:
    "Browse tattoo work from the Mascot Tattoos studio — black & grey, color, fine line, traditional, and piercing.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Stories on Skin">
        <GalleryGrid />
      </PageHero>
      <BookingSection />
    </>
  );
}
