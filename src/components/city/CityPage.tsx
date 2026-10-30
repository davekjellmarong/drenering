import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/src/components/site/Breadcrumbs";
import { Faq } from "@/src/components/site/Faq";
import { QuickStart } from "@/src/components/quote/QuickStart";
import type { City } from "@/src/utils/types";
import type { NavItem } from "@/src/components/site/Header";

const SIGNS = [
  { title: "Fukt på kjellerveggene", text: "Ofte nederst på veggen, og verst etter regn eller snøsmelting." },
  { title: "Hvitt saltutslag", text: "Salter som følger med fukt gjennom muren og blir liggende igjen på overflaten." },
  { title: "Vann rundt grunnmuren", text: "Vann som blir stående inntil huset etter regn, kan tyde på feil fall eller tett drenering." },
  { title: "Lukt av mugg", text: "Jordslag eller muggen lukt i kjelleren er et vanlig tegn på langvarig fukt." },
];

const STEPS = [
  { title: "Beskriv jobben", text: "Fortell hva du trenger hjelp med og litt om boligen. Det tar et par minutter." },
  { title: "Firma tar kontakt", text: "Vi sender forespørselen til opptil 3 firma i ditt område. De kontakter deg direkte." },
  { title: "Sammenlign og velg", text: "Få tilbud etter befaring og velg selv. Du er ikke forpliktet til noe." },
];

interface CityPageProps {
  city: City;
  guides: NavItem[];
  otherCities: NavItem[];
}

// Template for /drenering/<city>. Local facts go here only when they are
// sourced (see STRATEGY.md section 5); until then the page stays general
// rather than inventing anything about the city.
export function CityPage({ city, guides, otherCities }: CityPageProps) {
  const faq = [
    {
      q: `Hvor mye koster drenering i ${city.name}?`,
      a: `Det finnes ingen fast pris for ${city.name}. Prisen avhenger av hvor mange meter grunnmur som skal graves fram, hvor dypt det er, grunnforholdene og hvor lett det er å komme til med maskiner. Prisguiden vår forklarer hva som påvirker prisen, og hva et tilbud bør inneholde.`,
    },
    {
      q: `Hvordan finner jeg et dreneringsfirma i ${city.name}?`,
      a: `Fyll ut skjemaet på denne siden, så sender vi forespørselen til opptil 3 dreneringsfirma som jobber i ${city.name}. Da får du tilbud du kan sammenligne.`,
    },
    {
      q: "Hvor lang tid tar en dreneringsjobb?",
      a: "Det avhenger av hvor mange meter som skal graves, grunnforholdene og været. Be firmaet om en tidsplan med oppstart og ferdigdato i tilbudet.",
    },
  ];

  return (
    <>
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 lg:grid-cols-[1fr_400px] lg:py-14">
          <div>
            <Breadcrumbs items={[{ name: "Drenering", href: "/drenering" }, { name: city.name, href: `/drenering/${city.slug}` }]} />
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
              Drenering i {city.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700">
              Trenger huset ditt ny drenering, eller har du vann eller fukt i
              kjelleren? Beskriv jobben én gang, så sender vi forespørselen til
              dreneringsfirma som jobber i {city.name}.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>✓ Gratis og uforpliktende</li>
              <li>✓ Opptil 3 tilbud å sammenligne</li>
              <li>✓ Du velger selv hvem du vil bruke</li>
            </ul>
            <Image
              src="/illustrations/hus-drenering-snitt.svg"
              alt="Snitt av hus med drensrør langs grunnmuren."
              width={1200}
              height={600}
              className="mt-8 hidden rounded-2xl border border-border lg:block"
            />
          </div>
          <QuickStart city={city.name} />
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Slik får du tilbud</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border p-6">
              <span className="text-sm font-semibold text-brand-600">Steg {index + 1}</span>
              <p className="mt-1 text-lg font-semibold text-ink-900">{step.title}</p>
              <p className="mt-2 text-slate-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-brand-50 py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
            Tegn på at dreneringen ikke fungerer
          </h2>
          <p className="mt-2 max-w-2xl text-slate-700">
            Ser du noen av disse tegnene på huset ditt i {city.name}, kan det være
            lurt å få et dreneringsfirma til å se på grunnmuren.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {SIGNS.map((sign) => (
              <div key={sign.title} className="rounded-2xl bg-white p-6">
                <p className="font-semibold text-ink-900">{sign.title}</p>
                <p className="mt-1 text-slate-700">{sign.text}</p>
              </div>
            ))}
          </div>
          <Link href="/drenering/vanninntrenging" className="mt-6 inline-block font-semibold text-brand-700 underline">
            Les mer om vann og fukt i kjelleren
          </Link>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink-900">Før du ber om tilbud</h2>
            <ul className="mt-4 space-y-3">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="font-medium text-brand-700 underline underline-offset-2">
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink-900">Drenering i andre byer</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {otherCities.map((other) => (
                <li key={other.href}>
                  <Link
                    href={other.href}
                    className="inline-block rounded-full border border-border px-3 py-1.5 text-sm text-ink-800 hover:border-brand-300 hover:text-brand-700"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-3xl">
          <Faq items={faq} title={`Spørsmål om drenering i ${city.name}`} />
        </div>
      </section>
    </>
  );
}
