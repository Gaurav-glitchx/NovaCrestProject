import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { GENERAL_FAQS } from "@/lib/data";
import { NovaCrestMark } from "@/components/brand/NovaCrestMark";
import { AtelierStatusBar } from "@/components/brand/AtelierStatusBar";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { BrandCinemaFilm } from "@/components/sections/cinema/BrandCinemaFilm";
import { IdeaToImpactCinema } from "@/components/sections/cinema/IdeaToImpactCinema";
import { ServicesShowcase } from "@/components/sections/services/ServicesShowcase";
import { StudioManifesto } from "@/components/sections/story/StudioManifesto";
import { IdeaToProduct } from "@/components/sections/process/IdeaToProduct";
import { CaseStudyFeature } from "@/components/sections/work/CaseStudyFeature";
import { TechEcosystem } from "@/components/sections/ecosystem/TechEcosystem";
import { VisualClimax } from "@/components/sections/climax/VisualClimax";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. CINEMATIC HERO SECTION (CHAPTER 01) */}
      <section className="relative pt-4 pb-14 lg:pt-8 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden env-chapter-01">
        {/* Subtle atmospheric ambient glow and technical pattern */}
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="absolute ambient-glow-cyan top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top Atelier Genesis Canopy & Dynamic Telemetry Bar */}
          <AtelierStatusBar />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Refined Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full material-liquid-glass text-xs font-mono text-white/90 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                <span className="tracking-widest uppercase">DIGITAL PRODUCT ATELIER • CREATIVE ENGINEERING</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white display-headline">
                We engineer the digital products behind{" "}
                <span className="text-gradient-champagne">ambitious businesses.</span>
              </h1>

              {/* Conversational Subtitle */}
              <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From intuitive web platforms and high-speed mobile apps to bespoke software that streamlines operations, we turn complex requirements into software people genuinely love using.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#060709] bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#3B82F6] hover:from-[#38f6ff] hover:to-[#60a5fa] transition-all duration-300 shadow-[0_0_30px_rgba(0,242,254,0.35)] hover:shadow-[0_0_45px_rgba(0,242,254,0.55)] transform hover:-translate-y-0.5 text-sm uppercase tracking-wider font-mono"
                >
                  Start a Project →
                </Link>

                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white material-liquid-glass hover:bg-white/[0.08] transition-all duration-200 text-sm tracking-wide"
                >
                  Explore Selected Work
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#94A3B8] font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00F2FE]" />
                  <span>Zero Off-the-Shelf Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5E6C8]" />
                  <span>100% Client IP Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct Senior Architect Access</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual (5 Cols) */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 60-SECOND CINEMATIC BRAND STORY FILM */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 sm:-mt-10 mb-16 z-20" id="brand-film">
        <BrandCinemaFilm />
      </section>

      {/* 3. REFINED CLIENT & TECHNOLOGY MARQUEE */}
      <section className="border-y border-white/[0.08] material-brushed-titanium py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-mono font-medium shrink-0">
            Engineered with modern battle-tested platforms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm font-medium text-[#CBD5E1]">
            {["Next.js", "React", "TypeScript", "Flutter", "Node.js", "PostgreSQL", "AWS Cloud", "Cloudflare Edge"].map((tech) => (
              <span key={tech} className="hover:text-white transition-colors flex items-center gap-2 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]/70" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CINEMATIC PRODUCT FILM: FROM IDEA TO IMPACT (8-SCENE THEATER) */}
      <IdeaToImpactCinema />

      {/* 4. SERVICES: ALTERNATING EDITORIAL MAGAZINE SHOWCASE */}
      <ServicesShowcase />

      {/* 4. BRAND MANIFESTO: SPLIT-SCREEN PARTNER ADVANTAGE */}
      <StudioManifesto />

      {/* 5. THE TRANSFORMATION ENGINE: IDEA → PRODUCT */}
      <IdeaToProduct />

      {/* 6. FEATURED WORK: CINEMATIC CASE STUDIES */}
      <CaseStudyFeature />

      {/* 7. ARCHITECTURAL ECOSYSTEM */}
      <TechEcosystem />

      {/* 8. SCHEMA-BACKED FAQ */}
      <FAQSection faqs={GENERAL_FAQS} />

      {/* 9. THE NOVACREST SYNTHESIS: VISUAL CLIMAX */}
      <VisualClimax />

      {/* 10. MONUMENTAL FINAL DESTINATION CTA */}
      <CTASection />
    </div>
  );
}
