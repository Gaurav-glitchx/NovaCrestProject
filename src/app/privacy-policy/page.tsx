import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "NovaCrest Technologies privacy policy detailing our strict data protection, security principles, and user privacy commitments.",
  canonicalUrl: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

      <div className="pt-6 pb-12 border-b border-white/[0.08] mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">Legal Notice</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
          PRIVACY POLICY
        </h1>
        <p className="text-xs font-mono text-[#94A3B8]">Effective Date: October 2026 • NovaCrest Technologies (novacrest.tech)</p>
      </div>

      <div className="space-y-8 text-sm text-[#94A3B8] leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Information We Collect</h2>
          <p>
            When you submit an inquiry through novacrest.tech, we collect business contact information you explicitly provide (such as your name, corporate email address, telephone number, company affiliation, and project scope details). We do not collect sensitive personal data or sell personal information to third-party data brokers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. How We Use Collected Information</h2>
          <p>
            Information provided via contact forms is utilized exclusively to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>Analyze technical project requirements and prepare scoping estimates.</li>
            <li>Coordinate technical discovery calls and mutual Non-Disclosure Agreements (NDAs).</li>
            <li>Communicate project deliverables, architecture specifications, and support updates.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Data Security & Storage</h2>
          <p>
            NovaCrest employs industry-standard encryption protocols (TLS/SSL in transit, AES-256 at rest) and strict access controls. Only authorized engineering and technical leads assigned to your evaluation have access to project briefing documentation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Third-Party Analytics & Cookies</h2>
          <p>
            Our website uses minimal, privacy-conscious performance telemetry to measure Core Web Vitals, page load speeds, and technical crawlability. We do not engage in invasive cross-site tracking or profiling.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Your Data Rights & Contact</h2>
          <p>
            You have the right to request deletion, review, or modification of any contact information previously submitted. For data inquiries, contact us via email at <span className="text-white font-mono">contact@novacrest.tech</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
