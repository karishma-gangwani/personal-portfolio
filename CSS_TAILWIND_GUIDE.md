/**
 * CSS vs Tailwind Recommendations
 * 
 * CURRENT APPROACH:
 * The refactored codebase uses Tailwind CSS for all styling.
 * This provides: fast development, consistency, responsive design
 * 
 * WHEN TO USE TAILWIND (Current Approach - ✓):
 * - Responsive layouts (flex, grid, breakpoints)
 * - Color consistency (bg-white, text-slate-700)
 * - Spacing and sizing (px-4, py-6, w-full)
 * - States (hover:, focus:, group-hover:)
 * - Standard components (buttons, cards, badges)
 * 
 * WHEN TO ADD CUSTOM CSS (Recommendations):
 * 
 * 1. IMAGE GALLERY ANIMATIONS
 *    File: src/components/caseStudies/CaseStudyCard.module.css
 *    Use: For smooth image transitions and stagger animations
 *    Example:
 *    .galleryImage {
 *      animation: slideIn 0.6s ease-out;
 *      animation-fill-mode: both;
 *    }
 *    .galleryImage:nth-child(1) { animation-delay: 0s; }
 *    .galleryImage:nth-child(2) { animation-delay: 0.2s; }
 *    @keyframes slideIn { ... }
 * 
 * 2. FILTER BUTTON TRANSITIONS
 *    File: src/components/caseStudies/CaseStudyFilters.module.css
 *    Use: For smooth background/border color transitions
 *    Current Tailwind handles this well, but CSS module allows
 *    for more complex transition timing if needed.
 * 
 * 3. SCROLL-TRIGGERED ANIMATIONS
 *    File: src/styles/animations.css
 *    Use: For result items to animate in on scroll
 *    Would require scroll listener + CSS animations
 *    Alternative: Use Intersection Observer API
 * 
 * 4. GRADIENT ANIMATIONS
 *    Use case: If you want animated gradients in header
 *    Tailwind limitations: Static gradients only
 *    CSS solution:
 *    @keyframes gradientShift {
 *      0% { background-position: 0% center; }
 *      100% { background-position: 100% center; }
 *    }
 * 
 * RECOMMENDATION FOR YOUR SITE:
 * 
 * PHASE 1 (Current - ✓ DONE):
 * ✓ Use Tailwind for all structure and layout
 * ✓ Component-level styling with Tailwind
 * ✓ Keep bundle size small (Tailwind with purging)
 * 
 * PHASE 2 (Optional Enhancement):
 * □ Add CaseStudyCard.module.css for image gallery animations
 * □ Add ResultItem animation on scroll (smooth bottom-to-top reveal)
 * □ Add smooth transitions for filter button state changes
 * 
 * PERFORMANCE NOTES:
 * - Current setup: ~35-40KB Tailwind CSS (minified)
 * - Adding CSS modules: +2-5KB per module
 * - Benefit: Better performance for complex animations
 * - Trade-off: Small additional file size, but animations are smoother
 *   and don't block main thread
# Tailwind vs custom CSS — recommendations

Current approach
----------------
This project uses Tailwind for layout and component styling (buttons, cards, grids). That's the right trade-off for speed and consistency.

When to keep using Tailwind
---------------------------
- Layouts: grid, flex, spacing, breakpoints
- Colors, spacing, and state utilities (hover/focus)
- Small component tweaks where BEM-like naming isn't needed

When to introduce CSS modules or plain CSS
-----------------------------------------
- Complex/performant animations (staggered image reveals, motion that needs keyframes)
- Cross-component shared keyframes (put in `src/styles/animations.css`)
- Cases where Tailwind becomes unreadable due to many utilities stacked together

Suggested structure
-------------------
- `src/styles/globals.css` — tailwind base imports
- `src/styles/animations.css` — shared keyframes
- `src/components/.../*.module.css` — component-specific animations when needed

Quick decision checklist
-----------------------
- If it's layout/state: use Tailwind
- If it's a complex animation or performance-sensitive effect: use a CSS module

Notes
-----
Keep Tailwind as the canonical approach; add CSS modules only when they solve a measurable visual/UX need.
