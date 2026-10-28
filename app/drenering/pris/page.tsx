import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  alternates: { canonical: "/drenering/pris" },
  title: "Drenering pris: hva koster det? Prisdrivere og tilbud",
  description:
    "Hva koster drenering rundt hus? Slik regner du meter grunnmur, hva som driver prisen og hva et godt tilbud må spesifisere, før du ber om pris.",
};

const faqs = [
  {
    question: "Hva koster drenering rundt et hus?",
    answer:
      "Det finnes ingen fast pris. Prisen følger i hovedsak antall meter grunnmur, hvor dypt det må graves, grunnforhold, adkomst for maskiner og hva som skal kjøres bort. To like hus kan få svært ulike tilbud. Be om skriftlige tilbud fra flere firma etter en befaring.",
  },
  {
    question: "Hva betyr pris per meter ved drenering?",
    answer:
      "Det er prisen per løpemeter grunnmur som graves ut og dreneres. Hva meterprisen inkluderer varierer mellom firma (masser, isolasjon, bortkjøring, tilbakefylling), så to meterpriser kan ikke sammenlignes uten at innholdet er likt.",
  },
  {
    question: "Er det billigere å gjøre drenering selv?",
    answer:
      "Du sparer arbeidstimer, men tar selv risikoen for feil fall, feil masser eller skade på grunnmur og ledninger. Dyp graving langs en grunnmur er også en sikkerhetsrisiko. Mange velger å grave selv og la en fagperson vurdere resten, men det bør avtales på forhånd.",
  },
  {
    question: "Dekker forsikringen drenering?",
    answer:
      "Vanligvis ikke selve dreneringen, som regnes som vedlikehold. Skader som følge av plutselige hendelser kan dekkes, men vilkårene varierer. Les vilkårene i din egen forsikring eller spør selskapet.",
  },
  {
    question: "Hvor ofte må drenering byttes?",
    answer:
      "Typisk etter flere tiår, men levetiden avhenger av fyllmasser, jordtype, terreng og hvor mye nedbør det er. Er du usikker på tilstanden, kan en kamerainspeksjon av drensrøret gi svar før du bestemmer deg.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const drivers = [
  {
    factor: "Meter grunnmur",
    effect:
      "Den største enkeltfaktoren. Jobben prises i hovedsak per løpemeter, så et hus med mange avsatser og tilbygg koster mer enn en enkel firkant.",
  },
  {
    factor: "Gravedybde",
    effect:
      "Dypere grøft betyr mer graving, mer masse å håndtere og mer sikring. Hus med full kjeller dreneres ofte dypere enn hus på støpt plate.",
  },
  {
    factor: "Grunnforhold",
    effect:
      "Leire, stein og høy grunnvannstand gjør graving tyngre. Fjell kan kreve spesialutstyr eller sprengning, og slikt prises ofte som tillegg etter tid.",
  },
  {
    factor: "Adkomst",
    effect:
      "Trange tomter, bratt terreng, terrasser og bygg tett på grunnmuren kan gjøre at gravemaskinen ikke kommer til, og mer må tas for hånd.",
  },
  {
    factor: "Masser og bortkjøring",
    effect:
      "Gamle masser skal ofte ut og nye drenerende masser inn. Avstand til mottak og mengde påvirker prisen.",
  },
  {
    factor: "Isolasjon og grunnmursplate",
    effect:
      "Å isolere grunnmuren samtidig er billigere enn å grave igjen senere, men legger til materialer og arbeid. Avklar om det er med i tilbudet.",
  },
  {
    factor: "Gammel drenering og tilstand på muren",
    effect:
      "Gammelt drensrør skal fjernes. Fukt- eller sprekkskader på grunnmuren som oppdages underveis kan gi tilleggsarbeid.",
  },
  {
    factor: "Overvann og tilknytning",
    effect:
      "Hvor vannet skal ledes, om det er kommunal ledning, kum eller pumpekum, kan endre omfanget betydelig.",
  },
  {
    factor: "Tid på året og ledig kapasitet",
    effect:
      "Gravesesongen er travel. Firma som har ledig kapasitet kan være mer fleksible, men frost og tele kan også gjøre arbeid dyrere om vinteren.",
  },
];

const quoteChecklist = [
  "Hvor mange meter grunnmur tilbudet gjelder, og hvilke sider av huset",
  "Gjennomsnittlig og maksimal gravedybde",
  "Hva som skjer med gamle masser, og hva slags nye masser som legges tilbake",
  "Om isolasjon og grunnmursplate (knotteplast) er med, og tykkelse",
  "Rørtype og om det legges rensekummer for senere spyling",
  "Hvor vannet ledes, og hvem som tar kontakt med kommunen hvis det trengs tillatelse",
  "Hva som skjer hvis det treffes fjell, store steiner eller uventede ledninger, og hvordan det prises",
  "Tilbakefylling og istandsetting av hage, plen, terrasse og innkjørsel",
  "Pris inkl. eller eks. mva. Sammenlign alltid like størrelser",
  "Fremdriftsplan, betalingsplan og hvilken garanti eller reklamasjonsrett som gjelder",
];

export default function DreneringPris() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Drenering pris: hva koster det å drenere rundt huset?
      </h1>
      <p className="text-sm text-brand-600 mb-4">Sist oppdatert 28. oktober 2026</p>

      <p className="mb-4 text-brand-700">
        Prisen på drenering rundt hus avhenger i hovedsak av hvor mange meter
        grunnmur som skal graves ut, hvor dypt, hvilke grunnforhold du har og hvor
        lett maskinene kommer til. Derfor finnes det ingen riktig fastpris: det
        eneste som gir et pålitelig tall er skriftlige tilbud fra flere firma
        etter befaring. Her ser du hva som styrer prisen, hvordan du regner ut
        omfanget selv og hva et tilbud bør spesifisere.
      </p>
      <p className="mb-6 text-brand-700">
        Vi oppgir ikke en fast kroneverdi her. Vi har ikke egne prisdata ennå, og
        vi vil heller ikke gjette: et tall som ikke passer din bolig gjør
        sammenligningen av tilbud verre, ikke bedre.
      </p>

      <figure className="mb-8">
        <svg
          viewBox="0 0 1200 600"
          role="img"
          aria-label="Plantegning av et hus sett ovenfra med dreneringsgrøft rundt grunnmuren og lengdene som skal måles"
          className="w-full h-auto rounded-lg border border-brand-100"
        >
          <rect width="1200" height="600" fill="#eff6ff" />
          <rect x="260" y="110" width="680" height="380" rx="24" fill="#d9c7a3" />
          <rect x="310" y="160" width="580" height="280" rx="12" fill="#bfdbfe" stroke="#1e3a8a" strokeWidth="10" />
          <rect x="284" y="134" width="632" height="332" rx="20" fill="none" stroke="#2563eb" strokeWidth="14" strokeDasharray="30 16" strokeLinecap="round" />
          <rect x="450" y="250" width="300" height="100" rx="10" fill="#60a5fa" />
          <path d="M600 275 L600 325 M575 300 L625 300" stroke="#eff6ff" strokeWidth="10" strokeLinecap="round" />
          <circle cx="890" cy="440" r="26" fill="#1e3a8a" />
          <circle cx="890" cy="440" r="12" fill="#bfdbfe" />
          <g stroke="#1e3a8a" strokeWidth="6" fill="none" strokeLinecap="round">
            <path d="M310 540 L890 540 M310 525 L310 555 M890 525 L890 555" />
            <path d="M1010 160 L1010 440 M995 160 L1025 160 M995 440 L1025 440" />
          </g>
          <circle cx="150" cy="160" r="42" fill="#60a5fa" />
          <path d="M150 128 C 128 160 128 186 150 190 C 172 186 172 160 150 128 Z" fill="#eff6ff" />
        </svg>
        <figcaption className="text-sm text-brand-600 mt-2">
          Huset sett ovenfra: den stiplede linjen er drensgrøften rundt
          grunnmuren. Lengden langs de fire sidene er det firmaene prissetter.
        </figcaption>
      </figure>

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Hva påvirker prisen på drenering?
      </h2>
      <p className="mb-4 text-brand-700">
        Ni forhold går igjen når firma forklarer hvorfor tilbudene sprikker.
        Noen kan du selv beregne, andre ser firmaet først ved befaring.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Faktor</th>
              <th className="border border-gray-300 px-4 py-2">
                Slik påvirker den prisen
              </th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((d, i) => (
              <tr key={d.factor} className={i % 2 ? "bg-gray-100" : undefined}>
                <th className="border border-gray-300 px-4 py-2 align-top font-semibold">
                  {d.factor}
                </th>
                <td className="border border-gray-300 px-4 py-2 text-brand-700">
                  {d.effect}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Drenering pris per meter: hvorfor tallene ikke kan sammenlignes
      </h2>
      <p className="mb-4 text-brand-700">
        Mange firma oppgir en pris per løpemeter, og du finner mange meterpriser
        i forum og kommentarfelt. Slike tall er anekdoter fra enkeltprosjekter,
        ofte flere år gamle, og uten at man vet hva som var inkludert. En
        meterpris som dekker graving, nye masser, isolasjon og bortkjøring er noe
        helt annet enn en meterpris for graving og rør alene. Spør derfor alltid
        hva meterprisen omfatter, og be om totalpris for din bolig.
      </p>
      <p className="mb-4 text-brand-700">
        Bruk derfor meterpris bare til å sammenligne tilbud som er skrevet likt.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Slik regner du ut hvor mange meter som skal dreneres
      </h2>
      <p className="mb-4 text-brand-700">
        Mål grunnmuren rundt huset utenfra, eller bruk tegningene. Legg sammen
        lengden på alle sider som skal dreneres. For et enkelt, rektangulært hus
        er det omkretsen: 2 × (lengde + bredde).
      </p>
      <p className="mb-4 text-brand-700">
        Eksempel (kun for å vise regnestykket): et hus på 10 × 8 meter har en
        omkrets på 2 × (10 + 8) = 36 meter. Har huset en garasje- eller
        tilbyggsside mot et annet bygg som ikke trenger drenering, trekker du fra
        den siden. En avsats på 2 meter inn og ut legger til 4 meter. Skriv ned
        målene, antall hjørner og hvor dypt du tror muren går, så kan firmaene gi
        sammenlignbare tilbud.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Drenering og isolering av grunnmur: pris og samspill
      </h2>
      <p className="mb-4 text-brand-700">
        Når grunnmuren er gravd fri, er det naturlig å vurdere isolasjon og
        grunnmursplate samtidig. Det koster mer i materialer og arbeid, men du
        slipper å grave ut igjen senere. Be firmaene prise drenering med og uten
        isolasjon som to separate alternativer, så ser du hva tillegget faktisk
        er. Spør også hva slags isolasjon og beskyttelse de tenker å bruke, og
        hvorfor.
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Hva bør et tilbud på drenering inneholde?
      </h2>
      <p className="mb-4 text-brand-700">
        Et tilbud du kan sammenligne skal være skriftlig og gjelde din bolig.
        Sjekk at det svarer på dette:
      </p>
      <ul className="list-disc pl-6 mb-6 text-brand-700 space-y-1">
        {quoteChecklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mb-4 text-brand-700">
        Et tilbud som ser billig ut, men mangler flere av punktene, blir ofte
        dyrere underveis. Mer om hvordan du vurderer firma finner du i{" "}
        <Link
          href="/blog/hvordan-velge-riktig-dreneringsfirma"
          className="text-brand-500 underline"
        >
          hvordan velge riktig dreneringsfirma
        </Link>
        .
      </p>

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Slik får du et bedre grunnlag for å sammenligne pris
      </h2>
      <ul className="list-disc pl-6 mb-6 text-brand-700 space-y-1">
        <li>
          Få minst tre tilbud etter befaring, ikke bare telefon- eller
          chat-overslag.
        </li>
        <li>
          Be om samme omfang fra alle, med isolasjon som eget alternativ.
        </li>
        <li>
          Sjekk først om dreneringen faktisk trengs: en kamerainspeksjon av
          eksisterende drensrør kan vise tilstanden før du velger omfang. Se{" "}
          <Link
            href="/drenering/vanninntrenging"
            className="text-brand-500 underline"
          >
            vanninntrenging i kjeller
          </Link>{" "}
          for hvordan problemet kan se ut.
        </li>
        <li>
          Avklar på forhånd hvem som gjør hva hvis du vil bidra selv, for
          eksempel graving. Det påvirker både pris og ansvar.
        </li>
        <li>
          Spør om fremdriftsplan. Hvor lang tid jobben tar avhenger av
          grunnforhold, vær og omfang, så vær skeptisk til et tall uten
          forbehold.
        </li>
      </ul>

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Vanlige spørsmål om pris på drenering
      </h2>
      {faqs.map((faq) => (
        <details key={faq.question} className="mb-3">
          <summary className="cursor-pointer text-lg font-semibold text-brand-700">
            {faq.question}
          </summary>
          <p className="mt-2 text-brand-700">{faq.answer}</p>
        </details>
      ))}

      <h2 className="text-2xl text-brand-900 font-semibold mt-8 mb-3">
        Få tilbud å sammenligne
      </h2>
      <p className="mb-4 text-brand-700">
        DinDrenering er en sammenligningstjeneste: du beskriver jobben én gang, og
        vi sender forespørselen videre til dreneringsfirma. Firmaene kan betale
        for henvendelsene de får, det koster ikke deg noe. Vi er ikke et
        entreprenørfirma og gir ikke pristilbud selv. Du bestemmer hvem du vil
        bruke.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/tilbud">Få tilbud på drenering</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/drenering/hva-er-drenering">Hva er drenering?</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-brand-500 border-brand-500 hover:bg-brand-100"
        >
          <Link href="/drenering/typer-drenering">Typer drenering</Link>
        </Button>
      </div>
    </div>
  );
}
