import { CityMethods } from "@/src/queryFactory/City";
import HeroSection from "@/src/components/sections/HeroImage";
import HowItWorks from "@/src/components/sections/HowItWorks";
import Services from "@/src/components/sections/Services";
import ChooseOffer from "@/src/components/sections/ChooseOffer";
import Features from "@/src/components/sections/Features";
import LearnMore from "@/src/components/sections/LearnMore";
import CtaBanner from "@/src/components/sections/CtaBanner";
import PopularCities from "@/src/components/sections/PopularCities";

export default async function HomePage() {
  const citiesResult = await CityMethods.getAll().catch(() => []);
  const cities = Array.isArray(citiesResult) ? citiesResult : [];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <Services />
      <ChooseOffer />
      <Features />
      <LearnMore />
      <CtaBanner />
      <PopularCities cities={cities} />
    </div>
  );
}
