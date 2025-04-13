import { Clock, PiggyBank, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            Hvorfor velge oss?
          </h2>
          <p className="text-lg text-text-subtle max-w-2xl mx-auto">
            Vi gjør det enkelt å finne den beste dreneringsløsningen for ditt
            hjem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mb-6 bg-brand-100 rounded-full flex items-center justify-center">
              <Clock className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Spar tid</h3>
            <p className="text-text-subtle">
              Ikke kast bort tid på å kontakte flere firmaer. La ekspertene
              kontakte deg med deres beste tilbud.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mb-6 bg-brand-100 rounded-full flex items-center justify-center">
              <PiggyBank className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Spar penger</h3>
            <p className="text-text-subtle">
              Få flere leverandører til å konkurrere om oppdraget ditt. Dette
              sikrer deg best mulig pris.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mb-6 bg-brand-100 rounded-full flex items-center justify-center">
              <Home className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Øk boligverdien</h3>
            <p className="text-text-subtle">
              God drenering beskytter boligen din mot fuktskader og øker
              eiendommens verdi.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/tilbud">Få tilbud på drenering nå</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
