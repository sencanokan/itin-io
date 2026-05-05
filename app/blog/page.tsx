import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "ITIN Blog - Guides, Tips & Resources",
  description:
    "Expert guides on ITIN applications, renewals, tax tips, and more. Everything non-residents need to know about U.S. tax identification.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-primary-500/20 blur-[100px]" />
        <div className="container-wide relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            Resources
          </span>
          <h1 className="mt-6 text-display-md font-bold tracking-tight text-white lg:text-display-lg">
            ITIN <span className="gradient-text">Blog</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            Expert guides, tips, and resources for ITIN applications, renewals,
            and U.S. tax compliance.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white transition-all hover:border-primary-300 hover:shadow-card-hover"
              >
                {/* Color header bar */}
                <div className="h-2 rounded-t-2xl bg-gradient-stripe" />

                <div className="flex flex-1 flex-col p-6">
                  {/* Category & Read time */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">
                    {post.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary-600 transition-all group-hover:gap-3">
                    Read Guide
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
