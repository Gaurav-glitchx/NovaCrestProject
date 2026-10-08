# NovaCrest Technologies — Master Motion System & Animation Specification
**Document Version:** 2.0  
**Governing Documents:** `AGENTS.md`, `SKILL.md`, `NOVACREST-DREAM-EXPERIENCE.md`

---

## 1. Motion Philosophy: "Meaningful Kinematics"

Motion at NovaCrest is an architectural medium, not visual noise.  
We reject:
- Aimless floating cubes and cosmic dust particles.
- Endless repetitive fade-ins on every paragraph.
- Bouncy, cartoony easing curves that undermine corporate authority.

We mandate:
- **Kinematic Rhythm:** Fast entry, smooth exponential deceleration, stable rest states.
- **Physical Weight:** UI surfaces behave with realistic inertia (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **GPU Exclusivity:** All animations are restricted to hardware-composited properties: `transform` and `opacity`. Zero layout thrashing (`height`, `width`, `top`, `margin`).

---

## 2. Timing & Easing Curves

```css
/* Core Easing Primitives */
--ease-out-atelier: cubic-bezier(0.16, 1, 0.3, 1);     /* Smooth arrival with fast initial velocity */
--ease-spring-atelier: cubic-bezier(0.34, 1.56, 0.64, 1); /* Subtle tactile tactile bounce */
--ease-in-out-atelier: cubic-bezier(0.65, 0, 0.35, 1);    /* Architectural stage transitions */

/* Standard Durations */
--duration-micro: 150ms;   /* Button hovers, badge toggles */
--duration-state: 250ms;   /* Viewport switcher tabs, pill transitions */
--duration-medium: 400ms;  /* Modal drawer, accordion expands */
--duration-macro: 600ms;   /* Chapter reveals, 2.5D spatial tilts */
```

---

## 3. Motion Vocabulary by Component

### A. The Signature "Prism Core" Kinematics
- **Gyroscopic Floating Cycle:** Subtle vertical floating loop (`translateY(-6px)` to `translateY(6px)` over 6 seconds) with seamless sinusoidal easing.
- **Pointer Reactive Orbit:** On mouse move, the core rotates along the X and Y axes up to `±12deg` using smooth damping interpolation.
- **Caustic Specular Wave:** Gradient shine angle shifts across the facets with pointer coordinates, giving the visual quality of precision machined glass and titanium.

### B. Viewport & Device Transitions
- **Tab Switching:** When transitioning between Web, Mobile, and Pipeline views in the Hero, the outgoing view fades down (`opacity: 0, translateY(6px)` in 150ms) and the incoming view slides smoothly into position (`opacity: 1, translateY(0)` in 250ms).
- **Scroll Pacing:** Sections use subtle staggered opacity and transform reveals (`translateY(16px)` -> `translateY(0)` with `fade-in`).

### C. Idea → Product Transformation Animation
- **Active Stage Rail:** The progress bar illuminates in electric cyan (`#00F2FE`) from 0% to 100% as stages advance.
- **Stage Card Morph:** As the user toggles between the 5 stages, the preview diagram transforms smoothly with cross-fade interpolation.

### D. Magnetic Buttons & Links
- **Hover Scale:** `transform: translateY(-2px)` on hover with box-shadow expansion.
- **Active Press:** `transform: translateY(0px) scale(0.98)` on click for crisp tactile feedback.

---

## 4. Accessibility & Performance Guardrails

```css
/* Strict Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- **Will-Change Strategy:** `will-change: transform` is applied only during active transitions and removed on completion to prevent mobile GPU memory bloat.
- **Zero Layout Shifts:** All dimensional containers have explicit aspect ratios or minimum heights to achieve a perfect `CLS = 0.00`.
