"use client";

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export function IconWebEngineering({ className = "", size = 24, glow = true }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* Outer Browser/Edge Frame with 45deg chamfered corner */}
      <path d="M 3 6 L 18 6 L 21 9 L 21 19 L 3 19 Z" stroke="url(#webGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Header Separation Line */}
      <line x1="3" y1="10" x2="21" y2="10" stroke="url(#webGrad)" strokeWidth="1.2" opacity="0.6" />
      {/* Three Precision Nodes */}
      <circle cx="6" cy="8" r="1" fill="#00F2FE" />
      <circle cx="9" cy="8" r="1" fill="#38BDF8" />
      <circle cx="12" cy="8" r="1" fill="#F5E6C8" />
      {/* Interactive Code Angle Glider */}
      <path d="M 8 14.5 L 6.5 14.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 10 13 L 13 14.5 L 10 16" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="16" x2="17.5" y2="16" stroke="#F5E6C8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMobileNative({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* Sculptural Device Body with Precision Notch */}
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="url(#mobileGrad)" strokeWidth="1.5" />
      {/* Dynamic Island Pill */}
      <rect x="9.5" y="4" width="5" height="1.5" rx="0.75" fill="#00F2FE" />
      {/* Screen Interface Horizon */}
      <line x1="8" y1="9" x2="16" y2="9" stroke="#E2E8F0" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      {/* Micro-Card */}
      <rect x="8" y="11.5" width="8" height="4.5" rx="1" fill="#00F2FE" fillOpacity="0.15" stroke="#00F2FE" strokeWidth="1" />
      {/* Home Gesture Bar */}
      <line x1="10" y1="19.5" x2="14" y2="19.5" stroke="#F5E6C8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCustomSoftware({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* Central High-Performance Silicon Die */}
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="url(#cpuGrad)" strokeWidth="1.5" />
      <polygon points="12,8 15,12 12,16 9,12" fill="url(#cpuGrad)" fillOpacity="0.25" stroke="url(#cpuGrad)" strokeWidth="1.2" />
      {/* Bus Data Conduits */}
      <line x1="9" y1="2" x2="9" y2="6" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="2" x2="15" y2="6" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="18" x2="9" y2="22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="18" x2="15" y2="22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="9" x2="6" y2="9" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="15" x2="6" y2="15" stroke="#00F2FE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="9" x2="22" y2="9" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="15" x2="22" y2="15" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconProductDesign({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      {/* Isometric Spatial Planes */}
      <path d="M 12 3 L 21 8 L 12 13 L 3 8 Z" stroke="url(#designGrad)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M 3 12 L 12 17 L 21 12" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M 3 16 L 12 21 L 21 16" stroke="#F5E6C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Central Precision Pivot Node */}
      <circle cx="12" cy="8" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function IconEcommerceSystem({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ecomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>
      </defs>
      {/* Sculptural Architecture Bag */}
      <path d="M 5 8 L 19 8 L 21 20 L 3 20 Z" stroke="url(#ecomGrad)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Architectural Handle */}
      <path d="M 9 8 V 6 C 9 4.3 10.3 3 12 3 C 13.7 3 15 4.3 15 6 V 8" stroke="url(#ecomGrad)" strokeWidth="1.5" strokeLinecap="round" />
      {/* High-speed Transaction Pulse Line */}
      <path d="M 8 14 L 11 14 L 12.5 12 L 13.5 16 L 15 14 L 17 14" stroke="#F5E6C8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAIEcosystem({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="aiPulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#6366F1" />
        </radialGradient>
      </defs>
      {/* Synaptic Hexagonal Geometry */}
      <polygon points="12,3 19,7 19,16 12,20 5,16 5,7" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Inner Triad Synapse */}
      <line x1="12" y1="3" x2="12" y2="11.5" stroke="#00F2FE" strokeWidth="1.2" />
      <line x1="5" y1="16" x2="12" y2="11.5" stroke="#00F2FE" strokeWidth="1.2" />
      <line x1="19" y1="16" x2="12" y2="11.5" stroke="#00F2FE" strokeWidth="1.2" />
      {/* Central Luminous Cognition Nucleus */}
      <circle cx="12" cy="11.5" r="2.5" fill="url(#aiPulse)" />
      {/* Satellite Sensory Nodes */}
      <circle cx="12" cy="3" r="1.5" fill="#F5E6C8" />
      <circle cx="19" cy="7" r="1.5" fill="#00F2FE" />
      <circle cx="19" cy="16" r="1.5" fill="#6366F1" />
      <circle cx="12" cy="20" r="1.5" fill="#F5E6C8" />
      <circle cx="5" cy="16" r="1.5" fill="#6366F1" />
      <circle cx="5" cy="7" r="1.5" fill="#00F2FE" />
    </svg>
  );
}

export function IconTechnicalSEO({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="seoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* Exponential Growth Curve Beam */}
      <path d="M 3 19 L 9 13 L 13 16 L 21 6" stroke="url(#seoGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Terminal Arrow */}
      <path d="M 16 6 H 21 V 11" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Baseline Coordinate Axis */}
      <path d="M 3 4 V 20 H 21" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Zenith Telemetry Beacon */}
      <circle cx="21" cy="6" r="2" fill="#F5E6C8" />
    </svg>
  );
}

export function IconPerformanceMarketing({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="zapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      {/* Faceted High-Voltage Impulse Bolt */}
      <polygon points="13,2 4,14 12,14 11,22 20,10 12,10" fill="url(#zapGrad)" fillOpacity="0.2" stroke="url(#zapGrad)" strokeWidth="1.6" strokeLinejoin="round" />
      {/* Target Focus Ring */}
      <circle cx="12" cy="12" r="9" stroke="#F5E6C8" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  );
}
