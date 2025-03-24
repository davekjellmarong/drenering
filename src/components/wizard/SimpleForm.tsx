"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { ArrowRight } from "lucide-react";

export default function SimpleQuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    serviceType: "",
    address: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store form data in localStorage to retrieve it on the next page
    localStorage.setItem("initialFormData", JSON.stringify(formData));

    // Redirect to the full form page
    router.push("/tilbud");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Få gratis tilbud
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hvilken tjeneste trenger du?
          </label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => handleChange("serviceType", value)}
          >
            <SelectTrigger className="w-full">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hvor trengs tjenesten?
          </label>
          <Input
            placeholder="Din adresse"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Beskriv problemet
          </label>
          <Textarea
            placeholder="Fortell oss kort om dreneringsproblemet ditt..."
            className="min-h-[100px]"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Gå til neste steg <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-4">
        Gratis, uforpliktende og 100% konfidensielt
      </p>
    </div>
  );
}
