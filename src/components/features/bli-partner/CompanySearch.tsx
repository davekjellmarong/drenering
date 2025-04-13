import CompanySearchInput from "./CompanySearchInput";
import { PartnerFormData } from "./form";

interface PartnerCompanySearchProps {
  formData: PartnerFormData;
  updateForm: (fields: Partial<PartnerFormData>) => void;
}
export function PartnerCompanySearch({
  formData,
  updateForm,
}: PartnerCompanySearchProps) {
  return (
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
  );
}
