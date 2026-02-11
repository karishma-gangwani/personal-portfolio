/**
 * Custom hook for managing case study filters
 * Encapsulates filtering logic for reusability across components
 */

import { useState, useMemo } from "react";
import { CaseStudy, CategoryFilter, SectorFilter } from "../types/caseStudy";

export interface UseCaseStudyFiltersReturn {
  selectedCategory: CategoryFilter;
  selectedSector: SectorFilter;
  filteredCaseStudies: CaseStudy[];
  setSelectedCategory: (category: CategoryFilter) => void;
  setSelectedSector: (sector: SectorFilter) => void;
  resetFilters: () => void;
}

/**
 * Hook for managing and filtering case studies
 * @param caseStudies - Array of case studies to filter
 * @returns Filter state and methods
 */
export function useCaseStudyFilters(
  caseStudies: CaseStudy[]
): UseCaseStudyFiltersReturn {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    "all"
  );
  const [selectedSector, setSelectedSector] = useState<SectorFilter>("all");

  // Memoize filtered results to avoid unnecessary recalculations
  const filteredCaseStudies = useMemo(() => {
    return caseStudies
      .filter(
        (study) =>
          selectedCategory === "all" || study.category === selectedCategory
      )
      .filter(
        (study) => selectedSector === "all" || study.sector === selectedSector
      );
  }, [caseStudies, selectedCategory, selectedSector]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedSector("all");
  };

  return {
    selectedCategory,
    selectedSector,
    filteredCaseStudies,
    setSelectedCategory,
    setSelectedSector,
    resetFilters,
  };
}
