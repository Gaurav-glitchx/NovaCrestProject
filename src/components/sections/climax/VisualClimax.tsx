"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Code2, 
  Smartphone, 
  Cpu, 
  Activity 
} from "lucide-react";

export function VisualClimax() {
  const [converged, setConverged] = useState(true);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.08]" id="climax">
      {/* Volumetric Horizon Aperture Background */}
      <div className="absolute inset-0 horizon-aperture pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] caustic-glow pointer-events-none opacity-40 blur-[130px]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-white/90 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
          <span className="tracking-widest uppercase">THE NOVACREST SYNTHESIS</span>
        </div>

        {/* Monumental Headline */}
        <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white display-headline max-w-4xl mx-auto leading-[1.06]">
          Where ambitious engineering meets{" "}
          <span className="text-gradient-cyan">uncompromising craft.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          We don&apos;t choose between high-speed technology and stunning visual design. We engineer both into every single digital product we ship.
        </p>

        {/* The 3-Column Synthesis Stage */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-left">
          
          {/* Pillar 1: Engineering Backbone (4 Cols) */}
          <div className="lg:col-span-4 satin-surface rounded-3xl p-7 border border-white/[0.09] shadow-xl hover:border-[#00F2FE]/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#00F2FE]">01 // ARCHITECTURE</span>
              <Cpu className="w-4 h-4 text-[#00F2FE]" />
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Deep Engineering
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
              Next.js 16 App Router, Flutter 60fps haptics, strictly typed TypeScript, and zero bloated template overhead.
            </p>

            <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Sub-1.2s Real-World Edge LCP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Multi-Region Serverless Resilience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automated CI/CD Test Coverage</span>
              </div>
            </div>
          </div>

          {/* Center Pillar: The Kinetic Synthesis Core (4 Cols) */}
          <div className="lg:col-span-4 satin-surface rounded-3xl p-8 border border-[#00F2FE]/40 shadow-[0_0_50px_rgba(0,242,254,0.15)] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00F2FE]/5 via-transparent to-[#3B82F6]/5 pointer-events-none" />

            {/* Glowing Orb Graphic */}
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#00F2FE]/20 to-[#3B82F6]/30 border border-white/20 flex items-center justify-center mb-6 shadow-2xl relative">
              <Sparkles className="w-9 h-9 text-[#00F2FE] animate-pulse" />
              <div className="absolute inset-0 rounded-2xl border border-[#00F2FE]/40 animate-ping opacity-20 pointer-events-none" />
            </div>

            <span className="text-xs font-mono font-bold tracking-widest text-[#00F2FE] uppercase block mb-1">
              THE UNIFIED ATELIER
            </span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">
              One Senior Team.
            </h3>
            <p className="text-xs text-[#CBD5E1] leading-relaxed mb-6">
              You collaborate directly with the senior software engineers and product designers writing your commits. Zero telephone games.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] inline-flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-400">100%</span>
              <span className="text-xs text-white font-medium text-left">
                Intellectual property & repository transfer on completion.
              </span>
            </div>
          </div>

          {/* Pillar 3: Commercial Impact (4 Cols) */}
          <div className="lg:col-span-4 satin-surface rounded-3xl p-7 border border-white/[0.09] shadow-xl hover:border-[#3B82F6]/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#3B82F6]">02 // OUTCOMES</span>
              <TrendingUp className="w-4 h-4 text-[#3B82F6]" />
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Commercial Proof
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
              Software built to convert high-intent buyers, eliminate manual operations, and unlock scalable enterprise revenue.
            </p>

            <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00F2FE] shrink-0" />
                <span>+28.4% Average Conversion Momentum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00F2FE] shrink-0" />
                <span>-68% Document Processing Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00F2FE] shrink-0" />
                <span>AI Search Schema for Perplexity & Google</span>
              </div>
            </div>
          </div>

        </div>

        {/* Climax Bridge Line */}
        <div className="mt-16 pt-8 flex items-center justify-center gap-2 text-xs font-mono text-[#94A3B8]">
          <span className="w-12 h-[1px] bg-white/[0.1]" />
          <span>READY TO BUILD SOMETHING EXTRAORDINARY?</span>
          <span className="w-12 h-[1px] bg-white/[0.1]" />
        </div>

      </div>
    </section>
  );
}
