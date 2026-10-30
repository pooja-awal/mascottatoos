import Link from "next/link";
import SectionEyebrow from "@/components/section-eyebrow";
import { aboutImage, bookingImage, siteConfig, unsplashUrl } from "@/data/site";

export default function About() {
  return (
    <section className="bg-background px-5 py-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto grid max-w-[1560px] items-center gap-12 lg:grid-cols-2 lg:gap-9">
        <div>
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            About {siteConfig.name}
          </h2>
          <p className="mt-[17px] max-w-[528px] text-base leading-[22.4px] italic">
            Established in 2012, {siteConfig.name} is home to multi-award
            winning tattoo artists in Raj Nagar, Ghaziabad. From minimalistic
            linework and detailed portrait tattoos to piercings and ombre
            powder brows, we work across all styles. Whether it&apos;s a
            small meaningful tattoo or a full-sleeve statement, we&apos;re
            dedicated to turning your vision into a lasting work of art.
          </p>

          <Link href="/services" className="btn btn-sm mt-[46px]">
            Read More
          </Link>
        </div>

        <div className="flex items-end gap-4">
          <img
            src={unsplashUrl(aboutImage, 900, 1100)}
            alt="Inside the Mascot Tattoos studio"
            className="aspect-[319/360] w-[53%] object-cover"
            loading="lazy"
          />
          <img
            src={unsplashUrl(bookingImage, 700, 900)}
            alt="Tattoo artist sketching a design"
            className="aspect-[266/260] w-0 flex-1 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
