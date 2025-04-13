import { JSX } from "react";

interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function Benefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="bg-brand-50 rounded-2xl p-8 md:p-12 mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-text">
          Fordelene med DinDrenering
        </h2>
        <p className="text-lg text-text-subtle max-w-3xl mx-auto">
          Vi er dedikert til å gjøre prosessen med å finne pålitelige
          dreneringstjenester så enkel og stressfri som mulig.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
          >
            <div className="p-3 bg-brand-100 rounded-lg inline-block mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-text-subtle">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
