import { artists, imgUrl } from "@/data/site";

export default function Artists() {
  return (
    <section id="artists" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          The Team
        </p>
        <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
          Meet Our Artists
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          A team of artful and piercing professionals dedicated to turning
          your ideas into exceptional body art.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {artists.map((artist) => (
          <div key={artist.name} className="group">
            <div className="overflow-hidden rounded-xl">
              <img
                src={imgUrl(artist.seed, 400, 500)}
                alt={artist.name}
                className="h-56 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:h-64"
                loading="lazy"
              />
            </div>
            <div className="mt-3 border-b-2 border-accent pb-3">
              <h3 className="font-display text-base uppercase">
                {artist.name}
              </h3>
              <p className="text-xs text-muted">{artist.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
