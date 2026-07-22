import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABanner } from "@/components/home/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Dental Health Blog",
  description: "Expert dental health tips, advice and news from the team at Edross Dental.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-36"
        style={{ background: "var(--color-primary)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-on-primary-subtle] font-semibold uppercase tracking-widest text-sm mb-4">Dental Insights</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Dental Health Blog
          </h1>
          <p className="text-[--color-on-primary-muted] text-lg max-w-2xl mx-auto">
            Expert advice, tips, and insights from our dental team to help you achieve your best smile.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Latest Articles"
            title="Oral Health Tips & News"
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
                aria-label={post.title}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Cover image for: ${post.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[--color-primary] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[--color-text-muted] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[--color-text] mb-3 leading-snug group-hover:text-[--color-primary] transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[--color-text-muted] leading-relaxed mb-5">{post.excerpt}</p>
                  <Link
                    href="/contact"
                    className="flex items-center gap-1.5 text-[--color-primary] font-semibold text-sm group-hover:gap-2.5 transition-all mt-auto"
                  >
                    Read Article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
