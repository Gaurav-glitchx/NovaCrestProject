"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Laptop, 
  Smartphone, 
  Cpu, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  ShoppingBag, 
  Bot,
  Activity,
  CreditCard,
  Search
} from "lucide-react";
import {
  IconWebEngineering,
  IconMobileNative,
  IconCustomSoftware,
  IconProductDesign,
  IconTechnicalSEO,
  IconEcommerceSystem
} from "@/components/brand/NovaCrestIcons";

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      id: "web-dev",
      num: "01",
      title: "Web Platforms & Digital Flagships",
      category: "Engineering Architecture",
      tagline: "Web experiences that feel as fluid as native applications.",
      description: "We architect custom Next.js web applications that load in under 1.2 seconds, convert high-intent visitors, and scale globally without rigid template constraints or fragile plugins.",
      outcome: "Sub-1.2s Real-World Edge LCP",
      deliverables: ["Next.js App Router Architecture", "Sub-1.2s Real-World Edge LCP", "Headless CMS Publishing", "High-Intent Funnel Architecture"],
      slug: "web-development",
      cta: "Explore Web Engineering",
      accent: "#00F2FE",
      visualType: "browser"
    },
    {
      id: "mobile-dev",
      num: "02",
      title: "Cross-Platform Mobile Applications",
      category: "Mobile Systems",
      tagline: "Apps people install once and use every single day.",
      description: "From initial prototype to App Store and Google Play deployment, we craft native iOS and Android apps in Flutter and React Native with 60fps haptics, offline synchronization, and instant biometric payments.",
      outcome: "60 FPS Fluid Haptic Physics",
      deliverables: ["Flutter & React Native Builds", "Offline-First Data Sync", "Apple Pay & Google Pay", "Biometric Authentication"],
      slug: "mobile-app-development",
      cta: "Explore Mobile Engineering",
      accent: "#3B82F6",
      visualType: "mobile"
    },
    {
      id: "software-dev",
      num: "03",
      title: "Bespoke Software & Automated Workflows",
      category: "Cloud Operations",
      tagline: "Software tailored to how your business actually runs.",
      description: "Eliminate messy spreadsheets, manual invoice entry, and expensive third-party SaaS subscriptions with custom cloud applications, document extraction pipelines, and automated CRM workflows.",
      outcome: "-68% Manual Processing Overhead",
      deliverables: ["Internal Operations Dashboards", "Automated PDF & Invoice Parsing", "Custom API Integrations", "100% Client IP Ownership"],
      slug: "software-development",
      cta: "Explore Custom Software",
      accent: "#10B981",
      visualType: "pipeline"
    },
    {
      id: "ui-ux",
      num: "04",
      title: "UI/UX Design Systems & Product Strategy",
      category: "Experience Design",
      tagline: "Interfaces designed around human psychology, not decoration.",
      description: "We map out friction-free customer journeys, clickable Figma prototypes, and cohesive design token systems that turn complex technical workflows into intuitive, high-converting digital products.",
      outcome: "Zero UX Drop-Off Blindspots",
      deliverables: ["Interactive Clickable Prototypes", "Scalable Design Token Systems", "Conversion Rate Audits", "Accessibility & WCAG AA"],
      slug: "ui-ux-design",
      cta: "Explore Product Design",
      accent: "#F5E6C8",
      visualType: "tokens"
    },
    {
      id: "seo-aeo",
      num: "05",
      title: "Technical SEO & AI Search (AEO)",
      category: "Growth & Visibility",
      tagline: "Rank on Google, Perplexity, and AI Overviews.",
      description: "We structure rich JSON-LD knowledge schemas, semantic content hierarchies, and lightning-fast Core Web Vitals to ensure your product is cited by AI answers and ranked by Google crawlers.",
      outcome: "+320% Qualified Organic Inflow",
      deliverables: ["Structured Schema.org Markup", "Core Web Vitals Guarantee", "Entity-First Knowledge Graph", "AI Engine Crawlability"],
      slug: "seo",
      cta: "Explore Search Architecture",
      accent: "#F472B6",
      visualType: "search"
    },
    {
      id: "ecommerce",
      num: "06",
      title: "High-Volume E-Commerce Engineering",
      category: "Commercial Infrastructure",
      tagline: "Storefronts built to handle multi-million dollar surges.",
      description: "Headless Shopify Plus and custom commerce backends engineered for peak traffic events, sub-second checkout latency, and global multi-currency payment routing.",
      outcome: "+28.4% Checkout Conversion",
      deliverables: ["Headless Shopify Plus & Medusa", "Sub-second 1-Tap Checkout", "Localized Global Currency Routing", "Zero Flash-Sale Downtime"],
      slug: "ecommerce-development",
      cta: "Explore Commerce Engineering",
      accent: "#38BDF8",
      visualType: "commerce"
    }
  ];

  const current = services[activeService];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative overflow-hidden env-chapter-03" id="services">
      {/* Volumetric Radial Ambient Lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: current.accent }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-[#00F2FE] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase">SPATIAL CAPABILITY LANDSCAPE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] display-headline">
            Engineered for scale.{" "}
            <span className="text-gradient-champagne">Designed for humans.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We don&apos;t recycle off-the-shelf templates. Every discipline is tailored to give your business an unfair commercial advantage.
          </p>
        </div>

        {/* Master Discipline Navigator Grid (6 Selector Pills) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {services.map((item, idx) => {
            const isActive = activeService === idx;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveService(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-300 relative group ${
                  isActive
                    ? "material-liquid-glass border-white/[0.25] shadow-[0_12px_30px_rgba(0,0,0,0.8)] scale-[1.02]"
                    : "material-editorial-vellum hover:border-white/[0.15] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center p-1 bg-white/[0.04]">
                      {item.id === "web-dev" && <IconWebEngineering size={15} />}
                      {item.id === "mobile-dev" && <IconMobileNative size={15} />}
                      {item.id === "software-dev" && <IconCustomSoftware size={15} />}
                      {item.id === "ui-ux" && <IconProductDesign size={15} />}
                      {item.id === "seo-aeo" && <IconTechnicalSEO size={15} />}
                      {item.id === "ecommerce" && <IconEcommerceSystem size={15} />}
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: isActive ? item.accent : "#94A3B8" }}>
                      {item.num}
                    </span>
                  </div>
                  <span 
                    className="w-1.5 h-1.5 rounded-full transition-opacity"
                    style={{ 
                      backgroundColor: item.accent,
                      opacity: isActive ? 1 : 0.3 
                    }}
                  />
                </div>

                <span className={`block text-xs font-bold tracking-tight line-clamp-2 transition-colors ${
                  isActive ? "text-white" : "text-[#CBD5E1] group-hover:text-white"
                }`}>
                  {item.title}
                </span>

                <span className="text-[10px] text-[#94A3B8] block mt-1 uppercase font-mono">
                  {item.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* The Spatial Interactive Stage Canvas */}
        <div className="material-smoked-quartz rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/[0.12] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-10 h-10 rounded-2xl material-liquid-glass flex items-center justify-center p-2 border border-white/[0.15]">
                  {current.id === "web-dev" && <IconWebEngineering size={22} />}
                  {current.id === "mobile-dev" && <IconMobileNative size={22} />}
                  {current.id === "software-dev" && <IconCustomSoftware size={22} />}
                  {current.id === "ui-ux" && <IconProductDesign size={22} />}
                  {current.id === "seo-aeo" && <IconTechnicalSEO size={22} />}
                  {current.id === "ecommerce" && <IconEcommerceSystem size={22} />}
                </div>
                <span className="text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08]" style={{ color: current.accent }}>
                  DISCIPLINE {current.num} // {current.category}
                </span>
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified: {current.outcome}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base font-medium mt-1.5" style={{ color: current.accent }}>
                  {current.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {current.description}
              </p>

              {/* Tangible Deliverables List */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3 font-mono">
                  What We Deliver:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: current.accent }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href={`/services/${current.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors group"
                  style={{ color: current.accent }}
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-xs font-mono text-[#94A3B8]">
                  0{activeService + 1} of 06 Capabilities
                </span>
              </div>
            </div>

            {/* Right Interactive Prototype Stage Viewport (6 Cols) */}
            <div className="lg:col-span-6">
              
              {/* Visual 1: Web Platform Browser */}
              {current.visualType === "browser" && (
                <div className="browser-frame material-liquid-glass p-1 shadow-2xl animate-in fade-in duration-300">
                  <div className="browser-header">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                    </div>
                    <div className="flex-1 max-w-xs mx-auto">
                      <div className="h-5 rounded-full bg-white/[0.04] text-[10px] text-[#94A3B8] flex items-center justify-center font-mono">
                        flagship.novacrest.tech
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#00F2FE]" />
                  </div>
                  <div className="relative bg-[#090C12] overflow-hidden rounded-b-2xl">
                    <div className="relative h-56 sm:h-64 overflow-hidden group">
                      <img 
                        src="/images/service-web-dev.jpg" 
                        alt="NovaCrest Web Engineering Platform"
                        className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block" 
                      />
                      {/* Specular Flare Light Point */}
                      <div className="absolute top-4 left-6 flex items-center justify-center pointer-events-none">
                        <span className="w-8 h-8 rounded-full bg-[#00F2FE]/40 blur-md animate-pulse" />
                        <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#00F2FE]" />
                        <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full material-liquid-glass border border-white/10 text-[10px] font-mono text-emerald-400 font-bold">
                        0.84s Paint Speed
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-[10px] text-[#94A3B8] block">Conversion Velocity</span>
                          <span className="text-lg font-bold text-white mt-0.5 block">4.82%</span>
                          <span className="text-[10px] text-emerald-400">+1.4% uplift</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-[10px] text-[#94A3B8] block">Core Web Vitals</span>
                          <span className="text-lg font-bold text-white mt-0.5 block">100/100</span>
                          <span className="text-[10px] text-[#00F2FE]">Zero layout shift</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs">
                        <span className="text-[#94A3B8]">Deploy State: Worldwide Edge</span>
                        <span className="text-emerald-400 font-mono">Active 200+ Nodes</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual 2: Mobile App Native Viewport */}
              {current.visualType === "mobile" && (
                <div className="max-w-xs mx-auto mobile-frame material-liquid-glass p-1 shadow-2xl animate-in fade-in duration-300">
                  <div className="mobile-notch" />
                  <div className="relative bg-[#090C12] overflow-hidden rounded-b-[2rem]">
                    <div className="relative h-64 overflow-hidden group">
                      <img 
                        src="/images/service-mobile-dev.jpg" 
                        alt="NovaCrest Mobile App Architecture" 
                        className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
                      />
                      {/* Specular Flare Light Point */}
                      <div className="absolute top-4 left-6 flex items-center justify-center pointer-events-none">
                        <span className="w-8 h-8 rounded-full bg-[#3B82F6]/40 blur-md animate-pulse" />
                        <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#3B82F6]" />
                        <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-2 right-3 px-2 py-0.5 rounded-full material-liquid-glass text-[9px] font-mono text-emerald-400 font-bold">
                        60 FPS Native
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[10px] text-[#94A3B8] block">1-Tap Biometric Checkout</span>
                        <span className="text-base font-bold text-white mt-0.5 block">$1,450.00</span>
                        <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] w-[92%]" />
                        </div>
                      </div>
                      <div className="text-[11px] text-[#94A3B8] flex items-center justify-between pt-1 border-t border-white/[0.06]">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" /> FaceID Verified
                        </span>
                        <span className="font-mono text-white/70">iOS & Android</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual 3: Automated Pipeline */}
              {current.visualType === "pipeline" && (
                <div className="material-liquid-glass rounded-2xl p-1 border border-white/[0.1] shadow-2xl animate-in fade-in duration-300 overflow-hidden">
                  <div className="relative h-56 sm:h-64 overflow-hidden group rounded-t-xl">
                    <img 
                      src="/images/service-software-tech.jpg" 
                      alt="NovaCrest Bespoke Software Infrastructure" 
                      className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
                    />
                    {/* Specular Flare Light Point */}
                    <div className="absolute top-4 left-6 flex items-center justify-center pointer-events-none">
                      <span className="w-8 h-8 rounded-full bg-emerald-400/40 blur-md animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#10B981]" />
                      <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold px-2.5 py-1 rounded-full material-liquid-glass border border-emerald-500/20">
                        Automated Invoicing & Extraction
                      </span>
                      <span className="text-[10px] text-white/80 font-mono px-2 py-0.5 rounded bg-black/50">
                        1.2s Avg
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-[#090C12] rounded-b-xl space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs">
                      <span className="text-white font-medium">1. Ingest Raw PDF Statements</span>
                      <span className="text-emerald-400 font-mono">100% Parsed</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs">
                      <span className="text-white font-medium">2. Validate Ledger Schema</span>
                      <span className="text-emerald-400 font-mono">0 Errors</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs">
                      <span className="text-white font-medium">3. Sync to PostgreSQL Vault</span>
                      <span className="text-emerald-400 font-mono">Instant Commits</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual 4: Design Tokens */}
              {current.visualType === "tokens" && (
                <div className="material-liquid-glass rounded-2xl p-1 border border-white/[0.1] shadow-2xl animate-in fade-in duration-300 overflow-hidden">
                  <div className="relative h-56 sm:h-64 overflow-hidden group rounded-t-xl">
                    <img 
                      src="/images/service-ui-ux.jpg" 
                      alt="NovaCrest UI/UX Design System" 
                      className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
                    />
                    {/* Specular Flare Light Point */}
                    <div className="absolute top-4 left-6 flex items-center justify-center pointer-events-none">
                      <span className="w-8 h-8 rounded-full bg-[#F5E6C8]/40 blur-md animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#F5E6C8]" />
                      <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F5E6C8] to-transparent" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#F5E6C8] font-bold px-2.5 py-1 rounded-full material-liquid-glass border border-[#F5E6C8]/20">
                        Design Token System
                      </span>
                      <span className="text-[10px] text-white/80 font-mono px-2 py-0.5 rounded bg-black/50">
                        Figma & Tailwind
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-[#090C12] rounded-b-xl space-y-3">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[#060709] border border-white/[0.08] text-center">
                        <div className="w-5 h-5 rounded bg-[#00F2FE] mx-auto mb-1.5" />
                        <span className="text-[10px] font-mono text-white block">#00F2FE</span>
                        <span className="text-[9px] text-[#94A3B8]">Cyan</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#060709] border border-white/[0.08] text-center">
                        <div className="w-5 h-5 rounded bg-[#F5E6C8] mx-auto mb-1.5" />
                        <span className="text-[10px] font-mono text-white block">#F5E6C8</span>
                        <span className="text-[9px] text-[#94A3B8]">Champagne</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#060709] border border-white/[0.08] text-center">
                        <div className="w-5 h-5 rounded bg-[#3B82F6] mx-auto mb-1.5" />
                        <span className="text-[10px] font-mono text-white block">#3B82F6</span>
                        <span className="text-[9px] text-[#94A3B8]">Cobalt</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-[#94A3B8]">
                      Strict WCAG AA contrast ratios, fluid typography scales, and seamless light/dark mode adaptation.
                    </div>
                  </div>
                </div>
              )}

              {/* Visual 5: SEO / Search */}
              {current.visualType === "search" && (
                <div className="material-liquid-glass rounded-2xl p-1 border border-white/[0.1] shadow-2xl animate-in fade-in duration-300 overflow-hidden">
                  <div className="relative h-56 sm:h-64 overflow-hidden group rounded-t-xl">
                    <img 
                      src="/images/service-seo-growth.jpg" 
                      alt="NovaCrest Technical SEO & AI Search" 
                      className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
                    />
                    {/* Specular Flare Light Point */}
                    <div className="absolute top-4 left-6 flex items-center justify-center pointer-events-none">
                      <span className="w-8 h-8 rounded-full bg-[#F472B6]/40 blur-md animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#F472B6]" />
                      <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F472B6] to-transparent" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#F472B6] font-bold px-2.5 py-1 rounded-full material-liquid-glass border border-[#F472B6]/20">
                        AI Search Knowledge Graph
                      </span>
                      <span className="text-[10px] text-white/80 font-mono px-2 py-0.5 rounded bg-black/50">
                        Perplexity & Google
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-[#090C12] rounded-b-xl space-y-3">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-xs font-semibold text-white block mb-1">
                        &ldquo;Which studio builds custom sub-second Next.js web applications?&rdquo;
                      </span>
                      <p className="text-xs text-[#CBD5E1] bg-white/[0.03] p-2.5 rounded-lg border border-white/[0.04]">
                        Cited Source #1: <strong className="text-white">NovaCrest Technologies (novacrest.tech)</strong> — High-performance edge architectures with guaranteed sub-1.2s LCP.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual 6: E-Commerce */}
              {current.visualType === "commerce" && (
                <div className="material-liquid-glass rounded-2xl p-1 border border-white/[0.1] shadow-2xl animate-in fade-in duration-300 overflow-hidden">
                  <div className="relative h-56 sm:h-64 overflow-hidden group rounded-t-xl">
                    <img 
                      src="/images/service-automation.jpg" 
                      alt="NovaCrest High-Volume Commerce Engine" 
                      className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
                    />
                    {/* Specular Flare Light Point */}
                    <div className="absolute top-4 left-6 flex items-center justify-center pointer-events-none">
                      <span className="w-8 h-8 rounded-full bg-[#38BDF8]/40 blur-md animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#38BDF8]" />
                      <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#38BDF8] font-bold px-2.5 py-1 rounded-full material-liquid-glass border border-[#38BDF8]/20">
                        Headless Commerce Engine
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-black/50 font-bold">
                        +28.4% Pace
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-[#090C12] rounded-b-xl space-y-3">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white font-medium">Flash Sale Surge Simulation</span>
                        <span className="text-[#00F2FE] font-mono">25,000 req/sec</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#00F2FE] via-[#3B82F6] to-emerald-400 w-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                        <span>Zero queue drop-off</span>
                        <span className="text-emerald-400 font-semibold">100% Cart Uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
