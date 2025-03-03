import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Om Drenering | Alt du Trenger å Vite om Drenering",
  description:
    "Lær hva drenering er, hvorfor det er viktig, og hvordan det fungerer. Få innsikt i dreneringsmetoder og beste praksis.",
};

export default function OmDrenering() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-brand-900 font-bold mb-6">Om Drenering</h1>
      <p className="mb-4 text-brand-700">
        Drenering er prosessen med å fjerne overflødig vann fra jord eller andre
        materialer. Dette er viktig for å forhindre vannskader på bygninger,
        forbedre jordkvaliteten for planter og opprettholde strukturell
        integritet i landskapet.
      </p>
      <p className="mb-4 text-brand-700">God drenering er avgjørende for å:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Forhindre fuktskader i kjellere og grunnmurer</li>
        <li>Redusere risikoen for mugg og råte</li>
        <li>Forbedre stabiliteten til bygninger og strukturer</li>
        <li>Øke verdien og levetiden til eiendommen</li>
        <li>Skape et sunnere miljø for planter og hageområder</li>
      </ul>
      <p className="mb-6 text-brand-700">
        Det finnes flere typer dreneringssystemer, hver designet for å håndtere
        spesifikke utfordringer og terrengtyper. Valg av riktig system er
        avgjørende for effektiv vannhåndtering.
      </p>
      <div className="flex space-x-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/typer-drenering">Lær om typer drenering</Link>
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
