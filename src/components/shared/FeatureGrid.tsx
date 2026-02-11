import React from "react";
import { Card, CardContent } from "../ui/card";

type FeatureItem = {
  icon?: any;
  title: string;
  description: string;
};

export function FeatureGrid({ items, className = "" }: { items: FeatureItem[]; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 pb-6">
              {Icon && (
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
              )}
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
