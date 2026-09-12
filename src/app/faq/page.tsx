import type { Metadata } from "next";
import FAQ from "@/components/faq";

export const metadata: Metadata = {
  title: "FAQ — Mascottatoos",
  description:
    "Answers to common questions about booking, pricing, healing, and piercing aftercare at Mascottatoos.",
};

export default function FAQPage() {
  return <FAQ />;
}
