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
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#${gradientId})`} />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="#fff" />
    </svg>
  );
}

export function ArtistCard({ artist }: { artist: (typeof artists)[number] }) {
  return (
    <div className="frame bg-card p-3">
      <img
        src={unsplashUrl(artist.photo, 568, 564)}
        alt={artist.name}
        className="h-[282px] w-full object-cover"
        loading="lazy"
      />
      <div className="mt-4 flex items-center justify-between text-lg leading-[25.2px] font-semibold">
        {artist.name}
        <a
          href={`https://instagram.com/${artist.instagram.replace(/^@/, "")}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`${artist.name} on Instagram`}
        >
          <InstagramIcon />
        </a>
      </div>
      <span className="mt-2.5 inline-block bg-foreground px-1.5 py-1 text-xs leading-[14.4px] font-semibold text-accent uppercase">
        {artist.role}
      </span>
    </div>
  );
}

export default function Artists() {
  return (
    <section className="bg-background px-5 pt-[120px] pb-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-9 lg:flex-row lg:items-start lg:gap-6">
        <div className="lg:sticky lg:top-24 lg:flex-[0.9_0_0] lg:self-start">
          <SectionEyebrow>Our Artists</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            Meet Our Artists
          </h2>
          <p className="mt-4 max-w-[395px] text-base leading-[22.4px] italic">
            A team of skilled tattoo and piercing professionals dedicated to
            turning your ideas into exceptional body art.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:flex-1 lg:gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
