/**
 * Case Study Card Component
 * Reusable card component for displaying individual case studies
 * Supports both single and multiple images
 */

import { CaseStudy } from "../../types/caseStudy";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

/**
 * Renders a single case study as an interactive card
 * Features:
 * - Responsive layout (image left/right alternating on desktop)
 * - Support for single or multiple images
 * - Category and service badges
 * - Full case study details (challenge, solution, results)
 * - Optional publication link
 */
export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  // Alternate image position on desktop (left/right)
  const isReverseLayout = index % 2 === 1;

  return (
    <a href={`/case-studies/${study.id}`} className="no-underline block">
      <Card className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl h-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch ${
            isReverseLayout ? "lg:grid-flow-dense" : ""
          }`}
        >
        {/* Image Section */}
        <ImageSection study={study} isReverse={isReverseLayout} />

        {/* Content Section */}
        <ContentSection study={study} isReverse={isReverseLayout} />
      </div>
    </Card>
    </a>
  );
}

interface ImageSectionProps {
  study: CaseStudy;
  isReverse: boolean;
}

/**
 * Image display section supporting single or multiple images
 * Tailwind note: Uses Tailwind for responsive layout
 * CSS consideration: If you need custom image transitions,
 * consider adding a separate .module.css file for smooth gallery effects
 */
function ImageSection({ study, isReverse }: ImageSectionProps) {
  return (
    <div
      className={`flex flex-col gap-8 items-center justify-center bg-white p-8 ${
        isReverse ? "lg:col-start-2" : ""
      }`}
    >
      {Array.isArray(study.images) ? (
        <div className="w-full space-y-6">
          {study.images.map((imgSrc: string, i: number) => (
            <div key={i} className="w-full">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={imgSrc}
                  alt={`${study.title} - visual ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
            <ImageWithFallback
              src={study.images}
              alt={study.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface ContentSectionProps {
  study: CaseStudy;
  isReverse: boolean;
}

/**
 * Text content section with study details
 * Tailwind note: Uses Tailwind for layout and spacing
 * CSS suggestion: For complex typography hierarchies, consider
 * creating globals.css classes for consistent heading styles
 */
function ContentSection({ study, isReverse }: ContentSectionProps) {
  return (
    <CardContent
      className={`p-8 flex flex-col justify-between ${isReverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
    >
      {/* Content grouped — spacing controlled by wrapper */}
      <div className="space-y-6">
        <div>
          <div className="text-sm text-slate-500">{study.service}</div>
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{study.title}</h2>
          <p className="text-base text-slate-700 leading-relaxed">{study.description}</p>
        </div>

        {/* Details Grid — children control spacing here */}
        <div className="space-y-6">
          <DetailSection title="Challenge" content={study.challenge} />
          <DetailSection title="Solution" content={study.solution} />

          {/* Results List */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Results</h3>
            <ul className="space-y-3">
              {study.results.map((result: string, i: number) => (
                <ResultItem key={i} result={result} />
              ))}
            </ul>
          </div>

          {/* Publication Link */}
          {study.publicationLink && (
            <div className="pt-4 border-t border-slate-200">
              <a
                href={study.publicationLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
              >
                {study.publicationLink.label}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </CardContent>
    );
}

interface DetailSectionProps {
  title: string;
  content: string;
}

function DetailSection({ title, content }: DetailSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{content}</p>
    </div>
  );
}

interface ResultItemProps {
  result: string;
}

/**
 * Individual result item with checkmark indicator
 * Tailwind note: Uses Tailwind for flexbox and spacing
 * CSS suggestion: If you want animated checkmarks on scroll,
 * consider creating a separate CSS module with animation keyframes
 */
function ResultItem({ result }: ResultItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
          <div className="w-2 h-2 rounded-full bg-green-600" />
        </div>
      </div>
      <span className="text-slate-700">{result}</span>
    </li>
  );
}
