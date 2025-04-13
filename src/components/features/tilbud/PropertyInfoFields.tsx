"use client";

import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { QuoteFormData } from "./NewSmallForm";

interface PropertyInfoFieldsProps {
  formData: QuoteFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<QuoteFormData>>;
}

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

export function PropertyInfoFields({
  formData,
  handleChange,
  setFormData,
}: PropertyInfoFieldsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text">Eiendomsinformasjon</h2>
      <div className="space-y-6">
        <div>
          <Label
            htmlFor="address"
            className="text-sm font-medium mb-1 text-text"
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
              className="text-sm font-medium mb-1 text-text"
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
            <Label htmlFor="zip" className="text-sm font-medium mb-1 text-text">
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
          <Label className="text-sm font-medium mb-1 text-text">
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
            className="text-sm font-medium mb-1 text-text"
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
    </div>
  );
}
