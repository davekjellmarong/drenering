"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Home,
  MapPin,
  Phone,
  Mail,
  Check,
} from "lucide-react";
import type React from "react";

export default function WizardForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [customerType, setCustomerType] = useState("private");
  const [serviceType, setServiceType] = useState("");
  const [drainageType, setDrainageType] = useState("");
  const [formData, setFormData] = useState({
    propertyType: "",
    propertySize: "",
    problemDescription: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log({ customerType, serviceType, drainageType, ...formData });
    // Reset form or show success message
  };

  // Step indicator component
  const StepIndicator = () => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex flex-col items-center relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step < currentStep
                  ? "bg-blue-600 border-blue-600 text-white"
                  : step === currentStep
                  ? "bg-white border-blue-600 text-blue-600"
                  : "bg-gray-700 border-gray-600 text-gray-400"
              }`}
            >
              {step < currentStep ? <Check className="h-4 w-4" /> : step}
            </div>
            {step < 5 && (
              <div
                className={`absolute top-4 w-full h-[2px] left-1/2 ${
                  step < currentStep ? "bg-blue-600" : "bg-gray-600"
                }`}
                style={{ width: "calc(100% - 1rem)" }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-300">
        Steg {currentStep} av 5
      </p>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-slate-800/95 text-white p-8 px-2 sm:px-8 rounded-xl shadow-xl min-h-[900px]">
        {/* Progress Indicator */}
        <StepIndicator />

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Customer Type */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 bg-white/10 p-1 rounded-lg">
                  {["private", "housing", "business"].map((type) => (
                    <Button
                      key={type}
                      type="button"
                      variant={customerType === type ? "default" : "ghost"}
                      className={`flex-1 w-full md:w-auto text-center ${
                        customerType === type
                          ? "bg-blue-600 text-white"
                          : "text-white hover:text-white"
                      }`}
                      onClick={() => setCustomerType(type)}
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

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">
                  Hvilken tjeneste trenger du?
                </h3>
                <RadioGroup value={serviceType} onValueChange={setServiceType}>
                  <div className="space-y-2">
                    {[
                      {
                        value: "full-service",
                        label:
                          "Komplett dreneringsløsning (inkludert installasjon)",
                      },
                      { value: "installation", label: "Kun installasjon" },
                      { value: "maintenance", label: "Vedlikeholdstjeneste" },
                      { value: "info", label: "Mer informasjon" },
                    ].map(({ value, label }) => (
                      <Label
                        key={value}
                        className={`flex items-center space-x-3 p-4 rounded-lg cursor-pointer transition-colors ${
                          serviceType === value
                            ? "bg-blue-600 ring-2 ring-blue-500"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <RadioGroupItem value={value} id={value} />
                        <span>{label}</span>
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 2: Drainage Type */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Hvilken type drenering er du interessert i?
              </h3>
              <RadioGroup value={drainageType} onValueChange={setDrainageType}>
                <div className="space-y-4">
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
              drainageType === type.value
                ? "bg-blue-600 text-white border-blue-500" // Selected state
                : "bg-white/5 text-gray-300 border-gray-500 hover:bg-white/10" // Default state
            }`}
                    >
                      <RadioGroupItem
                        value={type.value}
                        id={type.value}
                        className="mt-1 checked:bg-blue-500 checked:border-blue-500"
                      />
                      <div className="space-y-1">
                        <span className="font-medium block">{type.title}</span>
                        <span className="text-sm block">
                          {type.description}
                        </span>
                      </div>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Property Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Informasjon om eiendommen
              </h3>
              <div className="space-y-4">
                {/* Property Type */}
                <div>
                  <Label htmlFor="propertyType" className="text-gray-200">
                    Type eiendom
                  </Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={handleSelectChange("propertyType")}
                  >
                    <SelectTrigger className="bg-gray-800 text-white border-gray-600 mt-2 focus:ring-blue-500 focus:border-blue-500">
                      <SelectValue placeholder="Velg type eiendom" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white">
                      <SelectItem value="house">Enebolig</SelectItem>
                      <SelectItem value="apartment">Leilighet</SelectItem>
                      <SelectItem value="cabin">Hytte</SelectItem>
                      <SelectItem value="commercial">Næringsbygg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Size */}
                <div>
                  <Label htmlFor="propertySize" className="text-gray-200">
                    Tomtestørrelse (m²)
                  </Label>
                  <Input
                    id="propertySize"
                    name="propertySize"
                    type="number"
                    className="bg-gray-800 text-white border-gray-600 mt-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Problem Description */}
                <div>
                  <Label htmlFor="problemDescription" className="text-gray-200">
                    Beskriv dreneringsproblemet
                  </Label>
                  <Textarea
                    id="problemDescription"
                    name="problemDescription"
                    className="bg-gray-800 text-white border-gray-600 mt-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Fortell oss om problemene du opplever..."
                    value={formData.problemDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Step 4: Timeline */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Tidslinje og hastegrad
              </h3>
              <RadioGroup
                value={formData.timeline}
                onValueChange={handleSelectChange("timeline")}
              >
                <div className="space-y-3">
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
                          ? "bg-blue-600 border-blue-500 text-white shadow-md"
                          : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <RadioGroupItem
                        value={value}
                        id={value}
                        className="w-5 h-5 border-2 border-gray-400 checked:bg-white checked:ring-2 checked:ring-blue-500"
                      />
                      <span>{label}</span>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 5: Contact Information */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Kontaktinformasjon</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Navn</Label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      className="bg-white/5 border-0 mt-2 pl-10"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-2">
                      <Home className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-post</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="bg-white/5 border-0 mt-2 pl-10"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-2">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="bg-white/5 border-0 mt-2 pl-10"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-2">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <div className="relative">
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      className="bg-white/5 border-0 mt-2 pl-10"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-2">
                      <Home className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="postalCode">Postnummer</Label>
                  <div className="relative">
                    <Input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      className="bg-white/5 border-0 mt-2 pl-10"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-2">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
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
                className="text-white bg-slate-700 hover:bg-slate-600 hover:text-white"
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
              >
                Få gratis tilbud
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
