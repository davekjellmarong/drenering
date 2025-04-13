import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { PartnerFormData } from "./form";

interface PartnerContactFieldsProps {
  formData: PartnerFormData;
  updateForm: (fields: Partial<PartnerFormData>) => void;
}
export function PartnerContactFields({
  formData,
  updateForm,
}: PartnerContactFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-postadresse *</Label>
          <Input
            id="email"
            name="email"
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
    </>
  );
}
