import Link from "next/link";
import SectionEyebrow from "@/components/section-eyebrow";
import { blogPosts, unsplashUrl } from "@/data/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogTeaser() {
  const preview = blogPosts.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <SectionEyebrow>Blog</SectionEyebrow>
        <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
          Notes From the Studio
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          Aftercare tips, style guides, and everything we've learned from
          years behind the needle.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border border-border bg-surface p-3"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={unsplashUrl(post.photo, 700, 460)}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3 text-xs tracking-widest text-accent uppercase">
                <span>{post.category}</span>
                <span aria-hidden>•</span>
                <span className="text-muted">{formatDate(post.date)}</span>
              </div>
              <h3 className="font-display mt-2 text-lg uppercase leading-tight">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="btn-sweep btn-sweep-outline inline-flex items-center justify-center border border-foreground bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300"
        >
          Read All Posts
        </Link>
      </div>
    </section>
  );
}
