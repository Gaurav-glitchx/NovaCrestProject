import React from "react";

export function TechEcosystem() {
  const domains = [
    {
      category: "Frontend Systems",
      description: "Edge rendering, sub-1.2s paint times, and responsive state.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5 & Accessible CSS"]
    },
    {
      category: "Mobile Platforms",
      description: "60fps native feel, biometric checkout, and offline sync.",
      technologies: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"]
    },
    {
      category: "Cloud & APIs",
      description: "High-concurrency data storage, resilient backends, and microservices.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "AWS Cloud", "Cloudflare Edge", "Docker"]
    },
    {
      category: "AI & Automation",
      description: "Intelligent document parsing, vector search, and business pipelines.",
      technologies: ["Custom LLMs", "RAG Pipelines", "Semantic Search", "Automated Webhooks"]
    }
  ];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#0A0D14]/70">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-[#00F2FE] tracking-widest uppercase block mb-3">
            Architectural Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Built on foundations that endure.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We deliberately choose stable, modern frameworks that deliver years of reliable uptime without endless refactoring or vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.category}
              className="satin-surface rounded-3xl p-7 border border-white/[0.08] hover:border-[#00F2FE]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#00F2FE] uppercase tracking-wider block mb-2">
                  {domain.category}
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {domain.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {domain.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-between text-xs text-[#E2E8F0] p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    <span className="font-medium">{tech}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]/60" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
