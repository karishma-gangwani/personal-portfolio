/**
 * Custom hook for managing case study filters
 * Encapsulates filtering logic for reusability across components
 */

import { useState, useMemo, useCallback } from "react";
import {
  CaseStudy,
  CategoryType,
  SectorType,
  CategoryFilter,
  SectorFilter,
} from "../types/caseStudy";

export interface UseCaseStudyFiltersReturn {
  selectedCategories: CategoryType[]; // empty => no category filter (all)
  selectedSectors: SectorType[]; // empty => no sector filter (all)
  filteredCaseStudies: CaseStudy[];
  toggleCategory: (category: CategoryType) => void;
  toggleSector: (sector: SectorType) => void;
  resetFilters: () => void;
}

/**
 * Hook for managing and filtering case studies (multi-select)
 * @param caseStudies - Array of case studies to filter
 * @returns Filter state and methods
 */
export function useCaseStudyFilters(
  caseStudies: CaseStudy[]
): UseCaseStudyFiltersReturn {
  const [selectedCategories, setSelectedCategories] = useState<
    CategoryType[]
  >([]);
  const [selectedSectors, setSelectedSectors] = useState<SectorType[]>([]);

  const toggleCategory = useCallback(
    (category: CategoryType) => {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      );
    },
    [setSelectedCategories]
  );

  const toggleSector = useCallback(
    (sector: SectorType) => {
      setSelectedSectors((prev) =>
        prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]
      );
    },
    [setSelectedSectors]
  );

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const categoryPass =
        selectedCategories.length === 0 || selectedCategories.includes(study.category);
      const sectorPass =
        selectedSectors.length === 0 || selectedSectors.includes(study.sector);
      return categoryPass && sectorPass;
    });
  }, [caseStudies, selectedCategories, selectedSectors]);

  const resetFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedSectors([]);
  }, []);

  return {
    selectedCategories,
    selectedSectors,
    filteredCaseStudies,
    toggleCategory,
    toggleSector,
    resetFilters,
  };
}
