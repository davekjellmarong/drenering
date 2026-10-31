import Link from "next/link";
import { Breadcrumbs } from "@/src/components/site/Breadcrumbs";
import { CtaBox } from "@/src/components/site/CtaBox";
import { Faq } from "@/src/components/site/Faq";

export const metadata = {
  alternates: { canonical: "/hvordan-funker-det" },
  title: "Slik fungerer DinDrenering",
  description:
    "Slik fungerer DinDrenering: én gratis forespørsel som sendes til opptil 3 dreneringsfirma i ditt område, og hvordan tjenesten finansieres.",
};

const STEPS = [
  {
    title: "Du beskriver jobben",
    text: "Fortell hva du trenger hjelp med, hvor boligen ligger og litt om huset. Jo mer firmaene vet, jo bedre kan de svare. Det tar et par minutter.",
  },
  {
    title: "Vi sender forespørselen videre",
    text: "Forespørselen går til opptil 3 dreneringsfirma som jobber i området ditt. Tjenesten drives av én person, og forespørslene gjennomgås og videresendes manuelt. Vi deler bare det du har fylt inn i skjemaet.",
  },
  {
    title: "Firmaene kontakter deg",
    text: "Firmaene tar kontakt direkte, ofte for å avtale en befaring. En fast pris uten at noen har sett huset, bør du være skeptisk til.",
  },
  {
    title: "Du sammenligner og velger",
    text: "Sammenlign tilbudene på pris, hva som er inkludert og når jobben kan gjøres. Du bestemmer selv om du vil takke ja.",
  },
];

const FAQ = [
  {
    q: "Hva koster det?",
    a: "Ingenting for deg. Firmaene kan betale for henvendelsene de får gjennom oss, og det er slik tjenesten er finansiert.",
  },
  {
    q: "Blir jeg nedringt?",
    a: "Forespørselen går til opptil 3 firma, ikke til alle. Vi selger ikke kontaktinformasjonen din videre til andre formål.",
  },
  {
    q: "Hva om ingen firma tar kontakt?",
    a: "Vi kan ikke garantere at alle forespørsler får svar, særlig i travle perioder eller i områder med få firma. Send oss gjerne en e-post hvis du ikke har hørt noe.",
  },
  {
    q: "Er dere et dreneringsfirma?",
    a: "Nei. Vi utfører ikke arbeid og gir ikke pristilbud selv. Avtalen inngår du direkte med firmaet du velger.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto max-w-4xl px-4 py-10">
          <Breadcrumbs items={[{ name: "Slik fungerer det", href: "/hvordan-funker-det" }]} />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Slik fungerer DinDrenering
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Én forespørsel i stedet for å ringe rundt selv. Her er hva som skjer
            fra du fyller ut skjemaet til du har tilbud å sammenligne.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <ol className="space-y-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-5 rounded-2xl border border-border p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-lg font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-lg font-semibold text-ink-900">{step.title}</p>
                <p className="mt-1 text-slate-700">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl bg-brand-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-ink-900">Hvordan tjenesten finansieres</h2>
          <p className="mt-3 text-slate-700">
            DinDrenering er gratis for huseiere. Firmaene som får forespørsler
            gjennom oss, kan betale for dem. Vi får altså ikke betalt for å anbefale
            et bestemt firma, og du velger selv hvem du vil bruke. Les mer om{" "}
            <Link href="/om-oss/team" className="text-brand-700 underline">
              hvem som står bak
            </Link>
            .
          </p>
        </div>

        <Faq items={FAQ} />

        <div className="mt-12">
          <CtaBox title="Klar til å beskrive jobben?" />
        </div>
      </section>
    </>
  );
}
