export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: "Development" | "Design" | "Growth" | "Technology";
  icon: string;
  badge: string;
  outcomeHeadline: string;
  features: string[];
  deliverables: string[];
  businessImpact: string[];
  techStack: string[];
  ctaLabel: string;
  faqs: { question: string; answer: string }[];
}

export interface IndustryItem {
  slug: string;
  title: string;
  tagline: string;
  challenges: string[];
  solutions: string[];
  recommendedServices: string[];
  impactMetrics: string[];
  faqs: { question: string; answer: string }[];
}

export interface SolutionItem {
  slug: string;
  title: string;
  tagline: string;
  targetAudience: string;
  overview: string;
  keyPillars: { title: string; description: string }[];
  deliverables: string[];
  ctaText: string;
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: { metric: string; label: string }[];
  featured: boolean;
}

export interface BlogPostItem {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  relatedServices: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Fast, responsive websites built around how your business actually runs—not a rigid off-the-shelf theme.",
    fullDesc: "We build modern marketing flagships, high-conversion web apps, and custom client portals that load in under a second. Every page is engineered with clean code, zero layout shift, and intuitive navigation that turns visitors into qualified inquiries.",
    category: "Development",
    icon: "Globe",
    badge: "Core Engineering",
    outcomeHeadline: "Sites that open instantly and convert qualified visitors into paying clients.",
    features: [
      "Custom Next.js & React architectures",
      "Headless content systems your team can edit easily",
      "Instant page transitions with zero visual stutter",
      "High-intent landing pages engineered to convert",
      "Custom client portals and customer accounts",
      "LCP under 1.2 seconds on mobile devices"
    ],
    deliverables: [
      "Fully responsive custom codebase",
      "Clean content editing setup with no coding needed",
      "Technical SEO markup & OpenGraph cards",
      "Automated edge caching & CDN deployment",
      "Performance and accessibility verification"
    ],
    businessImpact: [
      "Immediate lift in conversion rates from organic and paid traffic",
      "No reliance on fragile third-party plugins that break upon updating",
      "Faster mobile browsing that keeps buyers on your site longer"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Cloudflare"],
    ctaLabel: "Build My Website →",
    faqs: [
      {
        question: "How long does a custom website build usually take?",
        answer: "Most focused corporate websites ship within 4 to 6 weeks. Larger custom web apps with user dashboards, complex forms, or custom integrations typically take 8 to 12 weeks."
      },
      {
        question: "Can our marketing team publish updates without asking a developer?",
        answer: "Yes. We set up an intuitive content management interface so your team can publish case studies, edit copy, change pricing, and write articles in seconds without touching code."
      },
      {
        question: "How do you guarantee speed on slow mobile connections?",
        answer: "We pre-render pages statically, compress all media into modern AVIF/WebP formats, and serve assets from edge servers located close to your users worldwide."
      }
    ]
  },
  {
    id: "mobile-dev",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "From the first prototype to production launch on the App Store and Google Play, we build apps users keep using.",
    fullDesc: "We design and build iOS, Android, and cross-platform apps that feel smooth, start instantly, and operate reliably offline. Whether launching an MVP or scaling an established product, we keep the user experience intuitive and the codebase tidy.",
    category: "Development",
    icon: "Smartphone",
    badge: "Mobile Systems",
    outcomeHeadline: "Smooth native mobile experiences with 60fps responsiveness and zero clutter.",
    features: [
      "Cross-platform Flutter & React Native applications",
      "Native iOS (Swift) & Android (Kotlin) development",
      "Offline sync so users never lose entered data",
      "Biometric security, Apple Pay & Google Pay checkout",
      "Push notification systems that drive return visits",
      "Real-time crash tracking and live analytics"
    ],
    deliverables: [
      "Production-ready App Store and Google Play builds",
      "Full assistance through store review and approval",
      "Mobile backend APIs and webhook connectors",
      "Automated automated testing suite across screen sizes"
    ],
    businessImpact: [
      "Launch on both iOS and Android simultaneously with one unified codebase",
      "Lower ongoing maintenance costs compared to maintaining two siloed teams",
      "Fewer 1-star reviews from crashes, hangs, or unexpected bugs"
    ],
    techStack: ["Flutter", "React Native", "TypeScript", "Node.js", "Firebase", "AWS"],
    ctaLabel: "Build My App →",
    faqs: [
      {
        question: "Should we build cross-platform or separate native apps?",
        answer: "For almost all consumer and business apps, Flutter or React Native gives you 95%+ shared code, 60fps fluid UI, and cuts development time in half. We only recommend separate native Swift/Kotlin when deep custom hardware access is non-negotiable."
      },
      {
        question: "Will you help get our app approved by Apple and Google?",
        answer: "Yes. We handle privacy manifests, store guidelines, certificate provisioning, and manage any review requests until your app is live."
      }
    ]
  },
  {
    id: "custom-software",
    slug: "software-development",
    title: "Custom Software",
    shortDesc: "Software built around how your company operates, eliminating messy spreadsheets and expensive SaaS subscriptions.",
    fullDesc: "When off-the-shelf software forces your staff into clumsy workarounds, we build custom business tools that automate manual data entry, connect disjointed databases, and give leadership real-time visibility.",
    category: "Development",
    icon: "Cpu",
    badge: "Operations & Cloud",
    outcomeHeadline: "Tailored internal tools and platforms that eliminate manual busywork.",
    features: [
      "Custom internal operations dashboards & portals",
      "Automated document processing & invoicing workflows",
      "Tailored CRM, booking, and inventory management",
      "Bi-directional API integrations between existing tools",
      "Role-based permissions & Single Sign-On (SSO)",
      "Secure cloud database architectures on PostgreSQL & AWS"
    ],
    deliverables: [
      "100% intellectual property ownership with full source code",
      "Documented REST and GraphQL endpoints",
      "Database schema and automated backup scripts",
      "User guides and staff onboarding walkthroughs"
    ],
    businessImpact: [
      "Save hundreds of staff hours every month previously spent copy-pasting across systems",
      "Replace expensive per-seat software licenses with software you own permanently",
      "Zero vendor lock-in or fear of surprise price hikes"
    ],
    techStack: ["Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    ctaLabel: "Discuss My Project →",
    faqs: [
      {
        question: "Do we own the software code once it is built?",
        answer: "Yes, completely. You own 100% of the code, intellectual property, database schemas, and documentation from day one of completion."
      },
      {
        question: "Can this software connect to our existing systems?",
        answer: "Yes. We build custom API bridges and webhooks to synchronize data with QuickBooks, Salesforce, Stripe, ERP systems, or legacy databases."
      }
    ]
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    shortDesc: "Interfaces designed around how people actually think, navigate, and make buying decisions.",
    fullDesc: "Great design isn't decoration—it's how effortlessly a person can accomplish their goal. We turn complicated workflows into clear, confident screens that feel natural to use on any device.",
    category: "Design",
    icon: "Layers",
    badge: "Product Strategy",
    outcomeHeadline: "Clear, frictionless product journeys that guide visitors straight to the next step.",
    features: [
      "User research and workflow simplification",
      "Interactive clickable prototypes in Figma",
      "Scalable design systems and component libraries",
      "Conversion audits to eliminate checkout drop-offs",
      "Accessible WCAG-compliant color contrasts and tap targets",
      "Developer-ready design tokens and interactive specs"
    ],
    deliverables: [
      "Organized Figma workspaces with reusable design components",
      "Clickable interactive prototype for customer testing",
      "Responsive layout specifications for mobile, tablet, and desktop",
      "Design token guidelines for typography, spacing, and states"
    ],
    businessImpact: [
      "Less user onboarding confusion and fewer support requests",
      "Faster development velocity because developers have exact specifications",
      "A polished, premium look that builds instant buyer confidence"
    ],
    techStack: ["Figma", "Tailwind CSS", "Storybook", "UserTesting"],
    ctaLabel: "Design My Product →",
    faqs: [
      {
        question: "Can we test the design before writing code?",
        answer: "Yes. We create clickable prototypes that look and feel like a real product so your stakeholders and target users can test every screen before development begins."
      }
    ]
  },
  {
    id: "seo",
    slug: "seo",
    title: "Technical SEO & Search Visibility",
    shortDesc: "More than keyword rankings. We help the right customers discover you on Google, Perplexity, and AI search.",
    fullDesc: "Search engines and AI answer engines reward sites that are genuinely fast, structured, and authoritative. We engineer structured data, crawlable architectures, and comprehensive topical coverage so your business gets recommended when buyers search.",
    category: "Growth",
    icon: "TrendingUp",
    badge: "Organic Traffic",
    outcomeHeadline: "Predictable organic discovery that brings ready-to-buy customers to your door.",
    features: [
      "Deep technical crawlability and site architecture audits",
      "JSON-LD structured schemas for Google, ChatGPT Search, and Perplexity",
      "Topical content maps that answer real customer questions",
      "Elimination of slow page speed penalties (Core Web Vitals)",
      "Programmatic landing page frameworks that scale cleanly",
      "Continuous search console monitoring and index optimization"
    ],
    deliverables: [
      "Comprehensive technical remediation roadmap",
      "Schema implementation across every major page type",
      "Keyword intent blueprint grouped by buyer readiness",
      "Indexing health and rank tracking dashboard"
    ],
    businessImpact: [
      "A compounding stream of inbound leads without paying for every single click",
      "Higher credibility by showing up as the primary answer in modern AI search results",
      "Protection from sudden Google algorithm drops caused by technical errors"
    ],
    techStack: ["Google Search Console", "Screaming Frog", "Schema.org", "Next.js Metadata"],
    ctaLabel: "Grow My Search Traffic →",
    faqs: [
      {
        question: "How does NovaCrest optimize for AI Search like Perplexity and ChatGPT?",
        answer: "We structure answers in clear, factual blocks with verified Schema markup and clear question headers, making it effortless for AI answer models to cite your brand as the definitive source."
      },
      {
        question: "How long before we see noticeable organic traffic gains?",
        answer: "Technical fixes and speed improvements typically reflect within 2 to 4 weeks. Broader keyword rankings and domain authority build consistently over 3 to 6 months."
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Performance & Growth Marketing",
    shortDesc: "Stop burning ad budget on vanity impressions. We build targeted campaigns focused on qualified pipeline.",
    fullDesc: "We combine high-intent Google search ads, targeted B2B campaigns, and clear landing pages to acquire real customers at a predictable cost. Everything is measured through transparent revenue tracking.",
    category: "Growth",
    icon: "Zap",
    badge: "Customer Acquisition",
    outcomeHeadline: "Targeted campaigns built around clear return on investment.",
    features: [
      "Intent-focused Google Search campaigns targeting active buyers",
      "Targeted B2B LinkedIn & social outreach funnels",
      "Landing page experiments and continuous conversion rate optimization",
      "Server-side tracking for reliable conversion attribution",
      "Automated lead follow-up and email nurture sequences",
      "Transparent reporting that shows cost per qualified conversation"
    ],
    deliverables: [
      "Fully configured ad accounts with negative keyword safeguards",
      "Conversion tracking setup verified with GA4 and server pixels",
      "Dedicated high-converting landing page variants",
      "Live performance dashboard with transparent cost metrics"
    ],
    businessImpact: [
      "Lower acquisition costs by cutting out low-intent clicks and bot traffic",
      "Clear visibility into exactly which campaigns generate closed business",
      "Predictable pipeline for your sales team each month"
    ],
    techStack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "Google Tag Manager"],
    ctaLabel: "Grow My Business →",
    faqs: [
      {
        question: "How do you avoid wasting ad budget on junk clicks?",
        answer: "We use strict negative keyword libraries, filter out bot networks, geo-target exclusively profitable territories, and optimize algorithms for closed revenue rather than cheap clicks."
      }
    ]
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "E-Commerce Engineering",
    shortDesc: "Online stores built for instant checkout, catalog speed, and higher average order values.",
    fullDesc: "Whether running a custom Shopify Plus store or a headless commerce engine, every second of checkout delay costs orders. We build storefronts that load instantly on mobile, support one-click checkouts, and sync inventory automatically.",
    category: "Development",
    icon: "ShoppingBag",
    badge: "Commerce Platforms",
    outcomeHeadline: "Lightning-fast storefronts that eliminate cart abandonment.",
    features: [
      "Custom Shopify and headless e-commerce architectures",
      "Sub-second catalog browsing and instant search filters",
      "One-click checkouts with Apple Pay, Google Pay, and localized currencies",
      "Automatic inventory sync between warehouses and retail points",
      "Product structured data for Google Shopping discovery",
      "Smart cart bundles and upsells that increase order value"
    ],
    deliverables: [
      "Tailored commerce storefront codebase",
      "Payment gateway and multi-currency configuration",
      "Automated tax, shipping, and order notification hooks",
      "Mobile-optimized product page templates"
    ],
    businessImpact: [
      "Noticeable reduction in abandoned carts on mobile phones",
      "High reliability during peak seasonal sales and traffic spikes",
      "Less time spent manually updating inventory across multiple channels"
    ],
    techStack: ["Shopify", "WooCommerce", "Stripe", "Next.js", "Node.js", "Redis"],
    ctaLabel: "Build My E-Commerce Store →",
    faqs: [
      {
        question: "Can you migrate our store without losing customer history or SEO rankings?",
        answer: "Yes. We migrate product catalogs, customer records, and orders while setting up exact 301 redirect maps so your organic rankings remain completely intact."
      }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-development",
    title: "AI Solutions & Automation",
    shortDesc: "Pragmatic automation that removes hours of repetitive paperwork and speeds up internal operations.",
    fullDesc: "We don't build AI toys. We build practical tools that automate document extraction, answer customer questions instantly from your knowledge base, and connect internal workflows so your team can focus on high-value work.",
    category: "Technology",
    icon: "Bot",
    badge: "Pragmatic AI",
    outcomeHeadline: "Practical business automation that reduces repetitive staff hours.",
    features: [
      "Custom internal knowledge bases with private semantic search",
      "Intelligent assistants for customer support and lead triage",
      "Automated PDF extraction, invoice reading, and data validation",
      "Automated workflows connecting CRM, email, and internal databases",
      "Secure private models that never expose company data to public training",
      "Operational logging and automated error alerts"
    ],
    deliverables: [
      "Tested automation pipelines and custom API endpoints",
      "Knowledge ingestion and document indexing scripts",
      "Security safeguards and token expenditure controls",
      "Staff guidelines and exception-handling instructions"
    ],
    businessImpact: [
      "Drastic reduction in hours spent manually re-typing PDF and email data",
      "Instant response times for common customer questions around the clock",
      "Higher team output without needing to constantly hire for data entry"
    ],
    techStack: ["Python", "Node.js", "Claude API", "OpenAI API", "PostgreSQL pgvector"],
    ctaLabel: "Automate My Workflows →",
    faqs: [
      {
        question: "Is our private business data safe from being trained on?",
        answer: "Yes. We use zero-retention enterprise endpoints and private vector stores. Your confidential business information is never shared or used to train public models."
      }
    ]
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    slug: "startups",
    title: "Startup MVPs & Product Launch",
    tagline: "Turn an unvalidated concept into a working, customer-ready product in weeks—not months.",
    targetAudience: "Founders, Seed-Stage Startups, and Fast-Moving Product Teams",
    overview: "Speed to customer feedback is everything. We build clean, production-ready MVPs with solid technical foundations so you can sign paying customers and pitch investors without inheriting messy code you will have to rewrite later.",
    keyPillars: [
      {
        title: "Sprint-Based Delivery",
        description: "From architecture plan to live working beta in 4 to 8 weeks."
      },
      {
        title: "Clean Foundations",
        description: "Built on modern TypeScript and cloud services so you can easily scale."
      },
      {
        title: "Usage Telemetry",
        description: "Built-in analytics that show where users engage and where they drop off."
      }
    ],
    deliverables: [
      "Live SaaS or mobile MVP ready for paying customers",
      "Stripe payment or subscription billing integration",
      "Secure user authentication and team permissions",
      "Clean source code and architecture documentation"
    ],
    ctaText: "Launch Your MVP With NovaCrest →"
  },
  {
    slug: "enterprise",
    title: "System Modernization & Cloud Upgrades",
    tagline: "Transform brittle legacy systems into fast, reliable cloud-native engines.",
    targetAudience: "Established Companies, Operations Directors, and Engineering Leaders",
    overview: "Legacy software slows down everyday work and introduces security risks. We incrementally modernize mission-critical systems into modular services without disrupting your day-to-day business operations.",
    keyPillars: [
      {
        title: "Zero-Downtime Migration",
        description: "Gradual step-by-step transition ensuring daily operations stay smooth."
      },
      {
        title: "Enterprise Compliance",
        description: "Encrypted data layers, role-based access, and detailed audit trails."
      },
      {
        title: "Reliable Performance",
        description: "Cloud caching and microservices built to handle peak transaction loads."
      }
    ],
    deliverables: [
      "Modernized API architecture and database structures",
      "High-availability cloud setup on AWS and Cloudflare",
      "Disaster recovery procedures and monitoring alerts",
      "Team handover workshops and documentation"
    ],
    ctaText: "Modernize Your Systems →"
  },
  {
    slug: "ecommerce",
    title: "High-Conversion Storefront Engineering",
    tagline: "Designed for instant loading, effortless mobile checkout, and repeat orders.",
    targetAudience: "Direct-to-Consumer Brands and High-Volume Retailers",
    overview: "Every 100ms of delay on mobile shopping costs revenue. We rebuild digital storefronts to deliver instant page loads, intuitive navigation, and effortless checkouts.",
    keyPillars: [
      {
        title: "Instant Mobile Navigation",
        description: "Pre-rendered catalog pages that open immediately on any phone."
      },
      {
        title: "Frictionless Checkout",
        description: "Single-tap checkouts with Apple Pay, Google Pay, and local currencies."
      },
      {
        title: "Strategic Upselling",
        description: "Smart cart recommendations that raise average order values."
      }
    ],
    deliverables: [
      "High-speed custom or Shopify Plus storefront",
      "Live inventory sync across multiple storage locations",
      "Verified product schema markup for Google Shopping",
      "Abandoned checkout recovery triggers"
    ],
    ctaText: "Scale Your E-Commerce Store →"
  },
  {
    slug: "digital-transformation",
    title: "Workflow Automation & Operations Portals",
    tagline: "Replace scattered spreadsheets with unified, reliable software your staff loves using.",
    targetAudience: "Mid-sized Businesses, Operations Teams, and Service Companies",
    overview: "Disconnected tools cause miscommunication and hours of lost staff time. NovaCrest consolidates your internal processes, customer inquiries, and data into one clean software portal.",
    keyPillars: [
      {
        title: "One Central Hub",
        description: "Consolidate scattered files into a single, real-time database."
      },
      {
        title: "Automate Repetitive Tasks",
        description: "Invoicing, status notifications, and reporting run on autopilot."
      },
      {
        title: "Client Self-Service",
        description: "Intuitive customer portals that drastically cut down support emails."
      }
    ],
    deliverables: [
      "Custom operations dashboard tailored to your workflow",
      "Automated connections to existing accounting and CRM software",
      "Role-based staff permissions and activity logs",
      "Clear staff user guides and training videos"
    ],
    ctaText: "Automate Your Business Operations →"
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "healthcare",
    title: "Healthcare & MedTech",
    tagline: "Secure, compliant, and straightforward digital experiences for patients and providers.",
    challenges: [
      "Complex data privacy rules and compliance audits",
      "Disconnected hospital record systems that do not talk to each other",
      "Frustrating scheduling experiences that lead to missed appointments"
    ],
    solutions: [
      "Encrypted patient portals with secure video consultations",
      "HIPAA/GDPR-aligned patient databases with audit trails",
      "Automated appointment reminders via SMS and WhatsApp that cut no-shows"
    ],
    recommendedServices: ["Web Development", "Mobile App Development", "Custom Software", "UI/UX Design"],
    impactMetrics: [
      "Lower appointment no-show rates through automated reminders",
      "End-to-end encrypted medical data handling",
      "Intuitive screens accessible to patients of all age groups"
    ],
    faqs: [
      {
        question: "How do you protect sensitive patient records?",
        answer: "We use database-level AES-256 encryption, strict audit logging, tokenized session access, and zero-trust API architecture to ensure healthcare data stays secure."
      }
    ]
  },
  {
    slug: "education",
    title: "Education & EdTech",
    tagline: "Engaging learning portals and virtual classrooms that students actually finish.",
    challenges: [
      "High dropout rates from confusing, cluttered course portals",
      "Time-consuming manual grading and certificate distribution",
      "Video lectures buffering on poor student Wi-Fi connections"
    ],
    solutions: [
      "Clean course dashboards with clear progress milestones and instant certificates",
      "Adaptive video streaming optimized for all internet speeds",
      "Interactive quizzes with instant scoring and automated report cards"
    ],
    recommendedServices: ["Web Development", "Mobile App Development", "UI/UX Design", "Custom Software"],
    impactMetrics: [
      "Higher course completion rates through milestone tracking",
      "Fluid tablet and mobile responsiveness for studying on the go",
      "Automated administrative tasks freeing up educator hours"
    ],
    faqs: [
      {
        question: "Can your system handle thousands of concurrent students taking a test?",
        answer: "Yes. We build on auto-scaling serverless cloud infrastructure that absorbs sudden traffic spikes effortlessly."
      }
    ]
  },
  {
    slug: "finance",
    title: "Finance & FinTech",
    tagline: "Bank-grade security, instant transactions, and confident financial UX.",
    challenges: [
      "Strict compliance audits and fraud vulnerabilities",
      "Users abandoning lengthy, tedious onboarding forms",
      "Slow reconciliation across payment gateways"
    ],
    solutions: [
      "Streamlined onboarding with automated ID and document validation",
      "Zero-trust API architecture and biometric authentication",
      "Real-time transaction tracking and automated settlement reports"
    ],
    recommendedServices: ["Custom Software", "Web Development", "UI/UX Design", "AI Solutions"],
    impactMetrics: [
      "Fewer drop-offs during customer identity verification",
      "Fast API processing under 100ms for high-volume logs",
      "Clean compliance records ready for external audits"
    ],
    faqs: [
      {
        question: "How do you safeguard financial transactions from fraud?",
        answer: "We enforce rate-limiting, payload verification, cryptographic signatures, and strict SSL pinning across all transaction pathways."
      }
    ]
  },
  {
    slug: "ecommerce",
    title: "Retail & E-Commerce",
    tagline: "Fast storefronts, live inventory sync, and checkouts built for repeat sales.",
    challenges: [
      "Customers abandoning mobile shopping carts due to laggy pages",
      "Inventory mismatches between online stores and physical stock",
      "High ad costs with insufficient return on ad spend"
    ],
    solutions: [
      "Sub-second storefronts that load immediately on mobile phones",
      "Automated stock synchronization across all sales channels",
      "High-intent SEO and smart product recommendations that raise cart totals"
    ],
    recommendedServices: ["E-Commerce Engineering", "Web Development", "SEO", "Digital Marketing"],
    impactMetrics: [
      "Higher checkout conversion on mobile devices",
      "Zero inventory discrepancies between online and warehouse stock",
      "Organic product discovery on Google Shopping"
    ],
    faqs: [
      {
        question: "Can you connect with local payment gateways and split payments?",
        answer: "Yes. We support unified checkouts with Stripe, Razorpay, PayPal, Apple Pay, Google Pay, and localized instalment payment providers."
      }
    ]
  },
  {
    slug: "real-estate",
    title: "Real Estate & PropTech",
    tagline: "Fast property search, interactive maps, and instant lead capture for agents.",
    challenges: [
      "Slow property search filters with high bounce rates",
      "Losing interested buyers due to slow agent follow-up times",
      "Heavy property photo galleries slowing down mobile browsing"
    ],
    solutions: [
      "Instant search filters and interactive map boundaries",
      "Inquiries routed straight to agent WhatsApp and CRM in seconds",
      "High-resolution photos compressed with modern WebP/AVIF formats"
    ],
    recommendedServices: ["Web Development", "UI/UX Design", "Digital Marketing", "SEO"],
    impactMetrics: [
      "Instant notifications to sales agents when buyers inquire",
      "Smooth property search results with zero page reload",
      "Prominent search presence for local real estate queries"
    ],
    faqs: [
      {
        question: "How do you ensure hundreds of property photos don't slow down the site?",
        answer: "We use smart responsive image sizing and lazy loading so only images currently on screen are loaded, keeping data usage minimal."
      }
    ]
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    slug: "enterprise-commerce-acceleration",
    title: "Multi-Brand E-Commerce Modernization",
    clientType: "Omnichannel Retailer",
    industry: "E-Commerce",
    problem: "A legacy monolith store took 4.8 seconds to load on mobile phones. During flash promotions, checkout timed out frequently, capping conversion at just 1.4%.",
    solution: "We rebuilt the customer storefront using Next.js with edge caching, simplified checkout into a smooth single-step flow, and added product schema markup.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Storefront API", "Cloudflare Workers"],
    results: [
      { metric: "[Sub-1.2s]", label: "Mobile Page Load Time" },
      { metric: "[+38% Lift]", label: "Completed Mobile Checkouts" },
      { metric: "[2.4x Gain]", label: "Organic Search Product Views" }
    ],
    featured: true
  },
  {
    slug: "telehealth-patient-portal",
    title: "Cloud-Native Telehealth & Booking Platform",
    clientType: "Healthcare Provider Network",
    industry: "Healthcare",
    problem: "Patients had to call reception during office hours to schedule appointments, while doctors toggled between three separate legacy databases.",
    solution: "Engineered an intuitive patient portal with live calendar booking, encrypted video consultations, automatic SMS reminders, and a unified doctor dashboard.",
    techStack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "WebRTC", "AWS VPC"],
    results: [
      { metric: "[70%+]", label: "Direct Self-Service Booking Rate" },
      { metric: "[Under 2 min]", label: "Average Check-In & Triage Time" },
      { metric: "[Zero]", label: "Data Isolation Infractions" }
    ],
    featured: true
  },
  {
    slug: "fintech-workflow-automation",
    title: "B2B Credit Processing & Review Portal",
    clientType: "Financial Services Provider",
    industry: "Finance",
    problem: "Underwriters manually reviewed PDF bank statements and tax filings, creating a 5-day backlog for every business credit application.",
    solution: "Built an automated document parsing portal with instant ratio calculations, fraud validation checks, and a clean approval dashboard.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS"],
    results: [
      { metric: "[Under 4 Hours]", label: "Average Application Decision Time" },
      { metric: "[90%+ Less]", label: "Manual Data Entry Time" },
      { metric: "[100%]", label: "Audit Traceability Across Every Decision" }
    ],
    featured: true
  }
];

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    slug: "nextjs-core-web-vitals-guide",
    title: "Why Site Speed Is a Direct Revenue Factor (And How to Fix It)",
    summary: "A practical breakdown of how page load times affect conversion rates, and the exact architectural choices that keep your site fast on every device.",
    category: "Web Development",
    readTime: "7 min read",
    publishDate: "2026-09-15",
    author: {
      name: "NovaCrest Engineering",
      role: "Architecture & Performance"
    },
    content: [
      "In modern web search and digital commerce, speed is not a technical vanity metric—it directly dictates whether someone buys from you or hits the back button.",
      "Google's Core Web Vitals measure real-world user frustration: how long until content appears, how soon someone can tap a button, and whether text jumps around unexpectedly while loading.",
      "Our architectural approach starts with eliminating slow server rendering chains. By pairing Next.js static component pre-rendering with Edge caching, HTML documents arrive in under 80ms worldwide.",
      "Images are the second biggest culprit. Serving properly sized images in modern AVIF and WebP formats with explicit width and height preserves bandwidth and prevents page elements from jumping around."
    ],
    relatedServices: ["Web Development", "Technical SEO", "UI/UX Design"],
    faqs: [
      {
        question: "Why does site speed directly impact sales?",
        answer: "Every half-second of waiting increases user drop-offs. Fast sites reduce friction, build subconscious trust, and convert more visitors."
      }
    ]
  },
  {
    slug: "aeo-ai-search-optimization-strategy",
    title: "Getting Recommended by AI: Structuring Your Site for ChatGPT and Perplexity",
    summary: "How search is evolving beyond ten blue links into direct AI answers, and how forward-thinking companies structure their content to be cited.",
    category: "SEO & Growth",
    readTime: "6 min read",
    publishDate: "2026-09-28",
    author: {
      name: "NovaCrest Search Strategy",
      role: "SEO & Topical Authority"
    },
    content: [
      "Modern answer engines like Perplexity, ChatGPT Search, and Google AI Overviews do not simply rank keywords; they read entities, evaluate factual clarity, and synthesize answers for searchers.",
      "To be cited by AI answer models, your website needs to provide clear, direct explanations immediately after clear question headers.",
      "Comprehensive JSON-LD schemas (such as Service, Organization, and FAQPage) provide the machine-readable structure that large models need to verify your company's credentials and quote your answers with confidence."
    ],
    relatedServices: ["Technical SEO", "AI Solutions", "Web Development"],
    faqs: [
      {
        question: "Does traditional SEO still matter with AI search?",
        answer: "Yes. Solid technical crawlability, trustworthy backlinks, and fast Core Web Vitals are still the essential prerequisites for AI engines discovering and citing your content."
      }
    ]
  },
  {
    slug: "custom-software-vs-saas-monoliths",
    title: "When to Build Custom Software vs. Buying Another SaaS Subscription",
    summary: "An honest guide on when off-the-shelf software makes sense, and when building a tailored tool saves money and creates a real competitive advantage.",
    category: "Business Technology",
    readTime: "5 min read",
    publishDate: "2026-10-02",
    author: {
      name: "NovaCrest Product Strategy",
      role: "Software Consulting"
    },
    content: [
      "Most companies start by stacking SaaS subscriptions. Over time, recurring seat licenses quietly add up, and your team is forced into rigid workflows dictated by software you don't control.",
      "Custom software makes economic sense when your core workflow gives your company an edge, or when monthly subscription fees exceed the cost of building a tool tailored to your exact process.",
      "Owning your intellectual property eliminates vendor risk, protects your data, and allows you to automate workflows without limits."
    ],
    relatedServices: ["Custom Software", "AI Solutions", "UI/UX Design"],
    faqs: [
      {
        question: "How quickly does custom software pay for itself?",
        answer: "Most custom automation tools pay for themselves in 9 to 18 months through eliminated software license fees and recovered staff hours."
      }
    ]
  }
];

export const COMPANY_TECH_STACK = {
  frontend: [
    { name: "React", desc: "Component Architecture" },
    { name: "Next.js", desc: "Fast Edge Rendering" },
    { name: "TypeScript", desc: "Type-Safe Reliable Code" },
    { name: "Tailwind CSS", desc: "Clean Responsive Styling" },
    { name: "HTML5 & CSS3", desc: "Accessible Semantic Standards" }
  ],
  backend: [
    { name: "Node.js", desc: "Fast Asynchronous Runtime" },
    { name: "Express", desc: "Modular REST APIs" },
    { name: "Python", desc: "Data Processing & AI Tools" },
    { name: "PHP", desc: "Reliable CMS & Legacy Bridges" }
  ],
  database: [
    { name: "PostgreSQL", desc: "Rock-Solid Relational Data" },
    { name: "MongoDB", desc: "Flexible Document Storage" },
    { name: "MySQL", desc: "Structured Enterprise Data" },
    { name: "Redis", desc: "Lightning In-Memory Cache" }
  ],
  mobile: [
    { name: "Flutter", desc: "Fluid 60fps Native UI" },
    { name: "React Native", desc: "Cross-Platform Efficiency" }
  ],
  cloud: [
    { name: "AWS", desc: "Scalable Cloud Hosting" },
    { name: "Cloudflare", desc: "Edge Network & DDoS Defense" },
    { name: "Vercel", desc: "Instant Worldwide Deployment" },
    { name: "Docker", desc: "Isolated Microservice Containers" }
  ],
  marketing: [
    { name: "Google Analytics 4", desc: "Clean Server-Side Metrics" },
    { name: "Google Search Console", desc: "Direct Index Telemetry" },
    { name: "Google Ads", desc: "Targeted Search Acquisition" },
    { name: "Meta Ads", desc: "Targeted Social Channels" }
  ]
};

export const PROCESS_STEPS = [
  {
    step: "01",
    phase: "DISCOVER",
    title: "Understand the Problem",
    desc: "We listen to your business goals, user friction, and technical constraints before writing a single line of code."
  },
  {
    step: "02",
    phase: "DEFINE",
    title: "Map the Solution",
    desc: "We outline the technology stack, data structure, conversion path, and realistic sprint milestones."
  },
  {
    step: "03",
    phase: "DESIGN",
    title: "Craft the Experience",
    desc: "We design clickable, high-fidelity prototypes in Figma to test and validate every screen before building."
  },
  {
    step: "04",
    phase: "BUILD",
    title: "Engineer With Care",
    desc: "We write clean, strictly typed code with automated tests and weekly demo progress you can review."
  },
  {
    step: "05",
    phase: "LAUNCH",
    title: "Deploy & Fine-Tune",
    desc: "We handle production launch, setup CDN caching, verify structured SEO, and ensure sub-second speed."
  },
  {
    step: "06",
    phase: "GROW",
    title: "Support & Iterate",
    desc: "We monitor performance, analyze user telemetry, and support your product as your business expands."
  }
];

export const WHY_NOVACREST = [
  {
    num: "01",
    title: "Built around your business",
    desc: "We don't force your requirements into a generic template. Every architecture is chosen to solve your specific commercial bottleneck."
  },
  {
    num: "02",
    title: "Designed for real people",
    desc: "Impressive code means nothing if users find the product confusing. We craft interfaces that feel simple from the first interaction."
  },
  {
    num: "03",
    title: "Architecture that scales",
    desc: "We write clean, strictly typed code that can absorb traffic spikes and evolve easily without having to be scrapped and rebuilt."
  },
  {
    num: "04",
    title: "Search visibility from day one",
    desc: "Fast load times, structured schema markup, and crawlability are baked directly into our code from the very first commit."
  },
  {
    num: "05",
    title: "Complete IP ownership",
    desc: "You own 100% of your code, credentials, and documentation. No vendor lock-in and no proprietary licensing traps."
  },
  {
    num: "06",
    title: "A team that stays with you",
    desc: "We don't vanish the day your product launches. We provide proactive monitoring, technical guidance, and ongoing support."
  }
];

export const GENERAL_FAQS = [
  {
    question: "What does NovaCrest Technologies do?",
    answer: "We design, build, and support high-performance websites, mobile applications, custom software tools, and search-driven growth systems for ambitious businesses."
  },
  {
    question: "What services do you provide?",
    answer: "We cover four core areas: Development (Web Development, Mobile Apps, Custom Software, SaaS, E-Commerce), Design (UI/UX, Prototypes, Design Systems), Growth (Technical SEO, AI Search Optimization, Performance Marketing), and Automation (Custom Workflow AI and Cloud Infrastructure)."
  },
  {
    question: "How much does a project typically cost?",
    answer: "Investment depends on what you need built. Focused corporate websites and marketing flagships generally run on structured fixed-price sprints, while complex custom software platforms or cross-platform mobile apps are scoped by technical requirements. We provide itemized, transparent proposals with no surprise fees."
  },
  {
    question: "How long does a development project take?",
    answer: "A focused corporate web presence typically takes 4 to 6 weeks. Comprehensive mobile apps and custom software tools generally span 8 to 12 weeks from discovery to production launch."
  },
  {
    question: "What is the difference between a website and custom software?",
    answer: "A website communicates your business and converts visitors into inquiries. Custom software is an interactive application—with user accounts, private databases, custom calculations, and automated workflows—that runs internal operations or powers a SaaS product."
  },
  {
    question: "How do you optimize websites for Google and AI Search?",
    answer: "We build with sub-second page speed, clean semantic code, factual question-and-answer hierarchies, and Schema.org structured data, making it effortless for Google, ChatGPT Search, and Perplexity to recommend your business."
  },
  {
    question: "Why should we choose custom software over ready-made tools?",
    answer: "Custom software eliminates recurring monthly seat fees, fits your exact operational workflow without awkward compromises, and ensures your company permanently owns its intellectual property."
  }
];
