# NovaCrest Technologies — Master Interaction Map
**Document Version:** 2.0  
**Governing Documents:** `AGENTS.md`, `SKILL.md`, `NOVACREST-DREAM-EXPERIENCE.md`

---

## 1. Interaction Principles: "Tactile Digital Physics"

Interaction at NovaCrest is neither flat and unresponsive nor frivolous and gimmicky.  
Every interaction satisfies three conditions:
1. **Immediate Physical Response:** Inputs (hover, click, touch, scroll) produce instant visual feedback through micro-elevations, border specular illuminates, and subtle spring transitions.
2. **Contextual Disclosure:** Complex telemetry and architecture diagrams are disclosed progressively as the user expresses interest, keeping initial viewports serene.
3. **Inclusive Ergonomics:** All interactive states are accessible via standard keyboard navigation (`tab`, `enter`, `space`), include visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#00F2FE]`), and gracefully collapse for touch and reduced-motion environments.

---

## 2. Interaction Registry by Component

### A. Global Navigation Dock (`Navbar.tsx`)
- **Scroll Threshold Trigger:** When `window.scrollY > 15px`, the dock transitions smoothly from a transparent bar to a frosted satin glass pill (`backdrop-filter: blur(24px)`, `bg-[#090D16]/90`).
- **Mega-Menu Trigger:** Hovering/focusing on "Services" reveals an architectural 3-category capability tray with hover states on individual service descriptions.
- **Mobile Menu Drawer:** Fullscreen modal slide-in with staggered item reveals, touch-friendly touch targets (min 48px), and Esc key dismissal.

### B. The Signature Visual Object ("Prism Core" in `SpatialHero.tsx` / `PrismCore.tsx`)
- **Gyroscopic 3D Tilt:** On desktop, pointer movement over the hero container generates a calibrated subtle 2.5D tilt (`rotateX`, `rotateY`) with smooth dampening.
- **8K Crystalline Optic Backplane:** Combines the bespoke 8K octane render with live CSS 3D transform facets for tactile depth.
- **Caustic Light Refraction:** Hovering over the core intensifies the specular rim illumination (`#00F2FE`, `#F5E6C8`, and `#3B82F6` gradients).
- **Interactive Telemetry Modes:** Switches the viewport between Commercial Velocity (sub-1.2s LCP), Tactile Product Craft (60fps haptics), and Client Ownership (100% IP transfer).

### C. Spatial Capability Landscape (`ServicesShowcase.tsx`)
- **6-Discipline Navigator Bar:** Visitors select between Web Platforms, Mobile Apps, Custom Software, UI/UX Design, Technical SEO/AEO, and E-Commerce.
- **Dynamic Viewport Morphing:** Selecting a discipline instantly transforms the right-hand stage into its respective high-fidelity prototype:
  - *Web Platforms:* Sub-1.2s Edge Commerce Browser with active conversion funnel telemetry.
  - *Mobile Apps:* Bezel-less iOS/Android viewport with biometric checkout and 60fps haptic simulation.
  - *Bespoke Software:* Node-based automation pipeline with live payload parsing and PostgreSQL sync.
  - *UI/UX Design Systems:* Interactive token swatch palette with dark/light dynamic tokens.
  - *Technical SEO/AEO:* Simulated Perplexity/Google AI Overview citation knowledge card.
  - *Headless E-Commerce:* High-traffic surge simulation handling 25,000 req/sec with zero queue drop-off.

### D. The Transformation Engine (`IdeaToProduct.tsx`)
- **Phase Slider / Stepper:** Visitors can click through 5 distinct crystallization stages:
  1. *Idea / Clarification* (Requirements, user pain points, target unit economics)
  2. *Strategy / Architecture* (Domain modeling, edge infrastructure, API contracts)
  3. *Design / Experience* (Clickable Figma wireframes, design tokens, microcopy)
  4. *Engineering / Rigor* (TypeScript, Next.js, Flutter, automated test suites, CI/CD)
  5. *Product / Launch* (Zero-downtime release, Core Web Vitals audit, full IP handover)
- **Interactive Stage Viewer:** Selecting each stage reveals the real deliverables, time-to-value milestone, and client reassurance proofs.

### E. The Digital Exhibition Gallery (`CaseStudyFeature.tsx`)
- **Flagship Exhibit Viewport Mode Switcher:** Toggle between:
  - *Studio Showcase View:* Full-bleed 8K curved OLED studio showcase (`/images/flagship-case.jpg`).
  - *Commercial Telemetry:* Real-time latency, conversion velocity (+28.4%), and edge routing analytics.
- **Side-by-Side Before/After Cards:** Clear breakdown of the commercial bottleneck versus what NovaCrest engineered.
- **Supporting Exhibition Modules:** Secondary spotlights with verified outcomes (-68% latency, +$4.2M daily processing volume) and deep links to `/work`.

### F. Schema FAQ Accordion (`FAQSection.tsx`)
- **Accessible Expansion:** ARIA-compliant accordion with animated height interpolation and rotate chevron (`rotate-180`).
- **Escalation Hook:** Direct CTA underneath the FAQ inviting custom scoping discussions with guaranteed 24-hour response.

### G. Visual Climax & CTA Horizon (`CTASection.tsx`)
- **Volumetric Horizon Glow:** Ambient radial lighting creates an ethereal destination effect.
- **Magnetic Action Button:** "Schedule Architecture Consultation" with glowing cyan rim and subtle scale transition.
- **Security Reassurance:** Active badges confirming NDA protection, 24h architect turnaround, and zero sales pressure.

---

## 3. Reduced Motion & Mobile Fallbacks
- For `prefers-reduced-motion: reduce`, all 2.5D tilts, continuous pulses, and complex coordinate transforms are disabled, falling back to instant opacity transitions.
- On touch devices (screens < 1024px), mouse-driven gyro tilts are converted to clean static elevations, ensuring 60fps scrolling without touch interference.
