"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Check,
  Home,
  Mail,
  Phone,
  MapPin,
  FileText,
  Clock,
  Upload,
  ArrowLeft,
  ArrowRight,
  Loader2,
} from "lucide-react";

interface QuoteRequest {
  serviceType: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  name: string;
  email: string;
  phone: string;
  preferredContactMethod: "email" | "phone";
  availabilityTimeframe: string;
  attachments: File[];
}

interface QuoteFormProps {
  onSubmit?: (formData: QuoteRequest) => Promise<void>;
  selectedCompanyId?: string;
}

const STEPS = [
  { id: "service", title: "Tjenestedetaljer" },
  { id: "location", title: "Plassering" },
  { id: "contact", title: "Kontaktinfo" },
  { id: "review", title: "Gjennomgang & Send Inn" },
];

const SERVICE_TYPES = [
  "Drensrensing",
  "Drensrørreparasjon",
  "Dreneringsinstallasjon",
  "Rørskifte",
  "Nøddrenering",
  "Dreneringsinspeksjon",
  "Annet",
];

export function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteRequest>({
    serviceType: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    name: "",
    email: "",
    phone: "",
    preferredContactMethod: "email",
    availabilityTimeframe: "",
    attachments: [],
  });

  const updateForm = (fields: Partial<QuoteRequest>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files);
      updateForm({ attachments: fileArray });
    }
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateCurrentStep = () => {
    console.log("currentStep", currentStep);
    console.log("formData", formData);
    // switch (currentStep) {
    //   case 0: // Service Details
    //     if (!formData.serviceType) {
    //       toast({
    //         title: "Tjenestetype kreves",
    //         description: "Vennligst velg en tjenestetype",
    //         variant: "destructive",
    //       });
    //       console.log("still here");
    //       return false;
    //     }
    //     if (!formData.description || formData.description.length < 10) {
    //       toast({
    //         title: "Beskrivelse kreves",
    //         description:
    //           "Vennligst gi en detaljert beskrivelse av problemet ditt",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     break;

    //   case 1: // Location
    //     if (!formData.address) {
    //       toast({
    //         title: "Adresse kreves",
    //         description: "Vennligst skriv inn adressen din",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     if (!formData.city) {
    //       toast({
    //         title: "By kreves",
    //         description: "Vennligst skriv inn byen din",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     if (!formData.state) {
    //       toast({
    //         title: "Fylke kreves",
    //         description: "Vennligst skriv inn fylket ditt",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     if (!formData.zipCode) {
    //       toast({
    //         title: "Postnummer kreves",
    //         description: "Vennligst skriv inn postnummeret ditt",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     break;

    //   case 2: // Contact Info
    //     if (!formData.name) {
    //       toast({
    //         title: "Navn kreves",
    //         description: "Vennligst skriv inn navnet ditt",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
    //       toast({
    //         title: "Gyldig e-post kreves",
    //         description: "Vennligst skriv inn en gyldig e-postadresse",
    //         variant: "destructive",
    //       });
    //       return false;
    //     }
    //     if (!formData.phone || formData.phone.length < 8) {
    //       toast({
    //         title: "Telefonnummer kreves",
    //         description: "Vennligst skriv inn et gyldig telefonnummer",
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
      console.log(onSubmit);
      // await onSubmit(formData);
      //   toast({
      //     title: "Tilbudsforespørsel sendt!",
      //     description:
      //       "Lokale dreneringsselskaper vil kontakte deg med tilbud innen kort tid.",
      //   });
    } catch (error) {
      console.error("Error submitting quote request:", error);
      //   toast({
      //     title: "Innsending mislyktes",
      //     description:
      //       "Det oppstod en feil ved innsending av forespørselen din. Vennligst prøv igjen.",
      //     variant: "destructive",
      //   });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">
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
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="text-xs text-center mt-2 max-w-[80px]">
                {step.title}
              </div>

              {/* Connecting line */}
              {index < STEPS.length - 1 && (
                <div
                  className={`absolute top-5 w-full h-[2px] left-1/2 ${
                    index < currentStep ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  style={{ width: "calc(100% - 1rem)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Step 1: Service Details */}
          {currentStep === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Fortell oss om ditt dreneringsproblem
              </h2>
              <p className="text-gray-600 mb-8">
                Gi detaljer om tjenesten du trenger slik at vi kan matche deg
                med de riktige fagfolkene.
              </p>

              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Hvilken tjeneste trenger du?
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      updateForm({ serviceType: value })
                    }
                  >
                    <SelectTrigger id="serviceType" className="w-full">
                      <SelectValue placeholder="Velg en tjeneste" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_TYPES.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
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
                    placeholder="Vennligst gi detaljer om dreneringsproblemet ditt..."
                    className="min-h-[150px]"
                    value={formData.description}
                    onChange={(e) =>
                      updateForm({ description: e.target.value })
                    }
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Inkluder informasjon som: når problemet startet, synlige
                    tegn, tidligere forsøk på å fikse det, osv.
                  </p>
                </div>

                <div>
                  <Label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Legg ved bilder (valgfritt)
                  </Label>
                  <div className="mt-1">
                    <label
                      htmlFor="file"
                      className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-blue-500 focus:outline-none"
                    >
                      <span className="flex flex-col items-center justify-center space-y-2">
                        <Upload className="w-6 h-6 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {formData.attachments &&
                          formData.attachments.length > 0
                            ? `${formData.attachments.length} fil(er) valgt`
                            : "Slipp filer her eller klikk for å laste opp"}
                        </span>
                      </span>
                      <input
                        id="file"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="timeframe"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Når trenger du denne tjenesten?
                  </Label>
                  <Select
                    value={formData.availabilityTimeframe}
                    onValueChange={(value) =>
                      updateForm({ availabilityTimeframe: value })
                    }
                  >
                    <SelectTrigger id="timeframe" className="w-full">
                      <SelectValue placeholder="Velg tidspunkt" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Emergency - ASAP">
                        Nødsituasjon - ASAP
                      </SelectItem>
                      <SelectItem value="Within 24 hours">
                        Innen 24 timer
                      </SelectItem>
                      <SelectItem value="This week">Denne uken</SelectItem>
                      <SelectItem value="This month">Denne måneden</SelectItem>
                      <SelectItem value="Flexible">
                        Fleksibel / Ikke haster
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Hvor trengs tjenesten?
              </h2>
              <p className="text-gray-600 mb-8">
                Vi vil bruke denne informasjonen til å finne dreneringsfagfolk i
                ditt område.
              </p>

              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gateadresse
                  </Label>
                  <div className="relative">
                    <Input
                      id="address"
                      placeholder="Hovedgata 123"
                      className="pl-10"
                      value={formData.address}
                      onChange={(e) => updateForm({ address: e.target.value })}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Home className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
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
                      placeholder="By"
                      value={formData.city}
                      onChange={(e) => updateForm({ city: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Fylke
                    </Label>
                    <Select
                      value={formData.state}
                      onValueChange={(value) => updateForm({ state: value })}
                    >
                      <SelectTrigger id="state" className="w-full">
                        <SelectValue placeholder="Velg fylke" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Oslo">Oslo</SelectItem>
                        <SelectItem value="Viken">Viken</SelectItem>
                        <SelectItem value="Innlandet">Innlandet</SelectItem>
                        <SelectItem value="Vestfold og Telemark">
                          Vestfold og Telemark
                        </SelectItem>
                        <SelectItem value="Agder">Agder</SelectItem>
                        <SelectItem value="Rogaland">Rogaland</SelectItem>
                        <SelectItem value="Vestland">Vestland</SelectItem>
                        <SelectItem value="Møre og Romsdal">
                          Møre og Romsdal
                        </SelectItem>
                        <SelectItem value="Trøndelag">Trøndelag</SelectItem>
                        <SelectItem value="Nordland">Nordland</SelectItem>
                        <SelectItem value="Troms og Finnmark">
                          Troms og Finnmark
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Postnummer
                  </Label>
                  <div className="relative">
                    <Input
                      id="zipCode"
                      placeholder="Postnummer"
                      className="pl-10"
                      value={formData.zipCode}
                      onChange={(e) => updateForm({ zipCode: e.target.value })}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Din kontaktinformasjon
              </h2>
              <p className="text-gray-600 mb-8">
                Hvordan skal dreneringsselskaper kontakte deg med sine tilbud?
              </p>

              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Fullt Navn
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ditt fulle navn"
                    value={formData.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-postadresse
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="din@epost.no"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => updateForm({ email: e.target.value })}
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
                    Telefonnummer
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(+47) 123 45 678"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => updateForm({ phone: e.target.value })}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-1">
                    Foretrukket Kontaktmetode
                  </Label>
                  <RadioGroup
                    value={formData.preferredContactMethod}
                    onValueChange={(value: "email" | "phone") =>
                      updateForm({ preferredContactMethod: value })
                    }
                    className="flex flex-col space-y-1 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label
                        htmlFor="contact-email"
                        className="font-normal cursor-pointer"
                      >
                        E-post
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label
                        htmlFor="contact-phone"
                        className="font-normal cursor-pointer"
                      >
                        Telefon
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Gjennomgå informasjonen din
              </h2>
              <p className="text-gray-600 mb-8">
                Vennligst bekreft at alle detaljer er korrekte før du sender inn
                tilbudsforespørselen.
              </p>

              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      <h3 className="font-semibold">Tjenestedetaljer</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 block">
                        Tjenestetype
                      </span>
                      <span className="font-medium">
                        {formData.serviceType}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">
                        Beskrivelse
                      </span>
                      <span className="text-sm">{formData.description}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">
                        Tidspunkt
                      </span>
                      <span className="font-medium">
                        {formData.availabilityTimeframe || "Ikke spesifisert"}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">
                        Vedlegg
                      </span>
                      <span>
                        {formData.attachments && formData.attachments.length > 0
                          ? `${formData.attachments.length} fil(er) vedlagt`
                          : "Ingen vedlegg"}
                      </span>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className="px-0 h-auto text-blue-600"
                      onClick={() => setCurrentStep(0)}
                    >
                      Rediger tjenestedetaljer
                    </Button>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      <h3 className="font-semibold">Plassering</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 block">
                        Adresse
                      </span>
                      <span className="font-medium">{formData.address}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">
                        By, Fylke, Postnummer
                      </span>
                      <span className="font-medium">
                        {formData.city}, {formData.state} {formData.zipCode}
                      </span>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className="px-0 h-auto text-blue-600"
                      onClick={() => setCurrentStep(1)}
                    >
                      Rediger plassering
                    </Button>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-blue-600" />
                      <h3 className="font-semibold">Kontaktinformasjon</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 block">Navn</span>
                      <span className="font-medium">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">
                        E-post
                      </span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">
                        Telefon
                      </span>
                      <span className="font-medium">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">
                        Foretrukket Kontaktmetode
                      </span>
                      <span className="font-medium capitalize">
                        {formData.preferredContactMethod === "email"
                          ? "E-post"
                          : "Telefon"}
                      </span>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className="px-0 h-auto text-blue-600"
                      onClick={() => setCurrentStep(2)}
                    >
                      Rediger kontaktinfo
                    </Button>
                  </div>
                </Card>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">
                        Hva skjer nå?
                      </h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>
                          Når du sender inn denne forespørselen, vil vi matche
                          deg med opptil 3 lokale dreneringsselskaper. De vil
                          gjennomgå detaljene dine og kontakte deg med tilbud
                          innen 24-48 timer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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

            {currentStep < STEPS.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
              >
                Neste <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sender inn...
                  </>
                ) : (
                  "Send Inn Tilbudsforespørsel"
                )}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
