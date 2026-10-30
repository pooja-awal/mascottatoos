import BookingForm from "@/components/booking-form";
import { bookingImage, openingHours, unsplashUrl } from "@/data/site";

export default function BookingSection() {
  return (
    <section className="bg-background px-5 py-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto grid max-w-[1560px] bg-[#050505] lg:grid-cols-[51.25%_1fr]">
        <div className="bg-panel p-6 sm:p-10">
          <h2 className="font-display text-4xl leading-[43.2px]">
            Book Your Appointment
          </h2>
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>

        <div className="relative min-h-[320px]">
          <img
            src={unsplashUrl(bookingImage, 900, 1280)}
            alt="Studio interior"
            className="absolute inset-0 h-full w-full object-cover grayscale"
            loading="lazy"
          />
          <div className="absolute right-0 bottom-0 w-full bg-white p-8 text-background sm:w-[292px] sm:p-12">
            <h3 className="font-display text-2xl leading-[28.8px] tracking-[0.02em]">
              Opening Hours
            </h3>
            <dl className="mt-6 space-y-2">
              {openingHours.map((row) => (
                <div key={row.day} className="flex items-center gap-5">
                  <dt className="w-[62px] text-lg leading-[25.2px] font-semibold">
                    {row.day.toUpperCase()}
                  </dt>
                  <span aria-hidden>:</span>
                  <dd className="text-base leading-[22.4px]">{row.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
