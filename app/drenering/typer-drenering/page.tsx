import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Typer Drenering | Oversikt Over Dreneringsmetoder",
  description:
    "Lær om ulike typer dreneringssystemer, inkludert overflate-, underjordisk-, og fransk drenering. Finn ut hvilken dreneringsløsning som passer best for ditt behov.",
};

export default function TyperDrenering() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Typer Drenering: Finn den Riktige Løsningen
      </h1>

      <p className="mb-4 text-brand-700">
        Det finnes flere ulike typer dreneringssystemer, hver med sine fordeler
        og bruksområder. Valg av riktig dreneringsmetode avhenger av faktorer
        som grunnforhold, klima og hvor mye vann som må håndteres.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-6 mb-3">
        1. Overflateavrenning (Overflatedrenering)
      </h2>
      <p className="text-brand-700 mb-4">
        Overflatedrenering leder bort regn- og smeltevann fra overflaten for å
        forhindre vannansamlinger. Dette er vanlig på flate områder og i hager.
        Eksempler inkluderer dreneringsrenner og grøfter.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-6 mb-3">
        2. Underjordisk Drenering
      </h2>
      <p className="text-brand-700 mb-4">
        Underjordisk drenering er designet for å håndtere grunnvann og fuktighet
        under bakkenivå. Drensrør installeres i grunnen for å lede vann bort fra
        bygninger og fundamenter.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-6 mb-3">
        3. Fransk Drenering (Drensgrøft)
      </h2>
      <p className="text-brand-700 mb-4">
        Fransk drenering er et system av perforerte rør omgitt av grus. Dette
        brukes for å lede bort overflødig vann fra kjellere, grunnmurer eller
        våtmarker i hager.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-6 mb-3">
        4. Overvannshåndtering
      </h2>
      <p className="text-brand-700 mb-4">
        Overvannshåndtering er viktig for områder med kraftig nedbør og store
        vannmengder. Dette kan inkludere regnbed, infiltrasjonsanlegg eller
        spesielle avløpssystemer.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-6 mb-3">
        5. Kombinert Drenering
      </h2>
      <p className="text-brand-700 mb-4">
        Kombinert drenering bruker flere metoder sammen for å gi optimal
        beskyttelse. Dette kan være en kombinasjon av overflate- og underjordisk
        drenering, spesielt ved bygg med høy risiko for vannskader.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/drenering/drenering-rundt-hus">
            Les mer om drenering rundt hus
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/drenering/pris">Sjekk priser for drenering</Link>
        </Button>
      </div>
    </div>
  );
}
