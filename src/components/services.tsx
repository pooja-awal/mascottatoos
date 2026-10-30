import Link from "next/link";
import CornerMarks from "@/components/corner-marks";
import HoverArrow from "@/components/hover-arrow";
import SectionEyebrow from "@/components/section-eyebrow";
import { services, unsplashUrl } from "@/data/site";

export function ServiceGrid() {
  return (
    <div className="grid gap-x-9 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service.title} className="relative">
          <CornerMarks />
          <Link href="/contact" className="frame group block bg-card p-3">
            <img
              src={unsplashUrl(service.photo, 700, 490)}
              alt={service.title}
              className="h-[255px] w-full object-cover"
              loading="lazy"
            />
            <div className="mt-4 flex items-center justify-between text-lg leading-[25.2px] font-semibold">
              {service.title}
              <HoverArrow />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-background px-5 pt-24 pb-[120px] sm:px-[30px] lg:px-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            What We Do Best
          </h2>
          <p className="mt-[18px] max-w-[640px] text-lg leading-[25.2px] italic">
            From delicate linework to bold statement pieces, we bring every
            idea to life.
          </p>
        </div>

        <div className="mt-[46px]">
          <ServiceGrid />
        </div>
      </div>
    </section>
  );
}
