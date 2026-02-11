/**
 * Case Studies Grid Component
 * Responsive grid layout that dynamically arranges cards
 * Adapts to viewport size and automatically reflows when items are filtered
 */

import { CaseStudy } from "../../types/caseStudy";
import { CaseStudyCard } from "./CaseStudyCard";

interface CaseStudiesGridProps {
  studies: CaseStudy[];
  isLoading?: boolean;
}

/**
 * Responsive grid container for case study cards
 * Features:
 * - 1 column on mobile (< 640px)
 * - 1 column on tablet (640px - 1024px)
 * - 2 columns on desktop (> 1024px)
 * - Automatic reflow when cards are hidden/shown
 * - Equal height cards for visual consistency
 * - Uses CSS Grid for better responsive behavior
 *
 * CSS Tailwind notes:
 * - uses gap-6 for consistent spacing
 * - auto-rows-fr for equal height cards
 * - grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 for responsive columns
 */
export function CaseStudiesGrid({ studies, isLoading = false }: CaseStudiesGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-96 bg-slate-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (studies.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-16">
        <p className="text-lg text-slate-600 text-center">
          No case studies match your filters. Try adjusting your selection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {studies.map((study, index) => (
        <CaseStudyCard key={study.id} study={study} index={index} />
      ))}
    </div>
  );
}
