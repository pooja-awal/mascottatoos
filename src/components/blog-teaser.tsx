import Link from "next/link";
import CornerMarks from "@/components/corner-marks";
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
    <section className="bg-background px-5 py-24 sm:px-[30px] lg:px-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>Blog</SectionEyebrow>
          <h2 className="font-display mt-3 text-5xl leading-[1.2]">
            Notes From the Studio
          </h2>
          <p className="mt-[18px] max-w-[534px] text-lg leading-[25.2px] italic">
            Aftercare tips, style guides, and everything we&apos;ve learned
            from years behind the needle.
          </p>
        </div>

        <div className="mt-12 grid gap-x-9 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((post) => (
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
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="btn btn-sm">
            Read All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
