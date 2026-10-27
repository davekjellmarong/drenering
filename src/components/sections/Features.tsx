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
              Én forespørsel i stedet for å ringe rundt til flere firma selv.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mb-6 bg-brand-100 rounded-full flex items-center justify-center">
              <PiggyBank className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Spar penger</h3>
            <p className="text-text-subtle">
              Med flere tilbud å sammenligne er det lettere å se hva som er en
              rimelig pris for jobben.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mb-6 bg-brand-100 rounded-full flex items-center justify-center">
              <Home className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Beskytt boligen</h3>
            <p className="text-text-subtle">
              God drenering holder vann borte fra grunnmuren og reduserer
              risikoen for fuktskader i kjelleren.
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
