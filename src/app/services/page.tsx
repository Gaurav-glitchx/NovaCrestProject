import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { SERVICES_DATA } from "@/lib/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import {
  Code2,
  Smartphone,
  Cpu,
  Layers,
  TrendingUp,
  Zap,
  ShoppingBag,
  Bot,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Compass
} from "lucide-react";
import {
  IconWebEngineering,
  IconMobileNative,
  IconCustomSoftware,
  IconProductDesign,
  IconTechnicalSEO,
  IconPerformanceMarketing,
  IconEcommerceSystem,
  IconAIEcosystem
} from "@/components/brand/NovaCrestIcons";

export const metadata = constructMetadata({
  title: "Engineering Disciplines & Studio Capabilities",
  description: "Web development, mobile applications, custom SaaS platforms, UI/UX systems, and technical SEO engineered to solve real business bottlenecks.",
  canonicalUrl: "/services"
});

export default function ServicesIndexPage() {
  const customIconMap: Record<string, React.ElementType> = {
    "web-development": IconWebEngineering,
    "mobile-app-development": IconMobileNative,
    "software-development": IconCustomSoftware,
    "ui-ux-design": IconProductDesign,
    "seo": IconTechnicalSEO,
    "digital-marketing": IconPerformanceMarketing,
    "ecommerce-development": IconEcommerceSystem,
    "ai-development": IconAIEcosystem,
  };

  const serviceImageMap: Record<string, string> = {
    "web-development": "/images/service-web-dev.jpg",
    "mobile-app-development": "/images/service-mobile-dev.jpg",
    "software-development": "/images/service-software-tech.jpg",
    "ui-ux-design": "/images/service-ui-ux.jpg",
    "seo": "/images/service-seo-growth.jpg",
    "digital-marketing": "/images/service-marketing.jpg",
    "ecommerce-development": "/images/service-automation.jpg",
    "ai-development": "/images/service-software-tech.jpg",
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] ambient-glow-blend pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

        {/* Editorial Header */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Capabilities & Disciplines</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight display-headline mb-6">
            Software and growth systems built for real results.
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            From customer-facing digital flagships and cross-platform mobile apps to bespoke software 
            that automates complex back-office operations, we build technology that makes businesses 
            easier to discover, run, and scale. No technical debt, no bloated templates.
          </p>
        </section>

        {/* Architectural Pillars Summary Bar */}
        <div className="satin-surface rounded-2xl p-6 sm:p-8 mb-20 border border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Sub-Second Execution</div>
              <div className="text-[#94A3B8] text-xs">Targeting Core Web Vitals LCP &lt; 1.2s</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">100% Perpetual IP</div>
              <div className="text-[#94A3B8] text-xs">Total client ownership of repos & cloud assets</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Direct Architect Access</div>
              <div className="text-[#94A3B8] text-xs">Zero account manager game of telephone</div>
            </div>
          </div>
        </div>

        {/* Editorial Capability Directory */}
        <div className="space-y-12 mb-28">
          {SERVICES_DATA.map((service, index) => {
            const Icon = customIconMap[service.id] || IconWebEngineering;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="satin-surface rounded-3xl p-8 sm:p-12 border border-white/[0.08] hover:border-[#00F2FE]/30 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Narrative Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#080B10] text-[#00F2FE] border border-white/[0.08]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00F2FE] font-semibold">
                        {service.badge}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-xs text-[#94A3B8] font-mono">
                        {service.category}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#00F2FE] transition-colors mb-2">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base font-medium text-[#00F2FE]/90">
                        {service.outcomeHeadline}
                      </p>
                    </div>

                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                        Engineered Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                        {service.features.slice(0, 4).map((feat) => (
                          <div key={feat} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct link & Action */}
                    <div className="pt-4 flex items-center gap-6">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] text-[#07080B] font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,242,254,0.25)]"
                      >
                        <span>Explore Discipline Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="text-xs text-[#94A3B8] hover:text-white transition-colors"
                      >
                        Inquire for this sprint →
                      </Link>
                    </div>
                  </div>

                  {/* Right Visual Snapshot Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="browser-frame p-1 bg-[#080B10]/95 border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden">
                      <div className="browser-header px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          novacrest/{service.slug}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#00F2FE]" />
                      </div>

                      {/* 8K Discipline Render Image */}
                      <div className="relative h-44 sm:h-52 overflow-hidden group">
                        <img 
                          src={serviceImageMap[service.slug] || "/images/service-web-dev.jpg"} 
                          alt={`${service.title} Architecture Visual`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full material-liquid-glass text-[9px] font-mono text-white/90 border border-white/10">
                          Verified Architecture
                        </div>
                      </div>

                      <div className="p-4 space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[10px] uppercase text-[#94A3B8] mb-1">Target Business Value</div>
                          <div className="text-white text-xs font-sans leading-snug">
                            {service.businessImpact[0] || "Proven measurable lift in conversion and speed."}
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[10px] uppercase text-[#94A3B8] mb-1.5">Selected Stack</div>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-white/80 border border-white/[0.06]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#00F2FE]/5 border border-[#00F2FE]/15 flex items-center justify-between text-[11px]">
                          <span className="text-[#94A3B8]">Delivery Framework</span>
                          <span className="text-[#00F2FE]">Standard 2-4 Week Sprints</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <CTASection
          title="Have a custom requirement not listed here?"
          description="We routinely architect custom multi-system integrations, data migration pipelines, and proprietary internal tools. Let's discuss your scope."
          primaryBtnText="Discuss Custom Scope →"
        />
      </div>
    </div>
  );
}
