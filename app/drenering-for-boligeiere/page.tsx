import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DreneringForBoligeiere() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Drenering for Boligeiere
      </h1>
      <p className="mb-4 text-brand-700">
        Som boligeier er det viktig å forstå betydningen av god drenering for å
        beskytte din investering og sikre et sunt bomiljø.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Hvorfor er drenering viktig for din bolig?
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Beskytter fundamentet mot vannskader</li>
        <li>Forebygger fuktproblemer og muggvekst</li>
        <li>Øker verdien på eiendommen</li>
        <li>Forbedrer utendørsarealet og hageforholdene</li>
        <li>Reduserer risikoen for setningsskader</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Tegn på dreneringsproblemer
      </h2>
      <p className="mb-4 text-brand-700">
        Vær oppmerksom på følgende tegn som kan indikere dreneringsproblemer:
      </p>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Vannsamlinger i hagen eller rundt grunnmuren</li>
        <li>Fuktige eller våte kjellervegger</li>
        <li>Mugglukt i kjeller eller krypkjeller</li>
        <li>Sprekker i grunnmuren</li>
        <li>Erosjon rundt husets fundament</li>
      </ul>
      <p className="mb-6 text-brand-700">
        Hvis du oppdager noen av disse tegnene, er det viktig å handle raskt og
        kontakte en profesjonell dreneringsekspert.
      </p>
      <div className="flex space-x-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/typer-drenering">Utforsk dreneringsløsninger</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/kontakt-ekspert">Kontakt en ekspert</Link>
        </Button>
      </div>
    </div>
  );
}
