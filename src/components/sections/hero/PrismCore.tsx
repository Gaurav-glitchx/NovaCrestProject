"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, ShieldCheck, Zap, Activity, Layers, ArrowUpRight } from "lucide-react";

export function PrismCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 6, y: -8 });
  const [activeFacet, setActiveFacet] = useState<"velocity" | "craft" | "resilience">("velocity");
  const [isHovered, setIsHovered] = useState(false);

  // Smooth pointer-reactive gyroscopic 3D orbit
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center (-1 to 1)
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Max tilt ±14deg
      setRotate({
        x: Number((-deltaY * 14).toFixed(2)),
        y: Number((deltaX * 16).toFixed(2)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const facetDetails = {
    velocity: {
      badge: "SUB-1.2S LCP",
      title: "Commercial Velocity",
      description: "Edge architecture optimized for sub-second paint times and frictionless conversion pipelines.",
      stat: "99.8%",
      statLabel: "Target Lighthouse Score",
      accent: "#00F2FE",
    },
    craft: {
      badge: "OBSESSIVE DESIGN",
      title: "Tactile Product Craft",
      description: "Every microinteraction and layout engineered for human delight and brand distinction.",
      stat: "60 FPS",
      statLabel: "Fluid UI Physics",
      accent: "#3B82F6",
    },
    resilience: {
      badge: "ZERO LOCK-IN",
      title: "100% Client Ownership",
      description: "Direct Git repository keys, cloud credentials, and zero proprietary agency dependencies.",
      stat: "100%",
      statLabel: "Client IP Transfer",
      accent: "#10B981",
    },
  };

  const current = facetDetails[activeFacet];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-lg mx-auto spatial-container select-none"
    >
      {/* Volumetric Caustic Backlight */}
      <div 
        className="absolute -inset-10 rounded-full blur-[100px] pointer-events-none transition-all duration-700"
        style={{
          background: activeFacet === "velocity"
            ? "radial-gradient(circle, rgba(0, 242, 254, 0.22) 0%, rgba(59, 130, 246, 0.1) 60%, transparent 80%)"
            : activeFacet === "craft"
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.24) 0%, rgba(139, 92, 246, 0.12) 60%, transparent 80%)"
            : "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(0, 242, 254, 0.1) 60%, transparent 80%)"
        }}
      />

      {/* Dimensional Prism Shell */}
      <div
        className="relative preserve-3d transition-transform duration-300 ease-out py-4"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Outer Architectural Ring */}
        <div className="relative rounded-3xl p-6 sm:p-7 material-liquid-glass">
          
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-white/90">
                NOVACREST PRISM CORE
              </span>
            </div>

            <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-[#F5E6C8] border border-[#F5E6C8]/20">
              KINETIC OPTIC SCULPTURE
            </span>
          </div>

          {/* Central 3D Visual Artifact Stage */}
          <div className="relative h-64 sm:h-80 my-6 flex items-center justify-center overflow-hidden rounded-2xl bg-[#07090E] border border-white/[0.12] shadow-2xl group">
            
            {/* High-Definition 8K Render Image with Luminous Clarity */}
            <img 
              src="/images/hero-prism.jpg" 
              alt="NovaCrest Prism Core Crystalline Sculpture" 
              className="absolute inset-0 w-full h-full object-cover brightness-115 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
            />
            {/* Radiant Specular Flare Star on Optical Nucleus */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-[#00F2FE]/40 animate-ping blur-sm" />
              <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#ffffff,0_0_30px_#00F2FE]" />
              <div className="absolute w-24 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute h-24 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/85 via-transparent to-black/10 pointer-events-none" />

            {/* Subtle Caustic Specular Rim Highlight */}
            <div className="absolute inset-0 border border-white/[0.18] rounded-2xl pointer-events-none" />

            {/* Active Holographic Emblem Tag */}
            <div 
              className="absolute top-3 right-3 px-3 py-1.5 rounded-xl material-liquid-glass flex items-center gap-2 border shadow-lg backdrop-blur-md transition-all duration-300 z-10"
              style={{ borderColor: `${current.accent}55` }}
            >
              <div 
                className="w-5 h-5 rounded-lg flex items-center justify-center transition-colors duration-300"
                style={{ background: `${current.accent}25`, color: current.accent }}
              >
                {activeFacet === "velocity" && <Zap className="w-3 h-3 animate-pulse" />}
                {activeFacet === "craft" && <Layers className="w-3 h-3 animate-pulse" />}
                {activeFacet === "resilience" && <ShieldCheck className="w-3 h-3 animate-pulse" />}
              </div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-white">
                {current.badge}
              </span>
            </div>

            {/* Live Readout Pill Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#090D14]/90 border border-white/[0.12] backdrop-blur-md shadow-xl z-10">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span className="text-xs font-semibold text-white">
                  {current.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold text-emerald-400">
                  {current.stat}
                </span>
                <span className="text-[10px] text-[#94A3B8]">
                  {current.statLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Facet Mode Selector Tabs */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {(["velocity", "craft", "resilience"] as const).map((mode) => {
              const active = activeFacet === mode;
              const labels = {
                velocity: "Velocity",
                craft: "Craft",
                resilience: "Ownership"
              };

              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setActiveFacet(mode)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-all duration-200 text-center border ${
                    active
                      ? "bg-white/[0.1] text-white border-white/[0.2] shadow-sm"
                      : "bg-white/[0.02] text-[#94A3B8] border-white/[0.04] hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="block font-semibold capitalize">{labels[mode]}</span>
                </button>
              );
            })}
          </div>

          {/* Descriptive Capsule */}
          <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-[#94A3B8] leading-relaxed">
            {current.description}
          </div>
        </div>
      </div>
    </div>
  );
}
