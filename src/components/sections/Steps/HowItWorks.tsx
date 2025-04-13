import { ArrowRight } from "lucide-react";
import { JSX } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: JSX.Element;
  details: string[];
}

export default function HowItWorksSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="max-w-5xl mx-auto mb-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-text">
        Tre Enkle Steg til Løsningen Din
      </h2>
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute left-24 top-32 bottom-[-80px] w-1 bg-brand-100" />
            )}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-brand-50 flex items-center justify-center mb-4 relative z-10">
                  {step.icon}
                  <span className="absolute top-0 right-0 w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {step.number.split("0")[1]}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-text">
                  {step.title}
                </h3>
                <p className="text-lg text-text-subtle mb-6">
                  {step.description}
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <h4 className="font-medium mb-4">Hva dette innebærer:</h4>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
