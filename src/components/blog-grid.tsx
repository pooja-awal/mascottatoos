import Link from "next/link";
import CornerMarks from "@/components/corner-marks";
import { blogPosts, unsplashUrl } from "@/data/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <div key={post.slug} className="relative">
          <CornerMarks />
          <Link
            href={`/blog/${post.slug}`}
            className="group block h-full border border-border bg-surface p-3"
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
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-foreground uppercase">
                Read More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
