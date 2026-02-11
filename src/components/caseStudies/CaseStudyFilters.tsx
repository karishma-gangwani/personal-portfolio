/**
 * Case Study Filters Component
 * Reusable filter controls for case studies
 * Supports filtering by category and sector
 */

import { Button } from "../ui/button";
import { CategoryFilter, SectorFilter } from "../../types/caseStudy";

interface CaseStudyFiltersProps {
  selectedCategory: CategoryFilter;
  selectedSector: SectorFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  onSectorChange: (sector: SectorFilter) => void;
}

/**
 * Renders filter controls for case studies
 * Features:
 * - Category filter (All, Consulting, Product)
 * - Sector filter (All, Healthcare, Pharma, Research, Nonprofit)
 * - Responsive button layout
 * - Active state indicators
 */
export function CaseStudyFilters({
  selectedCategory,
  selectedSector,
  onCategoryChange,
  onSectorChange,
}: CaseStudyFiltersProps) {
  return (
    <section className="bg-white border-b sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Category Filters */}
        <FilterGroup
          label="Filter by Type:"
          buttons={[
            { label: "All Projects", value: "all" as const },
            { label: "Consulting", value: "consulting" as const },
            { label: "Product Development", value: "product" as const },
          ]}
          selectedValue={selectedCategory}
          onSelect={onCategoryChange}
        />

        {/* Sector Filters */}
        <FilterGroup
          label="Filter by Sector:"
          buttons={[
            { label: "All Sectors", value: "all" as const },
            { label: "Healthcare", value: "healthcare" as const },
            { label: "Pharma", value: "pharma" as const },
            { label: "Research", value: "research" as const },
            { label: "Nonprofit", value: "nonprofit" as const },
          ]}
          selectedValue={selectedSector}
          onSelect={onSectorChange}
          isSmall
        />
      </div>
    </section>
  );
}

interface FilterButton {
  label: string;
  value: string;
}

interface FilterGroupProps {
  label: string;
  buttons: FilterButton[];
  selectedValue: string;
  onSelect: (value: any) => void;
  isSmall?: boolean;
}

/**
 * Reusable filter button group component
 * Tailwind note: Uses Tailwind for responsive layout (flex-wrap)
 * CSS suggestion: For animated button states, consider custom CSS
 * with smooth transitions on background-color and border-color
 */
function FilterGroup({
  label,
  buttons,
  selectedValue,
  onSelect,
  isSmall = false,
}: FilterGroupProps) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-600 block mb-3">
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {buttons.map((button) => (
          <Button
            key={button.value}
            variant={selectedValue === button.value ? "default" : "outline"}
            size={isSmall ? "sm" : "default"}
            onClick={() => onSelect(button.value)}
            className="transition-all duration-200"
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
