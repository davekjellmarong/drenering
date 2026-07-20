interface CityInfoSectionProps {
  cityName: string;
}

export function CityInfoSection({ cityName }: CityInfoSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-900">
        Drenering i {cityName}
      </h2>
      <p className="mb-4 text-brand-700 max-w-3xl">
        Vi hjelper huseiere i {cityName} med å finne kvalifiserte
        dreneringsfirmaer for kjeller-, grunnmur- og overvannsdrenering. Lokale
        grunnforhold og nedbørsmønstre varierer fra sted til sted, og et
        dreneringsfirma som kjenner forholdene i {cityName} kan gi en mer
        nøyaktig vurdering av hva som trengs på din eiendom.
      </p>
      <p className="text-brand-700 max-w-3xl">
        Fyll ut vårt enkle skjema for å motta uforpliktende tilbud fra
        dreneringsfagfolk som jobber i og rundt {cityName}.
      </p>
    </section>
  );
}
