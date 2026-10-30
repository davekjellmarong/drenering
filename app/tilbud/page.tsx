import { Suspense } from "react";
import { QuoteWizard } from "@/src/components/quote/QuoteWizard";

export const metadata = {
  alternates: { canonical: "/tilbud" },
  title: "Få gratis tilbud på drenering | DinDrenering",
  description:
    "Beskriv dreneringsjobben én gang, så sender vi forespørselen til opptil 3 dreneringsfirma i ditt område. Gratis og uforpliktende.",
};

export default function TilbudPage() {
  return (
    <div className="bg-sand-50 px-4 pb-16 pt-10 sm:pt-14">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
          Få tilbud på drenering
        </h1>
        <p className="mt-3 text-text-subtle">
          Beskriv jobben én gang, så sender vi forespørselen til opptil 3
          dreneringsfirma i ditt område. Gratis og uforpliktende.
        </p>
      </div>
      {/* useSearchParams needs a Suspense boundary in a static export */}
      <Suspense>
        <QuoteWizard />
      </Suspense>
    </div>
  );
}
