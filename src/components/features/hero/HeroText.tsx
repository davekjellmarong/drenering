import { ReactNode } from "react";

interface HeroTextProps {
  badge?: string;
  description: string;
  children: ReactNode;
}

export function HeroText({ badge, description, children }: HeroTextProps) {
  return (
    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
      {badge && (
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-medium mb-4">
          #1 Sammenligningstjeneste for Dreneringstilbud
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        {children}
      </h1>

      <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto lg:mx-0">
        {description}
      </p>

      <ul className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8 mb-6 text-white">
        {[
          "Gratis tilbud fra lokale fagfolk",
          "Sammenlign tjenester og priser",
          "Ingen forpliktelser",
        ].map((benefit) => (
          <li
            key={benefit}
            className="flex items-center justify-center sm:justify-start"
          >
            <svg
              className="h-5 w-5 text-brand-300 mr-2 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 10L9 12L13 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
