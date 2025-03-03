import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Boligdrenering | Beskytt Hjemmet ditt mot Fukt",
  description:
    "Lær om boligdrenering og hvordan du kan beskytte hjemmet ditt mot fuktskader. Få tips og tilbud fra profesjonelle dreneringsfirmaer.",
};

export default function BoligdreneringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">Boligdrenering</h1>
      <p className="mb-4 text-brand-700">
        Effektiv boligdrenering er avgjørende for å beskytte hjemmet ditt mot
        fuktskader og opprettholde et sunt innemiljø. Våre eksperter tilbyr
        skreddersydde løsninger for alle typer boliger.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-brand-800">
        Våre boligdreneringstjenester inkluderer:
      </h2>
      <ul className="list-disc list-inside mb-6 text-brand-700">
        <li>Inspeksjon og vurdering av eksisterende dreneringssystem</li>
        <li>Design og installasjon av nye dreneringssystemer</li>
        <li>Reparasjon og oppgradering av eksisterende systemer</li>
        <li>Installasjon av fuktsperrer og vanntette membraner</li>
        <li>Terrengarrondering for optimal overflateavrenning</li>
      </ul>
      <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
        <Link href="/fa-tilbud">Få gratis tilbud på boligdrenering</Link>
      </Button>
    </div>
  );
}
