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
    /* py-8 reduces the top/bottom buffer padding */
    <section className="py-12 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accent Bar */}
        <div className="bg-amber-400 h-1.5 mb-8 rounded-full" />

        {/* Content */}
        <div className="text-center">
          {/* Removed text-slate-900 so it inherits text-white */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          {/* Removed text-slate-700 and reduced mb-8 for tighter spacing */}
          <p className="text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto opacity-90">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button size="lg" className="hover:shadow-lg transition-shadow bg-white text-blue-600 hover:bg-slate-100 border-none">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
