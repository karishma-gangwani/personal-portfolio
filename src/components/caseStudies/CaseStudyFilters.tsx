/**
 * Case Study Filters Component
 * Reusable filter controls for case studies
 * Supports filtering by category and sector
 */

import { CategoryType, SectorType } from "../../types/caseStudy";

interface CaseStudyFiltersProps {
  selectedCategories: CategoryType[];
  selectedSectors: SectorType[];
  onToggleCategory: (category: CategoryType) => void;
  onToggleSector: (sector: SectorType) => void;
  resetFilters: () => void;
}

const CATEGORY_OPTIONS: { label: string; value: CategoryType }[] = [
  { label: "Consulting", value: "consulting" },
  { label: "Product Development", value: "product" },
];

const SECTOR_OPTIONS: { label: string; value: SectorType }[] = [
  { label: "Healthcare", value: "healthcare" },
  { label: "Pharma", value: "pharma" },
  { label: "Research", value: "research" },
  { label: "Nonprofit", value: "nonprofit" },
];

/** Single horizontal filter bar with multi-select chips */
export function CaseStudyFilters({
  selectedCategories,
  selectedSectors,
  onToggleCategory,
  onToggleSector,
  resetFilters,
}: CaseStudyFiltersProps) {
  return (
    <section className="bg-white border-b sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-semibold text-slate-600 mr-2">Filter:</span>

            {/* Category chips */}
            {CATEGORY_OPTIONS.map((opt) => {
              const active = selectedCategories.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => onToggleCategory(opt.value)}
                  aria-pressed={active}
                  title="click to show or hide the filters"
                  aria-label={`${opt.label} filter`}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm border transition-all duration-150 cursor-pointer ${
                    active
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}

            {/* Sector chips */}
            {SECTOR_OPTIONS.map((opt) => {
              const active = selectedSectors.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => onToggleSector(opt.value)}
                  aria-pressed={active}
                  title="click to show or hide the filters"
                  aria-label={`${opt.label} sector filter`}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm border transition-all duration-150 cursor-pointer ${
                    active
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={resetFilters}
              title="click to reset all filters"
              aria-label="reset filters"
              className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
