import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Drenering Rundt Hus | Guide til Riktig Grunnmurdrenering",
  description:
    "Lær hvorfor drenering rundt hus er viktig for å unngå fuktskader og råte. Se løsninger, kostnader og hvordan du kan beskytte grunnmuren din.",
};

export default function DreneringRundtHus() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Drenering Rundt Hus – Slik Beskytter du Grunnmuren din
      </h1>

      <p className="mb-4 text-brand-700">
        Drenering rundt hus er avgjørende for å unngå fuktskader, råte og mugg i
        kjelleren. Uten en god dreneringsløsning kan vann samle seg ved
        grunnmuren og føre til alvorlige problemer over tid.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Hvorfor er drenering rundt huset viktig?
      </h2>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Forebygger fuktskader:</strong> Stopper vann fra å trenge inn
          i kjeller og grunnmur.
        </li>
        <li>
          <strong>Reduserer risikoen for mugg og råte:</strong> Fuktige
          omgivelser skaper perfekte forhold for sopp og mugg.
        </li>
        <li>
          <strong>Øker levetiden på grunnmuren:</strong> Reduserer erosjon og
          strukturelle skader.
        </li>
        <li>
          <strong>Forhindrer frostskader:</strong> Vann som fryser kan
          ekspandere og skade konstruksjonen.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan fungerer drenering rundt hus?
      </h2>
      <p className="mb-4 text-brand-700">
        Dreneringssystemer består av flere komponenter som sammen leder vannet
        vekk fra grunnmuren:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Drensrør:</strong> Rør som samler opp vann og leder det bort.
        </li>
        <li>
          <strong>Dreneringsmasse:</strong> Grus og pukk som gir god
          vanngjennomstrømning.
        </li>
        <li>
          <strong>Fuktsikring:</strong> Membraner og grunnmursplater forhindrer
          vanninntrenging.
        </li>
        <li>
          <strong>Overvannsledninger:</strong> Leder overflatevann vekk fra
          huset.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Tegn på at du trenger ny drenering
      </h2>
      <p className="mb-4 text-brand-700">
        Hvis du opplever noen av disse problemene, kan det være på tide å
        vurdere ny drenering rundt huset:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Fukt eller mugg i kjelleren</strong> – Synlige vannmerker
          eller lukt.
        </li>
        <li>
          <strong>Frostsprengte grunnmurer</strong> – Tegn på skader fra frosset
          vann.
        </li>
        <li>
          <strong>Misfargede kjellervegger</strong> – Fuktighet som trenger
          gjennom murveggen.
        </li>
        <li>
          <strong>Drensrør som ikke fungerer</strong> – Hvis vann samler seg ved
          grunnmuren.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Kostnad for drenering rundt hus
      </h2>
      <p className="mb-4 text-brand-700">
        Prisen for drenering av en enebolig varierer mellom{" "}
        <strong>150 000 - 300 000 kr</strong>, avhengig av tomtens størrelse og
        grunnforhold.
      </p>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Type drenering
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Prisområde
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Standard drenering
            </td>
            <td className="border border-gray-300 px-4 py-2">
              150 000 - 250 000 kr
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
              Drenering med isolering
            </td>
            <td className="border border-gray-300 px-4 py-2">
              200 000 - 350 000 kr
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Ekstra krevende grunnforhold
            </td>
            <td className="border border-gray-300 px-4 py-2">
              250 000 - 500 000 kr
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan redusere kostnaden?
      </h2>
      <p className="mb-4 text-brand-700">
        Det er flere måter å spare penger på drenering rundt huset:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Grav selv:</strong> Dersom mulig, gjør noe av gravearbeidet
          selv.
        </li>
        <li>
          <strong>Innhent flere tilbud:</strong> Få anbud fra flere aktører.
        </li>
        <li>
          <strong>Bruk eksisterende masser:</strong> Reduser behovet for innkjøp
          av ny dreneringsmasse.
        </li>
        <li>
          <strong>Planlegg utenfor høysesong:</strong> Lavere priser på
          vinteren.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Vanlige spørsmål om drenering rundt hus
      </h2>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Hvor ofte må drenering rundt hus byttes?
        </summary>
        <p className="mt-2 text-brand-700">
          Vanlig drenering holder i <strong>30-50 år</strong>, men kan kreve
          tidligere utskifting i vanskelige grunnforhold.
        </p>
      </details>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Kan jeg gjøre drenering selv?
        </summary>
        <p className="mt-2 text-brand-700">
          Ja, men det krever riktig verktøy og kompetanse for å sikre korrekt
          utførelse.
        </p>
      </details>

      <div className="flex space-x-4 mt-8">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/drenering/typer-drenering">Typer Drenering</Link>
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
