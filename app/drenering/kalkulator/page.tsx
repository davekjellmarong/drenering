import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/src/components/site/Breadcrumbs";
import { CtaBox } from "@/src/components/site/CtaBox";
import { Faq } from "@/src/components/site/Faq";
import { DreneringKalkulator } from "@/src/components/site/DreneringKalkulator";

export const metadata = {
  alternates: { canonical: "/drenering/kalkulator" },
  title: "Drenering kalkulator: regn ut meter og grov pris",
  description:
    "Regn ut meter grunnmur og se et grovt prisspenn for drenering, med sjekkliste over det som påvirker prisen. Et regnestykke, ikke et tilbud.",
  openGraph: {
    type: "website",
    title: "Drenering kalkulator: regn ut meter og grov pris",
    url: "/drenering/kalkulator",
  },
};

const FAQ = [
  {
    q: "Hvor nøyaktig er kalkulatoren?",
    a: "Den er ikke nøyaktig, og den gir ikke et tilbud. Den ganger meterne dine med et spenn fra Huseierne (4 000–9 000 kr per løpemeter). Spennet er bredt fordi prisen avhenger av landsdel, forholdene rundt bygget og husets utforming. Bare et skriftlig tilbud etter befaring gir en pris du kan legge til grunn.",
  },
  {
    q: "Hvorfor endrer ikke dybde og grunnforhold tallet?",
    a: "Fordi vi ikke har en kilde som sier hvor mye hver faktor påvirker prisen, og vi gjetter ikke. Faktorene vises som en sjekkliste av hva som typisk gjør jobben dyrere, slik at du kan ta det med til firmaene.",
  },
  {
    q: "Er prisen med eller uten mva.?",
    a: "Huseierne oppgir ikke det, og heller ikke hva som er inkludert. Spør derfor alltid om tilbudet er med eller uten mva., og hva meterprisen omfatter.",
  },
  {
    q: "Hvordan måler jeg meter grunnmur?",
    a: "Mål grunnmuren utenfra, eller bruk tegningene, og legg sammen alle sidene som skal dreneres. For et enkelt rektangulært hus er det 2 × (lengde + bredde). Avsatser og tilbygg legger til meter.",
  },
];

export default function KalkulatorPage() {
  return (
    <>
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto max-w-4xl px-4 pb-8 pt-8">
          <Breadcrumbs
            items={[
              { name: "Guider", href: "/drenering" },
              { name: "Kalkulator", href: "/drenering/kalkulator" },
            ]}
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Drenering kalkulator: regn ut meter og grov pris
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Skriv inn størrelsen på huset og se hvor mange meter grunnmur det blir, og hva
            Huseiernes prisspenn gir i kroner. Det er et regnestykke, ikke et tilbud: den
            faktiske prisen avhenger av dybde, grunnforhold, adkomst og hva som er med.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-10">
        <Image
          src="/illustrations/drenering-kalkulator.svg"
          alt="Hus sett ovenfra med målebånd langs to sider og en liten kalkulator ved siden av."
          width={1200}
          height={600}
          className="mb-8 w-full rounded-2xl border border-border"
          priority
        />
        <DreneringKalkulator />

        <div className="mt-10 max-w-3xl space-y-4 text-slate-800">
          <h2 className="text-2xl font-semibold text-ink-900">Hva kalkulatoren bygger på</h2>
          <p>
            Det eneste prisen i kalkulatoren hviler på er Huseiernes oppgave om at priser for
            drenering varierer mellom 4 000 og 9 000 kroner per løpemeter (artikkelen er oppdatert
            6. november 2025). Vi har valgt å ikke justere tallet for dybde, fjell eller adkomst,
            fordi vi ikke har kildebelagte tall for hvor mye hver faktor betyr. Forumtråder oppgir ofte
            lavere meterpriser, men de er anekdoter fra enkeltprosjekter, ofte eldre og uten at
            man vet hva som var med, så vi bruker dem ikke.
          </p>
          <p>
            Slik bruker du resultatet: se det som en ramme for hvor stor jobben kan bli, og bruk
            sjekklisten til å beskrive jobben likt til alle firmaene. Hva meterprisen omfatter og
            hvorfor tilbud sprikker, står i{" "}
            <Link href="/drenering/pris" className="text-brand-700 underline">drenering pris</Link>.
            Hvordan jobben skal utføres, står i{" "}
            <Link href="/drenering/drenering-rundt-hus" className="text-brand-700 underline">
              drenering rundt hus: steg for steg og mål
            </Link>
            , og hva tilbudet bør si om fyllmasser, i{" "}
            <Link href="/blog/drenerende-masser" className="text-brand-700 underline">drenerende masser</Link>.
          </p>
          <p>
            Når du har meterne og svarene, er neste steg å få tilbud etter befaring.{" "}
            <Link href="/tilbud" className="text-brand-700 underline">Send en forespørsel</Link>{" "}
            så ber vi opptil tre dreneringsfirma i området ta kontakt. Vi garanterer ikke svar
            eller dekning i alle områder.
          </p>
        </div>

        <div className="mt-10"><CtaBox /></div>
        <Faq items={FAQ} />

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink-900">Kilder</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>
              <a className="text-brand-600 underline" target="_blank" rel="noopener"
                href="https://www.huseierne.no/alt-om-bolig/vedlikehold-og-oppussing/drenering-nar-og-hvordan-gjor-du-det/">
                Huseierne: Drenering – når og hvordan gjør du det (oppdatert 06.11.2025)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
