import { QuoteForm } from "@/src/components/features/tilbud/NewSmallForm";

export default function TilbudPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-4 px-2 sm:px-4 pt-20">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
          Gratis Tjeneste
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Få Gratis Tilbud fra Lokale Dreneringsselskaper
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fyll ut skjemaet nedenfor for å motta opptil 3 konkurransedyktige
          tilbud fra pålitelige dreneringsfagfolk i ditt område.
        </p>
      </div>
      <QuoteForm />
    </main>
  );
}
