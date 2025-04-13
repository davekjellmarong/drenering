"use client";

import type React from "react";
import { toast } from "sonner";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addCompanyToHubspot } from "@/src/server_actions/Hubspot";
import { useRouter } from "next/navigation";
import { SuccessMessage } from "./SuccessMessage";
import { PartnerAddressFields } from "./AddressFields";
import { PartnerContactFields } from "./ContactFields";
import { PartnerTermsAgreement } from "./AgreeTerms";
import { PartnerSubmitButton } from "./Submit";
import { PartnerCompanySearch } from "./CompanySearch";

export interface PartnerFormData {
  companyName: string;
  email: string;
  phone: string;
  contactName: string;
  website: string;
  address: string;
  postalCode: string;
  city: string;
  // services: string[];
  // description: string;
  termsAccepted: boolean;
}

export function PartnerSignupForm() {
  const [formData, setFormData] = useState<PartnerFormData>({
    companyName: "",
    email: "",
    phone: "",
    contactName: "",
    website: "",
    address: "",
    postalCode: "",
    city: "",
    // services: [],
    // description: "",
    termsAccepted: false,
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const updateForm = (fields: Partial<PartnerFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addCompanyToHubspot,
    onSuccess: () => {
      toast.success("Søknaden er registrert!");
      router.push("/bli-partner/takk");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // const handleServiceChange = (service: string) => {
  //   const updated = formData.services.includes(service)
  //     ? formData.services.filter((s) => s !== service)
  //     : [...formData.services, service];
  //   updateForm({ services: updated });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!formData.termsAccepted) return;
  //   setIsSubmitting(true);
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     setIsSuccess(true);
  //   } catch (err) {
  //     console.error("Error submitting form", err);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // const SERVICE_TYPES = [
  //   "Dreneringsrensing",
  //   "Drensrørreparasjon",
  //   "Dreneringsinstallasjon",
  //   "Rørskifte",
  //   "Nøddrenering",
  //   "Dreneringsinspeksjon",
  //   "Annet",
  // ];

  if (isSuccess) {
    return <SuccessMessage onReset={() => setIsSuccess(false)} />;
  }

  return (
    <form action={mutate} className="space-y-4">
      <PartnerCompanySearch formData={formData} updateForm={updateForm} />
      <PartnerAddressFields formData={formData} />
      <PartnerContactFields formData={formData} updateForm={updateForm} />
      <PartnerTermsAgreement
        checked={formData.termsAccepted}
        onChange={(checked) => updateForm({ termsAccepted: checked })}
      />
      <PartnerSubmitButton isLoading={isPending} />
    </form>
  );
}
