"use client";

import type React from "react";
import { useState } from "react";
import { addContactToHubspot } from "@/src/server_actions/Hubspot";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { StepIndicator } from "./StepIndicator";
import { PersonalInfo } from "./PersonalInfoFields";
import { PropertyInfoFields } from "./PropertyInfoFields";
import { Review } from "./Review";
import { FormNavigation } from "./NavigationButtons";

export interface QuoteFormData {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  propertytype: "house" | "apartment" | "";
  propertysize: string;
}

export function QuoteForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QuoteFormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    propertytype: "",
    propertysize: "",
  });

  const steps = [
    { title: "Personlig informasjon" },
    { title: "Eiendomsinformasjon" },
    { title: "Gjennomgang" },
  ];

  const { mutate, isPending } = useMutation({
    mutationFn: addContactToHubspot,
    onSuccess: () => {
      toast.success("Allt godt!");
      router.push("/tilbud/takk");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
      // toast.error(error.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    // Simple validation for each step
    if (currentStep === 0) {
      if (
        !formData.firstname ||
        !formData.lastname ||
        !formData.phone ||
        !formData.email
      ) {
        return;
      }
    } else if (currentStep === 1) {
      if (
        !formData.address ||
        !formData.city ||
        !formData.zip ||
        !formData.propertytype
      ) {
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <StepIndicator steps={steps} currentStep={currentStep} />
      <form
        action={() => {
          if (currentStep === 2) mutate(formData);
        }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
      >
        {currentStep === 0 && (
          <PersonalInfo formData={formData} onChange={handleChange} />
        )}
        {currentStep === 1 && (
          <PropertyInfoFields
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
          />
        )}
        {currentStep === 2 && <Review formData={formData} />}
        <FormNavigation
          currentStep={currentStep}
          totalSteps={steps.length}
          isPending={isPending}
          nextStep={nextStep}
          prevStep={prevStep}
          onSubmit={() => mutate(formData)}
        />
      </form>
    </div>
  );
}
