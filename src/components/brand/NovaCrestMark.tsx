"use client";

import React, { useState } from "react";

interface NovaCrestMarkProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  variant?: "symbol" | "lockup" | "monogram";
  animated?: boolean;
}

export function NovaCrestMark({
  size = "md",
  className = "",
  variant = "symbol",
  animated = true,
}: NovaCrestMarkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const dimensionMap = {
    xs: { px: 22, text: "text-xs", gap: "gap-1.5" },
    sm: { px: 28, text: "text-sm", gap: "gap-2" },
    md: { px: 36, text: "text-base", gap: "gap-2.5" },
    lg: { px: 48, text: "text-xl", gap: "gap-3" },
    xl: { px: 64, text: "text-2xl", gap: "gap-4" },
    hero: { px: 96, text: "text-4xl", gap: "gap-5" },
  };

  const dim = dimensionMap[size];

  // The NovaCrest Signature Mark:
  // Mathematical synthesis of:
  // 1. "CREST": Two soaring architectural chevrons rising upward to a unified apex.
  // 2. "NOVA": Radiant central stellar diamond aperture emitting kinetic caustics.
  // 3. "N/C" Kinetic Trajectory: Geometric diagonal flow bridging energy into structural elevation.
  const svgMark = (
    <svg
      width={dim.px}
      height={dim.px}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-500 ${
        animated && isHovered ? "scale-105" : ""
      }`}
      aria-label="NovaCrest Technologies Brand Symbol"
    >
      <defs>
        {/* Nova Energy Core Radial Gradient */}
        <radialGradient id="novaEnergyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>

        {/* Left Ascent Crest Wing Gradient */}
        <linearGradient id="crestWingLeft" x1="15%" y1="90%" x2="50%" y2="10%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>

        {/* Right Ascent Crest Wing Gradient (Champagne/Gold reflection) */}
        <linearGradient id="crestWingRight" x1="85%" y1="90%" x2="50%" y2="10%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="60%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#F5E6C8" />
        </linearGradient>

        {/* Stellar Core Diamond Gradient */}
        <linearGradient id="stellarCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        {/* Kinetic Rim Specular Reflection */}
        <linearGradient id="specularRim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#F5E6C8" stopOpacity="1" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
        </linearGradient>

        {/* Deep Ambient Shadow Filter */}
        <filter id="novaMarkBloom" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Atmospheric Ambient Bloom behind Apex */}
      <circle
        cx="50"
        cy="48"
        r="32"
        fill="url(#novaEnergyGlow)"
        className={animated ? "animate-pulse" : ""}
        style={{ animationDuration: "3.5s" }}
      />

      {/* Outer Elevation Crest: Left Architectural Ascender */}
      <path
        d="M 16 78 L 50 14 L 42 14 L 10 78 Z"
        fill="url(#crestWingLeft)"
        opacity="0.95"
      />

      {/* Outer Elevation Crest: Right Architectural Ascender */}
      <path
        d="M 84 78 L 50 14 L 58 14 L 90 78 Z"
        fill="url(#crestWingRight)"
        opacity="0.95"
      />

      {/* Geometric N-Diagonal Beam (Energy Bridge from Base to Apex) */}
      <path
        d="M 28 74 L 50 28 L 56 28 L 72 74 L 62 74 L 50 44 L 38 74 Z"
        fill="#070A10"
        stroke="url(#specularRim)"
        strokeWidth="1.2"
      />

      {/* Inner Crest Peak Chevron */}
      <path
        d="M 32 68 L 50 32 L 68 68 L 60 68 L 50 46 L 40 68 Z"
        fill="url(#crestWingLeft)"
        opacity="0.85"
      />

      {/* Central "NOVA" Diamond Stellar Nucleus */}
      <g filter="url(#novaMarkBloom)">
        <polygon
          points="50,38 58,48 50,58 42,48"
          fill="url(#stellarCoreGrad)"
          className={animated ? "transition-transform duration-700" : ""}
          style={{
            transformOrigin: "50px 48px",
            transform: isHovered ? "rotate(45deg) scale(1.15)" : "rotate(0deg)",
          }}
        />
        {/* Core Radiance Pinpoint */}
        <circle cx="50" cy="48" r="2.2" fill="#FFFFFF" />
      </g>

      {/* Precision Apex Finial (Crest Summit) */}
      <polygon points="50,11 53,16 50,15 47,16" fill="#F5E6C8" />

      {/* Base Foundation Nodes (Triad Equilibrium) */}
      <circle cx="13" cy="78" r="2" fill="#00F2FE" opacity="0.8" />
      <circle cx="50" cy="88" r="2.5" fill="#3B82F6" opacity="0.9" />
      <circle cx="87" cy="78" r="2" fill="#F5E6C8" opacity="0.8" />

      {/* Horizon Foundation Line */}
      <line
        x1="24"
        y1="88"
        x2="76"
        y2="88"
        stroke="url(#specularRim)"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.4"
      />
    </svg>
  );

  if (variant === "symbol") {
    return (
      <div
        className={`inline-flex items-center justify-center select-none ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {svgMark}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center ${dim.gap} select-none group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon with Soft Specular Backdrop */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00F2FE]/20 via-[#3B82F6]/10 to-[#F5E6C8]/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {svgMark}
      </div>

      {/* Bespoke Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-white ${dim.text} display-headline`}>
            NOVA<span className="text-gradient-champagne font-black">CREST</span>
          </span>
          <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-white/[0.06] text-[#00F2FE] border border-[#00F2FE]/30 font-mono font-bold">
            STUDIO
          </span>
        </div>
        <span className="text-[10px] tracking-widest text-[#94A3B8] font-mono font-semibold uppercase mt-1 hidden sm:inline-block">
          SOFTWARE & DIGITAL SYSTEMS
        </span>
      </div>
    </div>
  );
}
