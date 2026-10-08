"use client";

import React, { useState } from "react";
import { 
  Lightbulb, 
  Compass, 
  Palette, 
  Cpu, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Terminal,
  Activity
} from "lucide-react";

export function IdeaToProduct() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stages = [
    {
      id: "idea",
      step: "01",
      name: "The Spark",
      title: "Abstract Idea",
      subtitle: "Unfiltered vision & commercial intent",
      icon: Lightbulb,
      accent: "#00F2FE",
      question: "What bottleneck or commercial advantage are we unlocking?",
      focus: "Scoping, unit economics audit, and user friction mapping before writing any code.",
      deliverable: "Commercial Architecture Brief & Fixed Milestones",
      canvas: {
        badge: "PHASE 01 // DISCOVERY AUDIT",
        graphicTitle: "Problem Crystallization",
        metric: "100%",
        metricLabel: "Clarity on Unit Economics",
        elements: [
          { label: "Target Audience", value: "High-Intent Buyers & Enterprise Teams" },
          { label: "Core Commercial Friction", value: "Slow legacy checkout / Manual spreadsheet entry" },
          { label: "Predictable Timeline", value: "Fixed 6–10 Week Sprint Roadmap" }
        ]
      }
    },
    {
      id: "strategy",
      step: "02",
      name: "Strategy",
      title: "Technical Blueprint",
      subtitle: "Data modeling, cloud routing & API design",
      icon: Compass,
      accent: "#38BDF8",
      question: "How should data flow for zero latency and infinite scale?",
      focus: "Choosing battle-tested architectures (Next.js, PostgreSQL, Cloudflare Edge) with zero vendor lock-in.",
      deliverable: "Domain Model & API Contract Specification",
      canvas: {
        badge: "PHASE 02 // ARCHITECTURE CONTRACT",
        graphicTitle: "Edge Data Topology",
        metric: "< 50ms",
        metricLabel: "Global Edge Routing Latency",
        elements: [
          { label: "Database Foundation", value: "PostgreSQL with strict relational schema" },
          { label: "API Protocol", value: "Strictly-typed REST & Server Actions" },
          { label: "Cloud Hosting", value: "Multi-region CDN & Serverless Compute" }
        ]
      }
    },
    {
      id: "design",
      step: "03",
      name: "Design Craft",
      title: "Interactive Prototype",
      subtitle: "Figma design tokens & tactile user physics",
      icon: Palette,
      accent: "#818CF8",
      question: "Does every tap, click, and transition feel effortless?",
      focus: "Clickable Figma prototypes, WCAG AA contrast, and design tokens that reflect your exact brand essence.",
      deliverable: "Interactive Clickable Prototype & Token System",
      canvas: {
        badge: "PHASE 03 // HUMAN EXPERIENCE",
        graphicTitle: "Figma Prototype Validation",
        metric: "60 FPS",
        metricLabel: "Smooth Microinteractions",
        elements: [
          { label: "Design System", value: "Unified Token Palette (Dark & Light)" },
          { label: "Usability Validation", value: "Zero guesswork before code is committed" },
          { label: "Accessibility", value: "Strict WCAG 2.2 AA Contrast Compliance" }
        ]
      }
    },
    {
      id: "engineering",
      step: "04",
      name: "Engineering",
      title: "Clean Production Code",
      subtitle: "TypeScript, automated tests & weekly demos",
      icon: Cpu,
      accent: "#34D399",
      question: "Is the software strictly typed, resilient, and fast?",
      focus: "Senior architects write modular Next.js and Flutter code. You test live staging builds every Friday.",
      deliverable: "Weekly Working Staging URL & Verified Test Suites",
      canvas: {
        badge: "PHASE 04 // ENGINEERING RIGOR",
        graphicTitle: "Staging Build Telemetry",
        metric: "0.82s",
        metricLabel: "Verified Largest Contentful Paint",
        elements: [
          { label: "Weekly Staging", value: "Test live builds on actual phones & browsers" },
          { label: "Code Integrity", value: "Strict TypeScript + Automated CI/CD suites" },
          { label: "Direct Access", value: "Communicate directly with senior engineers" }
        ]
      }
    },
    {
      id: "product",
      step: "05",
      name: "Living Product",
      title: "Worldwide Launch",
      subtitle: "Zero downtime deployment & 100% IP transfer",
      icon: Rocket,
      accent: "#F472B6",
      question: "Does the product compound revenue and brand authority?",
      focus: "Worldwide edge release, AI search schema indexing, sub-1.2s speed guarantee, and complete Git transfer.",
      deliverable: "Live Production Release & Full IP Ownership",
      canvas: {
        badge: "PHASE 05 // PRODUCTION LAUNCH",
        graphicTitle: "Commercial Compound Stage",
        metric: "100%",
        metricLabel: "Client IP & Repository Keys Transferred",
        elements: [
          { label: "Global Edge Release", value: "Sub-second load times across 200+ edge nodes" },
          { label: "Search Visibility", value: "Structured JSON-LD for Google & AI search engines" },
          { label: "Zero Vendor Lock-In", value: "You hold all cloud keys, domains, and code" }
        ]
      }
    }
  ];

  const current = stages[activeStep];
  const IconComponent = current.icon;

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative overflow-hidden" id="transformation">
      {/* Ambient Volumetric Backdrop */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: current.accent }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-[#00F2FE] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>THE TRANSFORMATION ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            How an idea becomes a living digital product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We don&apos;t leave launches to chance. Here is the exact transformation pipeline that turns abstract vision into high-performing production software.
          </p>
        </div>

        {/* The Continuous Transformation Stepper Rail */}
        <div className="mb-12">
          {/* Progress Bar Line */}
          <div className="relative mb-6">
            <div className="h-1 w-full bg-white/[0.08] rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-500 ease-out rounded-full"
                style={{ 
                  width: `${((activeStep + 1) / stages.length) * 100}%`,
                  backgroundColor: current.accent
                }}
              />
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {stages.map((st, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;
              const StepIcon = st.icon;

              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-300 relative group ${
                    isActive
                      ? "satin-surface border-white/[0.2] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                      : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-white" : isPassed ? "text-white/70" : "text-[#94A3B8]"
                      }`}
                    >
                      {st.step}
                    </span>
                    <StepIcon 
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "" : "text-[#94A3B8] group-hover:text-white"
                      }`}
                      style={{ color: isActive ? st.accent : undefined }}
                    />
                  </div>

                  <span className={`block text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                    isActive ? "text-white" : "text-[#CBD5E1]"
                  }`}>
                    {st.name}
                  </span>
                  
                  <span className="block text-[11px] text-[#94A3B8] mt-0.5 truncate">
                    {st.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Continuous Transformation Odyssey Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] mb-12 shadow-2xl group">
          <img 
            src="/images/process-journey.jpg" 
            alt="NovaCrest Transformation Odyssey: Spark to Global Scale" 
            className="w-full h-48 sm:h-64 lg:h-72 object-cover object-center brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
          />
          {/* Luminous Specular Flare Points */}
          <div className="absolute top-6 right-12 flex items-center justify-center pointer-events-none">
            <span className="w-10 h-10 rounded-full bg-[#00F2FE]/40 blur-md animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#00F2FE]" />
            <div className="absolute w-14 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <div className="absolute top-1/3 left-1/4 flex items-center justify-center pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-200 shadow-[0_0_8px_#ffffff]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060709]/60 via-transparent to-[#060709]/60 pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl material-liquid-glass">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F2FE] font-bold block mb-1">
                TRANSFORMATION CONTINUUM // SPARK → SCALE
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white">
                One unbroken trajectory from the raw spark of an idea to worldwide mission-critical scale.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-white/90">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
              <span>Currently In: Stage {current.step} ({current.name})</span>
            </div>
          </div>
        </div>

        {/* The Transformation Stage Viewport Canvas */}
        <div className="satin-surface rounded-3xl p-6 sm:p-10 border border-white/[0.1] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/90">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
                <span>STAGE {current.step} OF 05</span>
                <span className="text-[#94A3B8]">•</span>
                <span className="text-[#CBD5E1] uppercase">{current.name}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base font-medium mt-1" style={{ color: current.accent }}>
                  {current.subtitle}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                  Core Architectural Focus:
                </span>
                <p className="text-sm text-white font-medium">
                  &ldquo;{current.question}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                  {current.focus}
                </p>
              </div>

              {/* Tangible Deliverable Milestone */}
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-2">
                  Tangible Handover Milestone:
                </span>
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{current.deliverable}</span>
                </div>
              </div>

              {/* Stepper Navigation Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#94A3B8] hover:text-white bg-white/[0.03] border border-white/[0.06] transition-colors"
                >
                  ← Previous Stage
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] transition-colors flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs font-mono text-[#94A3B8] ml-auto">
                  {activeStep + 1} / {stages.length}
                </span>
              </div>
            </div>

            {/* Right Interactive Artifact Canvas (6 Cols) */}
            <div className="lg:col-span-6">
              <div className="browser-frame satin-surface p-1 shadow-2xl">
                
                {/* Header Frame */}
                <div className="browser-header">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                  </div>
                  <div className="flex-1 max-w-xs mx-auto">
                    <div className="h-5 rounded-full bg-white/[0.04] text-[10px] text-[#94A3B8] flex items-center justify-center font-mono">
                      stage-{current.id}.novacrest.tech
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
                </div>

                {/* Stage Canvas Content */}
                <div className="p-6 bg-[#080B10]/95 min-h-[300px] flex flex-col justify-between">
                  
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-[#94A3B8]">
                        {current.canvas.badge}
                      </span>
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#00F2FE]" />
                        Active Sprint State
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white tracking-tight mb-4">
                      {current.canvas.graphicTitle}
                    </h4>

                    {/* Breakdown Element List */}
                    <div className="space-y-2.5">
                      {current.canvas.elements.map((el) => (
                        <div 
                          key={el.label}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs"
                        >
                          <span className="text-[#94A3B8]">{el.label}</span>
                          <span className="text-white font-medium text-right ml-2">{el.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Stat Pill */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">
                        Verified Benchmark
                      </span>
                      <span className="text-xs text-white font-medium">
                        {current.canvas.metricLabel}
                      </span>
                    </div>
                    <span className="text-xl font-bold font-mono" style={{ color: current.accent }}>
                      {current.canvas.metric}
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
