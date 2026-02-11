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
import { Container } from "../components/shared/Container";

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
        <Container>
          <div className="space-y-12">
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CaseStudyCTA />
    </div>
  );
}
