import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { INDUSTRIES_DATA } from "@/lib/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import {
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Building,
  ShieldCheck,
  Zap,
  Lock
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Industry Verticals & Sector Engineering | NovaCrest",
  description: "Specialized software, web, and mobile solutions tailored for Healthcare, FinTech, EdTech, Real Estate, and Retail verticals.",
  canonicalUrl: "/industries"
});

export default function IndustriesPage() {
  const industryIcons: Record<string, React.ElementType> = {
    healthcare: HeartPulse,
    education: GraduationCap,
    finance: Landmark,
    ecommerce: ShoppingBag,
    "real-estate": Building
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] ambient-glow-blend pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />

        {/* Editorial Header */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Sector Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight display-headline mb-6">
            Software engineered for your industry&apos;s real constraints.
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            Every sector operates under distinct compliance rules, privacy expectations, and buyer 
            behaviors. We never assemble one-size-fits-all software—we adapt architecture, security 
            layers, and user journeys to match the exact demands of your industry.
          </p>
        </section>

        {/* Industry Blueprints Stream */}
        <div className="space-y-16 mb-28">
          {INDUSTRIES_DATA.map((ind, index) => {
            const Icon = industryIcons[ind.slug] || ShieldCheck;
            const isEven = index % 2 === 1;

            return (
              <div
                key={ind.slug}
                className="satin-surface rounded-3xl p-8 sm:p-12 border border-white/[0.08] hover:border-[#00F2FE]/30 transition-all duration-300 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              >
                {/* Meta Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[#080B10] text-[#00F2FE] border border-white/[0.08]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00F2FE] block font-semibold">
                        Sector Focus #{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {ind.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {ind.recommendedServices.map((serv) => (
                      <span
                        key={serv}
                        className="px-3 py-1 rounded-full bg-[#111622] text-[#00F2FE] text-xs font-mono border border-[#00F2FE]/20"
                      >
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-base font-medium text-white/90 mb-8 max-w-3xl">
                  {ind.tagline}
                </p>

                {/* Main 2-Column: Bottlenecks vs Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Common Bottlenecks */}
                  <div className="p-6 rounded-2xl bg-[#080B10]/80 border border-white/[0.06] space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-2 pb-2 border-b border-white/[0.04]">
                      <AlertCircle className="w-4 h-4" />
                      Sector Headaches We Eliminate
                    </h3>
                    <ul className="space-y-3">
                      {ind.challenges.map((ch) => (
                        <li key={ch} className="text-xs sm:text-sm text-[#94A3B8] flex items-start gap-2.5">
                          <span className="text-rose-400 mt-1 shrink-0">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineered Solutions */}
                  <div className="p-6 rounded-2xl bg-[#080B10]/80 border border-[#00F2FE]/20 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2 pb-2 border-b border-white/[0.04]">
                      <CheckCircle2 className="w-4 h-4" />
                      What NovaCrest Engineers
                    </h3>
                    <ul className="space-y-3">
                      {ind.solutions.map((sol) => (
                        <li key={sol} className="text-xs sm:text-sm text-[#CBD5E1] flex items-start gap-2.5">
                          <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Impact Metrics & CTA Link */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-[#94A3B8]">
                    {ind.impactMetrics.map((metric) => (
                      <span key={metric} className="flex items-center gap-2 text-white/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                        {metric}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] text-[#07080B] font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0 shadow-[0_0_20px_rgba(0,242,254,0.25)]"
                  >
                    <span>Request {ind.title} Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <CTASection
          title="Operating in an industry not listed here?"
          description="We regularly design software for specialized supply chains, automotive platforms, and aerospace workflows. Tell us about your technical requirements."
          primaryBtnText="Discuss Specialized Requirements →"
        />
      </div>
    </div>
  );
}
