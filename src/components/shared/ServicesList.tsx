import React from "react";

export function ServicesList({ services }: { services: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {services.map((service, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
            <div className="bg-blue-600 rounded-full w-2 h-2"></div>
          </div>
          <span className="text-slate-700">{service}</span>
        </div>
      ))}
    </div>
  );
}
