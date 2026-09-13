import Link from "next/link";
import SectionEyebrow from "@/components/section-eyebrow";
import { aboutImage, bookingImage, siteConfig, unsplashUrl } from "@/data/site";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionEyebrow>Who We Are</SectionEyebrow>

          <h2 className="font-display mt-6 text-5xl uppercase sm:text-6xl">
            About {siteConfig.name}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-foreground/80 italic">
            Established in 2012, {siteConfig.name} is home to multi-award
            winning tattoo artists in Raj Nagar, Ghaziabad. From minimalistic
            linework and detailed portrait tattoos to piercings and ombre
            powder brows, we work across all styles. Whether it&apos;s a
            small meaningful tattoo or a full-sleeve statement, we&apos;re
            dedicated to turning your vision into a lasting work of art.
          </p>

          <Link
            href="/services"
            className="btn-sweep btn-sweep-outline mt-10 inline-flex items-center gap-2 border border-foreground bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-300"
          >
            Read More
          </Link>
        </div>

        <div className="flex items-end gap-4 sm:gap-6">
          <div className="h-[380px] w-[62%] overflow-hidden border border-border sm:h-[460px] lg:h-[520px]">
            <img
              src={unsplashUrl(aboutImage, 900, 1100)}
              alt="Inside the Mascot Tattoos studio"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="h-[280px] flex-1 overflow-hidden border border-border sm:h-[340px] lg:h-[380px]">
            <img
              src={unsplashUrl(bookingImage, 700, 900)}
              alt="Tattoo artist sketching a design"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
