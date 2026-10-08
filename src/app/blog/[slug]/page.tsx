import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { BLOG_POSTS_DATA } from "@/lib/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.summary,
    canonicalUrl: `/blog/${post.slug}`,
    keywords: [post.category, ...post.relatedServices, "NovaCrest Tech blog"]
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      {/* Ambient background glows */}
      <div className="ambient-glow-cyan top-20 left-1/4 pointer-events-none" />
      <div className="ambient-glow-blue top-96 right-10 pointer-events-none" />

      <ArticleSchema
        title={post.title}
        description={post.summary}
        url={`/blog/${post.slug}`}
        datePublished={post.publishDate}
        authorName={post.author.name}
      />

      <div className="mb-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all insights
        </Link>
        <Breadcrumbs
          items={[
            { label: "Engineering Insights", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` }
          ]}
        />
      </div>

      {/* Main Editorial Card */}
      <div className="glass-surface p-6 sm:p-12 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#00F2FE]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Article Header */}
        <header className="pb-10 border-b border-white/[0.08] relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8] mb-6">
            <span className="px-3 py-1 rounded-full bg-[#121722] text-[#00F2FE] border border-[#00F2FE]/25 font-medium shadow-[0_0_12px_rgba(0,242,254,0.15)]">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <Calendar className="w-3.5 h-3.5 text-[#00F2FE]" />
              {post.publishDate}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <Clock className="w-3.5 h-3.5 text-[#00F2FE]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed mb-8 font-light">
            {post.summary}
          </p>

          {/* Author box */}
          <div className="flex items-center gap-3.5 pt-6 border-t border-white/[0.06]">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00F2FE]/20 to-[#3B82F6]/20 border border-[#00F2FE]/40 flex items-center justify-center text-[#00F2FE] font-bold text-xs font-mono shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              {post.author.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-[#94A3B8] font-mono">{post.author.role} • NovaCrest Technologies</p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="py-10 space-y-6 text-sm sm:text-base text-[#94A3B8] leading-relaxed relative z-10">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-[#CBD5E1]">
              {paragraph}
            </p>
          ))}

          {/* Architectural Callout Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#090D15]/90 border border-[#00F2FE]/30 my-10 shadow-[0_0_30px_rgba(0,242,254,0.06)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00F2FE] to-[#3B82F6]" />
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2 pl-2">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
              NovaCrest Engineering Takeaway
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pl-2">
              By engineering performance budgets, structured JSON-LD data, and intuitive UX flows directly into the core code repository, software compounds organic search reach and conversion velocity without incurring escalating marketing overhead.
            </p>
          </div>

          {/* Internal Topic Interlinking */}
          <div className="pt-8 border-t border-white/[0.08]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Related Engineering & Strategy Capabilities
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.relatedServices.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="px-3.5 py-2 rounded-xl bg-[#121722] text-xs font-mono text-[#00F2FE] border border-white/[0.08] hover:border-[#00F2FE]/50 hover:bg-[#00F2FE]/5 transition-all"
                >
                  {service} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {post.faqs.length > 0 && (
        <div className="mt-12">
          <FAQSection
            title="QUESTIONS ADDRESSED IN THIS ARTICLE"
            subtitle="Straightforward answers to the technical questions product teams frequently ask about this topic."
            faqs={post.faqs}
          />
        </div>
      )}

      <div className="mt-12">
        <CTASection
          title="NEED US TO AUDIT OR BUILD YOUR SYSTEM?"
          description="Schedule a 30-minute discovery call with our engineering leads. We review your architecture, identify bottlenecks, and deliver an actionable execution plan."
        />
      </div>
    </div>
  );
}
