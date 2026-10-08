"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Users, Zap, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export function StudioManifesto() {
  const pillars = [
    {
      num: "01",
      title: "Direct Access to Senior Architects",
      tagline: "No account managers. No telephone games.",
      description: "When you partner with NovaCrest, you scope requirements and review sprint progress directly with the senior software engineers and lead product designers who actually write your code.",
      proof: "Direct Slack channel • Weekly staging demos • Instant technical feedback"
    },
    {
      num: "02",
      title: "100% Intellectual Property Ownership",
      tagline: "Your product. Your code. Your future.",
      description: "We never trap clients into proprietary hosting runtimes or closed agency frameworks. From the very first sprint commit, you hold 100% legal ownership of your Git repositories, Figma files, and cloud credentials.",
      proof: "Clean code handover • Zero vendor lock-in • Full deployment independence"
    },
    {
      num: "03",
      title: "Speed as a Commercial Driver",
      tagline: "Sub-1.2s real-world latency that compounds revenue.",
      description: "We don't build sluggish websites loaded with 50 bloated plugins. Every line of code is strictly typed and optimized for sub-second paint times, high search engine rankings, and smooth conversion flows.",
      proof: "Google Core Web Vitals guaranteed • AI search schema structured • High-traffic stability"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative overflow-hidden env-chapter-02" id="story">
      {/* Background Ambient Caustic Glow */}
      <div className="absolute top-1/2 left-0 w-[900px] h-[500px] bg-[#F5E6C8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-[#F5E6C8] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F5E6C8]" />
            <span className="tracking-widest uppercase">THE ATELIER MANIFESTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] display-headline">
            Why ambitious teams choose us over{" "}
            <span className="text-gradient-champagne">ordinary agencies.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We founded NovaCrest to eliminate the standard agency frustrations: missed launch dates, fragile templates, and layers of account managers who cannot answer technical questions.
          </p>
        </div>

        {/* Master Exhibition Grid: Photographic Craft Feature + Architectural Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photographic Atelier Craft Feature (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl group">
              <img 
                src="/images/atelier-craft.jpg" 
                alt="NovaCrest Studio Senior Architects and Designers at Work" 
                className="w-full h-80 sm:h-96 object-cover object-center brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
              />
              {/* Specular Flare Light Points */}
              <div className="absolute top-4 right-6 flex items-center justify-center pointer-events-none">
                <span className="w-8 h-8 rounded-full bg-[#F5E6C8]/30 blur-md animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#F5E6C8]" />
                <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F5E6C8] to-transparent" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl material-liquid-glass space-y-1">
                <span className="text-[10px] font-mono text-[#F5E6C8] uppercase tracking-wider block">
                  Studio Culture & Philosophy
                </span>
                <p className="text-xs text-white font-medium">
                  Senior engineers and designers collaborating directly on your software architecture.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl material-smoked-quartz flex items-center justify-between text-xs">
              <span className="text-[#94A3B8]">Want to learn more about our team & values?</span>
              <Link
                href="/about"
                className="font-mono text-[#00F2FE] hover:text-white transition-colors flex items-center gap-1 group"
              >
                <span>READ ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Deep Architectural Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="material-liquid-glass rounded-3xl p-7 sm:p-9 border border-white/[0.1] hover:border-[#F5E6C8]/40 transition-all duration-300 relative overflow-hidden group shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#F5E6C8]">
                    PILLAR {pillar.num} // ADVANTAGE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#F5E6C8]/90 mb-3">
                  {pillar.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-[#CBD5E1] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{pillar.proof}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
