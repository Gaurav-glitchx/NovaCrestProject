"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, ShieldAlert } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Development",
    budget: "$10,000 - $25,000",
    timeline: "Within 1-2 months",
    message: "",
    honeypot: "" // Anti-spam bot trap
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Bot filled hidden field
      return;
    }
    
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send inquiry. Please try again or email hello@novacrest.tech.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please email hello@novacrest.tech directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-12 text-center backdrop-blur-md">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-5 border border-emerald-500/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Project Request Received</h3>
        <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
          Thanks for reaching out to NovaCrest Technologies. Our technical engineering lead will review your requirements and reach out within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "Web Development",
              budget: "$10,000 - $25,000",
              timeline: "Within 1-2 months",
              message: "",
              honeypot: ""
            });
          }}
          className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#121722] text-white border border-white/[0.1] hover:bg-white/[0.05] transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field (hidden from users, traps automated scrapers) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
            Your Name <span className="text-[#00F2FE]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
            Business Email <span className="text-[#00F2FE]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="service" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
            Primary Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
          >
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Custom Software">Custom Software</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Technical SEO">Technical SEO & AEO</option>
            <option value="Performance Marketing">Performance Marketing</option>
            <option value="E-Commerce Engineering">E-Commerce Engineering</option>
            <option value="AI & Automation">AI & Automation</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
            Budget Range (USD)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
          >
            <option value="< $10,000">&lt; $10,000 (Sprint MVP)</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000 (Standard)</option>
            <option value="$25,000 - $60,000">$25,000 - $60,000 (Scale)</option>
            <option value="$60,000+">$60,000+ (Enterprise)</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
          >
            <option value="Immediate (1-3 weeks)">Immediate (1-3 weeks)</option>
            <option value="Within 1-2 months">Within 1-2 months</option>
            <option value="Q3/Q4 Planning">Planning / Exploration</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider">
          Project Overview & Scope Details <span className="text-[#00F2FE]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your current system, project goals, challenges, or target launch date..."
          className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/[0.1] text-white text-sm placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors resize-y"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMessage || "An error occurred while submitting. Please try again or email hello@novacrest.tech."}</span>
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#090A0F] bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] hover:from-[#38f6ff] hover:to-[#60a5fa] transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.25)] text-sm uppercase tracking-wider cursor-pointer disabled:opacity-70"
        >
          {status === "submitting" ? (
            <span>Transmitting Request...</span>
          ) : (
            <>
              <span>Let&apos;s Build Something Great →</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-[#94A3B8] flex items-center gap-1.5">
        <ShieldAlert className="w-3.5 h-3.5 text-[#00F2FE]" />
        All project inquiries are covered under standard Non-Disclosure Agreement (NDA). We do not share customer data.
      </p>
    </form>
  );
}
