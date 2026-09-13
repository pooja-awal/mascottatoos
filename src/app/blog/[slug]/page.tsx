import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionEyebrow from "@/components/section-eyebrow";
import BookAppointmentButton from "@/components/book-appointment-button";
import { blogPosts, unsplashUrl } from "@/data/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Mascot Tattoos`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <Link
        href="/blog"
        className="text-xs font-semibold tracking-widest text-muted uppercase hover:text-foreground"
      >
        ← Back to Blog
      </Link>

      <div className="mt-6">
        <SectionEyebrow>{post.category}</SectionEyebrow>
        <h1 className="font-display mt-4 text-4xl uppercase leading-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm tracking-wide text-muted uppercase">
          {formatDate(post.date)}
        </p>
      </div>

      <div className="mt-8 overflow-hidden border border-border">
        <img
          src={unsplashUrl(post.photo, 1200, 640)}
          alt={post.title}
          className="h-64 w-full object-cover sm:h-96"
        />
      </div>

      <div className="mt-10 space-y-5 text-base leading-7 text-foreground/90">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-14 border-t border-border pt-10 text-center">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Ready to book your session?
        </h2>
        <div className="mt-6 flex justify-center">
          <BookAppointmentButton />
        </div>
      </div>
    </article>
  );
}
