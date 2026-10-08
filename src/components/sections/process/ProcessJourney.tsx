import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ProcessJourney() {
  const steps = [
    {
      num: "01",
      title: "Discover & Scope",
      duration: "Week 1",
      tagline: "Listen before writing a single line of code.",
      description: "We audit your commercial requirements, user drop-off points, and technical constraints. You receive a clear, fixed-scope architecture proposal with predictable milestones.",
      artifact: "Architecture Specification & Timeline"
    },
    {
      num: "02",
      title: "Architect & Prototype",
      duration: "Weeks 2–3",
      tagline: "Test the exact product experience before building.",
      description: "We design high-fidelity, clickable prototypes in Figma and define database schemas. You click through every screen and flow to validate UX before engineering begins.",
      artifact: "Interactive Figma Prototype"
    },
    {
      num: "03",
      title: "Engineer & Validate",
      duration: "Weeks 4–7",
      tagline: "Clean, strictly typed code delivered with weekly demos.",
      description: "Our senior software team writes modern Next.js, Flutter, and cloud API code covered by automated tests. You test working software on a live staging URL every Friday.",
      artifact: "Weekly Working Staging Builds"
    },
    {
      num: "04",
      title: "Deploy & Compound",
      duration: "Launch & Beyond",
      tagline: "Zero downtime release with 100% IP handover.",
      description: "We deploy to worldwide edge networks, verify sub-second LCP, index structured schemas for AI search engines, and hand over full repository keys and cloud credentials.",
      artifact: "Production Release & Full IP Transfer"
    }
  ];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="process">
      <div className="max-w-3xl mb-20">
        <span className="text-xs font-semibold text-[#00F2FE] tracking-widest uppercase block mb-3">
          Predictable Delivery
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
          From first whiteboard session to live production.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          A disciplined 4-phase engineering journey designed for transparent communication, weekly demos, and predictable launches.
        </p>
      </div>

      {/* Luminous Architectural Journey Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className="satin-surface rounded-3xl p-7 border border-white/[0.08] hover:border-[#00F2FE]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#00F2FE]">
                  PHASE {step.num}
                </span>
                <span className="text-[11px] text-[#94A3B8] px-2.5 py-0.5 rounded-full bg-white/[0.04]">
                  {step.duration}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                {step.title}
              </h3>

              <p className="text-xs font-medium text-[#E2E8F0] mb-3">
                {step.tagline}
              </p>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                {step.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] uppercase font-semibold text-[#94A3B8] block mb-1">
                Tangible Milestone:
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#00F2FE] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{step.artifact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
