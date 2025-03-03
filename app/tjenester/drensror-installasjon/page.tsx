import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Drensrør Installasjon | Effektiv Drenering for Eiendommen din",
  description:
    "Finn ut hvordan drensrør installasjon kan forbedre dreneringen av eiendommen din. Se løsninger og få uforpliktende tilbud.",
};

export default function DrensrorInstallasjonPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Drensrør-installasjon
      </h1>
      <p className="mb-4 text-brand-700">
        Korrekt installasjon av drensrør er grunnlaget for et effektivt
        dreneringssystem. Våre erfarne fagfolk sørger for presis installasjon
        som sikrer langvarig beskyttelse mot fukt og vannskader.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Vår ekspertise innen drensrør-installasjon:
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Valg av riktig type og dimensjon på drensrør</li>
        <li>Nøyaktig graving og plassering av drensrør</li>
        <li>Installasjon av filterduk og drenerende masser</li>
        <li>Tilkobling til eksisterende avløpssystemer</li>
        <li>Inspeksjon og testing av det ferdige systemet</li>
      </ul>
      <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
        <Link href="/tilbud">Få tilbud på drensrør-installasjon</Link>
      </Button>
    </div>
  );
}
