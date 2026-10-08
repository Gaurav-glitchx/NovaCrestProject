import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Cookie Policy",
  description: "Information regarding cookie usage and privacy-first telemetry on novacrest.tech.",
  canonicalUrl: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Cookie Policy", href: "/cookie-policy" }]} />

      <div className="pt-6 pb-12 border-b border-white/[0.08] mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">Privacy & Cookies</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
          COOKIE POLICY
        </h1>
        <p className="text-xs font-mono text-[#94A3B8]">Effective Date: October 2026 • NovaCrest Technologies (novacrest.tech)</p>
      </div>

      <div className="space-y-8 text-sm text-[#94A3B8] leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your browser when visiting websites. They facilitate basic site functionality, preferences retention, and performance diagnostics.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. How We Use Cookies</h2>
          <p>
            NovaCrest uses minimal, essential technical cookies strictly for session continuity, theme persistence, and privacy-first aggregated metrics (monitoring Core Web Vitals and crash telemetry). We do not employ third-party tracking cookies across external websites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Managing Cookie Preferences</h2>
          <p>
            You can modify browser settings to block or notify you about cookies. Note that disabling essential cookies may impact certain interface interactions.
          </p>
        </section>
      </div>
    </div>
  );
}
