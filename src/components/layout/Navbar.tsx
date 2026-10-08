"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  Smartphone, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Zap, 
  ShoppingBag, 
  Bot, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Terminal 
} from "lucide-react";
import { NovaCrestMark } from "@/components/brand/NovaCrestMark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change or ESC key
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const serviceCategories = [
    {
      category: "Engineering & Architecture",
      items: [
        { name: "Web Development", href: "/services/web-development", desc: "Next.js apps, corporate platforms, sub-1.2s LCP", icon: Code2 },
        { name: "Mobile App Development", href: "/services/mobile-app-development", desc: "Native iOS/Android, React Native & Flutter", icon: Smartphone },
        { name: "Custom Software Systems", href: "/services/software-development", desc: "Internal tooling, cloud APIs & resilient backends", icon: Cpu },
        { name: "E-Commerce Engineering", href: "/services/ecommerce-development", desc: "High-volume Shopify Plus & headless stores", icon: ShoppingBag },
      ]
    },
    {
      category: "Experience & AI",
      items: [
        { name: "UI/UX & Product Design", href: "/services/ui-ux-design", desc: "Design systems, clickable prototypes & CRO research", icon: Layers },
        { name: "AI Solutions & Automation", href: "/services/ai-development", desc: "Autonomous workflows, RAG agents & custom LLMs", icon: Bot },
      ]
    },
    {
      category: "Growth & Visibility",
      items: [
        { name: "Technical SEO & AEO", href: "/services/seo", desc: "Rank on Google, Perplexity & AI Overviews", icon: TrendingUp },
        { name: "Performance Marketing", href: "/services/digital-marketing", desc: "Data-led user acquisition & full-funnel CRO", icon: Zap },
      ]
    }
  ];

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? "bg-[#090D16]/90 backdrop-blur-xl border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.65)] px-4 sm:px-6 py-2.5" 
            : "bg-[#090A0F]/40 backdrop-blur-sm border border-transparent px-3 sm:px-5 py-2.5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#00F2FE]/50 rounded-xl"
            aria-label="NovaCrest Technologies Homepage"
          >
            <NovaCrestMark size="sm" variant="lockup" animated />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {/* Services with Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F2FE]/50 ${
                  pathname.startsWith("/services") || megaMenuOpen
                    ? "text-[#00F2FE] bg-white/[0.04]"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.03]"
                }`}
                aria-expanded={megaMenuOpen}
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? "rotate-180 text-[#00F2FE]" : ""}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div 
                  className="absolute top-full -left-28 w-[820px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200"
                  role="region"
                  aria-label="Services Mega Menu"
                >
                  <div className="bg-[#0B0F18]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-6 shadow-[0_24px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F2FE]/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="grid grid-cols-3 gap-6 relative z-10">
                      {serviceCategories.map((group) => (
                        <div key={group.category} className="space-y-3">
                          <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00F2FE] border-b border-white/[0.08] pb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                            {group.category}
                          </h4>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => {
                              const Icon = item.icon;
                              const isActive = pathname === item.href;
                              return (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setMegaMenuOpen(false)}
                                    className={`group/item flex items-start gap-2.5 p-2 rounded-xl transition-all duration-200 ${
                                      isActive 
                                        ? "bg-white/[0.08] text-white" 
                                        : "hover:bg-white/[0.04] text-[#94A3B8]"
                                    }`}
                                  >
                                    <div className="p-1.5 rounded-lg bg-[#121722] text-[#94A3B8] group-hover/item:text-[#00F2FE] group-hover/item:bg-[#00F2FE]/10 transition-colors mt-0.5 border border-white/[0.06]">
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-semibold text-white group-hover/item:text-[#00F2FE] transition-colors leading-snug">
                                        {item.name}
                                      </p>
                                      <p className="text-[11px] text-[#94A3B8] leading-tight line-clamp-2 mt-0.5">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Mega Menu Footer Banner */}
                    <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between relative z-10 bg-white/[0.02] -mx-6 -mb-6 p-4 px-6 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                        <Terminal className="w-3.5 h-3.5 text-[#00F2FE]" />
                        <span>Need a custom architecture or technical audit?</span>
                      </div>
                      <Link
                        href="/contact"
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-xs font-semibold text-[#00F2FE] hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        Talk directly to an engineer
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00F2FE]/50 ${
                    isActive
                      ? "text-[#00F2FE] bg-white/[0.04]"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white tracking-wide uppercase transition-all duration-300 rounded-xl group overflow-hidden border border-[#00F2FE]/30 hover:border-[#00F2FE] shadow-[0_0_20px_rgba(0,242,254,0.15)] hover:shadow-[0_0_30px_rgba(0,242,254,0.35)] bg-gradient-to-r from-[#101520] to-[#151D2D]"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-mono">
                Let&apos;s Talk
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#00F2FE]" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F2FE]/20 via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#00F2FE]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-[#090D16]/98 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-5 shadow-[0_16px_50px_rgba(0,0,0,0.85)] max-h-[85vh] overflow-y-auto space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg ${pathname === "/" ? "text-[#00F2FE] bg-white/[0.04]" : "text-white"}`}
            >
              Home
            </Link>
            
            <div className="border-t border-white/[0.08] pt-3">
              <p className="text-xs font-mono font-semibold text-[#00F2FE] uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Services & Capabilities
              </p>
              <div className="grid grid-cols-1 gap-1 pl-1">
                <Link href="/services/web-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">Web Engineering (Next.js)</Link>
                <Link href="/services/mobile-app-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">Mobile App Development</Link>
                <Link href="/services/software-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">Custom Software & APIs</Link>
                <Link href="/services/ui-ux-design" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">UI/UX & Product Design</Link>
                <Link href="/services/seo" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">Technical SEO & AEO</Link>
                <Link href="/services/digital-marketing" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">Performance Marketing</Link>
                <Link href="/services/ecommerce-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">E-Commerce Engineering</Link>
                <Link href="/services/ai-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#94A3B8] hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.04]">AI & Process Automation</Link>
              </div>
            </div>

            <div className="border-t border-white/[0.08] pt-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium block py-2 px-3 rounded-lg ${pathname === link.href ? "text-[#00F2FE] bg-white/[0.04]" : "text-white hover:text-[#00F2FE]"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] text-[#090A0F] font-semibold text-sm shadow-lg shadow-[#00F2FE]/20"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
