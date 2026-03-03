/**
 * Case Studies Header Component
 * Reusable header section with title and description
 */

interface CaseStudyHeaderProps {
  title?: string;
  description?: string;
}

/**
 * Renders the header section for case studies page
 * Tailwind note: Uses gradient backgrounds and responsive typography
 * CSS suggestion: For complex gradients or animations, could be moved to CSS
 */
export function CaseStudyHeader({
  title = "Case Studies",
  description = "Real-world examples of successful projects across consulting and product development, showcasing measurable impact and innovative solutions.",
}: CaseStudyHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
