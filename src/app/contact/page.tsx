import type { Metadata } from "next";
import BookingSection from "@/components/booking-section";

export const metadata: Metadata = {
  title: "Contact — Mascottatoos",
  description:
    "Book your appointment at Mascottatoos — send your idea, preferred artist, and placement, or check our opening hours.",
};

export default function ContactPage() {
  return <BookingSection />;
}
