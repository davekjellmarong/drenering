"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { ArrowRight, Check } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";

interface PartnerFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  city: string;
  services: string[];
  employeeCount: string;
  description: string;
  termsAccepted: boolean;
}

export function PartnerSignupForm() {
  // const { toast } = useToast();
  const [formData, setFormData] = useState<PartnerFormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    city: "",
    services: [],
    employeeCount: "",
    description: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateForm = (fields: Partial<PartnerFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleServiceChange = (service: string) => {
    const currentServices = [...formData.services];
    if (currentServices.includes(service)) {
      updateForm({ services: currentServices.filter((s) => s !== service) });
    } else {
      updateForm({ services: [...currentServices, service] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      // toast({
      //   title: "Feil",
      //   description: "Du må godta vilkårene for å fortsette.",
      //   variant: "destructive",
      // });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would normally send the data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      // toast({
      //   title: "Registrering mottatt!",
      //   description:
      //     "Vi vil kontakte deg innen 48 timer for å diskutere partnerskap.",
      // });
    } catch (error) {
      // toast({
      //   title: "Noe gikk galt",
      //   description: "Kunne ikke sende skjemaet. Vennligst prøv igjen senere.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common service types in the drain/sewer industry
  const SERVICE_TYPES = [
    "Dreneringsrensing",
    "Drensrørreparasjon",
    "Dreneringsinstallasjon",
    "Rørskifte",
    "Nøddrenering",
    "Dreneringsinspeksjon",
    "Annet",
  ];

  const EMPLOYEE_COUNT_OPTIONS = ["1-5", "6-20", "21-50", "51-100", "100+"];

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Takk for din interesse!</h3>
        <p className="text-muted-foreground mb-6">
          Vi har mottatt din forespørsel om å bli en DreneringsExperten partner.
          En av våre representanter vil kontakte deg innen 48 timer.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send et nytt skjema
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="companyName">Bedriftsnavn *</Label>
        <Input
          id="companyName"
          required
          value={formData.companyName}
          onChange={(e) => updateForm({ companyName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactName">Kontaktperson *</Label>
        <Input
          id="contactName"
          required
          value={formData.contactName}
          onChange={(e) => updateForm({ contactName: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-postadresse *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefonnummer *</Label>
          <Input
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="website">Nettside</Label>
          <Input
            id="website"
            placeholder="https://"
            value={formData.website}
            onChange={(e) => updateForm({ website: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">By/Kommune *</Label>
          <Input
            id="city"
            required
            value={formData.city}
            onChange={(e) => updateForm({ city: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Tjenester dere tilbyr *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {SERVICE_TYPES.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={`service-${service}`}
                checked={formData.services.includes(service)}
                onCheckedChange={() => handleServiceChange(service)}
              />
              <Label
                htmlFor={`service-${service}`}
                className="cursor-pointer font-normal"
              >
                {service}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="employeeCount">Antall ansatte</Label>
        <Select
          value={formData.employeeCount}
          onValueChange={(value) => updateForm({ employeeCount: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Velg antall ansatte" />
          </SelectTrigger>
          <SelectContent>
            {EMPLOYEE_COUNT_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Kort om din bedrift</Label>
        <Textarea
          id="description"
          placeholder="Fortell oss litt om din bedrift og hva som gjør dere unike..."
          rows={3}
          value={formData.description}
          onChange={(e) => updateForm({ description: e.target.value })}
        />
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox
          id="terms"
          checked={formData.termsAccepted}
          onCheckedChange={(checked) =>
            updateForm({ termsAccepted: checked === true })
          }
        />
        <Label htmlFor="terms" className="text-sm cursor-pointer font-normal">
          Jeg godtar{" "}
          <a href="/terms" className="text-primary hover:underline">
            vilkårene
          </a>{" "}
          og{" "}
          <a href="/privacy" className="text-primary hover:underline">
            personvernerklæringen
          </a>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sender..." : "Send inn søknad"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
