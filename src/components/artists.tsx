import SectionEyebrow from "@/components/section-eyebrow";
import { artists, unsplashUrl } from "@/data/site";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-4 w-4"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArtistCard({ artist }: { artist: (typeof artists)[number] }) {
  return (
    <div className="group overflow-hidden border border-border">
      <div className="overflow-hidden">
        <img
          src={unsplashUrl(artist.photo, 500, 600)}
          alt={artist.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="bg-background p-4 text-foreground">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg uppercase">{artist.name}</h3>
          <a
            href={`https://instagram.com/${artist.instagram.replace(/^@/, "")}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`${artist.name} on Instagram`}
          >
            <InstagramIcon />
          </a>
        </div>
        <span className="mt-2 inline-block w-fit border border-accent px-2.5 py-1 text-[11px] font-bold tracking-widest text-accent uppercase">
          {artist.role}
        </span>
      </div>
    </div>
  );
}

export default function Artists() {
  const columns: (typeof artists)[] = [[], []];
  artists.forEach((artist, i) => columns[i % 2].push(artist));

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionEyebrow>Our Artists</SectionEyebrow>
          <h2 className="font-display mt-6 text-5xl uppercase sm:text-6xl">
            Meet Our Artists
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-foreground/80 italic">
            A team of skilled tattoo and piercing professionals dedicated to
            turning your ideas into exceptional body art.
          </p>
        </div>

        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-10">
            {column.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
