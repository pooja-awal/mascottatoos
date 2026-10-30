import ScrollRevealImage from "@/components/scroll-reveal-image";
import SectionEyebrow from "@/components/section-eyebrow";
import { galleryImages, unsplashUrl } from "@/data/site";

// Two columns of reveal-on-scroll photos, heights from the reference.
const columns = [
  [340, 400],
  [380, 420],
];

export default function StudioGallery() {
  return (
    <section className="bg-background px-5 py-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>Studio</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            Inside Our Studio
          </h2>
          <p className="mt-[18px] max-w-[617px] text-lg leading-[25.2px] italic">
            Step into our space where creativity, craft, and comfort come
            together.
          </p>
        </div>

        <div className="mt-[46px] grid gap-2.5 sm:grid-cols-2">
          {columns.map((heights, col) => (
            <div key={col} className="flex flex-col gap-2.5">
              {heights.map((h, row) => {
                const item = galleryImages[(col * 2 + row + 6) % galleryImages.length];
                return (
                  <ScrollRevealImage
                    key={`${col}-${row}`}
                    src={unsplashUrl(item.photo, 1000, h * 2)}
                    alt="Inside the Mascot Tattoos studio"
                    className="w-full"
                    style={{ height: h }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
