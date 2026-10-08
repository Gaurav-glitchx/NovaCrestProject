import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { BLOG_POSTS_DATA } from "@/lib/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Clock, ArrowRight, BookOpen, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "Engineering Insights & Practical Knowledge Hub",
  description: "Real-world engineering insights, architectural breakdowns, Core Web Vitals optimizations, and answer engine strategies from NovaCrest engineers.",
  canonicalUrl: "/blog"
});

export default function BlogIndexPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Ambient background glows */}
      <div className="ambient-glow-cyan top-10 left-1/4 pointer-events-none" />
      <div className="ambient-glow-blue top-40 right-10 pointer-events-none" />

      <Breadcrumbs items={[{ label: "Engineering Insights", href: "/blog" }]} />

      <div className="max-w-3xl mb-16 pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121722]/80 border border-[#00F2FE]/30 text-xs font-mono text-[#00F2FE] mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
          <Terminal className="w-3.5 h-3.5 text-[#00F2FE]" />
          <span>WRITTEN BY PRACTICING ENGINEERS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight display-headline mt-2 mb-6">
          Engineering notes, architectural tradeoffs & growth playbooks.
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          No ghostwritten fluff or recycled marketing checklists. Just candid post-mortems, architectural benchmarks, and actionable systems strategies from the engineers building NovaCrest client applications.
        </p>
      </div>

      {/* Featured / Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {BLOG_POSTS_DATA.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl glass-surface p-7 flex flex-col justify-between group hover:border-[#00F2FE]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(0,242,254,0.12)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2FE]/5 rounded-full blur-2xl group-hover:bg-[#00F2FE]/10 transition-colors pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#121722] text-[#00F2FE] border border-[#00F2FE]/25 font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-[#94A3B8]">
                  <Clock className="w-3.5 h-3.5 text-[#00F2FE]" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F2FE] transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                {post.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00F2FE]/20 to-[#3B82F6]/20 border border-[#00F2FE]/40 flex items-center justify-center text-[10px] font-mono text-[#00F2FE] font-bold">
                  {post.author.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-xs text-white font-medium">{post.author.name}</p>
                  <p className="text-[10px] text-[#94A3B8] font-mono">{post.author.role}</p>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-semibold text-[#00F2FE] group-hover:text-white transition-colors flex items-center gap-1 group/btn"
              >
                Read Article 
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Promise Callout */}
      <div className="mb-20 p-8 rounded-2xl glass-surface border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">Our Publishing Standard</span>
          <h3 className="text-xl font-bold text-white mt-1 mb-2">Every article is benchmarked against production code.</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            We write for CTOs, product founders, and lead engineers who need real numbers, reproducible solutions, and transparent trade-off analyses — never surface-level advice.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 font-mono text-xs text-[#00F2FE]">
          <span className="px-3 py-1.5 rounded-lg bg-[#121722] border border-white/[0.08] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Peer-reviewed
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-[#121722] border border-white/[0.08] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero sponsored bias
          </span>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
