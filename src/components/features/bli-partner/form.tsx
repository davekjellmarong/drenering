"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormField from "./FormField";
import CompanySearchInput from "./CompanySearchInput";
import SubmitButton from "./SubmitButton";
import type { Company, FormData } from "@/src/utils/types";

export default function ClientSignupForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    orgNumber: "",
    email: "",
    street: "",
    town: "",
    postalCode: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCompanySelect = (company: Company) => {
    setFormData({
      ...formData,
      name: company.navn,
      orgNumber: company.organisasjonsnummer,
      street: company.forretningsadresse?.adresse[0] || "",
      town: company.forretningsadresse?.poststed || "",
      postalCode: company.forretningsadresse?.postnummer || "",
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrevd";
    }

    if (!formData.orgNumber.trim()) {
      newErrors.orgNumber = "Organisasjonsnummer er påkrevd";
    } else if (!/^\d{9}$/.test(formData.orgNumber.trim())) {
      newErrors.orgNumber = "Organisasjonsnummer må bestå av 9 siffer";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post er påkrevd";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Vennligst oppgi en gyldig e-postadresse";
    }

    if (!formData.street.trim()) {
      newErrors.street = "Gatenavn er påkrevd";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postnummer er påkrevd";
    } else if (!/^\d{4}$/.test(formData.postalCode.trim())) {
      newErrors.postalCode = "Postnummer må bestå av 4 siffer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to your API
      // const response = await fetch('/api/partners', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to success page or dashboard
      router.push("/bli-partner/takk");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Company Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-800">
            Firmaopplysninger
          </h3>

          <CompanySearchInput
            id="name"
            label="Firmanavn *"
            value={formData.name}
            onChange={handleChange}
            onCompanySelect={handleCompanySelect}
            error={errors.name}
            placeholder="Søk med firmanavn"
          />

          <FormField
            id="orgNumber"
            label="Organisasjonsnummer *"
            value={formData.orgNumber}
            onChange={handleChange}
            error={errors.orgNumber}
          />

          <FormField
            id="street"
            label="Gate *"
            value={formData.street}
            onChange={handleChange}
            error={errors.street}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              id="town"
              label="By *"
              value={formData.town}
              onChange={handleChange}
              error={errors.town}
            />

            <FormField
              id="postalCode"
              label="Postnummer *"
              value={formData.postalCode}
              onChange={handleChange}
              error={errors.postalCode}
              placeholder="4 siffer"
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-4 pt-2">
          <h3 className="text-lg font-medium text-brand-800">
            Kontaktinformasjon
          </h3>

          <FormField
            id="email"
            label="E-post *"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>
      </div>

      <div className="pt-6">
        <SubmitButton
          isSubmitting={isSubmitting}
          text="Registrer som partner"
        />
      </div>

      <p className="text-sm text-brand-600 text-center">
        Ved å registrere deg godtar du våre{" "}
        <a href="/brukervilkar" className="text-brand-500 hover:underline">
          brukervilkår
        </a>{" "}
        og{" "}
        <a href="/personvern" className="text-brand-500 hover:underline">
          personvernregler
        </a>
        .
      </p>
    </form>
  );
}
