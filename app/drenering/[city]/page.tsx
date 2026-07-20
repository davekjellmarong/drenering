import { CityIssuesSection } from "@/src/components/features/city/CommonIssues";
import { CityFAQSection } from "@/src/components/features/city/FAQ";
import { CityInfoSection } from "@/src/components/features/city/Info";
import CtaBanner from "@/src/components/sections/CtaBanner";
import { HeroText } from "@/src/components/features/hero/HeroText";
import SimpleQuoteForm from "@/src/components/wizard/SimpleForm";
import { CityMethods } from "@/src/queryFactory/City";
import { Metadata } from "next";
import React from "react";
import HeroImage from "@/src/components/features/hero/HeroImage";

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

  if (!cityData) {
    return (
      <div className="text-center text-brand-600">
        Fant ikke data for {city}.
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <HeroImage
          src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?auto=format&fit=crop&q=80"
          alt="Bakgrunnsbilde for hero"
        />
        <div className="relative z-10 container mx-auto py-28 md:py-36 px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <HeroText
              badge="citypage"
              description={`Få hjelp med drenering fra lokale eksperter i ${city}. Sammenlign tilbud og finn den beste løsningen for ditt dreneringsproblem.`}
            >
              <span className="text-brand-300">Drenering</span> i {city}
            </HeroText>
            <SimpleQuoteForm city={city} />
          </div>
        </div>
      </section>
      <article>
        <CityInfoSection cityName={city} />
        <CityIssuesSection cityName={city} />
        <CityFAQSection cityName={city} />
        <CtaBanner />
      </article>
    </>
  );
};

export default CityPage;
