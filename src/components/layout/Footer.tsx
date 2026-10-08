import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail, Globe, MapPin } from "lucide-react";
import { NovaCrestMark } from "@/components/brand/NovaCrestMark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090A0F] border-t border-white/[0.08] relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00F2FE]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center group focus:outline-none">
              <NovaCrestMark size="sm" variant="lockup" animated />
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              We engineer digital products that make businesses easier to run, easier to discover, and faster to scale. From architecture to launch, you work directly with senior engineers with zero agency layers.
            </p>

            <div className="flex flex-col space-y-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-medium">Accepting new product builds & Q2 sprints</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>100% Client IP Ownership • Strict Mutual NDA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span className="font-mono text-white">hello@novacrest.tech</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00F2FE]">Services</p>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-white transition-colors">
                  UI/UX & Product Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white transition-colors">
                  Technical SEO & AEO
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-white transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-white transition-colors">
                  E-Commerce Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/ai-development" className="hover:text-white transition-colors">
                  AI & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Industries */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00F2FE]">Solutions</p>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Startup MVPs
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Enterprise Modernization
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Healthcare & MedTech
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Fintech Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Education & EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  PropTech & Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Knowledge */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00F2FE]">Company</p>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About NovaCrest
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Featured Work & Proof
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/novacrest-technologies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/novacrest-technologies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  GitHub <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
          <p>© {currentYear} NovaCrest Technologies. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors font-mono">
              Sitemap.xml
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
