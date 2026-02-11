import React from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Link } from "react-router";

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function Hero({ title, subtitle, actions, imageSrc, imageAlt, className }: HeroProps) {
  return (
    <section className={`relative bg-gradient-to-br from-blue-50 to-slate-50 py-12 md:py-32 ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{title}</h1>
            {subtitle && <p className="text-lg text-slate-700 mb-8">{subtitle}</p>}
            {actions && <div className="flex flex-col sm:flex-row gap-4">{actions}</div>}
          </div>
          <div className="relative">
            {imageSrc ? (
              <ImageWithFallback src={imageSrc} alt={imageAlt ?? "hero image"} className="rounded-lg shadow-2xl w-full h-auto" />
            ) : (
              <ImageWithFallback className="rounded-lg shadow-2xl w-full h-auto" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
