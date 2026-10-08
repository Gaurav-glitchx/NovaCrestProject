import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import {
  Code2,
  Compass,
  Zap,
  Users,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  ArrowRight,
  GitBranch,
  Lock,
  Workflow
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About NovaCrest | Our Culture, Team & Craft",
  description: "Learn how NovaCrest Technologies pairs thoughtful product strategy with disciplined engineering to help ambitious businesses build what's next.",
  canonicalUrl: "/about"
});

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] ambient-glow-blend pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "About NovaCrest", href: "/about" }]} />

        {/* Editorial Hero */}
        <section className="pt-8 pb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Manifesto & Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight display-headline mb-6">
            We build software for teams who refuse to settle.
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            NovaCrest was founded to eliminate the frustration of typical agency engagements: 
            bloated third-party templates, junior engineers hidden behind account reps, and products 
            that fall apart under scale. We operate as an elite engineering and product atelier—senior 
            craftsmen writing clean code for businesses that value speed, precision, and longevity.
          </p>
        </section>

        {/* Human Collaboration & Vision Visual Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl mb-24 group">
          <img 
            src="/images/who-we-are.jpg" 
            alt="NovaCrest Human Collaboration & Deep Engineering" 
            className="w-full h-72 sm:h-96 md:h-[480px] object-cover object-center brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
          />
          {/* Specular Flare Light Points */}
          <div className="absolute top-6 right-10 flex items-center justify-center pointer-events-none">
            <span className="w-10 h-10 rounded-full bg-[#00F2FE]/40 blur-md animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#00F2FE]" />
            <div className="absolute w-14 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl material-liquid-glass">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F2FE] font-bold block mb-1">
                WHO WE ARE // THE HUMAN CATALYST
              </span>
              <p className="text-sm font-semibold text-white">
                The symbiosis of human imagination, creative psychology, and disciplined software engineering.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Human-Led Craft</span>
            </div>
          </div>
        </div>

        {/* The Direct Contrast: Traditional Agencies vs NovaCrest Atelier */}
        <section className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#00F2FE] uppercase tracking-wider block mb-2 font-semibold">
              The Fundamental Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why leading founders choose our engineering model.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Agency Trap */}
            <div className="satin-surface rounded-3xl p-8 sm:p-10 border border-red-500/15 bg-gradient-to-b from-[#120B0F]/60 to-[#0A0D14]/80">
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.06]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold block mb-1">
                    The Conventional Agency Model
                  </span>
                  <h3 className="text-xl font-bold text-white">How Projects Get Burned</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-5 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">The Account Manager Wall</strong>
                    You communicate requirements through non-technical liaisons who struggle to translate technical feasibility.
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">Template Assembly Lines</strong>
                    Heavy CMS themes and fragile drag-and-drop builders that produce bloated payloads and low Google scores.
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">Hidden Technical Debt</strong>
                    Rushed spaghetti code with zero unit tests, causing downtime as soon as user traffic spikes.
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">Hostage Codebases</strong>
                    Proprietary hosting environments, opaque licensing, and refusal to release clean deployment keys.
                  </div>
                </li>
              </ul>
            </div>

            {/* The NovaCrest Practice */}
            <div className="satin-surface rounded-3xl p-8 sm:p-10 border border-[#00F2FE]/25 bg-gradient-to-b from-[#091522]/80 to-[#0A0D14]/90 shadow-[0_20px_50px_rgba(0,242,254,0.08)]">
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00F2FE] font-semibold block mb-1">
                    The NovaCrest Atelier Standard
                  </span>
                  <h3 className="text-xl font-bold text-white">Engineering Without Compromise</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-5 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">Direct Architect Access</strong>
                    You partner directly with senior product designers and system architects. Every conversation is actionable.
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">Bespoke Modern Stack</strong>
                    Custom Next.js, TypeScript, and serverless edge backends tuned for sub-second load times and zero layout shift.
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">Tested Production Rigor</strong>
                    Complete automated test coverage, strict typing, CI/CD automated deployment, and clean documentation.
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">100% Perpetual IP Ownership</strong>
                    You retain total, unfettered ownership of all GitHub repositories, design Figma files, and cloud infrastructure keys.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Spatial Engineering Workbench Showcase */}
        <section className="mb-28">
          <div className="satin-surface rounded-3xl p-8 sm:p-12 border border-white/[0.09] overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00F2FE] font-semibold block">
                  Studio Operations
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Crafted with mechanical precision.
                </h2>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  We don&apos;t treat software as a series of isolated tasks. We run every build through a synchronized delivery pipeline—combining UX design systems, rigorous type safety, continuous integration, and real-user performance benchmarks.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                    <GitBranch className="w-4 h-4 text-[#00F2FE]" />
                    <span>Trunk-based development with automated staging URLs</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span>Lighthouse score targets of 95+ verified before deployment</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                    <Lock className="w-4 h-4 text-[#3B82F6]" />
                    <span>End-to-end encryption and enterprise security audits</span>
                  </div>
                </div>
              </div>

              {/* Workbench Visual Frame */}
              <div className="lg:col-span-7">
                <div className="browser-frame shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/[0.12]">
                  <div className="browser-header flex items-center justify-between px-4 py-3 bg-[#080B10] border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-[#94A3B8] border border-white/[0.06]">
                      pipeline.novacrest.tech/release-v2.4
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      All Checks Passed
                    </div>
                  </div>

                  <div className="relative h-48 sm:h-56 overflow-hidden border-b border-white/[0.08] group">
                    <img 
                      src="/images/atelier-craft.jpg" 
                      alt="NovaCrest Studio Architects & Craftsmen" 
                      className="w-full h-full object-cover brightness-110 contrast-115 saturate-110 transition-transform duration-700 group-hover:scale-105 block"
                    />
                    {/* Specular Flare Light Point */}
                    <div className="absolute top-3 right-6 flex items-center justify-center pointer-events-none">
                      <span className="w-8 h-8 rounded-full bg-[#F5E6C8]/40 blur-md animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#F5E6C8]" />
                      <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F5E6C8] to-transparent" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] text-[#F5E6C8] uppercase font-bold px-2 py-0.5 rounded bg-black/60 border border-white/10">
                        Senior Engineering Atelier
                      </span>
                      <span className="text-white/80 font-mono text-[10px]">
                        Continuous Delivery Suite
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#080B10]/95 space-y-4 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Terminal className="w-4 h-4 text-[#00F2FE]" />
                        <span className="text-white">Core Web Vitals Suite</span>
                      </div>
                      <div className="flex items-center gap-4 text-[11px]">
                        <span className="text-[#94A3B8]">LCP: <span className="text-emerald-400 font-bold">0.82s</span></span>
                        <span className="text-[#94A3B8]">CLS: <span className="text-emerald-400 font-bold">0.00</span></span>
                        <span className="text-[#94A3B8]">INP: <span className="text-emerald-400 font-bold">34ms</span></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="text-[#94A3B8] text-[11px] mb-1">Architecture Build</div>
                        <div className="text-white font-medium">Next.js 16 + React 19 Engine</div>
                        <div className="text-emerald-400 text-[10px] mt-1">Zero hydration mismatches</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="text-[#94A3B8] text-[11px] mb-1">Search & Schema Validation</div>
                        <div className="text-white font-medium">100% Valid Rich Results</div>
                        <div className="text-emerald-400 text-[10px] mt-1">AI search index ready</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#00F2FE]/5 border border-[#00F2FE]/20 flex items-center justify-between">
                      <span className="text-white text-xs">Continuous Client Review</span>
                      <span className="text-[#00F2FE] text-xs">Live Staging Preview Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Craftsman Principles */}
        <section className="mb-28">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-[#00F2FE] uppercase tracking-wider block mb-2 font-semibold">
              The Three Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our non-negotiable principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="satin-surface rounded-3xl p-8 sm:p-9 border border-white/[0.08] hover:border-[#00F2FE]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#00F2FE]/10 text-[#00F2FE] flex items-center justify-center mb-6 border border-[#00F2FE]/20">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Rigorous Architecture</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We write strictly typed, resilient software. We don&apos;t build fragile dependencies that collapse during updates. Every database query, API route, and state transition is optimized for sub-second execution.
              </p>
            </div>

            <div className="satin-surface rounded-3xl p-8 sm:p-9 border border-white/[0.08] hover:border-[#3B82F6]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mb-6 border border-[#3B82F6]/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Human-First Design</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Design is not superficial skin; it is the logic of how users navigate and convert. We craft clear visual hierarchies, tactile feedback, and seamless checkout funnels that turn visitors into long-term accounts.
              </p>
            </div>

            <div className="satin-surface rounded-3xl p-8 sm:p-9 border border-white/[0.08] hover:border-emerald-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-400/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Commercial Impact</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Code must translate to revenue and operational efficiency. We embed high-intent search visibility, automation hooks, and analytics observability into every deployment from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Leadership & Discipline Roles */}
        <section className="mb-28">
          <div className="satin-surface rounded-3xl p-8 sm:p-12 border border-white/[0.08]">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-mono text-[#00F2FE] uppercase tracking-wider block mb-2 font-semibold">
                Direct Engineering Collaboration
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Who you collaborate with every week.
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                No middle managers translating messages. You work directly with specialists who own the product architecture end to end.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  role: "Systems & Cloud Architects",
                  desc: "Design scalable edge infrastructure, zero-trust security layers, and resilient database schemas.",
                  tag: "Infrastructure"
                },
                {
                  role: "Frontend Engineers",
                  desc: "Craft high-performance user interfaces in Next.js and React with sub-second page transitions.",
                  tag: "Performance"
                },
                {
                  role: "Product & UX Designers",
                  desc: "Structure conversion funnels, intuitive user journeys, and tactile design system tokens.",
                  tag: "Conversion"
                },
                {
                  role: "Search & Growth Engineers",
                  desc: "Optimize technical crawlability, JSON-LD schemas, and answer engine visibility.",
                  tag: "Discovery"
                }
              ].map((member) => (
                <div
                  key={member.role}
                  className="p-6 rounded-2xl bg-[#080B10]/90 border border-white/[0.06] hover:border-[#00F2FE]/30 transition-all duration-300"
                >
                  <span className="text-[11px] font-mono text-[#00F2FE] uppercase tracking-wider block mb-3 font-semibold">
                    {member.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{member.role}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Studio CTA */}
        <CTASection
          title="Ready to partner with an engineering team that cares?"
          description="Book a 30-minute discovery session with a senior architect. We'll analyze your current technical roadmap and outline concrete milestones."
          primaryBtnText="Start Discovery Sprint →"
        />
      </div>
    </div>
  );
}
