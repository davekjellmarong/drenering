import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title:
    "Dreneringsrenne | Effektiv Vannhåndtering for Oppkjørsler og Uteområder",
  description:
    "Dreneringsrenner for oppkjørsler, terrasser og hager. Lær hvordan du installerer, hvilke typer som finnes, og hvilke du bør velge.",
};

export default function Dreneringsrenne() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Dreneringsrenne – Effektiv Avrenning for Oppkjørsler og Uteområder
      </h1>

      <p className="mb-4 text-brand-700">
        En <strong>dreneringsrenne</strong> er en effektiv løsning for å
        håndtere overflatevann og forhindre vanndammer i oppkjørsler,
        garasjeområder, inngangspartier og terrasser. Renner brukes ofte for å
        lede bort vann på flate områder der naturlig drenering ikke er
        tilstrekkelig.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Hvorfor trenger du en dreneringsrenne?
      </h2>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Forhindrer vanndammer:</strong> Leder bort vann fra
          oppkjørsler, gangstier og uteområder.
        </li>
        <li>
          <strong>Beskyttelse av bygninger:</strong> Stopper vann fra å trenge
          inn i garasjer og kjellere.
        </li>
        <li>
          <strong>Bedre sikkerhet:</strong> Reduserer risikoen for isdannelse på
          vinteren.
        </li>
        <li>
          <strong>Lang levetid:</strong> Holdbare materialer sikrer varig
          beskyttelse.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Typer dreneringsrenner</h2>
      <p className="mb-4 text-brand-700">
        Det finnes ulike typer dreneringsrenner, tilpasset forskjellige behov:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Betongrenner:</strong> Ekstremt slitesterke og egnet for høy
          belastning.
        </li>
        <li>
          <strong>Plastrenner:</strong> Enkle å installere og rimelige.
        </li>
        <li>
          <strong>Stålrenner:</strong> Moderne utseende og solid konstruksjon.
        </li>
        <li>
          <strong>Sandfangrenner:</strong> Har innebygd filter som fanger opp
          smuss og blader.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan installere en dreneringsrenne?
      </h2>
      <p className="mb-4 text-brand-700">
        Installering av en dreneringsrenne er en relativt enkel prosess, men
        krever presis utførelse:
      </p>

      <ol className="list-decimal list-inside mb-6">
        <li>Mål opp området der dreneringsrennen skal plasseres.</li>
        <li>Grav en grøft som er dyp nok for rennen og eventuelle avløp.</li>
        <li>Legg et gruslag i bunnen for god drenering.</li>
        <li>Plasser dreneringsrennen i grøften og juster den i vater.</li>
        <li>Fyll igjen sidene med betong eller jord for stabilitet.</li>
        <li>Koble rennen til et avløpssystem eller infiltrasjonsområde.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">
        Kostnader for dreneringsrenner
      </h2>
      <p className="mb-4 text-brand-700">
        Prisen på dreneringsrenner varierer basert på materialer og lengde. Her
        er en oversikt over typiske kostnader:
      </p>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Type Dreneringsrenne
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Pris per meter
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Plastrenne</td>
            <td className="border border-gray-300 px-4 py-2">300 - 600 kr</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Betongrenne</td>
            <td className="border border-gray-300 px-4 py-2">800 - 1 500 kr</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Sandfangrenne</td>
            <td className="border border-gray-300 px-4 py-2">
              1 000 - 2 500 kr
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">
        Vanlige spørsmål om dreneringsrenner
      </h2>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Hvor ofte må en dreneringsrenne rengjøres?
        </summary>
        <p className="mt-2 text-brand-700">
          Det anbefales å rense rennen én gang i året, spesielt på høsten for å
          fjerne blader og smuss.
        </p>
      </details>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Kan jeg installere en dreneringsrenne selv?
        </summary>
        <p className="mt-2 text-brand-700">
          Ja, men det krever at du har riktig utstyr og sørger for korrekt
          avløpssystem.
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
