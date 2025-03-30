import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import UnderConstruction from "@/src/components/features/under-development/UnderDevelopment";

export const metadata = {
  title: "Drenering Pris | Hva koster drenering? Komplett prisguide",
  description:
    "Finn ut hvor mye drenering koster for eneboliger, borettslag og næringsbygg. Se priser, faktorer som påvirker kostnaden og hvordan du kan spare penger.",
};

export default function DreneringPris() {
  return <UnderConstruction pageName="'Drenering Pris'" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Drenering Pris: Hva koster det å drenere rundt huset?
      </h1>

      <p className="mb-4 text-brand-700">
        Prisen på drenering varierer avhengig av flere faktorer som tomtens
        størrelse, grunnforhold og valg av dreneringsløsning. Generelt ligger
        kostnaden for drenering av eneboliger mellom{" "}
        <strong>150 000 - 300 000 kr</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Gjennomsnittlige priser for drenering
      </h2>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Type eiendom
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Prisområde
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Enebolig (ca. 50 meter)
            </td>
            <td className="border border-gray-300 px-4 py-2">
              150 000 - 300 000 kr
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
              Borettslag / rekkehus
            </td>
            <td className="border border-gray-300 px-4 py-2">
              250 000 - 600 000 kr
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Næringsbygg</td>
            <td className="border border-gray-300 px-4 py-2">
              500 000 - 1 500 000 kr
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">
        Faktorer som påvirker prisen på drenering
      </h2>
      <p className="mb-4 text-brand-700">
        Flere faktorer spiller inn når det gjelder pris på drenering:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Lengden på dreneringen:</strong> Jo større tomt, desto høyere
          pris.
        </li>
        <li>
          <strong>Grunnforhold:</strong> Leire, fjell og stein kan gjøre jobben
          dyrere.
        </li>
        <li>
          <strong>Tilgjengelighet:</strong> Er det lett å komme til med
          maskiner?
        </li>
        <li>
          <strong>Type dreneringssystem:</strong> Enkel eller avansert løsning?
        </li>
        <li>
          <strong>Eksisterende drenering:</strong> Må gammel drenering fjernes
          først?
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan redusere kostnaden?
      </h2>
      <p className="mb-4 text-brand-700">
        Selv om drenering kan være en stor investering, finnes det måter å
        redusere kostnaden på:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Få flere tilbud:</strong> Sammenlign priser fra ulike
          dreneringsselskaper.
        </li>
        <li>
          <strong>Utfør deler av jobben selv:</strong> Gravearbeid kan gjøres på
          egenhånd om mulig.
        </li>
        <li>
          <strong>Sjekk tilskuddsordninger:</strong> Noen kommuner gir støtte
          til dreneringsprosjekter.
        </li>
        <li>
          <strong>Planlegg i lavsesong:</strong> Entreprenører har ofte lavere
          priser utenfor høysesong.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvor lang tid tar drenering?
      </h2>
      <p className="mb-6 text-brand-700">
        Drenering av en enebolig tar vanligvis **1-3 uker**, avhengig av
        grunnforhold og værforhold. Næringsbygg eller større borettslag kan ta
        lenger tid.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Vanlige spørsmål om dreneringspris
      </h2>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Er det billigere å gjøre drenering selv?
        </summary>
        <p className="mt-2 text-brand-700">
          Ja, men kun hvis du har riktig utstyr. Feilaktig drenering kan føre
          til større skader på huset ditt.
        </p>
      </details>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Dekker forsikringen drenering?
        </summary>
        <p className="mt-2 text-brand-700">
          Nei, de fleste forsikringer dekker ikke drenering med mindre det er en
          akutt skade som følge av en uforutsett hendelse.
        </p>
      </details>
      <details className="mb-6">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Hvor ofte må drenering byttes?
        </summary>
        <p className="mt-2 text-brand-700">
          De fleste dreneringssystemer har en levetid på **30-50 år**, men
          dårlig grunnforhold kan kreve tidligere utskifting.
        </p>
      </details>

      <div className="flex space-x-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/drenering/hva-er-drenering">Hva er drenering?</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/drenering/fordeler">Fordeler med drenering</Link>
        </Button>
      </div>
    </div>
  );
}
