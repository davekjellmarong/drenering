import { Checkbox } from "@/src/components/ui/checkbox";
import { Label } from "@/src/components/ui/label";
interface PartnerTermsAgreementProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
export function PartnerTermsAgreement({
  checked,
  onChange,
}: PartnerTermsAgreementProps) {
  return (
    <div className="flex items-center space-x-2 pt-2">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={(val) => onChange(val === true)}
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
  );
}
