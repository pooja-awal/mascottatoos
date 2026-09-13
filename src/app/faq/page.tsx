import type { Metadata } from "next";
import FAQ from "@/components/faq";

export const metadata: Metadata = {
  title: "FAQ — Mascot Tattoos",
  description:
    "Answers to common questions about booking, pricing, healing, and piercing aftercare at Mascot Tattoos.",
};

export default function FAQPage() {
  return <FAQ />;
}
