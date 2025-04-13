import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { PartnerFormData } from "./form";

interface PartnerAddressFieldsProps {
  formData: PartnerFormData;
}
export function PartnerAddressFields({ formData }: PartnerAddressFieldsProps) {
  return (
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
        <Input id="city" name="city" required value={formData.city} readOnly />
      </div>
    </div>
  );
}
