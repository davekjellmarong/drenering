import {
  Check,
  Clock,
  DollarSign,
  Droplets,
  Shield,
  Users,
} from "lucide-react";
import HowItWorksHero from "@/src/components/sections/Hero/HowItWorks";
import HowItWorksSteps from "@/src/components/sections/Steps/HowItWorks";
import Benefits from "@/src/components/sections/HowItWorksPage/Benefits";
import FaqHowItWorks from "@/src/components/sections/HowItWorksPage/FAQ";
import SimpleCta from "@/src/components/sections/CTA/Simple";

export const metadata = {
  title: "Hvordan Det Fungerer - DinDrenering",
  description:
    "Lær hvordan DinDrenering gjør det enkelt å finne pålitelige dreneringstjenester i ditt område",
};

export default function HowItWorks() {
  // Process steps with more detailed information
  const steps = [
    {
      number: "01",
      title: "Send Inn Din Forespørsel",
      description:
        "Fortell oss om ditt dreneringsproblem og hvilken tjeneste du trenger. Fyll ut vårt enkle skjema med detaljer om prosjektet ditt, inkludert type problem, beliggenhet, og når du trenger hjelp. Det tar bare 2-3 minutter.",
      icon: <Droplets className="h-12 w-12 text-brand-600" />,
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
      icon: <DollarSign className="h-12 w-12 text-brand-600" />,
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
      icon: <Check className="h-12 w-12 text-brand-600" />,
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
      icon: <Clock className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Kvalitetssikret",
      description:
        "Alle fagfolk i vårt nettverk er verifisert, lisensiert og gjennomgått for kvalitet.",
      icon: <Shield className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Helt Gratis",
      description:
        "Vår tjeneste er helt gratis å bruke for kunder. Du betaler kun for arbeidet som utføres.",
      icon: <DollarSign className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Bredt Nettverk",
      description:
        "Tilgang til et stort nettverk av spesialister innen alle typer dreneringstjenester.",
      icon: <Users className="h-8 w-8 text-brand-600" />,
    },
  ];

  // FAQ items
  const faqs = [
    {
      question: "Koster det noe å bruke tjenesten?",
      answer:
        "Nei, DinDrenering er helt gratis å bruke for kunder. Du betaler kun for arbeidet som utføres av fagfolkene du velger.",
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

  // return <UnderConstruction pageName="'Hvordan Fungerer Det?'" />;

  return (
    <div className="bg-gradient-to-b from-brand-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksHero />
        <HowItWorksSteps steps={steps} />
        <Benefits benefits={benefits} />
        <FaqHowItWorks faqs={faqs} />
        <SimpleCta />
      </div>
    </div>
  );
}
