import React from "react";

export function Container({ children, className = "", maxWidth = "max-w-7xl" }: { children: React.ReactNode; className?: string; maxWidth?: string }) {
  return (
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
