import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Takk for forespørselen | DinDrenering",
  description: "Forespørselen din er mottatt.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  "Vi går gjennom forespørselen og sender den til opptil 3 dreneringsfirma som jobber i ditt område.",
  "Firmaene kontakter deg direkte, ofte for å avtale en befaring før de gir en fast pris.",
  "Du sammenligner tilbudene og velger selv om du vil takke ja til noen av dem.",
];

export default function ThankYouPage() {
  return (
    <div className="bg-sand-50 px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircle className="mx-auto h-14 w-14 text-brand-600" />
        <h1 className="mt-4 text-3xl font-bold text-ink-900">Takk, forespørselen er sendt!</h1>
        <p className="mt-3 text-lg text-text-subtle">
          Du får ingen forpliktelser av dette, og det koster deg ingenting.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-white p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-ink-900">Hva skjer nå?</h2>
        <ol className="mt-4 space-y-4">
          {NEXT_STEPS.map((text, index) => (
            <li key={text} className="flex gap-3 text-text-subtle">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                {index + 1}
              </span>
              {text}
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-ink-900 p-6 text-white sm:p-8">
        <h2 className="text-lg font-semibold">Mens du venter</h2>
        <p className="mt-2 text-slate-300">
          Se hva et godt tilbud bør inneholde, så er det lettere å sammenligne
          når tilbudene kommer.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/drenering/pris" className="rounded-lg bg-white px-4 py-2 font-semibold text-ink-900">
            Prisguide og sjekkliste
          </Link>
          <Link
            href="/drenering/drenering-rundt-hus"
            className="rounded-lg border border-slate-500 px-4 py-2 font-semibold text-white"
          >
            Slik gjøres jobben
          </Link>
        </div>
      </div>
    </div>
  );
}
