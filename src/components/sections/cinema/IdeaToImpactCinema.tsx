"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  Activity, 
  Maximize2 
} from "lucide-react";
import { NovaCrestMark } from "@/components/brand/NovaCrestMark";

interface Scene {
  id: number;
  timecode: string;
  phase: string;
  title: string;
  subtitle: string;
  voiceover: string;
  detail: string[];
  accentColor: string;
  image?: string;
}

export function IdeaToImpactCinema() {
  const [activeScene, setActiveScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenes: Scene[] = [
    {
      id: 0,
      timecode: "00:00 - 00:03",
      phase: "STAGE 01 // GENESIS",
      title: "EVERYTHING STARTS WITH AN IDEA.",
      subtitle: "A raw intuition. A market dislocation. A vision waiting for form.",
      voiceover: "In the void of possibilities, ambitious founders envision what should exist.",
      detail: ["Raw Market Opportunity", "Unmet Customer Pain", "First Creative Spark"],
      accentColor: "#00F2FE",
      image: "/images/hero-landscape.jpg",
    },
    {
      id: 1,
      timecode: "00:03 - 00:06",
      phase: "STAGE 02 // DISCOVERY",
      title: "FIRST, WE UNDERSTAND.",
      subtitle: "User friction. Business models. Technical constraints. Commercial leverage.",
      voiceover: "We dissect the problem to its fundamental truths before writing a single line.",
      detail: ["User Journey Interviews", "Data & Funnel Audits", "Competitor Architecture Flaws"],
      accentColor: "#38BDF8",
      image: "/images/who-we-are.jpg",
    },
    {
      id: 2,
      timecode: "00:06 - 00:09",
      phase: "STAGE 03 // STRATEGY",
      title: "THEN WE FIND THE DIRECTION.",
      subtitle: "System architecture. Feature prioritization. Measurable ROI milestones.",
      voiceover: "A definitive product roadmap that converts ambiguity into disciplined velocity.",
      detail: ["Edge Tech Stack Selection", "Database Entity Schemas", "Sprint-by-Sprint Milestones"],
      accentColor: "#3B82F6",
      image: "/images/process-journey.jpg",
    },
    {
      id: 3,
      timecode: "00:09 - 00:12",
      phase: "STAGE 04 // CRAFT DESIGN",
      title: "WE DESIGN THE EXPERIENCE.",
      subtitle: "Tactile micro-physics. Typographic tension. Advanced material hierarchies.",
      voiceover: "Crafting interfaces that feel alive, intuitive, and impossible to forget.",
      detail: ["Custom Design Tokens", "Liquid Glass & Quartz Materials", "Frictionless Checkout UX"],
      accentColor: "#F5E6C8",
      image: "/images/service-ui-ux.jpg",
    },
    {
      id: 4,
      timecode: "00:12 - 00:15",
      phase: "STAGE 05 // ENGINEERING",
      title: "WE BUILD IT.",
      subtitle: "Next.js App Router. Strict TypeScript. Microservices. Zero template bloat.",
      voiceover: "Engineered by senior architects for sub-second response times under peak load.",
      detail: ["Server Components & Streaming", "Zero Proprietary Lock-in", "Clean Git Repository Architecture"],
      accentColor: "#10B981",
      image: "/images/service-web-dev.jpg",
    },
    {
      id: 5,
      timecode: "00:15 - 00:18",
      phase: "STAGE 06 // RESILIENCE TESTING",
      title: "WE MAKE IT WORK.",
      subtitle: "Cross-device responsiveness. 60 FPS UI physics. Core Web Vitals guaranteed.",
      voiceover: "Stress-testing edge cases until the software feels effortlessly fast on every screen.",
      detail: ["Sub-1.2s Real LCP Verified", "WCAG 2.1 AA Accessibility", "Automated E2E Playwright Tests"],
      accentColor: "#D97706",
      image: "/images/service-mobile-dev.jpg",
    },
    {
      id: 6,
      timecode: "00:18 - 00:21",
      phase: "STAGE 07 // GLOBAL LAUNCH",
      title: "WE RELEASE IT INTO THE WORLD.",
      subtitle: "Multi-region edge propagation. Cloudflare routing. Zero-downtime deployment.",
      voiceover: "Your product deployed to users worldwide in milliseconds with bank-grade stability.",
      detail: ["300+ Edge POP Distribution", "Immediate 100% IP Transfer", "Live Production Telemetry"],
      accentColor: "#8B5CF6",
      image: "/images/service-software-tech.jpg",
    },
    {
      id: 7,
      timecode: "00:21 - 00:24",
      phase: "STAGE 08 // COMPOUNDING GROWTH",
      title: "AND HELP IT GROW.",
      subtitle: "Technical AEO/SEO. Conversion funnel optimization. Scalable revenue flywheel.",
      voiceover: "Deploying high-intent traffic and AI search visibility to scale market share.",
      detail: ["AI Search & Schema Priming", "High-Intent Conversion Lift", "Continuous Feature Iteration"],
      accentColor: "#EC4899",
      image: "/images/service-seo-growth.jpg",
    },
    {
      id: 8,
      timecode: "00:24 - CLIMAX",
      phase: "THE NOVACREST STANDARD",
      title: "FROM IDEA TO COMMERCIAL IMPACT.",
      subtitle: "Serious technology + exceptional design + human understanding.",
      voiceover: "This is why leading founders trust NovaCrest to engineer their most critical products.",
      detail: ["Direct Senior Architect Access", "100% Client Code Ownership", "Sub-1.2s Real-World Latency"],
      accentColor: "#00F2FE",
      image: "/images/flagship-case.jpg",
    },
  ];

  const current = scenes[activeScene];

  // Automatic Scene Progression Engine
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalTime = 50; // 50ms tick
    const totalDurationPerScene = 3600; // 3.6s per scene
    const step = 100 / (totalDurationPerScene / intervalTime);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveScene((curr) => (curr + 1) % scenes.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, scenes.length]);

  const handleSelectScene = (index: number) => {
    setActiveScene(index);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveScene((prev) => (prev + 1) % scenes.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveScene((prev) => (prev - 1 + scenes.length) % scenes.length);
    setProgress(0);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="cinema">
      {/* Background Cinematic Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${current.accentColor}25 0%, rgba(14, 19, 31, 0.4) 60%, transparent 80%)`
        }}
      />

      {/* Header Narrative Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full material-liquid-glass text-xs font-mono text-[#00F2FE] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span className="tracking-widest uppercase">THE NOVACREST CINEMATIC JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight display-headline">
            How we engineer an idea into a{" "}
            <span className="text-gradient-champagne">living digital product.</span>
          </h2>
        </div>

        {/* Global Reel Timeline Status */}
        <div className="flex items-center gap-3 material-liquid-glass px-4 py-2.5 rounded-2xl shrink-0 font-mono text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90">INTERACTIVE CINEMA REEL</span>
          <span className="text-[#94A3B8] border-l border-white/10 pl-3">
            SCENE {String(activeScene + 1).padStart(2, "0")} / {String(scenes.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* The Master Cinematic Screen Frame */}
      <div className="relative rounded-3xl overflow-hidden border border-white/[0.14] material-smoked-quartz shadow-[0_30px_90px_rgba(0,0,0,0.9)] z-10">
        
        {/* Cinema Monitor Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-white/[0.08] bg-[#07090F]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <NovaCrestMark size="xs" variant="symbol" />
            <span className="text-xs font-mono font-bold tracking-widest text-white/90">
              NOVACREST MOTION SIMULATION
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#F5E6C8] border border-white/[0.08] hidden sm:inline-block">
              24 FPS 8K REALTIME
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <span>{current.timecode}</span>
          </div>
        </div>

        {/* Cinematic Stage Canvas (16:9 Aspect Feel) */}
        <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-between p-6 sm:p-12 overflow-hidden bg-gradient-to-b from-[#080B12] via-[#05070B] to-[#080B12]">
          
          {/* Scene-Specific Photographic Backdrop with Luminous Specular Lighting */}
          {current.image && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center opacity-85 brightness-110 contrast-115 saturate-110 scale-100 transition-all duration-1000 ease-out block"
              />
              {/* Specular Radial Light Point 1: Top-Right */}
              <div 
                className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full blur-[90px] opacity-70 pointer-events-none transition-colors duration-1000"
                style={{ backgroundColor: current.accentColor }}
              />
              {/* Specular Radial Light Point 2: Center-Left Volumetric Spotlight */}
              <div 
                className="absolute top-1/4 left-1/4 w-[550px] h-[380px] rounded-full blur-[120px] opacity-35 pointer-events-none transition-colors duration-1000"
                style={{ backgroundColor: current.accentColor }}
              />
              {/* Anamorphic Horizontal Specular Flare */}
              <div className="absolute top-1/3 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50 pointer-events-none" />
              {/* Refined Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/45 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/75 via-transparent to-[#05070B]/35 pointer-events-none" />
            </div>
          )}

          {/* Luminous Light Points & Constellation Energy Nodes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {/* Primary Star Light Point */}
            <div 
              className="absolute transition-all duration-1000 ease-out"
              style={{ 
                top: `${24 + (activeScene % 3) * 12}%`, 
                right: `${20 + ((activeScene * 8) % 36)}%` 
              }}
            >
              <div className="relative flex items-center justify-center">
                <span 
                  className="absolute w-12 h-12 rounded-full animate-ping opacity-60" 
                  style={{ backgroundColor: current.accentColor }}
                />
                <span 
                  className="absolute w-8 h-8 rounded-full blur-md opacity-80" 
                  style={{ backgroundColor: current.accentColor }}
                />
                <span className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#ffffff,0_0_30px_#00F2FE]" />
                <div className="absolute w-16 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute h-16 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
              </div>
            </div>

            {/* Crest Trajectory Light Node */}
            <div 
              className="absolute transition-all duration-1000 ease-out"
              style={{ 
                top: `${44 + Math.sin(activeScene) * 14}%`, 
                left: `${18 + Math.cos(activeScene) * 12}%` 
              }}
            >
              <div className="relative flex items-center justify-center">
                <span 
                  className="absolute w-8 h-8 rounded-full blur-md opacity-75"
                  style={{ backgroundColor: current.accentColor }} 
                />
                <span className="relative w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
                <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              </div>
            </div>

            {/* Micro Sparkling Stars */}
            <div className="absolute top-[20%] left-[40%] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_#ffffff]" />
            </div>
            <div className="absolute top-[60%] right-[30%] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white/90 animate-pulse shadow-[0_0_10px_#ffffff]" style={{ animationDelay: "500ms" }} />
            </div>
          </div>
          
          {/* Dynamic Scene Generative Graphics Stage */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            
            {/* Scene 0: Single Genesis Nova Spark */}
            {activeScene === 0 && (
              <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in duration-700">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-[#00F2FE]/30 blur-2xl animate-ping" />
                  <div className="w-12 h-12 rounded-full bg-white blur-md" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <NovaCrestMark size="lg" variant="symbol" animated />
                  </div>
                </div>
              </div>
            )}

            {/* Scene 1: Discovery Nodes */}
            {activeScene === 1 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-full max-w-lg grid grid-cols-3 gap-6 p-6">
                  {["User Need", "Market Cap", "Tech Barrier", "Conversion Funnel", "Architecture", "Opportunity"].map((node, i) => (
                    <div key={node} className="p-4 rounded-xl border border-sky-400/40 bg-sky-950/30 text-center font-mono text-xs text-sky-200 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}>
                      {node}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scene 2: Strategy Architecture Blueprint Grid */}
            {activeScene === 2 && (
              <div className="absolute inset-0 tech-grid opacity-30 flex items-center justify-center">
                <div className="w-96 h-64 border-2 border-dashed border-[#3B82F6]/60 rounded-2xl flex items-center justify-center">
                  <span className="font-mono text-xs text-[#3B82F6] uppercase tracking-widest bg-[#05070B] px-3 py-1 rounded border border-[#3B82F6]/40">
                    System Topology // Blueprint Verified
                  </span>
                </div>
              </div>
            )}

            {/* Scene 3: Tactile UI Design Interface */}
            {activeScene === 3 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-full max-w-xl h-72 rounded-2xl material-liquid-glass p-6 space-y-4 border border-[#F5E6C8]/40 shadow-2xl">
                  <div className="h-4 w-40 bg-[#F5E6C8]/50 rounded-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 rounded-xl bg-white/[0.05] border border-white/[0.1]" />
                    <div className="h-28 rounded-xl bg-white/[0.05] border border-white/[0.1]" />
                  </div>
                </div>
              </div>
            )}

            {/* Scene 4: Engineering Terminal & Silicon Logic */}
            {activeScene === 4 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-25 font-mono text-xs text-emerald-400 p-8 select-none">
                <div className="space-y-1 w-full max-w-lg bg-[#030708] p-5 rounded-2xl border border-emerald-500/30">
                  <p>› next build --webpack --optimize-edge</p>
                  <p className="text-white">✓ Compiled 28 routes in 6.4s</p>
                  <p>✓ Sub-1.2s Real LCP Latency verified</p>
                  <p className="text-emerald-300">✓ 100% Client IP transfer keys minted</p>
                </div>
              </div>
            )}

            {/* Scene 5: Testing Matrix Simulation */}
            {activeScene === 5 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-35 gap-6">
                <div className="w-56 h-36 border border-amber-400/50 rounded-xl flex items-center justify-center font-mono text-[10px] text-amber-300 bg-amber-950/20">
                  4K DESKTOP // 60 FPS
                </div>
                <div className="w-24 h-40 border border-amber-400/50 rounded-2xl flex items-center justify-center font-mono text-[10px] text-amber-300 bg-amber-950/20">
                  MOBILE // 60 FPS
                </div>
              </div>
            )}

            {/* Scene 6: Global Launch Edge Propagation */}
            {activeScene === 6 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-80 h-80 rounded-full border border-purple-400/40 animate-ping" />
                <div className="w-48 h-48 rounded-full border border-purple-400/60 flex items-center justify-center">
                  <Globe2 className="w-16 h-16 text-purple-300 animate-spin" style={{ animationDuration: "30s" }} />
                </div>
              </div>
            )}

            {/* Scene 7: Compounding Growth Telemetry */}
            {activeScene === 7 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-35">
                <div className="w-full max-w-md h-48 flex items-end gap-3 px-8">
                  {[20, 35, 45, 60, 75, 95, 120, 160].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-pink-500/20 to-pink-400 rounded-t-lg transition-all duration-500" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Climax: Stellar Convergence into NovaCrest Mark */}
            {activeScene === 8 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700">
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full bg-[#00F2FE]/20 blur-3xl" />
                  <NovaCrestMark size="hero" variant="symbol" animated />
                </div>
              </div>
            )}
          </div>

          {/* Top Scene Stage Header */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span 
              className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full border w-fit"
              style={{
                color: current.accentColor,
                borderColor: `${current.accentColor}40`,
                backgroundColor: `${current.accentColor}12`
              }}
            >
              {current.phase}
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {current.detail.map((item) => (
                <span key={item} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-[#CBD5E1] border border-white/[0.08]">
                  • {item}
                </span>
              ))}
            </div>
          </div>

          {/* Central Typography & Cinema Voiceover */}
          <div className="relative z-10 max-w-3xl my-auto py-8">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] display-headline mb-4">
              {current.title}
            </h3>
            <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed mb-4 font-medium">
              {current.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-[#94A3B8] italic font-mono border-l-2 pl-4" style={{ borderColor: current.accentColor }}>
              "{current.voiceover}"
            </p>
          </div>

          {/* Bottom Scene Quick Action */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/[0.08] gap-4">
            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <Activity className="w-3.5 h-3.5" style={{ color: current.accentColor }} />
              <span>Step {activeScene + 1} of {scenes.length} in the NovaCrest Engineering Cycle</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#00F2FE] transition-colors"
            >
              <span>DISCUSS YOUR PRODUCT WITH AN ARCHITECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Global Cinema Progress Scrubber Bar */}
        <div className="relative h-1.5 bg-white/[0.08] w-full">
          <div 
            className="absolute top-0 bottom-0 left-0 transition-all duration-75"
            style={{
              width: `${((activeScene + progress / 100) / scenes.length) * 100}%`,
              backgroundColor: current.accentColor,
              boxShadow: `0 0 12px ${current.accentColor}`
            }}
          />
        </div>

        {/* Interactive Playback Control Deck */}
        <div className="p-4 sm:p-6 bg-[#07090F]/95 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Play / Pause / Skip Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white transition-all border border-white/[0.06]"
              aria-label="Previous Scene"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-[#060709] bg-white hover:bg-[#00F2FE] transition-all shadow-lg"
              aria-label={isPlaying ? "Pause Cinema Reel" : "Play Cinema Reel"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? "PAUSE REEL" : "PLAY REEL"}</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white transition-all border border-white/[0.06]"
              aria-label="Next Scene"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Scene Jump Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {scenes.map((sc, i) => {
              const active = activeScene === i;
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => handleSelectScene(i)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all border ${
                    active
                      ? "text-white font-bold shadow-md"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04] border-transparent"
                  }`}
                  style={{
                    backgroundColor: active ? `${sc.accentColor}25` : undefined,
                    borderColor: active ? `${sc.accentColor}60` : undefined,
                    color: active ? sc.accentColor : undefined,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
