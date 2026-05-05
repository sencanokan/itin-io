import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from "lucide-react";
import { getBlogPost, getAllSlugs, blogPosts } from "@/data/blog";
import { BlogContent } from "./BlogContent";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://itin.io/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  // Find next/prev posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // JSON-LD for article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "ITIN.io",
      url: "https://itin.io",
    },
    publisher: {
      "@type": "Organization",
      name: "ITIN.io",
      url: "https://itin.io",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-primary-500/20 blur-[100px]" />
        <div className="container-tight relative">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="mt-4 text-display-sm font-bold tracking-tight text-white lg:text-display-md">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            {post.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <BlogContent content={post.content} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-slate-50">
        <div className="container-tight text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Ready to get your ITIN?
          </h2>
          <p className="mt-2 text-slate-600">
            Apply online in minutes. IRS-authorized processing in 2-4 weeks.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/apply"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-50"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-12">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-2">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group rounded-2xl border border-slate-200 p-6 transition-all hover:border-primary-300 hover:shadow-card"
              >
                <span className="text-xs text-slate-400">Previous</span>
                <p className="mt-1 font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group rounded-2xl border border-slate-200 p-6 text-right transition-all hover:border-primary-300 hover:shadow-card"
              >
                <span className="text-xs text-slate-400">Next</span>
                <p className="mt-1 font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
