"use client";

import React, { useState, useEffect } from "react";
import { NovaCrestMark } from "./NovaCrestMark";
import { Sparkles, ArrowDown, Activity, ShieldCheck, Globe, Zap, Film } from "lucide-react";

export function AtelierStatusBar() {
  const [tickerIndex, setTickerIndex] = useState(0);

  const telemetryItems = [
    {
      status: "ATELIER STATUS: ACTIVE PRODUCTION SPRINT",
      detail: "SPRINT S-42 IN FLIGHT",
      metric: "SUB-1.1S LCP",
      subMetric: "100% IP TRANSFER GUARANTEE",
      badge: "GLOBAL EDGE 300+ POPS",
      accent: "#10B981",
    },
    {
      status: "PERFORMANCE CORE: ZERO LAYOUT SHIFT",
      detail: "100/100 CORE WEB VITALS",
      metric: "0.84S REAL-WORLD LCP",
      subMetric: "SERVERLESS EDGE ROUTING",
      badge: "EDGE RESILIENCE",
      accent: "#00F2FE",
    },
    {
      status: "INTELLECTUAL PROPERTY: 100% CLIENT OWNED",
      detail: "DIRECT GIT REPOSITORY ACCESS",
      metric: "ZERO LOCK-IN",
      subMetric: "FULL SOURCE CODE HANDOVER",
      badge: "CLIENT-FIRST CODE",
      accent: "#F5E6C8",
    },
    {
      status: "DEPLOYMENT NETWORK: MULTI-REGION RESILIENCE",
      detail: "324 CDN POPS OPERATIONAL",
      metric: "22MS EDGE LATENCY",
      subMetric: "ZERO FLASH-SALE DOWNTIME",
      badge: "GLOBAL MESH",
      accent: "#38BDF8",
    },
  ];

  // Rotate telemetry updates smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % telemetryItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [telemetryItems.length]);

  const active = telemetryItems[tickerIndex];

  const scrollToBrandFilm = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("brand-film");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative mb-8 group select-none">
      {/* Animated Traveling Shimmer Perimeter Glow */}
      <div 
        className="absolute -inset-[1px] rounded-2xl opacity-60 blur-[3px] pointer-events-none transition-all duration-700 bg-gradient-to-r from-[#00F2FE]/40 via-[#3B82F6]/30 via-[#F5E6C8]/30 to-[#00F2FE]/40 animate-gradient-x"
      />

      {/* Volumetric Underglow */}
      <div 
        className="absolute -inset-2 rounded-2xl blur-xl opacity-20 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: active.accent }}
      />

      {/* Main Glassmorphic Capsule */}
      <div className="relative rounded-2xl p-2.5 sm:p-3.5 material-liquid-glass flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 border border-white/[0.14] shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden">
        
        {/* Specular Light Horizon Beam traversing the top border */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none opacity-70" />

        {/* Left Section: Live Production Radar + Animated Status */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Emblem with Specular Aura */}
          <div className="relative flex items-center justify-center shrink-0">
            <NovaCrestMark size="xs" variant="symbol" animated />
            <span className="absolute -inset-1 rounded-full bg-[#00F2FE]/20 blur-sm pointer-events-none" />
          </div>

          {/* Radar Beacon with Multiple Ripple Rings */}
          <div className="relative flex items-center justify-center shrink-0 w-3 h-3">
            <span 
              className="absolute w-5 h-5 rounded-full animate-ping opacity-75"
              style={{ backgroundColor: active.accent }}
            />
            <span 
              className="absolute w-3 h-3 rounded-full blur-[1px] opacity-90"
              style={{ backgroundColor: active.accent }}
            />
            <span className="relative w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>

          {/* Dynamic Cycling Telemetry Text */}
          <div className="flex items-center gap-2 overflow-hidden min-h-[22px]">
            <div className="animate-in fade-in slide-in-from-bottom-1 duration-500 flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold tracking-wider text-white whitespace-nowrap">
                {active.status}
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] hidden xl:inline-block border-l border-white/10 pl-2">
                {active.detail}
              </span>
            </div>
          </div>

          {/* Holographic Location Node Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-white/90 backdrop-blur-md shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-pulse" />
            <span className="text-[#00F2FE] font-bold">{active.badge}</span>
          </div>
        </div>

        {/* Right Section: Telemetry Highlights + Magnetic Film CTA */}
        <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 w-full md:w-auto text-xs font-mono">
          {/* Middle Stat Telemetry (Visible on desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#94A3B8] border-r border-white/10 pr-4">
            <span className="text-white font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#00F2FE]" />
              {active.metric}
            </span>
            <span className="text-white/30">•</span>
            <span>{active.subMetric}</span>
          </div>

          {/* Highly Aesthetic Animated CTA Button */}
          <a
            href="#brand-film"
            onClick={scrollToBrandFilm}
            className="relative group/btn inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-xl text-[11px] font-bold font-mono text-[#F5E6C8] hover:text-white transition-all duration-300 overflow-hidden border border-[#F5E6C8]/30 hover:border-[#F5E6C8]/60 bg-gradient-to-r from-white/[0.06] to-white/[0.02] hover:bg-white/[0.12] shadow-[0_0_15px_rgba(245,230,200,0.1)] hover:shadow-[0_0_25px_rgba(245,230,200,0.3)] shrink-0"
          >
            {/* Shimmer Glint Line moving on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <Film className="w-3.5 h-3.5 text-[#F5E6C8] group-hover/btn:text-white transition-colors" />
            <span className="tracking-wider">WATCH CINEMATIC BRAND FILM</span>
            
            {/* Animated Downward Arrow Indicator */}
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#F5E6C8]/15 text-[#F5E6C8] group-hover/btn:bg-white/20 group-hover/btn:text-white group-hover/btn:translate-y-0.5 transition-all">
              <ArrowDown className="w-2.5 h-2.5 animate-bounce" />
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}
