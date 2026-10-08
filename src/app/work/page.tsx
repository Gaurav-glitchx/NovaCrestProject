import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { CASE_STUDIES_DATA } from "@/lib/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, CreditCard, Laptop, Smartphone, Zap } from "lucide-react";

export const metadata = constructMetadata({
  title: "Selected Work & Engineering Case Studies",
  description: "Real-world breakdowns of how NovaCrest engineers high-performance web storefronts, mobile apps, and automated operations platforms.",
  canonicalUrl: "/work"
});

export default function WorkPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: "Work & Proof", href: "/work" }]} />

      {/* Editorial Page Header */}
      <div className="max-w-4xl mb-20 pt-6">
        <span className="text-xs font-semibold text-[#00F2FE] tracking-widest uppercase block mb-3">
          Production Proof & Case Studies
        </span>
        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white display-headline mb-6">
          Real products built for ambitious businesses.
        </h1>
        <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
          Every project is built to solve a concrete commercial challenge: eliminating slow load times, removing manual spreadsheet busywork, or giving users an intuitive experience that drives conversions.
        </p>
      </div>

      {/* Case Studies Stream */}
      <div className="space-y-24 mb-28">
        {CASE_STUDIES_DATA.map((study, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={study.slug}
              className="satin-surface rounded-3xl p-8 sm:p-12 border border-white/[0.09] shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:border-[#00F2FE]/40 transition-all duration-300"
            >
              {/* Header Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/25">
                    {study.industry}
                  </span>
                  <span className="text-xs text-[#94A3B8]">
                    Client Sector: {study.clientType}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-white/80 font-medium">Production Deployed</span>
                </div>
              </div>

              {/* Main Content & Visual Grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center`}>
                {/* Left Narrative Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {study.title}
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <div>
                      <strong className="text-rose-400 block text-xs uppercase tracking-wider mb-1">
                        Commercial Bottleneck:
                      </strong>
                      <p className="bg-[#080B10]/80 p-4 rounded-xl border border-white/[0.04] text-[#CBD5E1]">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <strong className="text-emerald-400 block text-xs uppercase tracking-wider mb-1">
                        What NovaCrest Engineered:
                      </strong>
                      <p className="bg-[#080B10]/80 p-4 rounded-xl border border-white/[0.04] text-[#CBD5E1]">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Verified Commercial Results */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
                      Verified Commercial Outcomes:
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((r) => (
                        <div key={r.label} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <span className="text-xl font-bold font-mono text-emerald-400 block">{r.metric}</span>
                          <span className="text-[11px] text-[#94A3B8] mt-0.5 block leading-snug">{r.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider block mb-2">
                      Core Architecture:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-xs text-[#CBD5E1] border border-white/[0.06]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Device Visual Showcase */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  {/* Case Study 1: E-Commerce Storefront */}
                  {index === 0 && (
                    <div className="browser-frame satin-surface p-1 shadow-2xl overflow-hidden group/case">
                      <div className="browser-header">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                        </div>
                        <div className="flex-1 max-w-xs mx-auto">
                          <div className="h-5 rounded-full bg-white/[0.04] text-[10px] text-[#94A3B8] flex items-center justify-center font-mono">
                            storefront.luxury-client.com
                          </div>
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <img 
                          src="/images/flagship-case.jpg" 
                          alt="NovaCrest Flagship E-Commerce Architecture" 
                          className="w-full h-64 sm:h-72 object-cover object-top brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover/case:scale-105 block"
                        />
                        {/* Specular Flare Light Point */}
                        <div className="absolute top-4 right-6 flex items-center justify-center pointer-events-none">
                          <span className="w-8 h-8 rounded-full bg-[#00F2FE]/40 blur-md animate-pulse" />
                          <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#00F2FE]" />
                          <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl material-liquid-glass flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">Next.js Edge Storefront</span>
                          <span className="font-mono text-emerald-400 font-bold">Sub-1.1s LCP • 4.34% Conv</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Case Study 2: Telehealth Companion Mobile */}
                  {index === 1 && (
                    <div className="max-w-xs mx-auto mobile-frame satin-surface p-1 shadow-2xl overflow-hidden group/case">
                      <div className="mobile-notch" />
                      <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <img 
                          src="/images/service-mobile-dev.jpg" 
                          alt="Telehealth Mobile Experience" 
                          className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover/case:scale-105 block"
                        />
                        {/* Specular Flare Light Point */}
                        <div className="absolute top-3 left-4 flex items-center justify-center pointer-events-none">
                          <span className="w-7 h-7 rounded-full bg-[#3B82F6]/40 blur-md animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#3B82F6]" />
                          <div className="absolute w-10 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full material-liquid-glass text-[9px] font-mono text-emerald-400 font-bold">
                          60 FPS WebRTC
                        </div>
                      </div>
                      <div className="p-4 bg-[#080B10] space-y-3">
                        <div className="p-3 rounded-xl bg-[#121724] border border-white/[0.06] space-y-1.5">
                          <span className="text-[10px] text-[#94A3B8] block">Live Consultation</span>
                          <p className="text-sm font-bold text-white">Dr. Aris • 10:30 AM</p>
                          <div className="h-1 rounded-full bg-[#00F2FE] w-full" />
                        </div>
                        <div className="h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-xs text-emerald-400 font-semibold">
                          Encrypted Health Portal
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Case Study 3: B2B Credit Underwriting */}
                  {index === 2 && (
                    <div className="browser-frame satin-surface p-1 shadow-2xl overflow-hidden group/case">
                      <div className="browser-header px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          underwriting.pipeline.internal
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Evaluated</span>
                      </div>
                      <div className="relative h-44 overflow-hidden">
                        <img 
                          src="/images/service-software-tech.jpg" 
                          alt="Automated Underwriting Dashboard" 
                          className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover/case:scale-105 block"
                        />
                        {/* Specular Flare Light Point */}
                        <div className="absolute top-3 left-4 flex items-center justify-center pointer-events-none">
                          <span className="w-7 h-7 rounded-full bg-emerald-400/40 blur-md animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#10B981]" />
                          <div className="absolute w-10 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-3 right-3 p-2.5 rounded-xl material-liquid-glass flex items-center justify-between text-xs">
                          <span className="text-white font-medium">Bespoke OCR & Parser</span>
                          <span className="text-emerald-400 font-mono font-bold">-68% Latency</span>
                        </div>
                      </div>
                      <div className="p-4 bg-[#080B10] space-y-2.5">
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                          <span className="text-white">Tax Returns & Balance Sheet PDF</span>
                          <span className="text-[#00F2FE] font-mono">Extracted</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                          <span className="text-white font-medium">Debt-to-Income Ratio</span>
                          <span className="text-emerald-400 font-mono">1.34 Verified</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Footer Action */}
              <div className="pt-6 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#94A3B8]">
                  * Production client case study metrics protected under mutual non-disclosure agreements (NDA).
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-[#00F2FE] hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span>Discuss a Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <CTASection
        title="Have an engineering bottleneck that needs solving?"
        description="Share your current challenges. We'll outline the architectural steps to eliminate latency, automate manual workflows, and scale your product."
        primaryBtnText="Start a Project Discussion →"
      />
    </div>
  );
}
