import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const metadata = {
  title: "Vanninntrenging i kjeller og grunnmur | Årsaker og løsning",
  description:
    "Vanninntrenging i kjeller eller grunnmur? Lær hva som forårsaker vanngjennomtrengning, hvordan du oppdager det tidlig, og hvordan drenering løser problemet.",
};

const faqs = [
  {
    question: "Er vanninntrenging og vanngjennomtrengning det samme?",
    answer:
      "Ja, dette er to vanlige begreper for samme problem: vann som trenger inn gjennom grunnmur eller kjellervegger fra utsiden.",
  },
  {
    question: "Kan jeg stoppe vanninntrenging uten å grave opp grunnmuren?",
    answer:
      "Midlertidige tiltak som membraner innvendig kan redusere problemet, men de fjerner ikke årsaken. For en varig løsning må vanntrykket utenfra reduseres, som krever utvendig drenering.",
  },
  {
    question: "Hvor lang tid tar det før vanninntrenging skader huset?",
    answer:
      "Det varierer, men kontinuerlig fukt kan gi mugg og råteskader i løpet av måneder, og over flere år kan det svekke selve konstruksjonen.",
  },
  {
    question: "Hvordan finner jeg ut om huset mitt har vanninntrenging?",
    answer:
      "Se etter fuktflekker, lukt av mugg, og vannansamlinger rundt huset etter regn. En fagperson kan gjøre en grundig vurdering av grunnmur og drenering.",
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

export default function Vanninntrenging() {
  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-4xl text-brand-900 font-bold mb-6">
        Vanninntrenging: Hva er det, og hvordan stopper du det?
      </h1>

      <blockquote className="border-l-4 border-brand-500 bg-brand-50 p-4 mb-6 text-brand-800">
        <strong>Kort svar:</strong> Vanninntrenging (også kalt
        vanngjennomtrengning) er når vann trenger inn gjennom grunnmur,
        kjellervegger eller fundament fordi vannet ikke ledes bort raskt nok.
        Den vanligste og mest varige løsningen er å installere eller
        oppgradere drenering rundt bygget.
      </blockquote>

      <h2 className="text-2xl font-semibold mb-4">
        Hva er vanninntrenging?
      </h2>
      <p className="mb-4 text-brand-700">
        Vanninntrenging oppstår når grunnvann eller overflatevann finner veien
        gjennom sprekker, porøse materialer eller dårlig tettede overganger i
        grunnmuren og inn i kjelleren. Det skjer oftest når jorden rundt huset
        holder på mer vann enn den skal, typisk fordi drenering mangler, er
        tett eller for gammel.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Hva er tegnene på vanninntrenging?
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>Fuktige eller våte flekker på kjellervegger og gulv</li>
        <li>Lukt av mugg eller fukt i kjelleren</li>
        <li>Saltutslag (hvite belegg) på grunnmuren</li>
        <li>Vann som samler seg rundt fundamentet etter regn</li>
        <li>Bobler eller avskalling i malingen på kjellervegger</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvorfor skjer vanngjennomtrengning?
      </h2>
      <p className="mb-4 text-brand-700">
        De vanligste årsakene er:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Manglende eller utdatert drenering:</strong> Gamle
          dreneringssystemer kan tette seg eller kollapse etter 30-50 år.
        </li>
        <li>
          <strong>Feil fall på terrenget:</strong> Hvis grunnen heller mot
          huset i stedet for fra det, samler vannet seg rundt grunnmuren.
        </li>
        <li>
          <strong>Høy grunnvannstand:</strong> Vanlig i leirholdig grunn eller
          områder nær vann.
        </li>
        <li>
          <strong>Sprekker i grunnmuren:</strong> Selv små sprekker gir vann en
          vei inn over tid.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Hvordan løser du vanninntrenging?
      </h2>
      <p className="mb-6 text-brand-700">
        Den mest effektive og varige løsningen er ny eller utbedret{" "}
        <Link href="/drenering/hva-er-drenering" className="text-brand-500 underline">
          drenering
        </Link>{" "}
        rundt grunnmuren, kombinert med korrekt fall på terrenget bort fra
        huset. I noen tilfeller må også overvannshåndtering vurderes, se vår
        side om{" "}
        <Link href="/tjenester/overvannshandtering" className="text-brand-500 underline">
          overvannshåndtering
        </Link>
        . Kostnaden avhenger av omfanget av arbeidet, se vår{" "}
        <Link href="/drenering/pris" className="text-brand-500 underline">
          prisguide for drenering
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Vanlige spørsmål om vanninntrenging
      </h2>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Er vanninntrenging og vanngjennomtrengning det samme?
        </summary>
        <p className="mt-2 text-brand-700">
          Ja, dette er to vanlige begreper for samme problem: vann som trenger
          inn gjennom grunnmur eller kjellervegger fra utsiden.
        </p>
      </details>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Kan jeg stoppe vanninntrenging uten å grave opp grunnmuren?
        </summary>
        <p className="mt-2 text-brand-700">
          Midlertidige tiltak som membraner innvendig kan redusere problemet,
          men de fjerner ikke årsaken. For en varig løsning må vanntrykket
          utenfra reduseres, som krever utvendig drenering.
        </p>
      </details>
      <details className="mb-4">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Hvor lang tid tar det før vanninntrenging skader huset?
        </summary>
        <p className="mt-2 text-brand-700">
          Det varierer, men kontinuerlig fukt kan gi mugg og råteskader i løpet
          av måneder, og over flere år kan det svekke selve konstruksjonen.
        </p>
      </details>
      <details className="mb-6">
        <summary className="cursor-pointer text-lg font-semibold text-brand-700">
          Hvordan finner jeg ut om huset mitt har vanninntrenging?
        </summary>
        <p className="mt-2 text-brand-700">
          Se etter fuktflekker, lukt av mugg, og vannansamlinger rundt huset
          etter regn. En fagperson kan gjøre en grundig vurdering av grunnmur
          og drenering.
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
          <Link href="/drenering/pris">Se priser på drenering</Link>
        </Button>
      </div>
    </div>
  );
}
