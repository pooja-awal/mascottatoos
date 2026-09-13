import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "About — Mascot Tattoos",
  description:
    "Learn about the Mascot Tattoos tattoo studio in Raj Nagar, Ghaziabad — our approach, standards, and the numbers behind the work.",
};

export default function AboutPage() {
  return <About />;
}
