import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Takk for din registrering - DreneringsExperten",
  description: "Din registrering som partner hos DreneringsExperten er mottatt",
};

export default function TakkPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-brand-900">
          Takk for din registrering!
        </h1>

        <p className="text-lg text-brand-700 mb-8">
          Vi har mottatt din søknad om å bli partner hos DreneringsExperten. En
          av våre representanter vil gjennomgå informasjonen og kontakte deg
          innen 1-2 virkedager for å fullføre registreringsprosessen.
        </p>

        <div className="bg-brand-50 p-6 rounded-lg mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-brand-800">
            Hva skjer nå?
          </h2>
          <ol className="space-y-3 text-brand-700 list-decimal list-inside">
            <li>Vi gjennomgår din søknad (1-2 virkedager)</li>
            <li>En representant kontakter deg for å bekrefte detaljer</li>
            <li>Du får tilgang til partnerpanelet</li>
            <li>Vi setter opp din profilside</li>
            <li>Du begynner å motta kundehenvendelser</li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="border-brand-500 text-brand-500 hover:bg-brand-50"
          >
            <Link href="/">Gå til forsiden</Link>
          </Button>
          <Button
            asChild
            className="bg-brand-500 hover:bg-brand-600 text-white"
          >
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
