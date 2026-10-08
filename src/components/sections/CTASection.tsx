"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  eyebrow?: string;
}

export function CTASection({
  title = "Have something worth building? Let's make it real.",
  description = "Tell us what you need built. Within 24 hours, a senior software architect will review your technical requirements under mutual NDA.",
  primaryBtnText = "Schedule Architecture Consultation →",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Explore Our Services",
  secondaryBtnHref = "/services",
  eyebrow = "CONFIDENTIAL SCOPING • SENIOR ARCHITECT ACCESS"
}: CTASectionProps) {
  return (
    <section className="relative py-36 px-4 sm:px-6 lg:px-8 overflow-hidden env-chapter-07 border-t border-white/[0.08]" id="cta">
      {/* Volumetric Horizon Aperture Background */}
      <div className="absolute inset-0 horizon-aperture pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] caustic-glow rounded-full blur-[140px] pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{eyebrow}</span>
        </div>

        {/* Monumental Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] display-headline">
          Have something worth building?{" "}
          <span className="text-gradient-champagne">Let&apos;s make it real.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryBtnHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl font-semibold text-[#060709] bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#3B82F6] hover:from-[#38f6ff] hover:to-[#60a5fa] transition-all duration-300 shadow-[0_0_35px_rgba(0,242,254,0.4)] hover:shadow-[0_0_55px_rgba(0,242,254,0.65)] transform hover:-translate-y-0.5 text-sm uppercase tracking-wider font-mono"
          >
            {primaryBtnText}
          </Link>

          {secondaryBtnText && (
            <Link
              href={secondaryBtnHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white material-liquid-glass hover:bg-white/[0.08] transition-all duration-200 text-sm tracking-wide"
            >
              {secondaryBtnText}
            </Link>
          )}
        </div>

        {/* Technical Trust Proof */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs text-[#94A3B8] font-mono">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00F2FE]" />
            100% Perpetual IP Transfer
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F5E6C8]" />
            Sub-1.2s Real Edge Latency
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Automatic Mutual NDA Protection
          </span>
        </div>
      </div>
    </section>
  );
}
