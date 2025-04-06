import { CityMethods } from "@/src/queryFactory/City";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const cities = await CityMethods.getAll();

  return cities.map((city) => ({
    city: city.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;

  return {
    title: `Drenering i ${city} | Finn Beste Dreneringsfirma`,
    description: `Se prisinformasjon og detaljer om drenering i ${city}.`,
  };
}

const CityPage = async ({ params }: { params: Promise<{ city: string }> }) => {
  const { city } = await params;
  const cityData = await CityMethods.getByName(city);

  // return <UnderConstruction pageName={`Drenering i ${city}`} />;

  if (!cityData) {
    return (
      <div className="text-center text-brand-600">
        Fant ikke data for {city}.
      </div>
    );
  }

  return (
    <>
      {/* Hero Section with Wizard */}
      {/* <WizardContainer
        title={`Få gode tilbud på drenering i ${city}`}
        description={`Sammenlign flere tilbud og velg den beste løsningen for drenering i ${city}.`}
        backgroundImage="/manSign.jpg"
      /> */}

      {/* Main Content */}
      <article className="container mx-auto px-4 py-20">
        {/* City Pricing Info */}
        <section className="mb-6 bg-brand-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-brand-800">
            Hva koster drenering i {city}?
          </h2>
          <p className="text-brand-700 mt-2">
            <strong>Gjennomsnittlig pris per meter:</strong>{" "}
            {cityData[0].average_price_meter} NOK
          </p>
          <p className="text-brand-700 mt-1">
            <strong>Typisk prisintervall:</strong> {cityData[0].price_range}
          </p>
        </section>

        {/* Placeholder for companies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-800 mb-4">
            Finn dreneringsfirmaer i {city}
          </h2>
          <p className="text-brand-600">
            Vi jobber med å samle en liste over firmaer som tilbyr drenering i{" "}
            {city}. Kom tilbake senere for mer informasjon!
          </p>
        </section>

        {/* Call-to-Action (CTA) */}
        <section className="text-center bg-brand-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-brand-900">
            Trenger du drenering i {city}?
          </h2>
          <p className="text-brand-700 mt-2">
            Få prisoverslag og sammenlign dreneringsfirmaer i ditt område.
          </p>
          <a
            href="/tilbud"
            className="mt-4 inline-block bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-600 transition"
          >
            Få gratis tilbud
          </a>
        </section>
      </article>
    </>
  );
};

export default CityPage;
