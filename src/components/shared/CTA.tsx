import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export function CTA({ title, text, href, buttonLabel }: { title: React.ReactNode; text?: React.ReactNode; href: string; buttonLabel: string }) {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center items-center">
        <h2 className="text-3xl md:text-4xl mb-6">{title}</h2>
        {text && <p className="text-xl mb-8 text-blue-100">{text}</p>}
        <Link to={href}>
          <Button size="lg" variant="secondary">
            {buttonLabel}
          </Button>
        </Link>
      </div>
    </section>
  );
}
