import type { Metadata } from "next";
import BlogGrid from "@/components/blog-grid";
import BookingSection from "@/components/booking-section";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Blog — Mascot Tattoos",
  description:
    "Aftercare tips, style guides, and studio news from Mascot Tattoos — tattoo and piercing studio in Raj Nagar, Ghaziabad.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes From the Studio">
        <BlogGrid />
      </PageHero>
      <BookingSection />
    </>
  );
}
