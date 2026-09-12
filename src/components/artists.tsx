import SectionEyebrow from "@/components/section-eyebrow";
import { artists, siteConfig, unsplashUrl } from "@/data/site";

export default function Artists() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
        <div>
          <SectionEyebrow>Our Artists</SectionEyebrow>
          <h2 className="font-display mt-6 text-5xl uppercase sm:text-6xl">
            Meet Our Artists
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-foreground/80 italic">
            A team of skilled tattoo and piercing professionals dedicated to
            turning your ideas into exceptional body art.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {artists.map((artist, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={artist.name}
                className={`flex flex-col items-center gap-6 sm:flex-row sm:gap-8 ${
                  reversed ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full shrink-0 overflow-hidden border border-border sm:w-56">
                  <img
                    src={unsplashUrl(artist.photo, 500, 600)}
                    alt={artist.name}
                    className="h-56 w-full object-cover sm:h-64"
                    loading="lazy"
                  />
                </div>

                <div
                  className={`flex flex-col text-center sm:text-left ${
                    reversed ? "sm:items-end sm:text-right" : "sm:items-start"
                  }`}
                >
                  <span className="inline-block w-fit bg-accent px-3 py-1 text-xs font-bold tracking-widest text-white uppercase">
                    {artist.role}
                  </span>
                  <h3 className="font-display mt-4 text-3xl uppercase sm:text-4xl">
                    {artist.name}
                  </h3>

                  <div className="mt-4 flex flex-col gap-1.5 text-sm font-semibold text-foreground/80">
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram — {artist.instagram}
                    </a>
                    <a
                      href={siteConfig.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
