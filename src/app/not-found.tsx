import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, Home, Terminal } from "lucide-react";

export const metadata = constructMetadata({
  title: "404 - Page Not Found",
  description: "The requested page could not be located on novacrest.tech.",
  noIndex: true
});

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow & subtle tech grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute w-96 h-96 bg-[#00F2FE]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 p-8 rounded-2xl border border-white/[0.08] bg-[#0E1117]/80 backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121722] border border-[#00F2FE]/20 text-[#00F2FE] text-xs font-mono uppercase tracking-widest mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>Error 404 • Resource Not Located</span>
        </div>

        <h1 className="text-6xl font-extrabold font-mono text-white tracking-tight mb-4">
          4<span className="text-[#00F2FE]">0</span>4
        </h1>

        <p className="text-base text-white font-semibold mb-2">
          Looks like this page took a wrong turn.
        </p>

        <p className="text-xs text-[#94A3B8] leading-relaxed mb-8">
          The requested endpoint does not exist or has been restructured. Return to our main portal or browse our active capabilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#090A0F] bg-gradient-to-r from-[#00F2FE] to-[#3B82F6] hover:opacity-90 transition-opacity text-xs uppercase tracking-wider"
          >
            <Home className="w-4 h-4" />
            Back to NovaCrest →
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#121722] border border-white/[0.1] hover:bg-[#181F2E] transition-all text-xs"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
