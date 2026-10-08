import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { SERVICES_DATA } from "@/lib/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSchema } from "@/components/seo/SchemaMarkup";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Terminal,
  Laptop,
  Smartphone,
  Cpu,
  Search,
  Code2,
  TrendingUp,
  Workflow
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: `${service.title} Services | NovaCrest Technologies`,
    description: service.shortDesc,
    canonicalUrl: `/services/${service.slug}`,
    keywords: [
      service.title,
      `${service.title} company`,
      `${service.title} services`,
      "NovaCrest Technologies",
      ...service.techStack
    ]
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Determine visual device preview mode based on service slug/category
  const isMobile = service.slug === "mobile-app-development";
  const isAutomationOrTech = service.slug === "business-automation" || service.slug === "custom-software-development" || service.slug === "software-development" || service.slug === "ai-development";
  const isGrowth = service.slug === "technical-seo-optimization" || service.slug === "seo" || service.slug === "digital-marketing";

  const disciplineImageMap: Record<string, string> = {
    "web-development": "/images/service-web-dev.jpg",
    "mobile-app-development": "/images/service-mobile-dev.jpg",
    "software-development": "/images/service-software-tech.jpg",
    "ui-ux-design": "/images/service-ui-ux.jpg",
    "seo": "/images/service-seo-growth.jpg",
    "digital-marketing": "/images/service-marketing.jpg",
    "ecommerce-development": "/images/service-automation.jpg",
    "ai-development": "/images/service-software-tech.jpg",
  };
  const currentDisciplineImage = disciplineImageMap[service.slug] || "/images/service-web-dev.jpg";

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] ambient-glow-blend pointer-events-none -z-10" />

      <ServiceSchema
        name={service.title}
        description={service.fullDesc}
        url={`https://novacrest.tech/services/${service.slug}`}
      />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title, href: `/services/${service.slug}` }
          ]}
        />

        {/* Hero Section & Visual Preview Spread */}
        <section className="pt-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.badge}</span>
                <span className="text-white/20">•</span>
                <span>{service.category}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight display-headline leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-[#00F2FE] leading-snug">
                {service.outcomeHeadline}
              </p>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#07080B] bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] hover:from-[#38f6ff] hover:to-[#60a5fa] transition-all text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:-translate-y-0.5"
                >
                  {service.ctaLabel}
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-[#111622]/80 border border-white/[0.12] hover:bg-[#161D2C] hover:border-white/[0.25] transition-all text-xs"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right Column: Discipline-Specific Architectural Preview Frame */}
            <div className="lg:col-span-5">
              {isMobile ? (
                /* Mobile Device Frame Showcase */
                <div className="flex justify-center">
                  <div className="mobile-frame w-[290px] h-[520px] p-2 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="mobile-notch" />
                    
                    <div className="relative h-48 overflow-hidden rounded-2xl group my-1">
                      <img 
                        src={currentDisciplineImage} 
                        alt={`${service.title} Mobile Screen`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full material-liquid-glass text-[9px] font-mono text-emerald-400 font-bold">
                        60 FPS Native
                      </div>
                    </div>

                    <div className="flex-1 px-3 py-2 flex flex-col justify-between">
                      <div>
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-2">
                          <div className="text-[10px] text-[#94A3B8] uppercase">Active Session</div>
                          <div className="text-xs font-bold text-white mt-0.5">Biometric Authenticated</div>
                          <div className="text-[10px] text-[#00F2FE] mt-0.5">Cross-platform iOS & Android</div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-[11px]">
                            <span className="text-[#94A3B8]">Offline Sync</span>
                            <span className="text-emerald-400 font-mono">Instant</span>
                          </div>
                          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-[11px]">
                            <span className="text-[#94A3B8]">Crash Rate</span>
                            <span className="text-emerald-400 font-mono">&lt; 0.01%</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-center mt-2">
                        <div className="text-[11px] font-semibold text-[#00F2FE]">App Store Ready</div>
                        <div className="text-[9px] text-[#94A3B8]">Automated CI/CD Test Builds</div>
                      </div>
                    </div>

                    <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mb-1" />
                  </div>
                </div>
              ) : isAutomationOrTech ? (
                /* Systems & Automation Terminal Blueprint */
                <div className="browser-frame shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/[0.12] overflow-hidden">
                  <div className="browser-header flex items-center justify-between px-4 py-3 bg-[#080B10] border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-[#94A3B8]">
                      engine.novacrest.tech/pipeline
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>

                  <div className="relative h-44 sm:h-52 overflow-hidden group">
                    <img 
                      src={currentDisciplineImage} 
                      alt={`${service.title} Architecture`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full material-liquid-glass text-[9px] font-mono text-white/90 border border-white/10">
                      Production Architecture
                    </div>
                  </div>

                  <div className="p-5 bg-[#080B10]/95 space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] text-[#94A3B8] uppercase">Workflow Trigger</div>
                      <div className="text-white text-xs mt-1">Webhook Event → Multi-step sync</div>
                      <div className="text-emerald-400 text-[11px] mt-1">0 manual intervention</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] text-[#94A3B8] uppercase">Data Pipeline Throughput</div>
                      <div className="text-white text-xs mt-1">12,500 operations / minute</div>
                      <div className="text-emerald-400 text-[11px] mt-1">99.99% uptime SLA</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#00F2FE]/5 border border-[#00F2FE]/20 flex items-center justify-between">
                      <span className="text-white text-xs">Audit Logging</span>
                      <span className="text-[#00F2FE] text-xs">Full Trail Retained</span>
                    </div>
                  </div>
                </div>
              ) : isGrowth ? (
                /* Search Engine & Discovery Blueprint */
                <div className="browser-frame shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/[0.12] overflow-hidden">
                  <div className="browser-header flex items-center justify-between px-4 py-3 bg-[#080B10] border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-[#94A3B8]">
                      search-console.novacrest.tech
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">100% Crawlable</span>
                  </div>

                  <div className="relative h-44 sm:h-52 overflow-hidden group">
                    <img 
                      src={currentDisciplineImage} 
                      alt={`${service.title} Architecture`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full material-liquid-glass text-[9px] font-mono text-white/90 border border-white/10">
                      Growth Telemetry
                    </div>
                  </div>

                  <div className="p-5 bg-[#080B10]/95 space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-[#94A3B8] uppercase">AI Overview Index</div>
                        <div className="text-white text-xs font-bold mt-0.5">Semantic JSON-LD Valid</div>
                      </div>
                      <span className="text-emerald-400 font-bold">100%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] text-[#94A3B8] uppercase">Answer Engine Discovery</div>
                      <div className="text-white text-xs mt-1">Google, ChatGPT & Perplexity Optimized</div>
                      <div className="text-emerald-400 text-[11px] mt-1">Zero orphan pages</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#00F2FE]/5 border border-[#00F2FE]/20 flex items-center justify-between">
                      <span className="text-white text-xs">PageSpeed Index</span>
                      <span className="text-[#00F2FE] text-xs">98 / 100 Mobile</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Default Web / SaaS Desktop Browser Showcase */
                <div className="browser-frame shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/[0.12] overflow-hidden">
                  <div className="browser-header flex items-center justify-between px-4 py-3 bg-[#080B10] border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-[#94A3B8]">
                      app.novacrest.tech/{service.slug}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">LCP 0.8s</span>
                  </div>

                  <div className="relative h-44 sm:h-52 overflow-hidden group">
                    <img 
                      src={currentDisciplineImage} 
                      alt={`${service.title} Architecture`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full material-liquid-glass text-[9px] font-mono text-white/90 border border-white/10">
                      Interactive Blueprint
                    </div>
                  </div>

                  <div className="p-5 bg-[#080B10]/95 space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-[#94A3B8] uppercase">Conversion Funnel</div>
                        <div className="text-white text-xs font-bold mt-0.5">Optimized Checkout Flow</div>
                      </div>
                      <span className="text-emerald-400 font-bold">+34% Lift</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                        <div className="text-[#94A3B8] text-[10px]">Edge Caching</div>
                        <div className="text-white font-medium text-xs">Cloudflare CDN</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                        <div className="text-[#94A3B8] text-[10px]">Type Safety</div>
                        <div className="text-white font-medium text-xs">100% TypeScript</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#00F2FE]/5 border border-[#00F2FE]/20 flex items-center justify-between">
                      <span className="text-white text-xs">Core Web Vitals</span>
                      <span className="text-[#00F2FE] text-xs">100 / 100 Desktop</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features & Deliverables Grid */}
        <section className="py-20 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#00F2FE] uppercase tracking-wider block mb-2 font-semibold">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What we build for you in this discipline.
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
              Included in our sprint scopes, engineered without brittle shortcuts or hidden technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {service.features.map((feat) => (
              <div
                key={feat}
                className="satin-surface rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between hover:border-[#00F2FE]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-white font-semibold text-base mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00F2FE] shrink-0" />
                    <span>{feat}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Designed for peak real-world load, minimal network latency, and strict accessibility standards.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tangible Deliverables & Business Impact Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="satin-surface rounded-3xl p-8 sm:p-10 border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE]">
                  <Layers className="w-5 h-5" />
                </div>
                Concrete Production Deliverables
              </h3>
              <ul className="space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="text-xs sm:text-sm text-[#94A3B8] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] mt-2 shrink-0" />
                    <span className="text-[#CBD5E1]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="satin-surface rounded-3xl p-8 sm:p-10 border border-emerald-400/20 bg-gradient-to-b from-[#09151D]/60 to-[#0A0D14]/80">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                Real Commercial Return
              </h3>
              <ul className="space-y-4">
                {service.businessImpact.map((impact) => (
                  <li key={impact} className="text-xs sm:text-sm text-[#94A3B8] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span className="text-[#CBD5E1]">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack Adoption */}
        <section className="py-16 border-t border-white/[0.08]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-[#00F2FE] uppercase tracking-wider block mb-2 font-semibold">
              Battle-Tested Foundations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Selected stack for {service.title}.
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
              Chosen strictly for security, high developer ergonomics, and rock-solid ecosystem support.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2.5 rounded-xl bg-[#080B10] border border-white/[0.08] text-xs font-mono text-white/90 hover:border-[#00F2FE]/40 hover:text-[#00F2FE] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <FAQSection
          title={`Questions about our ${service.title} sprints?`}
          subtitle={`Straightforward answers on timelines, team handover, and IP ownership for ${service.title}.`}
          faqs={service.faqs}
        />

        {/* CTA */}
        <CTASection
          title={`Ready to start your ${service.title.toLowerCase()} sprint?`}
          description="Tell us what you're trying to build. We'll provide a clear, itemized proposal and realistic timeline without sales pressure."
          primaryBtnText={service.ctaLabel}
        />
      </div>
    </div>
  );
}
