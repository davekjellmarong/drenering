"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { QuoteFormData } from "./NewSmallForm";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isPending: boolean;
  nextStep: () => void;
  prevStep: () => void;
  onSubmit: () => void;
  formData?: QuoteFormData;
}

export function FormNavigation({
  currentStep,
  totalSteps,
  isPending,
  nextStep,
  prevStep,
  onSubmit,
}: FormNavigationProps) {
  return (
    <div className="mt-8 flex justify-between">
      {currentStep > 0 ? (
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tilbake
        </Button>
      ) : (
        <div />
      )}

      {currentStep < totalSteps - 1 ? (
        <Button type="button" onClick={nextStep}>
          Neste
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button type="button" disabled={isPending} onClick={onSubmit}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sender inn...
            </>
          ) : (
            "Send Inn"
          )}
        </Button>
      )}
    </div>
  );
}
