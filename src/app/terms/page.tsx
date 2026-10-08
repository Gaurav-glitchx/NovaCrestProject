import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: "Terms and conditions governing consulting, engineering delivery, and intellectual property ownership with NovaCrest Technologies.",
  canonicalUrl: "/terms"
});

export default function TermsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />

      <div className="pt-6 pb-12 border-b border-white/[0.08] mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE]">Legal Terms</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
          TERMS OF SERVICE
        </h1>
        <p className="text-xs font-mono text-[#94A3B8]">Effective Date: October 2026 • NovaCrest Technologies (novacrest.tech)</p>
      </div>

      <div className="space-y-8 text-sm text-[#94A3B8] leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing novacrest.tech or engaging NovaCrest Technologies for digital engineering, design, or marketing solutions, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Intellectual Property Ownership</h2>
          <p>
            NovaCrest operates under a transparent work-for-hire model. Upon complete fulfillment of contractual milestones and agreed payments, 100% of all custom source code, documentation, assets, and design files produced specifically for the client become the sole intellectual property of the client.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Confidentiality & Non-Disclosure</h2>
          <p>
            Both parties agree to protect proprietary technical, commercial, and operational information disclosed during project discovery, architecture scoping, and ongoing sprint delivery.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Limitation of Liability</h2>
          <p>
            NovaCrest Technologies delivers software built to industry-standard security and quality best practices. All warranties, deliverables, and service guarantees are explicitly governed by the formal Master Services Agreement (MSA) and Statement of Work (SOW) executed between parties.
          </p>
        </section>
      </div>
    </div>
  );
}
