"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ArrowRight,
  Activity,
  Layers,
  Code2,
  Smartphone,
  TrendingUp,
  Cpu,
  Globe2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { NovaCrestMark } from "@/components/brand/NovaCrestMark";

interface SceneConfig {
  id: number;
  timeRange: string;
  badge: string;
  headline: string;
  tagline: string;
  subtext: string;
  image?: string;
  accent: string;
}

export function BrandCinemaFilm() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenes: SceneConfig[] = [
    {
      id: 0,
      timeRange: "00:00 - 00:05",
      badge: "SCENE 01 // THE IDEA",
      headline: "Every great digital experience starts with an idea.",
      tagline: "A spark of intuition. A market dislocation. A vision waiting for form.",
      subtext: "Before code, before architecture, there is human ambition.",
      image: "/images/hero-landscape.jpg",
      accent: "#00F2FE",
    },
    {
      id: 1,
      timeRange: "00:05 - 00:10",
      badge: "SCENE 02 // THE HUMAN BEHIND THE IDEA",
      headline: "We listen. We understand. We imagine.",
      tagline: "Product strategy begins by understanding the business bottleneck, not jumping to code.",
      subtext: "Senior architects and founders collaborating directly on whiteboard blueprints.",
      image: "/images/who-we-are.jpg",
      accent: "#F5E6C8",
    },
    {
      id: 2,
      timeRange: "00:10 - 00:16",
      badge: "SCENE 03 // FROM IDEA TO STRATEGY",
      headline: "We turn complexity into clarity.",
      tagline: "Idea → Research → Strategy → UX → Architecture.",
      subtext: "Transforming ambiguous customer pain points into definitive, sprint-by-sprint engineering roadmaps.",
      image: "/images/process-journey.jpg",
      accent: "#38BDF8",
    },
    {
      id: 3,
      timeRange: "00:16 - 00:22",
      badge: "SCENE 04 // WE DESIGN",
      headline: "Designed for people. Built for purpose.",
      tagline: "Tactile micro-physics. Typographic tension. Advanced material hierarchies.",
      subtext: "Interfaces crafted for human delight and zero drop-off conversion flows.",
      image: "/images/service-ui-ux.jpg",
      accent: "#EC4899",
    },
    {
      id: 4,
      timeRange: "00:22 - 00:29",
      badge: "SCENE 05 // WE BUILD",
      headline: "Engineered to perform.",
      tagline: "Next.js App Router • Strict TypeScript • Cloud Microservices • Zero Bloated Plugins.",
      subtext: "Sub-1.2s Real-World paint latency guaranteed across all global edge regions.",
      image: "/images/service-software-tech.jpg",
      accent: "#10B981",
    },
    {
      id: 5,
      timeRange: "00:29 - 00:35",
      badge: "SCENE 06 // WE CONNECT EVERYTHING",
      headline: "Technology that works together.",
      tagline: "Web Flagship → Mobile Native → Cloud APIs → Automation → Search Visibility.",
      subtext: "All isolated systems converging into one resilient, self-healing digital ecosystem.",
      image: "/images/service-automation.jpg",
      accent: "#8B5CF6",
    },
    {
      id: 6,
      timeRange: "00:35 - 00:42",
      badge: "SCENE 07 // WE HELP BUSINESSES GROW",
      headline: "Because technology isn't the destination. Growth is.",
      tagline: "Compounding organic search traffic, higher transaction values, frictionless checkouts.",
      subtext: "Real commercial leverage and measurable revenue acceleration.",
      image: "/images/service-seo-growth.jpg",
      accent: "#F59E0B",
    },
    {
      id: 7,
      timeRange: "00:42 - 00:50",
      badge: "SCENE 08 // WHAT MAKES NOVACREST DIFFERENT",
      headline: "Think Different. Design Intelligently. Build Precisely. Grow Continuously.",
      tagline: "Zero junior-account walls. 100% Client code ownership. Senior craft from day one.",
      subtext: "The atelier model engineered for founders who refuse to settle for generic templates.",
      image: "/images/flagship-case.jpg",
      accent: "#00F2FE",
    },
    {
      id: 8,
      timeRange: "00:50 - 01:00",
      badge: "SCENE 09 // THE NOVACREST MOMENT",
      headline: "We don't just build digital products. We build what moves businesses forward.",
      tagline: "NOVACREST TECHNOLOGIES // Web • Mobile • Software • Design • Growth",
      subtext: "From Idea to Commercial Impact. Seamlessly looping into continuous creation.",
      image: "/images/hero-prism.jpg",
      accent: "#00F2FE",
    },
  ];

  const active = scenes[currentScene];

  // Playback Loop Engine (Smooth 60s runtime: ~6.6s per scene)
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const tickMs = 60;
    const durationPerScene = 6600; // 6.6 seconds
    const delta = 100 / (durationPerScene / tickMs);

    timerRef.current = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev >= 100) {
          setCurrentScene((curr) => (curr + 1) % scenes.length);
          return 0;
        }
        return prev + delta;
      });
    }, tickMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, scenes.length]);

  const jumpToScene = (idx: number) => {
    setCurrentScene(idx);
    setSceneProgress(0);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden border border-white/[0.14] material-smoked-quartz shadow-[0_35px_100px_rgba(0,0,0,0.9)] select-none transition-all duration-500 ${
        isFullscreen ? "h-screen rounded-none" : "my-8"
      }`}
    >
      {/* Dynamic Ambient Volumetric Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-45"
        style={{
          background: `radial-gradient(circle 900px at 50% 50%, ${active.accent}44 0%, rgba(7, 9, 14, 0.6) 70%, transparent 100%)`,
        }}
      />

      {/* Top Cinema Control Header Bar */}
      <div className="relative z-20 flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-white/[0.08] bg-[#07090F]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <NovaCrestMark size="xs" variant="symbol" animated />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-white/90">
              NOVACREST BRAND FILM
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#F5E6C8] border border-white/[0.08] hidden sm:inline-block">
            60S 4K MASTER CUT
          </span>
        </div>

        {/* Right HUD Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline-block">
            {active.timeRange}
          </span>

          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#CBD5E1] hover:text-white transition-colors"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label="Toggle Audio"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#00F2FE]" />}
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#CBD5E1] hover:text-white transition-colors"
            title="Fullscreen Mode"
            aria-label="Toggle Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* The 16:9 Cinema Projection Stage */}
      <div className="relative aspect-video min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] w-full flex flex-col justify-between p-6 sm:p-12 overflow-hidden bg-[#05070B]">
        
        {/* Continuous Flowing "Crest" Kinetic Wave (Connecting Motif) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-10">
          <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" preserveAspectRatio="none">
            <path
              d={`M -100 ${340 + Math.sin(currentScene) * 40} C 300 ${220 - currentScene * 10}, 600 ${460 - currentScene * 15}, 1300 ${320 + Math.cos(currentScene) * 30}`}
              stroke={active.accent}
              strokeWidth="2.5"
              strokeDasharray="6 8"
              className="transition-all duration-1000"
            />
            <path
              d={`M -50 ${370 + Math.cos(currentScene) * 30} C 350 ${180 + currentScene * 8}, 750 ${400 - currentScene * 10}, 1250 ${350}`}
              stroke="#F5E6C8"
              strokeWidth="1.2"
              opacity="0.8"
              className="transition-all duration-1000"
            />
          </svg>
        </div>

        {/* Scene-Specific High-Definition Photographic Layer with Radiant Cinematic Lighting */}
        {active.image ? (
          <div className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000">
            {/* The Crisp High-Resolution Visual (bright, vivid, razor-sharp) */}
            <img
              src={active.image}
              alt={active.headline}
              className="w-full h-full object-cover object-center opacity-85 brightness-110 contrast-115 saturate-110 scale-100 transition-all duration-1000 ease-out block"
            />

            {/* Specular Light Point 1: Top-Right Radial Rim Sunburst */}
            <div 
              className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full blur-[90px] opacity-70 pointer-events-none transition-colors duration-1000"
              style={{ backgroundColor: active.accent }}
            />

            {/* Specular Light Point 2: Dynamic Center-Left Volumetric Spotlight */}
            <div 
              className="absolute top-1/4 left-1/4 w-[550px] h-[380px] rounded-full blur-[120px] opacity-40 pointer-events-none transition-colors duration-1000"
              style={{ backgroundColor: active.accent }}
            />

            {/* Anamorphic Horizontal Specular Flare */}
            <div className="absolute top-1/4 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 pointer-events-none" />

            {/* Luminous Top-Down Ambient Caustic Sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-[#05070B]/90 pointer-events-none" />
            
            {/* Soft Contrast Vignette (protects text legibility without muddying the center) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/75 via-transparent to-[#05070B]/30 pointer-events-none" />
          </div>
        ) : (
          /* Pure Generative Atmosphere for Non-Image Scenes */
          <div className="absolute inset-0 pointer-events-none tech-grid opacity-30" />
        )}

        {/* Dynamic Luminous Light Points & Radiant Energy Constellation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {/* Point 1: Primary Luminous Flare Star (Pulsing Energy Aperture) */}
          <div 
            className="absolute transition-all duration-1000 ease-out"
            style={{ 
              top: `${22 + (currentScene % 3) * 12}%`, 
              right: `${18 + ((currentScene * 8) % 36)}%` 
            }}
          >
            <div className="relative flex items-center justify-center">
              <span 
                className="absolute w-14 h-14 rounded-full animate-ping opacity-70" 
                style={{ backgroundColor: active.accent }}
              />
              <span 
                className="absolute w-8 h-8 rounded-full blur-md opacity-90" 
                style={{ backgroundColor: active.accent }}
              />
              <span className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#ffffff,0_0_30px_#00F2FE]" />
              {/* Star Cross Light Rays */}
              <div className="absolute w-20 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute h-20 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
              <div className="absolute w-10 h-[1px] rotate-45 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="absolute w-10 h-[1px] -rotate-45 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            </div>
          </div>

          {/* Point 2: Radiant Crest Beacon (Traversing Along Wave Path) */}
          <div 
            className="absolute transition-all duration-1000 ease-out"
            style={{ 
              top: `${42 + Math.sin(currentScene) * 14}%`, 
              left: `${16 + Math.cos(currentScene) * 12}%` 
            }}
          >
            <div className="relative flex items-center justify-center">
              <span 
                className="absolute w-9 h-9 rounded-full blur-md opacity-80"
                style={{ backgroundColor: active.accent }} 
              />
              <span className="relative w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
              <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            </div>
          </div>

          {/* Point 3: Horizon Guiding Light (Bottom-Right Specular Node) */}
          <div 
            className="absolute transition-all duration-1000 ease-out"
            style={{ 
              bottom: `${28 + (currentScene % 4) * 8}%`, 
              right: `${12 + (currentScene % 5) * 8}%` 
            }}
          >
            <div className="relative flex items-center justify-center">
              <span 
                className="absolute w-8 h-8 rounded-full animate-pulse opacity-60" 
                style={{ backgroundColor: "#F5E6C8" }}
              />
              <span className="relative w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#F5E6C8]" />
              <div className="absolute w-14 h-[1px] bg-gradient-to-r from-transparent via-[#F5E6C8] to-transparent" />
            </div>
          </div>

          {/* Point 4: Constellation Sparkling Micro-Stars */}
          <div className="absolute top-[18%] left-[38%] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_#ffffff]" />
            <div className="absolute w-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <div className="absolute top-[62%] right-[32%] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white/95 animate-pulse shadow-[0_0_10px_#ffffff]" style={{ animationDelay: "500ms" }} />
            <div className="absolute w-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <div className="absolute top-[32%] right-[8%] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white/90 animate-pulse shadow-[0_0_10px_#ffffff]" style={{ animationDelay: "1000ms" }} />
            <div className="absolute w-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
        </div>

        {/* Dynamic Graphic Stage by Scene */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Scene 0: Glowing Embryonic Nova Spark */}
          {currentScene === 0 && (
            <div className="relative animate-in fade-in zoom-in-75 duration-1000">
              <div className="w-32 h-32 rounded-full bg-[#00F2FE]/25 blur-3xl animate-ping" />
              <div className="w-16 h-16 rounded-full bg-white/90 blur-md animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <NovaCrestMark size="lg" variant="symbol" animated />
              </div>
            </div>
          )}

          {/* Scene 2: Strategic Blueprint Matrix */}
          {currentScene === 2 && (
            <div className="w-full max-w-2xl px-6 opacity-35 grid grid-cols-4 gap-3 font-mono text-[11px] text-[#38BDF8]">
              {["RESEARCH", "USER FLOWS", "SYSTEM ARCH", "SPRINT ZERO"].map((pill, i) => (
                <div key={pill} className="p-3 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-center">
                  {pill}
                </div>
              ))}
            </div>
          )}

          {/* Scene 3: Tactile UI Glass Layer */}
          {currentScene === 3 && (
            <div className="w-full max-w-xl h-60 rounded-3xl material-liquid-glass p-6 border border-[#EC4899]/30 shadow-2xl opacity-40 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EC4899]" />
                <span className="w-24 h-2.5 rounded-full bg-white/30" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 rounded-2xl bg-white/[0.04] border border-white/[0.08]" />
                <div className="h-24 rounded-2xl bg-white/[0.04] border border-white/[0.08]" />
                <div className="h-24 rounded-2xl bg-white/[0.04] border border-white/[0.08]" />
              </div>
            </div>
          )}

          {/* Scene 4: Precision Silicon Engineering */}
          {currentScene === 4 && (
            <div className="max-w-md w-full p-5 rounded-2xl bg-[#040609]/90 border border-emerald-500/30 font-mono text-xs text-emerald-400 opacity-40 shadow-2xl space-y-1">
              <p>› novacrest build --env=production</p>
              <p className="text-white">✓ Next.js App Router edge streaming deployed</p>
              <p>✓ Sub-1.1s LCP real-world paint speed verified</p>
              <p className="text-[#F5E6C8]">✓ 100% Client Git repository keys transferred</p>
            </div>
          )}

          {/* Scene 5: Unified Ecosystem Ribbon */}
          {currentScene === 5 && (
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl px-4 opacity-45">
              {["Web Platform", "iOS & Android", "Cloud APIs", "AI Automation", "Analytics"].map((node) => (
                <span key={node} className="px-4 py-2 rounded-xl border border-purple-400/40 bg-purple-950/20 text-xs font-mono text-purple-200">
                  {node}
                </span>
              ))}
            </div>
          )}

          {/* Scene 7: 4 Pillars Convergence */}
          {currentScene === 7 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl px-6 opacity-45">
              {["Think Different", "Design Intelligently", "Build Precisely", "Grow Continuously"].map((p) => (
                <div key={p} className="p-4 rounded-2xl material-liquid-glass text-center text-xs font-bold font-mono text-[#00F2FE] border border-[#00F2FE]/30">
                  {p}
                </div>
              ))}
            </div>
          )}

          {/* Scene 8: Monumental Brand Horizon */}
          {currentScene === 8 && (
            <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-1000">
              <NovaCrestMark size="hero" variant="symbol" animated />
            </div>
          )}
        </div>

        {/* Top Scene Identifier Badge */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span
            className="text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full border w-fit backdrop-blur-md shadow-lg"
            style={{
              color: active.accent,
              borderColor: `${active.accent}50`,
              backgroundColor: `${active.accent}15`,
            }}
          >
            {active.badge}
          </span>

          <div className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1] bg-black/40 backdrop-blur-md px-3 py-1 rounded-xl border border-white/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: active.accent }} />
            <span>IDEAS BECOME EXPERIENCES. EXPERIENCES BECOME GROWTH.</span>
          </div>
        </div>

        {/* Central Cinematic Typography & Statement */}
        <div className="relative z-10 max-w-4xl my-auto py-6 sm:py-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] display-headline mb-4 drop-shadow-2xl">
            {active.headline}
          </h2>

          <p className="text-base sm:text-xl font-medium text-[#E2E8F0] leading-relaxed mb-3 drop-shadow-md" style={{ color: active.accent === "#00F2FE" ? "#FFFFFF" : undefined }}>
            {active.tagline}
          </p>

          <p className="text-xs sm:text-sm font-mono text-[#94A3B8] italic border-l-2 pl-4" style={{ borderColor: active.accent }}>
            "{active.subtext}"
          </p>
        </div>

        {/* Bottom Scene Quick Action Deck */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/[0.08] gap-4 bg-gradient-to-t from-[#05070B] to-transparent">
          <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono">
            <Activity className="w-3.5 h-3.5" style={{ color: active.accent }} />
            <span>Chapter {currentScene + 1} of {scenes.length} // Film Playing at 24 FPS</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#060709] bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] hover:from-[#38f6ff] hover:to-[#60a5fa] transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              <span>BUILD WITH US</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Realtime Video Scrubber Timeline */}
      <div className="relative h-1.5 bg-white/[0.08] w-full">
        <div
          className="absolute top-0 bottom-0 left-0 transition-all duration-75"
          style={{
            width: `${((currentScene + sceneProgress / 100) / scenes.length) * 100}%`,
            backgroundColor: active.accent,
            boxShadow: `0 0 14px ${active.accent}`,
          }}
        />
      </div>

      {/* Interactive Control Dock & 9-Scene Chapter Matrix */}
      <div className="p-4 sm:p-6 bg-[#07090F]/95 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Playback Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-[#060709] bg-white hover:bg-[#00F2FE] transition-all shadow-lg"
            aria-label={isPlaying ? "Pause Brand Film" : "Play Brand Film"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? "PAUSE FILM" : "PLAY FILM"}</span>
          </button>

          <button
            type="button"
            onClick={() => jumpToScene(0)}
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white transition-all border border-white/[0.06]"
            title="Restart Film from Scene 01"
            aria-label="Restart Film"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* 9-Scene Quick Scrub Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {scenes.map((sc, idx) => {
            const isCur = currentScene === idx;
            const titles = ["Idea", "Human", "Strategy", "Design", "Build", "Connect", "Growth", "Difference", "Impact"];

            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => jumpToScene(idx)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all border flex items-center gap-1.5 ${
                  isCur
                    ? "text-white font-bold shadow-lg"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04] border-transparent"
                }`}
                style={{
                  backgroundColor: isCur ? `${sc.accent}25` : undefined,
                  borderColor: isCur ? `${sc.accent}60` : undefined,
                  color: isCur ? sc.accent : undefined,
                }}
              >
                <span>{String(idx + 1).padStart(2, "0")}</span>
                <span className="hidden sm:inline font-sans">{titles[idx]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
