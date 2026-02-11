/**
 * Type definitions for Case Studies
 * Centralized types for better maintainability and reusability
 */

export type CategoryType = "consulting" | "product";
export type SectorType = "healthcare" | "pharma" | "research" | "nonprofit";

export interface PublicationLink {
  label: string;
  url: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: CategoryType;
  sector: SectorType;
  service: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  publicationLink?: PublicationLink;
  images: string | string[];
}

export type CategoryFilter = "all" | CategoryType;
export type SectorFilter = "all" | SectorType;

export interface FilterState {
  category: CategoryFilter;
  sector: SectorFilter;
}
