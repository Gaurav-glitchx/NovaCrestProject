# NovaCrest Technologies — Visual Asset Manifest & Media Architecture
**Governing Specification:** `NovaCrest_Antigravity_Master_MultiAgent_Prompt.txt`

---

## 1. Asset Strategy & Zero-Cliché Policy
NovaCrest does not use generic stock photos of people shaking hands, models smiling at blank laptops, or blue cyberpunk holograms.

All imagery and visual artifacts must be:
1. **Art-Directed Product & Device Mockups**: Precision desktop browser frames and sleek mobile viewports demonstrating actual UI craft.
2. **Abstract Architectural & Material Renders**: Deep volumetric lighting, brushed dark titanium surfaces, and soft optical refractions.
3. **SVG Vector Artifacts**: High-resolution icons, workflow pipeline diagrams, and monochrome technology tokens.

---

## 2. Asset Manifest & Specifications

| Asset ID | Purpose | Type | Location / Component | Specification |
| :--- | :--- | :--- | :--- | :--- |
| `hero-product-preview` | Hero 2.5D Spatial Showcase | Interactive CSS/SVG UI | `src/components/sections/HeroVisual.tsx` | Spatial layered dark UI with chart curves, frosted navigation, and live telemetry |
| `mockup-browser-web` | Services: Web Development | CSS/SVG Device Frame | `src/components/sections/services/` | Dark-mode browser frame with address bar pill, sub-1.2s badge, and editorial layout preview |
| `mockup-mobile-app` | Services: Mobile Apps | CSS/SVG Smartphone | `src/components/sections/services/` | Bezel-less smartphone viewport with dynamic notch, gesture curves, and payment card |
| `mockup-software-pipeline` | Services: Custom Software & AI | CSS/SVG Node Canvas | `src/components/sections/services/` | Multidimensional node flow showing automated document parsing and CRM sync |
| `mockup-design-system` | Services: UI/UX Systems | CSS/SVG Component Spec | `src/components/sections/services/` | Figma-grade design tokens, interactive toggle states, and fluid typography specimen |
| `case-study-commerce` | Work: Multi-Brand Commerce | Editorial Device Spread | `src/app/work/page.tsx` & Home | Desktop storefront hero with checkout sheet and `+210%` metric highlight |
| `case-study-telehealth` | Work: Telehealth Platform | Dual-Device Layout | `src/app/work/page.tsx` & Home | Web doctor dashboard + mobile patient booking portal |
| `case-study-fintech` | Work: B2B Credit Processing | Dashboard Preview | `src/app/work/page.tsx` & Home | Automated underwriting portal with instant ratio checks and status tags |
| `tech-monochrome-tokens` | Technology Ecosystem | Clean Vector SVGs | `src/components/sections/TechEcosystem.tsx` | Next.js, React, TypeScript, Flutter, Node.js, AWS, Cloudflare, PostgreSQL |

---

## 3. Implementation Rules
- All device mockups must be responsive, rendered via high-performance CSS and inline SVGs with zero layout shift (CLS = 0.00).
- No external heavy image CDNs that introduce third-party tracker latency.
- Full support for `prefers-reduced-motion` media queries on all interactive previews.
