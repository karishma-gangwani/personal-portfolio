import React from "react";

type PageSectionProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  bg?: string;
  className?: string;
};

export function PageSection({ title, subtitle, children, bg = "bg-white", className = "" }: PageSectionProps) {
  return (
    <section className={`py-12 ${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
