"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Home,
  Phone,
  Mail,
  Check,
  Loader2,
} from "lucide-react";

interface FormData {
  serviceType: string;
  address: string;
  description: string;
  customerType: string;
  drainageType: string;
  propertyType: string;
  propertySize: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  city: string;
}

export default function FullQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    serviceType: "",
    address: "",
    description: "",
    customerType: "private",
    drainageType: "",
    propertyType: "",
    propertySize: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    city: "",
  });

  // Load initial form data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem("initialFormData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData((prev) => ({ ...prev, ...parsedData }));

        // Clear localStorage after retrieving the data
        localStorage.removeItem("initialFormData");
      } catch (error) {
        console.error("Error parsing saved form data:", error);
      }
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateCurrentStep = () => {
    // switch (currentStep) {
    //   case 1: // Service Details
    //     if (!formData.serviceType) {
    //       toast({
    //         title: "Tjenestetype kreves",
    //         description: "Vennligst velg en tjenestetype",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     break;
    //   case 2: // Drainage Type
    //     if (!formData.drainageType) {
    //       toast({
    //         title: "Dreneringstype kreves",
    //         description: "Vennligst velg en dreneringstype",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     break;
    //   case 3: // Property Details
    //     if (!formData.propertyType) {
    //       toast({
    //         title: "Eiendomstype kreves",
    //         description: "Vennligst velg en eiendomstype",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     break;
    //   case 4: // Timeline
    //     if (!formData.timeline) {
    //       toast({
    //         title: "Tidslinje kreves",
    //         description: "Vennligst velg en tidslinje",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     break;
    //   case 5: // Contact Info
    //     if (!formData.name || !formData.email || !formData.phone) {
    //       toast({
    //         title: "Kontaktinformasjon kreves",
    //         description: "Vennligst fyll ut alle påkrevde felt",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     break;
    // }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateCurrentStep()) return;

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      //   toast({
      //     title: "Forespørsel sendt!",
      //     description:
      //       "Vi vil kontakte deg snart med tilbud fra lokale dreneringseksperter.",
      //   });

      // Redirect or show success message
    } catch (error) {
      console.error("Error submitting form:", error);
      //   toast({
      //     title: "Noe gikk galt",
      //     description: "Vennligst prøv igjen senere.",
      //     variant: "destructive",
      //   });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step indicator component
  const StepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step < currentStep
                  ? "bg-blue-600 border-blue-600 text-white"
                  : step === currentStep
                  ? "bg-white border-blue-600 text-blue-600"
                  : "bg-gray-100 border-gray-300 text-gray-400"
              }`}
            >
              {step < currentStep ? <Check className="h-5 w-5" /> : step}
            </div>
            <div className="text-xs text-center mt-2 max-w-[80px]">
              {step === 1
                ? "Tjeneste"
                : step === 2
                ? "Dreneringstype"
                : step === 3
                ? "Eiendom"
                : step === 4
                ? "Tidslinje"
                : "Kontakt"}
            </div>

            {/* Connecting line */}
            {step < 5 && (
              <div
                className={`absolute top-5 w-full h-[2px] left-1/2 ${
                  step < currentStep ? "bg-blue-600" : "bg-gray-300"
                }`}
                style={{ width: "calc(100% - 2.5rem)" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
          Gratis Tjeneste
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Få Gratis Tilbud fra Lokale Dreneringsselskaper
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fyll ut skjemaet nedenfor for å motta opptil 3 konkurransedyktige
          tilbud fra pålitelige dreneringsfagfolk i ditt område.
        </p>
      </div>

      <StepIndicator />

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Service Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Fortell oss om ditt dreneringsproblem
              </h2>

              <div>
                <Label
                  htmlFor="customerType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Kundetype
                </Label>
                <div className="flex flex-col md:flex-row gap-4 bg-gray-50 p-1 rounded-lg">
                  {["private", "housing", "business"].map((type) => (
                    <Button
                      key={type}
                      type="button"
                      variant={
                        formData.customerType === type ? "default" : "outline"
                      }
                      className={`flex-1 w-full md:w-auto text-center ${
                        formData.customerType === type
                          ? "bg-blue-600 text-white"
                          : ""
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, customerType: type }))
                      }
                    >
                      {type === "private"
                        ? "Privat"
                        : type === "housing"
                        ? "Borettslag"
                        : "Bedrift"}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Hvilken tjeneste trenger du?
                </Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={handleSelectChange("serviceType")}
                >
                  <SelectTrigger id="serviceType" className="w-full">
                    <SelectValue placeholder="Velg en tjeneste" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drensrensing">Drensrensing</SelectItem>
                    <SelectItem value="drensrorreparasjon">
                      Drensrørreparasjon
                    </SelectItem>
                    <SelectItem value="dreneringsinstallasjon">
                      Dreneringsinstallasjon
                    </SelectItem>
                    <SelectItem value="rorskifte">Rørskifte</SelectItem>
                    <SelectItem value="noddrenering">Nøddrenering</SelectItem>
                    <SelectItem value="dreneringsinspeksjon">
                      Dreneringsinspeksjon
                    </SelectItem>
                    <SelectItem value="annet">Annet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Beskriv dreneringsproblemet ditt
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Vennligst gi detaljer om dreneringsproblemet ditt..."
                  className="min-h-[150px]"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adresse
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Din adresse"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {/* Step 2: Drainage Type */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Hvilken type drenering er du interessert i?
              </h2>

              <RadioGroup
                value={formData.drainageType}
                onValueChange={handleSelectChange("drainageType")}
                className="space-y-4"
              >
                {[
                  {
                    value: "surface",
                    title: "Overflateavrenning",
                    description:
                      "Ideell for å fjerne overflatevann fra eiendommen. Best egnet hager, oppkjørsler og områder utsatt vannansamling. Forventet levetid: 15-20 år.",
                  },
                  {
                    value: "subsurface",
                    title: "Underjordisk drenering",
                    description:
                      "Underjordisk dreneringssystem som håndterer grunnvannsnivået. Perfekt for å forebygge fundamentproblemer og kjelleroversvømmelse. Forventet levetid: 25-30 år.",
                  },
                  {
                    value: "french",
                    title: "Drensgrøft",
                    description:
                      "Kombinerer overflate- og underjordisk drenering. Utmerket for eiendommer med betydelige vannhåndteringsbehov. Forventet levetid: 20-25 år.",
                  },
                  {
                    value: "storm",
                    title: "Overvannshåndtering",
                    description:
                      "Designet for å håndtere store vannmengder under kraftig nedbør. Ideell eiendommer i områder med hyppige stormer. Forventet levetid: 30+ år.",
                  },
                ].map((type) => (
                  <Label
                    key={type.value}
                    className={`flex items-start space-x-3 p-4 rounded-lg cursor-pointer transition-colors border
                    ${
                      formData.drainageType === type.value
                        ? "bg-blue-50 border-blue-200 ring-2 ring-blue-500" // Selected state
                        : "bg-white border-gray-200 hover:bg-gray-50" // Default state
                    }`}
                  >
                    <RadioGroupItem
                      value={type.value}
                      id={type.value}
                      className="mt-1"
                    />
                    <div className="space-y-1">
                      <span className="font-medium block">{type.title}</span>
                      <span className="text-sm text-gray-500 block">
                        {type.description}
                      </span>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Property Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Informasjon om eiendommen
              </h2>

              <div>
                <Label
                  htmlFor="propertyType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type eiendom
                </Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={handleSelectChange("propertyType")}
                >
                  <SelectTrigger id="propertyType" className="w-full">
                    <SelectValue placeholder="Velg type eiendom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">Enebolig</SelectItem>
                    <SelectItem value="apartment">Leilighet</SelectItem>
                    <SelectItem value="cabin">Hytte</SelectItem>
                    <SelectItem value="commercial">Næringsbygg</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="propertySize"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tomtestørrelse (m²)
                </Label>
                <Input
                  id="propertySize"
                  name="propertySize"
                  type="number"
                  placeholder="Tomtestørrelse i kvadratmeter"
                  value={formData.propertySize}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    By
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="By"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Postnummer
                  </Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    placeholder="Postnummer"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Timeline */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Tidslinje og hastegrad
              </h2>

              <RadioGroup
                value={formData.timeline}
                onValueChange={handleSelectChange("timeline")}
                className="space-y-3"
              >
                {[
                  {
                    value: "immediate",
                    label: "Akutt behov (så fort som mulig)",
                  },
                  { value: "within-month", label: "Innen 1 måned" },
                  {
                    value: "planning",
                    label: "Planlegger fremtidig prosjekt",
                  },
                  {
                    value: "just-info",
                    label: "Ønsker kun informasjon/prisoverslag",
                  },
                ].map(({ value, label }) => (
                  <Label
                    key={value}
                    className={`flex items-center space-x-3 p-4 rounded-lg cursor-pointer transition-colors border ${
                      formData.timeline === value
                        ? "bg-blue-50 border-blue-200 ring-2 ring-blue-500"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <RadioGroupItem value={value} id={value} />
                    <span>{label}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 5: Contact Information */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Kontaktinformasjon
              </h2>

              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Navn
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    className="pl-10"
                    placeholder="Ditt fulle navn"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Home className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-post
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="pl-10"
                    placeholder="din@epost.no"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefon
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="pl-10"
                    placeholder="Ditt telefonnummer"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tilbake
              </Button>
            )}

            {currentStep < 5 ? (
              <Button
                type="button"
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white"
                onClick={nextStep}
              >
                Neste
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="ml-auto bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sender...
                  </>
                ) : (
                  <>
                    Få gratis tilbud
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        Gratis, uforpliktende og 100% konfidensielt
      </p>
    </div>
  );
}
