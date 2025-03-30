import UnderConstruction from "@/src/components/features/under-development/UnderDevelopment";

export const metadata = {
  title: "Vår Visjon | Bærekraftige dreneringsløsninger",
  description:
    "Vår visjon er å tilby de beste og mest bærekraftige dreneringsløsningene i Norge.",
};

export default function VisjonPage() {
  return <UnderConstruction pageName="'Visjon'" />;

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-brand-900">Vår Visjon</h1>
      <p className="text-lg text-brand-700 mt-4">
        Vi jobber for en fremtid der alle har tilgang til trygge og bærekraftige
        dreneringsløsninger.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-brand-800">Våre mål</h2>
        <ul className="text-brand-700 mt-4 space-y-2">
          <li>✅ Gi kundene de beste dreneringsløsningene</li>
          <li>✅ Redusere miljøpåvirkningen av drenering</li>
          <li>✅ Utvikle innovative metoder for vannhåndtering</li>
        </ul>
      </div>
    </div>
  );
}
