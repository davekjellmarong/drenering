import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Industriell Drenering | Store Løsninger for Bedrifter",
  description:
    "Oppdag effektive dreneringsløsninger for industri og næringsbygg. Sikre eiendommen din med riktig dreneringssystem.",
};

export default function IndustriellDreneringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Industriell Drenering
      </h1>
      <p className="mb-4 text-brand-700">
        Industrielle anlegg krever robuste og effektive dreneringsløsninger for
        å sikre kontinuerlig drift og beskyttelse av verdifullt utstyr. Våre
        spesialiserte tjenester er skreddersydd for industriens unike behov.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Våre industrielle dreneringstjenester omfatter:
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Storskala dreneringssystemer for industriområder</li>
        <li>Håndtering av prosessvann og industrielt avløpsvann</li>
        <li>Oljeutskillere og kjemikalieresistente dreneringsløsninger</li>
        <li>Flomkontroll og overvannshåndtering for store arealer</li>
        <li>
          Vedlikehold og oppgradering av eksisterende industrielle
          dreneringssystemer
        </li>
      </ul>
      <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
        <Link href="/fa-tilbud">Få ekspertråd om industriell drenering</Link>
      </Button>
    </div>
  );
}
