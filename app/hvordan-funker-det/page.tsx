import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import {
  Check,
  Clock,
  DollarSign,
  Droplets,
  ArrowRight,
  Shield,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Hvordan Det Fungerer - DreneringsExperten",
  description:
    "Lær hvordan DreneringsExperten gjør det enkelt å finne pålitelige dreneringstjenester i ditt område",
};

export default function HowItWorks() {
  // Process steps with more detailed information
  const steps = [
    {
      number: "01",
      title: "Send Inn Din Forespørsel",
      description:
        "Fortell oss om ditt dreneringsproblem og hvilken tjeneste du trenger. Fyll ut vårt enkle skjema med detaljer om prosjektet ditt, inkludert type problem, beliggenhet, og når du trenger hjelp. Det tar bare 2-3 minutter.",
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      details: [
        "Beskriv problemet ditt i detalj",
        "Angi din plassering for lokal service",
        "Velg når du trenger tjenesten",
        "Last opp bilder (valgfritt)",
      ],
    },
    {
      number: "02",
      title: "Få Flere Tilbud",
      description:
        "Innen 24-48 timer vil du motta opptil 3 konkurransedyktige tilbud fra verifiserte lokale dreneringsfagfolk. Hvert tilbud inkluderer pristilbud, tidslinje og tjenestebeskrivelse.",
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      details: [
        "Motta tilbud fra opptil 3 fagfolk",
        "Se detaljerte pristilbud og tidslinjer",
        "Sjekk fagfolkenes vurderinger og anmeldelser",
        "Still spørsmål direkte til leverandører",
      ],
    },
    {
      number: "03",
      title: "Sammenlign & Velg",
      description:
        "Vurder tilbudene basert på pris, tidslinje, kvalifikasjoner og kundeanmeldelser. Velg det firmaet som best oppfyller dine behov og budsjett, og kom i gang med prosjektet ditt.",
      icon: <Check className="h-12 w-12 text-blue-600" />,
      details: [
        "Sammenlign priser og tidsestimater",
        "Les tidligere kunders anmeldelser",
        "Vurder fagfolkenes erfaring og spesialiteter",
        "Velg det beste tilbudet for dine behov",
      ],
    },
  ];

  // Benefits of using our service
  const benefits = [
    {
      title: "Tidssparende",
      description:
        "Spar timer på å ringe rundt og få tilbud. Med én forespørsel får du flere tilbud.",
      icon: <Clock className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Kvalitetssikret",
      description:
        "Alle fagfolk i vårt nettverk er verifisert, lisensiert og gjennomgått for kvalitet.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Helt Gratis",
      description:
        "Vår tjeneste er helt gratis å bruke for kunder. Du betaler kun for arbeidet som utføres.",
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Bredt Nettverk",
      description:
        "Tilgang til et stort nettverk av spesialister innen alle typer dreneringstjenester.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
  ];

  // FAQ items
  const faqs = [
    {
      question: "Koster det noe å bruke tjenesten?",
      answer:
        "Nei, DreneringsExperten er helt gratis å bruke for kunder. Du betaler kun for arbeidet som utføres av fagfolkene du velger.",
    },
    {
      question: "Hvor raskt vil jeg motta tilbud?",
      answer:
        "I de fleste tilfeller vil du begynne å motta tilbud innen 24-48 timer etter at du har sendt inn forespørselen din.",
    },
    {
      question: "Hvordan velger dere fagfolk til nettverket deres?",
      answer:
        "Vi gjennomfører en grundig verifiseringsprosess som inkluderer lisenskontroll, forsikringsbevis, bakgrunnssjekk og gjennomgang av tidligere arbeid og kundevurderinger.",
    },
    {
      question: "Hva hvis jeg ikke er fornøyd med tilbudene?",
      answer:
        "Det er ingen forpliktelser å akseptere noen av tilbudene. Du står fritt til å avslå alle og søke tjenester andre steder hvis du ønsker det.",
    },
    {
      question: "Kan jeg be om tilbud for akutte dreneringsproblemer?",
      answer:
        "Ja, men for akutte nødssituasjoner anbefaler vi at du angir dette tydelig i forespørselen din, slik at vi kan prioritere å finne tilgjengelige fagfolk så raskt som mulig.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Slik Fungerer Det
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Enkel Prosess for å Finne Pålitelige Dreneringstjenester
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            DreneringsExperten gjør det enkelt å finne og sammenligne de beste
            dreneringsprofesjonelle i ditt område på bare noen få enkle trinn.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white animate-pulse"
          >
            <Link href="/tilbud">Få Gratis Tilbud Nå</Link>
          </Button>
        </div>

        {/* Process steps - detailed */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Tre Enkle Steg til Løsningen Din
          </h2>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-24 top-32 bottom-[-80px] w-1 bg-blue-100"></div>
                )}

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full bg-blue-50 flex items-center justify-center mb-4 relative z-10">
                      {step.icon}
                      <span className="absolute top-0 right-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                        {step.number.split("0")[1]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h4 className="font-medium mb-4">Hva dette innebærer:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Fordelene med DreneringsExperten
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi er dedikert til å gjøre prosessen med å finne pålitelige
              dreneringstjenester så enkel og stressfri som mulig.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
              >
                <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Ofte Stilte Spørsmål
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Klar til å få løst dreneringsproblemet ditt?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link href="/tilbud">Få Gratis Tilbud Nå</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
