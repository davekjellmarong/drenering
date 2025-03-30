import UnderConstruction from "@/src/components/features/under-development/UnderDevelopment";

export const metadata = {
  title: "Brukervilkår | Regler for bruk av våre tjenester",
  description:
    "Les våre brukervilkår for å forstå rettigheter og plikter ved bruk av våre tjenester.",
};

export default function BrukervilkarPage() {
  return <UnderConstruction pageName="'Brukervilkår'" />;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-brand-900">Brukervilkår</h1>
      <p className="text-lg text-brand-700 mt-4">
        Ved å bruke våre tjenester godtar du følgende vilkår og betingelser.
      </p>

      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-brand-800">
          1. Generelle betingelser
        </h2>
        <p className="text-brand-700">
          Ved å bruke denne nettsiden godtar du å følge våre retningslinjer og
          retningslinjer for personvern.
        </p>

        <h2 className="text-2xl font-semibold text-brand-800">
          2. Ansvarsfraskrivelse
        </h2>
        <p className="text-brand-700">
          Vi er ikke ansvarlige for eventuelle feil eller mangler i
          informasjonen vi tilbyr.
        </p>

        <h2 className="text-2xl font-semibold text-brand-800">
          3. Endringer i vilkår
        </h2>
        <p className="text-brand-700">
          Vi forbeholder oss retten til å oppdatere disse vilkårene når som
          helst.
        </p>
      </div>
    </div>
  );
}
