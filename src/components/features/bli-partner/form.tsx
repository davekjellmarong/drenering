"use client";

import type React from "react";
import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
// import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { ArrowRight, Check } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";
import CompanySearchInput from "./CompanySearchInput";
import { useMutation } from "@tanstack/react-query";
import { addCompanyToHubspot } from "@/src/server_actions/Hubspot";
import { useRouter } from "next/navigation";

interface PartnerFormData {
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
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Takk for din interesse!</h3>
        <p className="text-muted-foreground mb-6">
          Vi har mottatt din forespørsel. En representant vil kontakte deg.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send et nytt skjema
        </Button>
      </div>
    );
  }

  return (
    <form action={mutate} className="space-y-4">
      <CompanySearchInput
        id="companySearch"
        label="Søk med firmanavn eller org.nr"
        value={formData.companyName}
        onChange={(e) => updateForm({ companyName: e.target.value })}
        onCompanySelect={(company) => {
          updateForm({
            companyName: company.navn,
            address: company.forretningsadresse?.adresse[0] || "",
            postalCode: company.forretningsadresse?.postnummer || "",
            city: company.forretningsadresse?.poststed || "",
            email: company.epostadresse || "",
            phone: company.telefon || "",
          });
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="address">Adresse *</Label>
          <Input
            id="address"
            name="address"
            required
            value={formData.address}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postalCode">Postnummer *</Label>
          <Input
            id="postalCode"
            name="postalCode"
            required
            value={formData.postalCode}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">By/Kommune *</Label>
          <Input
            id="city"
            name="city"
            required
            value={formData.city}
            readOnly
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-postadresse *</Label>
          <Input
            name="email"
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
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactName">Kontaktperson *</Label>
        <Input
          id="contactName"
          name="contactName"
          required
          value={formData.contactName}
          onChange={(e) => updateForm({ contactName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Nettside</Label>
        <Input
          id="website"
          name="website"
          placeholder="https://"
          value={formData.website}
          onChange={(e) => updateForm({ website: e.target.value })}
        />
      </div>

      {/* <div className="space-y-2">
        <Label>Tjenester dere tilbyr *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {SERVICE_TYPES.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={`service-${service}`}
                checked={formData.services.includes(service)}
                onCheckedChange={() => handleServiceChange(service)}
              />
              <Label htmlFor={`service-${service}`}>{service}</Label>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="space-y-2">
        <Label htmlFor="description">Kort om din bedrift</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Fortell oss litt om din bedrift..."
          rows={3}
          value={formData.description}
          onChange={(e) => updateForm({ description: e.target.value })}
        />
      </div> */}

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox
          id="terms"
          checked={formData.termsAccepted}
          onCheckedChange={(checked) =>
            updateForm({ termsAccepted: checked === true })
          }
        />
        <Label htmlFor="terms" className="text-sm">
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
        disabled={isPending}
      >
        {isPending ? "Sender..." : "Send inn søknad"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
