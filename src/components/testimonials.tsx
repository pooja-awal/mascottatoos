import SectionEyebrow from "@/components/section-eyebrow";
import {
  galleryImages,
  testimonials,
  unsplashUrl,
} from "@/data/site";

type Testimonial = (typeof testimonials)[number];

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-[5px] text-[20px] leading-5 text-[#ffd700]"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

/** One bordered cell: a review beside a photo (photo left or right). */
function Cell({
  t,
  photo,
  imageFirst,
  tall = false,
}: {
  t: Testimonial;
  photo: string;
  imageFirst: boolean;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col after:pointer-events-none after:absolute after:inset-0 after:border after:border-separator sm:flex-row ${
        tall ? "sm:h-[520px]" : "sm:h-[260px]"
      } ${imageFirst ? "" : "sm:flex-row-reverse"}`}
    >
      <img
        src={unsplashUrl(photo, 600, tall ? 1040 : 520)}
        alt="Tattoo by Mascot Tattoos"
        className="h-56 w-full object-cover sm:h-full sm:w-[46.25%] sm:shrink-0"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div>
          <Stars count={t.rating} />
          <p
            className={`mt-4 max-w-[266px] text-base leading-[22.4px] ${
              tall ? "sm:line-clamp-[15]" : "sm:line-clamp-5"
            }`}
          >
            {t.quote}
          </p>
        </div>
        <p className="text-base leading-5 font-medium text-foreground/70">
          {t.name}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const t = testimonials;
  const p = (i: number) => galleryImages[i % galleryImages.length].photo;

  return (
    <section className="bg-background px-5 pt-[120px] pb-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            Trusted by Ink Lovers
          </h2>
          <p className="mt-[18px] max-w-[519px] text-lg leading-[25.2px] italic">
            See why our clients choose us for meaningful, high-quality
            tattoos.
          </p>
        </div>

        <div className="mt-[46px] grid lg:grid-cols-2">
          <div>
            <Cell t={t[0]} photo={p(0)} imageFirst />
            <Cell t={t[1]} photo={p(3)} imageFirst={false} />
            <Cell t={t[3]} photo={p(6)} imageFirst />
          </div>
          <div>
            <Cell t={t[2]} photo={p(9)} imageFirst={false} tall />
            <Cell t={t[4]} photo={p(12)} imageFirst />
          </div>
        </div>

      </div>
    </section>
  );
}
