import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { QuoteFormData } from "./NewSmallForm";

interface PersonalInfoProps {
  formData: QuoteFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PersonalInfo({ formData, onChange }: PersonalInfoProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text">
        Personlig informasjon
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="firstname"
              className="text-sm font-medium mb-1 text-text"
            >
              Fornavn *
            </Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Fornavn"
              value={formData.firstname}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <Label
              htmlFor="lastname"
              className="text-sm font-medium mb-1 text-text"
            >
              Etternavn *
            </Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Etternavn"
              value={formData.lastname}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="phone"
              className="text-sm font-medium mb-1 text-text"
            >
              Telefon *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Telefonnummer"
              value={formData.phone}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium mb-1 text-text"
            >
              E-post *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="E-postadresse"
              value={formData.email}
              onChange={onChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
