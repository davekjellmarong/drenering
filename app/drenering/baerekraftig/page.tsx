import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Bærekraftig Drenering | Miljøvennlige Løsninger",
  description:
    "Utforsk miljøvennlige dreneringsløsninger og hvordan bærekraftige metoder kan bidra til å redusere klimaavtrykket ditt.",
};

export default function BaerekraftigDrenering() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Bærekraftig Drenering
      </h1>
      <p className="mb-4 text-brand-700">
        Bærekraftig drenering fokuserer på å håndtere overvann på en
        miljøvennlig måte, samtidig som det beskytter bygninger og
        infrastruktur.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Prinsipper for bærekraftig drenering
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Redusere avrenning ved kilden</li>
        <li>Behandle forurensning nær opprinnelsesstedet</li>
        <li>Beskytte vannkvaliteten i vassdrag og grunnvann</li>
        <li>Fremme biodiversitet og skape grønne områder</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Bærekraftige dreneringsløsninger
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Regnbed og bioretensjonssystemer</li>
        <li>Permeable belegninger</li>
        <li>Grønne tak og vegger</li>
        <li>Oppsamling og gjenbruk av regnvann</li>
        <li>Kunstige våtmarker</li>
      </ul>
      <p className="mb-6 text-brand-700">
        Implementering av bærekraftige dreneringsløsninger kan bidra til å
        redusere oversvømmelsesrisiko, forbedre vannkvaliteten og skape mer
        attraktive urbane miljøer.
      </p>
      <div className="flex space-x-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/drenering-og-klimaendringer">
            Drenering og klimaendringer
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/kontakt-ekspert">Få råd om bærekraftig drenering</Link>
        </Button>
      </div>
    </div>
  );
}
