import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { QuickStart } from "@/src/components/quote/QuickStart";
import { CtaBox } from "@/src/components/site/CtaBox";
import { Faq } from "@/src/components/site/Faq";
import { ContentMethods } from "@/src/queryFactory/Article";
import { CityMethods } from "@/src/queryFactory/City";

const STEPS = [
  { title: "Beskriv jobben", text: "Fortell hva du trenger hjelp med og litt om boligen. Det tar et par minutter." },
  { title: "Firma tar kontakt", text: "Vi sender forespørselen til opptil 3 dreneringsfirma i ditt område. De kontakter deg direkte." },
  { title: "Sammenlign og velg", text: "Få tilbud, gjerne etter befaring, og velg selv. Du er ikke forpliktet til noe." },
];

const PRICE_DRIVERS = [
  "Hvor mange meter grunnmur som skal graves fram",
  "Hvor dypt det må graves",
  "Grunnforhold: leire, stein eller fjell",
  "Hvor lett maskinene kommer til",
  "Om grunnmuren isoleres samtidig",
];

const SIGNS = [
  "Fuktflekker nederst på kjellerveggene",
  "Hvitt saltutslag på grunnmuren",
  "Lukt av mugg eller jordslag i kjelleren",
  "Vann som blir stående rundt huset etter regn",
];

const FAQ = [
  {
    q: "Koster det noe å bruke DinDrenering?",
    a: "Nei, det er gratis for deg som huseier. Firmaene som får forespørsler gjennom oss, kan betale for dem. Det er slik tjenesten er finansiert.",
  },
  {
    q: "Er jeg forpliktet til å takke ja?",
    a: "Nei. Du får tilbud du kan sammenligne, og bestemmer selv om du vil gå videre med noen av dem.",
  },
  {
    q: "Hvem er firmaene?",
    a: "Dreneringsfirma som jobber i området ditt. Avtalen inngår du direkte med firmaet du velger, så be om skriftlig tilbud og referanser før arbeidet starter.",
  },
  {
    q: "Hvem står bak DinDrenering?",
    a: "Tjenesten drives av én person gjennom et enkeltpersonforetak. Vi er ikke et dreneringsfirma og utfører ikke arbeid selv. Les mer på siden «Hvem står bak».",
  },
];

export default async function HomePage() {
  const guides = await ContentMethods.getAll("guides");
  const cities = await CityMethods.getAll();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 lg:grid-cols-[1fr_420px] lg:py-16">
          <div>
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800">
              Gratis og uforpliktende for huseiere
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 md:text-6xl">
              Få tilbud på drenering fra firma i ditt område
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-700">
              Beskriv jobben én gang, så sender vi forespørselen til opptil 3
              dreneringsfirma der du bor. Du sammenligner og velger selv.
            </p>
            <ul className="mt-6 grid gap-2 text-slate-700 sm:grid-cols-2">
              {["Opptil 3 tilbud", "Ingen forpliktelser", "Firma i ditt område", "Ærlige guider om pris"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-brand-600" /> {item}
                </li>
              ))}
            </ul>
            <Image
              src="/illustrations/hus-drenering-snitt.svg"
              alt="Snitt av et hus med drensrør langs grunnmuren som leder vannet bort."
              width={1200}
              height={600}
              priority
              className="mt-8 hidden rounded-2xl border border-border lg:block"
            />
          </div>
          <QuickStart />
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-ink-900">Slik fungerer det</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-semibold text-white">
                {index + 1}
              </span>
              <p className="mt-4 text-lg font-semibold text-ink-900">{step.title}</p>
              <p className="mt-2 text-slate-700">{step.text}</p>
            </li>
          ))}
        </ol>
        <Link href="/hvordan-funker-det" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-700">
          Mer om hvordan tjenesten fungerer <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Price */}
      <section className="bg-brand-50 py-16">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">Hva koster drenering?</h2>
            <p className="mt-4 text-lg text-slate-700">
              Det finnes ingen fast pris, og vi gjetter ikke. Men prisen styres av
              noen få ting du kan forstå før du ber om tilbud:
            </p>
            <ul className="mt-5 space-y-2">
              {PRICE_DRIVERS.map((driver) => (
                <li key={driver} className="flex gap-2 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {driver}
                </li>
              ))}
            </ul>
            <Link
              href="/drenering/pris"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink-900 px-5 py-3 font-semibold text-white hover:bg-ink-800"
            >
              Les prisguiden <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Image
            src="/illustrations/hus-omkrets.svg"
            alt="Huset sett ovenfra med drensgrøften rundt grunnmuren."
            width={1200}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* Signs */}
      <section className="container mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <Image
          src="/illustrations/vann-i-kjeller.svg"
          alt="Hus i regnvær der vannet trenger inn i kjelleren."
          width={1200}
          height={600}
          className="order-last rounded-2xl lg:order-first"
        />
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">
            Tegn på at dreneringen ikke fungerer
          </h2>
          <ul className="mt-5 space-y-2">
            {SIGNS.map((sign) => (
              <li key={sign} className="flex gap-2 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay-500" /> {sign}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700">
            Ett tegn alene betyr ikke nødvendigvis ny drenering. Kondens og lekkasjer
            innenfra kan gi lignende symptomer.
          </p>
          <Link href="/drenering/vanninntrenging" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-700">
            Slik finner du årsaken <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-sand-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">Guider om drenering</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/drenering/${guide.slug}`}
                className="rounded-2xl border border-border bg-white p-6 transition-colors hover:border-brand-300"
              >
                <span className="text-lg font-semibold text-ink-900">{guide.navTitle || guide.title}</span>
                <span className="mt-2 line-clamp-3 block text-sm text-text-subtle">{guide.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-ink-900">Drenering i din by</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/drenering/${city.slug}`}
                className="inline-block rounded-full border border-border px-4 py-2 text-ink-800 hover:border-brand-300 hover:text-brand-700"
              >
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-slate-700">
          Bor du et annet sted?{" "}
          <Link href="/tilbud" className="font-semibold text-brand-700 underline">
            Send en forespørsel
          </Link>{" "}
          med postnummeret ditt.
        </p>
      </section>

      {/* FAQ + CTA */}
      <section className="container mx-auto grid max-w-6xl gap-10 px-4 pb-20 lg:grid-cols-2">
        <Faq items={FAQ} />
        <div className="lg:mt-12">
          <CtaBox />
        </div>
      </section>
    </>
  );
}
