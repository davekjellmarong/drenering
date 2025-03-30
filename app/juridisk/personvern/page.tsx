import UnderConstruction from "@/src/components/features/under-development/UnderDevelopment";

export const metadata = {
  title: "Personvern | Hvordan vi håndterer dine data",
  description:
    "Les om hvordan vi samler inn, bruker og beskytter dine personlige data i samsvar med GDPR.",
};

export default function PersonvernPage() {
  return <UnderConstruction pageName="'Personvern'" />;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-brand-900">Personvernerklæring</h1>
      <p className="text-lg text-brand-700 mt-4">
        Vi tar ditt personvern på alvor. Les mer om hvordan vi håndterer
        personlige data i samsvar med GDPR.
      </p>

      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-brand-800">
          1. Hvilke data vi samler inn
        </h2>
        <p className="text-brand-700">
          Vi samler kun inn nødvendige opplysninger, som navn, e-post,
          telefonnummer og adresse når du fyller ut et skjema.
        </p>

        <h2 className="text-2xl font-semibold text-brand-800">
          2. Hvorfor vi samler inn data
        </h2>
        <p className="text-brand-700">
          Vi bruker dataene til å gi deg relevante tilbud og forbedre tjenestene
          våre.
        </p>

        <h2 className="text-2xl font-semibold text-brand-800">
          3. Dine rettigheter
        </h2>
        <p className="text-brand-700">
          Du har rett til å få innsyn i, rette eller slette dataene dine når som
          helst.
        </p>
      </div>
    </div>
  );
}
