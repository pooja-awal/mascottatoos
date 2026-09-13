import type { Metadata } from "next";
import Artists from "@/components/artists";

export const metadata: Metadata = {
  title: "Artists — Mascot Tattoos",
  description:
    "Meet the resident tattoo artists at Mascot Tattoos — realism, black & grey, traditional, fine line, neo-traditional, and color specialists.",
};

export default function ArtistsPage() {
  return <Artists />;
}
