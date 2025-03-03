import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Drenering og Klimaendringer | Tilpass Eiendommen din",
  description:
    "Forstå hvordan klimaendringer påvirker behovet for drenering og hvordan du kan tilpasse eiendommen din for å unngå fuktskader.",
};

export default async function DreneringOgKlimaendringer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Drenering og Klimaendringer
      </h1>
      <p className="mb-4 text-brand-700">
        Klimaendringer påvirker nedbørsmønstre og øker risikoen for ekstremvær.
        Dette gjør effektiv drenering viktigere enn noensinne.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Hvordan klimaendringer påvirker drenering
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Økt nedbør og hyppigere kraftig regn</li>
        <li>Høyere risiko for oversvømmelser</li>
        <li>Endringer i grunnvannsnivåer</li>
        <li>Økt belastning på eksisterende dreneringssystemer</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Tilpasning av dreneringssystemer
      </h2>
      <p className="mb-4 text-brand-700">
        For å møte utfordringene med klimaendringer, bør dreneringssystemer
        tilpasses:
      </p>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Øke kapasiteten til eksisterende systemer</li>
        <li>Implementere bærekraftige dreneringsløsninger</li>
        <li>Bruke permeable overflater for å redusere avrenning</li>
        <li>Integrere grønne tak og regnhager i urban planlegging</li>
      </ul>
      <p className="mb-6 text-brand-700">
        Ved å ta hensyn til klimaendringer i dreneringsplanlegging, kan vi bedre
        beskytte våre hjem og infrastruktur mot fremtidige utfordringer.
      </p>
      <div className="flex space-x-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/baerekraftig-drenering">
            Lær om bærekraftig drenering
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/kontakt-ekspert">Snakk med en ekspert</Link>
        </Button>
      </div>
    </div>
  );
}
