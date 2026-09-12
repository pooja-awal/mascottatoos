import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "About — Mascottatoos",
  description:
    "Learn about the Mascottatoos tattoo studio in New York City — our approach, standards, and the numbers behind the work.",
};

export default function AboutPage() {
  return <About />;
}
