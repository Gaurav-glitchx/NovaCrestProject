import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Clock, ShieldCheck, Globe, CheckCircle2, Sparkles, MessageSquare, Terminal } from "lucide-react";

export const metadata = constructMetadata({
  title: "Start a Conversation & Project Scoping | NovaCrest",
  description: "Schedule a project consultation with NovaCrest Technologies. Tell us what you're building, and we'll help you map out the smartest path.",
  canonicalUrl: "/contact"
});

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] ambient-glow-blend pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          {/* Left Column: Direct Info & Value Proposition (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Architectural Scoping</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight display-headline leading-tight mb-5">
                Let&apos;s talk about what you need built.
              </h1>
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                Whether you need to build a new product from scratch, fix an existing app that has 
                become slow and unwieldy, or automate manual paperwork, our engineering team is 
                ready to evaluate your scope without sales pressure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="satin-surface rounded-2xl p-6 border border-white/[0.08] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#080B10] text-[#00F2FE] border border-white/[0.06] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Guaranteed 24-Hour Review</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Every inquiry is reviewed directly by a senior engineer—never an aggressive sales rep with a commission quota.
                  </p>
                </div>
              </div>

              <div className="satin-surface rounded-2xl p-6 border border-white/[0.08] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#080B10] text-emerald-400 border border-white/[0.06] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Automatic NDA Protection</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Your business model, internal workflows, and product concepts are kept strictly confidential from the first message.
                  </p>
                </div>
              </div>

              <div className="satin-surface rounded-2xl p-6 border border-white/[0.08] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#080B10] text-[#3B82F6] border border-white/[0.06] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Official Domain & Credentials</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-mono">
                    Official domain: <span className="text-[#00F2FE]">novacrest.tech</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="satin-surface rounded-2xl p-6 border border-white/[0.06] text-xs text-[#94A3B8] space-y-3">
              <p className="font-semibold text-white text-sm">What happens after you reach out?</p>
              <ol className="space-y-2 list-decimal list-inside text-[#94A3B8]">
                <li>We review your technical requirements within 24 hours.</li>
                <li>We schedule a 30-minute discovery call to clarify exact scope and constraints.</li>
                <li>You receive a clear, milestone-based proposal with fixed pricing, sprint dates, and deliverables.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Secure Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="satin-surface rounded-3xl border border-white/[0.1] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Tell us about your project</h2>
                  <p className="text-xs text-[#94A3B8]">
                    Fill in as much detail as you have. We&apos;ll help you clarify the rest.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sprint Slots Open
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
