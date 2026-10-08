"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Cpu, 
  Zap, 
  CheckCircle2, 
  Activity, 
  FileText, 
  Database, 
  RefreshCw, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export function AutomationCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 5, y: -7 });
  const [activeFacet, setActiveFacet] = useState<"extraction" | "pipeline" | "overhead">("extraction");
  const [isHovered, setIsHovered] = useState(false);

  // Smooth pointer-reactive gyroscopic 3D orbit
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setRotate({
        x: Number((-deltaY * 13).toFixed(2)),
        y: Number((deltaX * 15).toFixed(2)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const facetDetails = {
    extraction: {
      badge: "1.2S EXTRACTION",
      title: "Automated Document Parsing",
      description: "Extract unstructured PDF receipts, balance sheets, and invoices directly into relational PostgreSQL tables with zero manual entry.",
      stat: "1.2s",
      statLabel: "Document Extraction Speed",
      accent: "#10B981",
      icon: FileText,
      tags: ["Unstructured PDF OCR", "Automated Schema Check", "0 Parsing Errors"],
    },
    pipeline: {
      badge: "AUTONOMOUS WEBHOOKS",
      title: "Event-Driven Cloud Orchestration",
      description: "Synchronize data pipelines across payment gateways, CRMs, and internal ERPs with sub-second background queue workers.",
      stat: "100%",
      statLabel: "Pipeline Uptime & Delivery",
      accent: "#00F2FE",
      icon: Zap,
      tags: ["Realtime Webhook Queues", "Multi-Tenant Isolation", "Auto-Retry Fallbacks"],
    },
    overhead: {
      badge: "-68% OPS OVERHEAD",
      title: "Direct Operational Leverage",
      description: "Replace expensive recurring SaaS seat subscriptions and manual paperwork with custom software your business owns 100%.",
      stat: "-68%",
      statLabel: "Manual Overhead Reduced",
      accent: "#F5E6C8",
      icon: Database,
      tags: ["Zero Recurring Seat Tax", "100% Client IP Ownership", "ACID Compliant Vault"],
    },
  };

  const current = facetDetails[activeFacet];
  const CurrentIcon = current.icon;

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
          background: activeFacet === "extraction"
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0, 242, 254, 0.12) 60%, transparent 80%)"
            : activeFacet === "pipeline"
            ? "radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, rgba(59, 130, 246, 0.12) 60%, transparent 80%)"
            : "radial-gradient(circle, rgba(245, 230, 200, 0.25) 0%, rgba(16, 185, 129, 0.12) 60%, transparent 80%)"
        }}
      />

      {/* Dimensional 3D Shell */}
      <div
        className="relative preserve-3d transition-transform duration-300 ease-out py-4"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Outer Architectural Ring */}
        <div className="relative rounded-3xl p-6 sm:p-7 material-liquid-glass border border-white/[0.14] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-white/90">
                NOVACREST AUTOMATION
              </span>
            </div>

            <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-emerald-400 border border-emerald-500/25">
              AUTONOMOUS PIPELINES
            </span>
          </div>

          {/* Central 3D Visual Artifact Stage */}
          <div className="relative h-64 sm:h-80 my-6 flex items-center justify-center overflow-hidden rounded-2xl bg-[#07090E] border border-white/[0.12] shadow-2xl group">
            
            {/* High-Definition 8K Render Image */}
            <img 
              src="/images/service-software-tech.jpg" 
              alt="NovaCrest Bespoke Software Infrastructure" 
              className="absolute inset-0 w-full h-full object-cover brightness-115 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
            />

            {/* Specular Flare Star on Optical Nucleus */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex items-center justify-center">
              <span 
                className="w-8 h-8 rounded-full animate-ping blur-sm opacity-60" 
                style={{ backgroundColor: current.accent }}
              />
              <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#ffffff,0_0_30px_#10B981]" />
              <div className="absolute w-24 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute h-24 w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>

            {/* Automation Pipeline Top Status Mini-HUD */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-300 font-bold">100% Parsed • 0 Errors</span>
              </div>

              {/* Active Holographic Badge */}
              <div 
                className="px-3 py-1 rounded-xl material-liquid-glass flex items-center gap-2 border shadow-lg backdrop-blur-md transition-all duration-300"
                style={{ borderColor: `${current.accent}55` }}
              >
                <CurrentIcon className="w-3 h-3 animate-pulse" style={{ color: current.accent }} />
                <span className="text-[10px] font-mono font-bold tracking-wider text-white">
                  {current.badge}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/90 via-transparent to-black/20 pointer-events-none" />

            {/* Caustic Rim */}
            <div className="absolute inset-0 border border-white/[0.18] rounded-2xl pointer-events-none" />

            {/* Live Readout Pill Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#090D14]/90 border border-white/[0.12] backdrop-blur-md shadow-xl z-10">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" style={{ color: current.accent }} />
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
            {(["extraction", "pipeline", "overhead"] as const).map((mode) => {
              const active = activeFacet === mode;
              const labels = {
                extraction: "Doc Extraction",
                pipeline: "Cloud Pipelines",
                overhead: "Ops Leverage"
              };

              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setActiveFacet(mode)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-all duration-200 text-center border ${
                    active
                      ? "bg-white/[0.1] text-white border-white/[0.22] shadow-sm"
                      : "bg-white/[0.02] text-[#94A3B8] border-white/[0.04] hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="block font-semibold capitalize">{labels[mode]}</span>
                </button>
              );
            })}
          </div>

          {/* Descriptive Capsule & Live Badges */}
          <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {current.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/[0.04]">
              {current.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-[#CBD5E1] border border-white/[0.06]"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
