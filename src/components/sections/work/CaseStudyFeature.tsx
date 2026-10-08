"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Laptop, 
  Smartphone, 
  Activity, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";
import { CASE_STUDIES_DATA } from "@/lib/data";

export function CaseStudyFeature() {
  const [activeTab, setActiveTab] = useState<"visual" | "metrics">("visual");
  const featured = CASE_STUDIES_DATA[0];
  const supporting = CASE_STUDIES_DATA.slice(1);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto env-chapter-05 relative overflow-hidden" id="work">
      {/* Background Volumetric Lighting */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[500px] bg-[#00F2FE]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[800px] h-[500px] bg-[#D97706]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-[#00F2FE] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase">THE DIGITAL EXHIBITION GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] display-headline">
            Digital products built for{" "}
            <span className="text-gradient-champagne">commercial impact.</span>
          </h2>
        </div>
        <Link
          href="/work"
          className="text-xs font-mono font-semibold text-[#00F2FE] hover:text-white transition-colors flex items-center gap-2 px-4 py-2.5 rounded-xl material-liquid-glass w-fit group"
        >
          <span>VIEW ALL ARCHITECTURAL CASE STUDIES</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 1. Monumental Flagship Exhibition Piece */}
      {featured && (
        <div className="material-smoked-quartz rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/[0.12] mb-16 shadow-[0_30px_70px_rgba(0,0,0,0.85)] relative overflow-hidden group">
          
          {/* Top Exhibition Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/25">
                FLAGSHIP EXHIBIT // {featured.industry}
              </span>
              <span className="text-xs text-[#94A3B8] font-mono">
                {featured.clientType}
              </span>
            </div>

            {/* Viewport Mode Switcher */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <button
                type="button"
                onClick={() => setActiveTab("visual")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "visual"
                    ? "bg-white/[0.1] text-white shadow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                Studio Showcase View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("metrics")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "metrics"
                    ? "bg-white/[0.1] text-white shadow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                Commercial Telemetry
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {featured.title}
              </h3>

              {/* Before vs After Contrast */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-red-500/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block mb-1">
                    The Commercial Bottleneck (Before):
                  </span>
                  <p className="text-[#CBD5E1] leading-relaxed">
                    {featured.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-emerald-500/20">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                    What NovaCrest Engineered (After):
                  </span>
                  <p className="text-[#CBD5E1] leading-relaxed">
                    {featured.solution}
                  </p>
                </div>
              </div>

              {/* Verified Metrics Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {featured.results.slice(0, 2).map((res) => (
                  <div key={res.label} className="p-4 rounded-2xl material-liquid-glass">
                    <span className="text-2xl font-bold font-mono text-emerald-400 block">
                      {res.metric}
                    </span>
                    <span className="text-xs text-[#94A3B8] mt-1 block leading-snug">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00F2FE] hover:text-white transition-colors"
                >
                  <span>INSPECT FULL CASE STUDY ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Exhibit Stage (7 Cols) */}
            <div className="lg:col-span-7">
              {activeTab === "visual" ? (
                <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl group/img">
                  {/* High-Definition 8K Render */}
                  <img 
                    src="/images/flagship-case.jpg" 
                    alt="NovaCrest Flagship Case Study Application" 
                    className="w-full h-80 sm:h-96 object-cover object-center brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover/img:scale-105 block"
                  />
                  {/* Specular Flare Light Points */}
                  <div className="absolute top-5 right-8 flex items-center justify-center pointer-events-none">
                    <span className="w-10 h-10 rounded-full bg-[#00F2FE]/40 blur-md animate-pulse" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#00F2FE]" />
                    <div className="absolute w-14 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Spec Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl material-liquid-glass flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white font-medium">Production Deployed & Scaling</span>
                    </div>
                    <span className="text-[#00F2FE] font-mono">0.82s Edge Latency</span>
                  </div>
                </div>
              ) : (
                <div className="material-liquid-glass rounded-3xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono text-[#00F2FE] uppercase">Live Production Analytics</span>
                    <span className="text-[10px] text-[#94A3B8] font-mono">Sub-1.2s Real Edge LCP</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {featured.results.map((r) => (
                      <div key={r.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-xl font-bold font-mono text-emerald-400 block">{r.metric}</span>
                        <span className="text-xs text-[#94A3B8] mt-1 block">{r.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-[#94A3B8]">
                    Architecture Stack: {featured.techStack.join(" • ")}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 2. Supporting Secondary Exhibits (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {supporting.map((item, idx) => (
          <div
            key={item.slug}
            className="material-liquid-glass rounded-3xl p-8 sm:p-10 border border-white/[0.09] shadow-xl hover:border-[#00F2FE]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <span className="text-xs font-mono font-bold text-[#F5E6C8]">
                  EXHIBIT 0{idx + 2} // {item.industry}
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  {item.clientType}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                {item.title}
              </h4>

              <div className="space-y-3 mb-6 text-xs text-[#94A3B8]">
                <p className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                  <strong className="text-white block mb-0.5">Commercial Challenge:</strong>
                  {item.problem}
                </p>
                <p className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                  <strong className="text-emerald-400 block mb-0.5">NovaCrest Solution:</strong>
                  {item.solution}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold font-mono text-emerald-400">
                  {item.results[0]?.metric}
                </span>
                <span className="text-[11px] text-[#94A3B8]">
                  {item.results[0]?.label}
                </span>
              </div>

              <Link
                href="/work"
                className="text-xs font-mono text-[#00F2FE] hover:text-white transition-colors flex items-center gap-1 group"
              >
                <span>READ STUDY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
