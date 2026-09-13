import { useId } from "react";
import SectionEyebrow from "@/components/section-eyebrow";
import { artists, unsplashUrl } from "@/data/site";

function InstagramIcon() {
  const gradientId = useId();
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <defs>
        <radialGradient id={gradientId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        fill={`url(#${gradientId})`}
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <circle cx="17.3" cy="6.7" r="1.1" fill="#fff" />
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
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] lg:items-start">
        <div className="sm:col-span-2 lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
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
