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
 * 
 * FILE STRUCTURE FOR CSS MODULES:
 * src/
 *   styles/
 *     globals.css (current Tailwind imports)
 *     animations.css (shared animations)
 *   components/
 *     caseStudies/
 *       CaseStudyCard.module.css (image gallery animations)
 *       CaseStudyFilters.module.css (filter transitions)
 *       CaseStudyCard.tsx (import styles)
 *       CaseStudyFilters.tsx (import styles)
 * 
 * EXAMPLE CSS MODULE IMPLEMENTATION:
 * 
 * CaseStudyCard.module.css:
 * -----------------
 * .imageGallery {
 *   display: flex;
 *   flex-direction: column;
 *   gap: 1.5rem;
 * }
 * 
 * .galleryImage {
 *   animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
 *   opacity: 0;
 *   animation-fill-mode: forwards;
 * }
 * 
 * .galleryImage:nth-child(1) { animation-delay: 0ms; }
 * .galleryImage:nth-child(2) { animation-delay: 150ms; }
 * 
 * @keyframes slideIn {
 *   from {
 *     opacity: 0;
 *     transform: translateY(20px);
 *   }
 *   to {
 *     opacity: 1;
 *     transform: translateY(0);
 *   }
 * }
 * 
 * .resultItem {
 *   opacity: 0;
 *   transform: translateY(10px);
 * }
 * 
 * .resultItem.visible {
 *   animation: popIn 0.4s ease-out forwards;
 * }
 * 
 * @keyframes popIn {
 *   to {
 *     opacity: 1;
 *     transform: translateY(0);
 *   }
 * }
 * -----------------
 * 
 * Usage in component:
 * import styles from './CaseStudyCard.module.css';
 * 
 * <div className={styles.galleryImage}>
 *   <ImageWithFallback ... />
 * </div>
 * 
 * DECISION MATRIX:
 * 
 * Use Tailwind if:
 * ✓ Simple layout changes
 * ✓ Responsive breakpoints needed
 * ✓ State-based styling (hover, focus)
 * ✓ Color/spacing consistency
 * ✓ Standard components
 * 
 * Use CSS Modules if:
 * ✓ Complex animations
 * ✓ Staggered effects (multiple items)
 * ✓ Performance-critical animations
 * ✓ Reusable animation patterns
 * ✓ Custom easing functions
 * 
 * CURRENT CODEBASE:
 * All components use pure Tailwind - this is fine for now!
 * No complex animations = no need for CSS modules yet.
 * 
 * If you add animations later, create CSS modules in this order:
 * 1. CaseStudyCard.module.css (image reveals)
 * 2. animations.css (shared keyframes)
 * 3. Component-specific modules as needed
 */
