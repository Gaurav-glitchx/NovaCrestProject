import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { SOLUTIONS_DATA } from "@/lib/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Rocket,
  Building2,
  ShoppingBag,
  Cpu,
  Clock,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Terminal,
  Zap
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Targeted Solutions & Growth Playbooks | NovaCrest",
  description: "Outcome-driven engineering solutions for startup MVPs, system modernization, digital transformation, and high-conversion e-commerce.",
  canonicalUrl: "/solutions"
});

export default function SolutionsPage() {
  const playbookIcons: Record<string, React.ElementType> = {
    startups: Rocket,
    enterprise: Building2,
    ecommerce: ShoppingBag,
    "digital-transformation": Workflow
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] ambient-glow-blend pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }]} />

        {/* Editorial Header */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Business & Product Playbooks</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight display-headline mb-6">
            Solutions shaped around where your company is heading.
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            Whether you need to ship a venture-ready MVP to paying clients in 6 weeks or dismantle 
            an operational bottleneck that burns hundreds of staff hours every month, our playbooks 
            are designed around concrete commercial milestones. No guessing, no scope creep.
          </p>
        </section>

        {/* Playbook Stream */}
        <div className="space-y-16 mb-28">
          {SOLUTIONS_DATA.map((sol, index) => {
            const Icon = playbookIcons[sol.slug] || Cpu;
            const isEven = index % 2 === 1;

            return (
              <div
                key={sol.slug}
                className="satin-surface rounded-3xl p-8 sm:p-12 border border-white/[0.08] hover:border-[#00F2FE]/30 transition-all duration-300 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              >
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#080B10] text-[#00F2FE] border border-white/[0.08]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00F2FE] block font-semibold">
                        Strategic Playbook #{index + 1}
                      </span>
                      <span className="text-xs text-[#94A3B8]">
                        Designed for: {sol.targetAudience}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[#94A3B8] border border-white/[0.06] w-fit">
                    Production Deployed Architecture
                  </span>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
                  {/* Left Column: Problem & Strategic Pillars */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                        {sol.title}
                      </h2>
                      <p className="text-sm sm:text-base font-medium text-[#00F2FE]/90">
                        {sol.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {sol.overview}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      {sol.keyPillars.map((pillar) => (
                        <div
                          key={pillar.title}
                          className="p-4 rounded-xl bg-[#080B10]/80 border border-white/[0.06]"
                        >
                          <h3 className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                            {pillar.title}
                          </h3>
                          <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Architectural Playbook Preview Frame */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="browser-frame p-5 bg-[#080B10]/95 border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          playbook.novacrest.tech/{sol.slug}
                        </span>
                      </div>

                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[10px] uppercase text-[#94A3B8] mb-1">Standard Sprint Velocity</div>
                          <div className="text-white text-xs font-semibold">4–8 Weeks to Production Release</div>
                          <div className="text-emerald-400 text-[10px] mt-0.5">Weekly working sprint demos</div>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[10px] uppercase text-[#94A3B8] mb-1">Core Deliverables Pack</div>
                          <div className="space-y-1">
                            {sol.deliverables.slice(0, 2).map((d) => (
                              <div key={d} className="text-white text-[11px] flex items-center gap-2">
                                <span className="text-emerald-400">✓</span>
                                <span className="truncate">{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#00F2FE]/5 border border-[#00F2FE]/15 flex items-center justify-between text-[11px]">
                          <span className="text-[#94A3B8]">IP Guarantee</span>
                          <span className="text-[#00F2FE]">100% Client Retained</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Deliverables & CTA Action */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2 text-xs text-[#94A3B8]">
                    {sol.deliverables.map((d) => (
                      <span
                        key={d}
                        className="px-3.5 py-1.5 rounded-lg bg-[#080B10] border border-white/[0.06] flex items-center gap-2 text-white/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] text-[#07080B] font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0 shadow-[0_0_20px_rgba(0,242,254,0.25)]"
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <CTASection
          title="Ready to choose the right playbook for your goals?"
          description="Schedule a 30-minute discovery call with a senior engineer. We'll listen to your requirements and outline a concrete milestone roadmap."
          primaryBtnText="Schedule Strategic Discovery →"
        />
      </div>
    </div>
  );
}
