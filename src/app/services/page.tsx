import type { Metadata } from "next";
import Services from "@/components/services";

export const metadata: Metadata = {
  title: "Services — Mascot Tattoos",
  description:
    "Custom tattoo, black & grey, minimalistic, portrait tattoo, ombre powder brows, and piercing services at Mascot Tattoos.",
};

export default function ServicesPage() {
  return <Services />;
}
