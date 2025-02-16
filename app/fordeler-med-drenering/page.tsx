import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FordelerMedDrenering() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Fordeler med God Drenering
      </h1>
      <p className="mb-6 text-brand-700">
        Investering i et godt dreneringssystem kan gi mange fordeler for din
        eiendom og livskvalitet. Her er noen av de viktigste fordelene:
      </p>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-brand-800">
            1. Beskyttelse av bygningens struktur
          </h2>
          <p className="text-brand-700">
            God drenering forhindrer vannansamling rundt fundamentet, noe som
            kan føre til setningsskader, sprekker og strukturell svekkelse over
            tid.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-brand-800">
            2. Forebygging av fuktproblemer
          </h2>
          <p className="text-brand-700">
            Ved å lede vann bort fra bygningen, reduseres risikoen for
            fuktinntrenging, mugg og råte, noe som beskytter både bygningen og
            beboernes helse.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-brand-800">
            3. Økt eiendomsverdi
          </h2>
          <p className="text-brand-700">
            En eiendom med god drenering er mer attraktiv for potensielle
            kjøpere og kan øke verdien betydelig.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-brand-800">
            4. Forbedret utendørs miljø
          </h2>
          <p className="text-brand-700">
            God drenering forhindrer vannansamlinger i hagen, noe som gir bedre
            vekstforhold for planter og et mer brukbart utendørsareal.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-brand-800">
            5. Reduserte vedlikeholdskostnader
          </h2>
          <p className="text-brand-700">
            Ved å forhindre vannskader og fuktproblemer, kan du spare betydelige
            summer på langsiktige reparasjoner og vedlikehold.
          </p>
        </section>
      </div>
      <div className="mt-8 flex space-x-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/om-drenering">Tilbake til Om Drenering</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/typer-drenering">Typer drenering</Link>
        </Button>
      </div>
    </div>
  );
}
