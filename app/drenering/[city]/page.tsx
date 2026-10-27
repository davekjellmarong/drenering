import { CityIssuesSection } from "@/src/components/features/city/CommonIssues";
import { CityFAQSection } from "@/src/components/features/city/FAQ";
import { CityInfoSection } from "@/src/components/features/city/Info";
import CtaBanner from "@/src/components/sections/CtaBanner";
import { HeroText } from "@/src/components/features/hero/HeroText";
import SimpleQuoteForm from "@/src/components/wizard/SimpleForm";
import { CityMethods } from "@/src/queryFactory/City";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import HeroImage from "@/src/components/features/hero/HeroImage";

// Only the slugs below exist; old name-based URLs are 301'd in middleware.ts
export const dynamicParams = false;

export async function generateStaticParams() {
  const cities = await CityMethods.getAll();
  return cities.map((city) => ({ city: city.slug }));
}

const resolveCity = async (param: string) => {
  const city = await CityMethods.getBySlugOrName(decodeURIComponent(param));
  if (!city) notFound();
  return city;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { name, slug } = await resolveCity((await params).city);

  return {
    title: `Drenering i ${name} | Pris og tilbud fra lokale firma`,
    description: `Trenger du drenering i ${name}? Se hva det koster, vanlige fuktproblemer i området, og få uforpliktende tilbud fra dreneringsfirma i ${name}.`,
    alternates: { canonical: `/drenering/${slug}` },
  };
}

const CityPage = async ({ params }: { params: Promise<{ city: string }> }) => {
  const { name: city } = await resolveCity((await params).city);

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
              description={`Få tilbud på drenering fra firma som jobber i ${city}. Sammenlign tilbud og finn den beste løsningen for ditt dreneringsproblem.`}
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
