/**
 * Case Studies Page
 * Main page component that orchestrates case study display
 * Uses reusable components and centralized data
 */

import { CASE_STUDIES_DATA } from "../data/caseStudies";
import { useCaseStudyFilters } from "../hooks/useCaseStudyFilters";
import { CaseStudyHeader } from "../components/caseStudies/CaseStudyHeader";
import { CaseStudyFilters } from "../components/caseStudies/CaseStudyFilters";
import { CaseStudyCard } from "../components/caseStudies/CaseStudyCard";
import { CaseStudyCTA } from "../components/caseStudies/CaseStudyCTA";

/**
 * Main case studies page component
 * Manages filter state and renders case study cards
 * Performance: Uses useMemo in hook to prevent unnecessary recalculations
 */
export function CaseStudies() {
  const {
    selectedCategory,
    selectedSector,
    filteredCaseStudies,
    setSelectedCategory,
    setSelectedSector,
  } = useCaseStudyFilters(CASE_STUDIES_DATA);

  return (
    <div>
      <CaseStudyHeader />

      <CaseStudyFilters
        selectedCategory={selectedCategory}
        selectedSector={selectedSector}
        onCategoryChange={setSelectedCategory}
        onSectorChange={setSelectedSector}
      />

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyCTA />
    </div>
  );
}
