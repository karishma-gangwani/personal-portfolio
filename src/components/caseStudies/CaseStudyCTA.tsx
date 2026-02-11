/**
 * Case Study CTA Component
 * Reusable call-to-action section for end of case studies page
 */

import { Link } from "react-router";
import { Button } from "../ui/button";

interface CaseStudyCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

/**
 * Renders a call-to-action section with accent background
 * Features:
 * - Customizable title and description
 * - Customizable button text and link
 * - Colored background with accent bar
 * - Centered layout with proper spacing
 */
export function CaseStudyCTA({
  title = "Ready to Create Your Success Story?",
  description = "Let's discuss how we can achieve similar results for your organization.",
  buttonText = "Start a Project",
  buttonLink = "/contact",
}: CaseStudyCTAProps) {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
        {/* Accent Bar */}
        <div className="bg-amber-400 h-2 mb-12 rounded-full" />

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button size="lg" className="hover:shadow-lg transition-shadow">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
