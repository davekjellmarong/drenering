// components/home/PopularCities.tsx
import { City } from "@/src/utils/types";
import Link from "next/link";

interface PopularCitiesProps {
  cities: City[];
}

export default function PopularCities({ cities }: PopularCitiesProps) {
  return (
    <section className="py-16 bg-background-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-text">
          Populære byer
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/drenering/${city.name}`}
              className="bg-white text-text px-4 py-2 rounded-full text-sm hover:bg-brand-50 hover:text-brand-700 border border-border transition-colors duration-200"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
