import type { Metadata } from "next";
import Services from "@/components/services";

export const metadata: Metadata = {
  title: "Services — Mascottatoos",
  description:
    "Custom tattoo, black & grey, fine line, cover-up, traditional, and piercing services at Mascottatoos.",
};

export default function ServicesPage() {
  return <Services />;
}
