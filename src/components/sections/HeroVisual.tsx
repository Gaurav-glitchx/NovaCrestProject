"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Smartphone, 
  Laptop, 
  Zap, 
  Box,
  Layers,
  Activity
} from "lucide-react";
import { PrismCore } from "./hero/PrismCore";
import { WebPlatformCore } from "./hero/WebPlatformCore";
import { MobileAppCore } from "./hero/MobileAppCore";
import { AutomationCore } from "./hero/AutomationCore";

export function HeroVisual() {
  const [activeView, setActiveView] = useState<"prism" | "platform" | "mobile" | "workflow">("prism");

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none spatial-container">
      {/* Volumetric ambient backlighting */}
      <div className="absolute -top-20 -right-10 w-80 h-80 bg-[#00F2FE]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-[#3B82F6]/14 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Interactive Product Showcase */}
      <div className="relative z-10 transition-all duration-500">
        
        {/* Floating View Switcher Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 px-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
            <span className="text-xs font-mono font-medium text-white/90 tracking-wider">
              {activeView === "prism" 
                ? "SIGNATURE 3D NUCLEUS" 
                : activeView === "platform" 
                ? "WEB PLATFORM 3D CORE" 
                : activeView === "mobile" 
                ? "MOBILE STUDIO 3D CORE" 
                : "AUTOMATION ENGINE 3D CORE"}
            </span>
          </div>

          <div className="inline-flex items-center p-1 rounded-xl bg-[#0B0F17]/95 border border-white/[0.09] backdrop-blur-xl shadow-lg">
            <button
              type="button"
              onClick={() => setActiveView("prism")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === "prism"
                  ? "bg-gradient-to-r from-[#00F2FE]/20 to-[#3B82F6]/20 text-[#00F2FE] shadow-sm border border-[#00F2FE]/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Box className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>Prism Core</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("platform")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === "platform"
                  ? "bg-gradient-to-r from-[#00F2FE]/20 to-[#38BDF8]/20 text-[#00F2FE] shadow-sm border border-[#00F2FE]/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Laptop className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>Web Platform</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("mobile")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === "mobile"
                  ? "bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 text-[#3B82F6] shadow-sm border border-[#3B82F6]/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Mobile</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("workflow")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === "workflow"
                  ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 shadow-sm border border-emerald-500/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Automation</span>
            </button>
          </div>
        </div>

        {/* Dynamic 3D Spatial Presentation Window */}
        <div className="relative">
          {activeView === "prism" && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <PrismCore />
            </div>
          )}

          {activeView === "platform" && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <WebPlatformCore />
            </div>
          )}

          {activeView === "mobile" && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <MobileAppCore />
            </div>
          )}

          {activeView === "workflow" && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <AutomationCore />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
