// components/how-it-works/Hero.tsx
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function HowItWorksHero() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-medium mb-4">
        Slik Fungerer Det
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text">
        Enkel Prosess for å Finne Pålitelige Dreneringstjenester
      </h1>
      <p className="text-xl text-text-subtle max-w-3xl mx-auto mb-8">
        DinDrenering gjør det enkelt å finne og sammenligne de beste
        dreneringsprofesjonelle i ditt område på bare noen få enkle trinn.
      </p>
      <Button asChild size="lg">
        <Link href="/tilbud">Få Gratis Tilbud Nå</Link>
      </Button>
    </div>
  );
}
