import Form from "@/src/components/features/bli-partner/form";

export const metadata = {
  title: "Bli Partner - DreneringsExperten",
  description:
    "Registrer deg som partner hos DreneringsExperten og få tilgang til nye kunder og oppdrag",
};

export default function BliPartnerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-brand-900">Bli Partner</h1>
        <p className="text-lg text-brand-700 mb-8">
          Registrer deg som partner hos DreneringsExperten og få tilgang til
          kvalifiserte kundehenvendelser og nye oppdragsmuligheter. Fyll ut
          skjemaet nedenfor for å komme i gang.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <Form />
        </div>

        <div className="mt-12 bg-brand-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-brand-800">
            Fordeler med å være partner
          </h2>
          <ul className="space-y-3 text-brand-700">
            <li className="flex items-start">
              <span className="text-brand-500 mr-2">✓</span>
              <span>
                Tilgang til kvalifiserte kundehenvendelser i ditt område
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-2">✓</span>
              <span>Synlighet for tusenvis av potensielle kunder</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-2">✓</span>
              <span>Ingen faste kostnader - betal kun for faktiske leads</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-2">✓</span>
              <span>
                Enkel administrasjon av henvendelser gjennom vårt partnerpanel
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-500 mr-2">✓</span>
              <span>Profesjonell profilside som fremhever din ekspertise</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
