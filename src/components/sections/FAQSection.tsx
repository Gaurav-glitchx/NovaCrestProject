"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQSchema } from "@/components/seo/SchemaMarkup";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  includeSchema?: boolean;
}

export function FAQSection({
  title = "FREQUENTLY ASKED QUESTIONS",
  subtitle = "Clear, direct technical and business answers to common questions about our delivery, pricing, and process.",
  faqs,
  includeSchema = true
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090A0F] relative overflow-hidden" aria-labelledby="faq-heading">
      {includeSchema && <FAQSchema faqs={faqs} />}
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121722] border border-[#00F2FE]/20 text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Factual Clarity & AEO Knowledge</span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-white/[0.08] bg-[#0E1117]/80 backdrop-blur-sm transition-all duration-200 hover:border-white/[0.18] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#00F2FE] rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-md bg-[#121722] text-[#00F2FE] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.04]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
