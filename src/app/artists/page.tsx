import type { Metadata } from "next";
import { ArtistCard } from "@/components/artists";
import BookingSection from "@/components/booking-section";
import FAQ from "@/components/faq";
import PageHero from "@/components/page-hero";
import { artists } from "@/data/site";

export const metadata: Metadata = {
  title: "Artists — Mascot Tattoos",
  description:
    "Meet the resident tattoo artists at Mascot Tattoos — realism, black & grey, traditional, fine line, neo-traditional, and color specialists.",
};

export default function ArtistsPage() {
  return (
    <>
      <PageHero eyebrow="Our Artists" title="Meet Our Artists">
        <div className="grid gap-x-9 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </PageHero>
      <FAQ />
      <BookingSection />
    </>
  );
}
