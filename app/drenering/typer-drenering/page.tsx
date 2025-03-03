import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Typer Drenering | Finn Riktig Dreneringsløsning",
  description:
    "Utforsk ulike typer drenering og finn den beste løsningen for din eiendom. Lær om overflate-, underjordisk- og fransk drenering.",
};

export default function TyperDrenering() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Typer Drenering
      </h1>
      <p className="mb-6 text-brand-700">
        Det finnes flere typer dreneringssystemer, hver med sine fordeler og
        bruksområder. Her er noen av de vanligste typene:
      </p>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl text-brand-800 font-semibold mb-2">
            1. Overflateavrenning
          </h2>
          <p>
            Dette systemet håndterer vann som samler seg på overflaten. Det
            inkluderer grøfter, renner og hellinger som leder vann bort fra
            bygninger og sårbare områder.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-brand-800 font-semibold mb-2">
            2. Underjordisk drenering
          </h2>
          <p>
            Dette involverer installasjon av perforerte rør under bakken for å
            samle og lede bort overflødig grunnvann. Det er spesielt nyttig for
            å beskytte fundamenter og kjellere.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-brand-800 font-semibold mb-2">
            3. Fransk drenering
          </h2>
          <p>
            En type underjordisk drenering som bruker grus eller stein rundt et
            perforert rør for å filtrere og lede bort vann. Det er effektivt for
            å håndtere både overflatevann og grunnvann.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-brand-800 font-semibold mb-2">
            4. Sump-pumpe systemer
          </h2>
          <p>
            Disse systemene brukes ofte i kjellere eller lavtliggende områder.
            De samler vann i en sump (brønn) og pumper det ut og bort fra
            bygningen.
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
          <Link href="/fordeler-med-drenering">Fordeler med god drenering</Link>
        </Button>
      </div>
    </div>
  );
}
