import type { Metadata } from "next";
import BlogGrid from "@/components/blog-grid";
import SectionEyebrow from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Blog — Mascot Tattoos",
  description:
    "Aftercare tips, style guides, and studio news from Mascot Tattoos — tattoo and piercing studio in Raj Nagar, Ghaziabad.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="text-center">
        <SectionEyebrow>Blog</SectionEyebrow>
        <h1 className="font-display mt-3 text-6xl uppercase sm:text-7xl lg:text-8xl">
          Notes From the Studio
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          Aftercare tips, style guides, and everything we've learned from
          years behind the needle.
        </p>
      </div>

      <div className="mt-14">
        <BlogGrid />
      </div>
    </section>
  );
}
