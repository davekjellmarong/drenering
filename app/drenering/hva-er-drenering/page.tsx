import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import UnderConstruction from "@/src/components/features/under-development/UnderDevelopment";

export const metadata = {
  title: "Hva er drenering? | En komplett guide til drenering",
  description:
    "Lær hva drenering er, hvorfor det er viktig, og hvordan det fungerer for å beskytte hus og eiendom mot vannskader.",
};

export default function HvaErDrenering() {
  return <UnderConstruction pageName="'Hva er Drenering?'" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Hva er drenering? En komplett guide til drenering
      </h1>

      <p className="mb-4 text-brand-700">
        Drenering refererer til prosessen med å lede bort vann fra et område for
        å forhindre vannskader og skape et stabilt underlag. Dette er avgjørende
        for både private boliger, borettslag og næringseiendommer, da dårlig
        drenering kan føre til omfattende fuktskader, mugg, råte og økt risiko
        for setningsskader i fundamentet.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Hvorfor er drenering viktig?
      </h2>

      <ul className="list-disc list-inside mb-4">
        <li>Forhindrer fuktskader på hus, grunnmur og kjellere</li>
        <li>Reduserer risikoen for mugg, råte og dårlig inneklima</li>
        <li>Forbedrer stabiliteten til bygninger og strukturer</li>
        <li>Beskyttelse av veier, parkeringsplasser og hageområder</li>
        <li>Øker levetiden og verdien til eiendommen</li>
      </ul>

      <p className="mb-6 text-brand-700">
        Spesielt i områder med mye nedbør eller høy grunnvannstand er drenering
        essensielt for å unngå vannansamlinger rundt hus og bygninger. En god
        dreneringsløsning kan spare deg for store utgifter knyttet til
        fuktskader og reparasjoner.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan fungerer drenering?
      </h2>
      <p className="mb-4 text-brand-700">
        Drenering fungerer ved å lede bort overflødig vann ved hjelp av et
        system av rør, grøfter eller naturlige vannveier. Det finnes flere typer
        dreneringssystemer, som alle har forskjellige bruksområder:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Overflatevann drenering:</strong> Brukes for å lede bort
          regnvann og smeltevann fra hager, gårdsplasser og veier.
        </li>
        <li>
          <strong>Grunnvannsdrenering:</strong> Installeres rundt grunnmuren for
          å hindre at vann trenger inn i kjellere og fundamenter.
        </li>
        <li>
          <strong>Drensgrøfter:</strong> En løsning som kombinerer overflate- og
          grunnvannsdrenering for ekstra beskyttelse.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvilke tegn tyder på dårlig drenering?
      </h2>
      <p className="mb-4 text-brand-700">
        Hvis du opplever noen av følgende problemer, kan det være et tegn på at
        eiendommen din trenger bedre drenering:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>Vannansamlinger på tomten eller i kjelleren</li>
        <li>Fuktige kjellervegger eller muggdannelse</li>
        <li>Saltutslag eller misfarging på grunnmuren</li>
        <li>Myk eller ustabil grunn rundt huset</li>
        <li>Frostsprengninger i betong eller asfalt på vinteren</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvor mye koster drenering?
      </h2>
      <p className="mb-6 text-brand-700">
        Kostnaden for drenering avhenger av flere faktorer, inkludert tomtens
        størrelse, type grunnforhold og valg av dreneringsløsning. Generelt
        ligger prisen på drenering rundt eneboliger mellom{" "}
        <strong>150 000 og 300 000 kr</strong>. Du kan lese mer om priser på vår{" "}
        <Link href="/drenering/pris" className="text-brand-500 underline">
          prisside
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan finne den beste dreneringsløsningen?
      </h2>
      <p className="mb-6 text-brand-700">
        Det finnes mange ulike dreneringsmetoder, og den beste løsningen
        avhenger av eiendommens behov og grunnforhold. Vi anbefaler alltid å
        rådføre deg med fagfolk for å finne den mest kostnadseffektive og
        langvarige løsningen. Du kan også se vår oversikt over
        <Link
          href="/drenering/typer-drenering"
          className="text-brand-500 underline"
        >
          typer drenering
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Vanlige spørsmål om drenering
      </h2>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Hvor ofte må drenering byttes?
        </summary>
        <p className="mt-2 text-brand-700">
          Drenering rundt hus har en levetid på 30-50 år, men kan vare kortere i
          områder med høy grunnvannstand eller dårlig utført installasjon.
        </p>
      </details>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Er drenering nødvendig for alle hus?
        </summary>
        <p className="mt-2 text-brand-700">
          Ikke alle hus trenger omfattende drenering, men hvis du bor i et
          område med mye regn eller høy grunnvannstand, er det en viktig
          investering.
        </p>
      </details>
      <details className="mb-6">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Kan jeg gjøre drenering selv?
        </summary>
        <p className="mt-2 text-brand-700">
          Det er mulig å gjøre drenering selv, men feilinstallasjon kan føre til
          store problemer. Profesjonell utførelse anbefales for langvarige
          resultater.
        </p>
      </details>

      <div className="flex space-x-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/drenering/fordeler">Les om fordelene med drenering</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/drenering/typer-drenering">
            Typer dreneringssystemer
          </Link>
        </Button>
      </div>
    </div>
  );
}
