import Link from "next/link";
import CornerMarks from "@/components/corner-marks";
import HoverArrow from "@/components/hover-arrow";
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
    <div className="grid gap-x-9 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <div key={post.slug} className="relative">
          <CornerMarks />
          <Link
            href={`/blog/${post.slug}`}
            className="frame group block h-full bg-card p-3"
          >
            <img
              src={unsplashUrl(post.photo, 700, 490)}
              alt={post.title}
              className="h-[255px] w-full object-cover"
              loading="lazy"
            />
            <div className="mt-4">
              <p className="text-xs leading-[14.4px] font-semibold text-accent uppercase">
                {post.category}
                <span className="text-foreground/70"> · {formatDate(post.date)}</span>
              </p>
              <h3 className="font-display mt-3 text-lg leading-[25.2px]">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-base leading-[22.4px] text-foreground/80">
                {post.excerpt}
              </p>
              <span className="mt-4 flex items-center justify-between text-sm font-semibold uppercase">
                Read More
                <HoverArrow />
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
