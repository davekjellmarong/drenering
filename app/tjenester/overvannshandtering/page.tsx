import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Overvannshåndtering | Håndtering av Store Vannmengder",
  description:
    "Lær hvordan du håndterer overvann effektivt for å unngå flomskader. Finn de beste metodene for overvannshåndtering.",
};

export default function OvervannshandteringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Overvannshåndtering
      </h1>
      <p className="mb-4 text-brand-700">
        Effektiv håndtering av overvann er kritisk for å forebygge flom, erosjon
        og forurensning. Våre løsninger for overvannshåndtering er designet for
        å beskytte både miljøet og infrastrukturen i urbane og rurale områder.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Våre tjenester for overvannshåndtering inkluderer:
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Utforming av bærekraftige urbane dreneringssystemer (SUDS)</li>
        <li>Installasjon av permeable belegg og regnbed</li>
        <li>Dimensjonering og installasjon av fordrøyningsbassenger</li>
        <li>Grønne tak og vegger for naturlig vannabsorbering</li>
        <li>Integrerte løsninger for gjenbruk av regnvann</li>
      </ul>
      <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
        <Link href="/tilbud">Få tilbud på overvannshåndtering</Link>
      </Button>
    </div>
  );
}
