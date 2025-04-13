import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: { title: string }[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                index < currentStep
                  ? "bg-brand-600 border-brand-600 text-white"
                  : index === currentStep
                  ? "bg-white border-brand-600 text-brand-600"
                  : "bg-background-100 border-border text-muted"
              }`}
            >
              {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
            </div>
            <div className="text-xs text-center mt-2 max-w-[80px] text-text-subtle">
              {step.title}
            </div>

            {index < steps.length - 1 && (
              <div
                className={`absolute top-5 w-full h-[2px] left-1/2 ${
                  index < currentStep ? "bg-brand-600" : "bg-border"
                }`}
                style={{ width: "calc(100% - 2.5rem)" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
