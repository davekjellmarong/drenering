"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { ArrowLeft, ArrowRight, Loader2, Check } from "lucide-react";
import { addContactToHubspot } from "@/src/server_actions/Hubspot";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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

// interface QuoteFormProps {
//   onSubmit?: (formData: QuoteFormData) => Promise<void>;
// }

const KOMMUNER = [
  "Oslo",
  "Bergen",
  "Trondheim",
  "Stavanger",
  "Drammen",
  "Kristiansand",
  "Tromsø",
  "Fredrikstad",
  "Sandnes",
  "Sarpsborg",
  "Bodø",
  "Ålesund",
  "Sandefjord",
  "Larvik",
  "Tønsberg",
  "Halden",
  "Moss",
  "Hamar",
  "Lillehammer",
  "Gjøvik",
];

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

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     // Final validation
  //     if (
  //       !formData.firstname ||
  //       !formData.lastname ||
  //       !formData.phone ||
  //       !formData.email ||
  //       !formData.address ||
  //       !formData.city ||
  //       !formData.zip ||
  //       !formData.propertytype
  //     ) {
  //       return;
  //     }

  //     setIsSubmitting(true);

  //     try {
  //       if (onSubmit) {
  //         await onSubmit(formData);
  //       }
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };
  console.log(currentStep);
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Step indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  index < currentStep
                    ? "bg-blue-600 border-blue-600 text-white"
                    : index === currentStep
                    ? "bg-white border-blue-600 text-blue-600"
                    : "bg-gray-100 border-gray-300 text-gray-400"
                }`}
              >
                {index < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  index + 1
                )}
              </div>
              <div className="text-xs text-center mt-2 max-w-[80px]">
                {step.title}
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 w-full h-[2px] left-1/2 ${
                    index < currentStep ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  style={{ width: "calc(100% - 2.5rem)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form
        // onSubmit={() => mutate(formData)}
        action={() => {
          if (currentStep === 2) mutate(formData);
        }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
      >
        {/* Step 1: Personal Information */}
        {currentStep === 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Personlig informasjon</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Fornavn *
                  </Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="Fornavn"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Etternavn *
                  </Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Etternavn"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefon *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Telefonnummer"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-post *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-postadresse"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 2: Property Information */}
        {currentStep === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Eiendomsinformasjon</h2>
            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Gateadresse *
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Gateadresse"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Kommune *
                  </Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, city: value }))
                    }
                  >
                    <SelectTrigger id="city">
                      <SelectValue placeholder="Velg kommune" />
                    </SelectTrigger>
                    <SelectContent>
                      {KOMMUNER.map((kommune) => (
                        <SelectItem key={kommune} value={kommune}>
                          {kommune}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Postnummer *
                  </Label>
                  <Input
                    id="zip"
                    name="zip"
                    placeholder="Postnummer"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Boligtype *
                </Label>
                <RadioGroup
                  value={formData.propertytype}
                  onValueChange={(value: "house" | "apartment") =>
                    setFormData((prev) => ({ ...prev, propertytype: value }))
                  }
                  className="flex space-x-4 mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="house" id="property-house" />
                    <Label
                      htmlFor="property-house"
                      className="font-normal cursor-pointer"
                    >
                      Hus
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="apartment" id="property-apartment" />
                    <Label
                      htmlFor="property-apartment"
                      className="font-normal cursor-pointer"
                    >
                      Leilighet
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label
                  htmlFor="propertysize"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Boligstørrelse (m²)
                </Label>
                <Input
                  id="propertysize"
                  name="propertysize"
                  type="number"
                  placeholder="Størrelse i kvadratmeter"
                  value={formData.propertysize}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}

        {/* Step 3: Review */}
        {currentStep === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Gjennomgang</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Personlig informasjon</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-gray-500">Navn</p>
                    <p>
                      {formData.firstname} {formData.lastname}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p>{formData.phone}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">E-post</p>
                    <p>{formData.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Eiendomsinformasjon</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Adresse</p>
                    <p>{formData.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kommune</p>
                    <p>{formData.city}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Postnummer</p>
                    <p>{formData.zip}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Boligtype</p>
                    <p>
                      {formData.propertytype === "house" ? "Hus" : "Leilighet"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Størrelse</p>
                    <p>{formData.propertysize} m²</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          {currentStep > 0 ? (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Tilbake
            </Button>
          ) : (
            <div></div>
          )}

          {currentStep < steps.length - 1 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Neste <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="button"
              disabled={isPending}
              onClick={() => mutate(formData)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
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
      </form>
    </div>
  );
}
