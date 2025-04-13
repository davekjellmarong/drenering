import { QuoteFormData } from "./NewSmallForm";

interface ReviewProps {
  formData: QuoteFormData;
}

export function Review({ formData }: ReviewProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text">Gjennomgang</h2>
      <div className="space-y-6">
        {/* Personal Info */}
        <div className="bg-background-50 p-4 rounded-lg border border-border">
          <h3 className="font-semibold mb-2 text-text">
            Personlig informasjon
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-text-muted">Navn</p>
              <p>
                {formData.firstname} {formData.lastname}
              </p>
            </div>
            <div>
              <p className="text-text-muted">Telefon</p>
              <p>{formData.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-text-muted">E-post</p>
              <p>{formData.email}</p>
            </div>
          </div>
        </div>

        {/* Property Info */}
        <div className="bg-background-50 p-4 rounded-lg border border-border">
          <h3 className="font-semibold mb-2 text-text">Eiendomsinformasjon</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="col-span-2">
              <p className="text-text-muted">Adresse</p>
              <p>{formData.address}</p>
            </div>
            <div>
              <p className="text-text-muted">Kommune</p>
              <p>{formData.city}</p>
            </div>
            <div>
              <p className="text-text-muted">Postnummer</p>
              <p>{formData.zip}</p>
            </div>
            <div>
              <p className="text-text-muted">Boligtype</p>
              <p>{formData.propertytype === "house" ? "Hus" : "Leilighet"}</p>
            </div>
            <div>
              <p className="text-text-muted">Størrelse</p>
              <p>{formData.propertysize} m²</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
