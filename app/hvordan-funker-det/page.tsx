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
  alternates: { canonical: "/hvordan-funker-det" },
  title: "Hvordan Det Fungerer - DinDrenering",
  description:
    "Slik fungerer DinDrenering: én gratis forespørsel som vi videreformidler til dreneringsfirma i ditt område.",
};

export default function HowItWorks() {
  // Process steps with more detailed information
  const steps = [
    {
      number: "01",
      title: "Send Inn Din Forespørsel",
      description:
        "Fortell oss om ditt dreneringsproblem og hvilken tjeneste du trenger. Fyll ut skjemaet med kontaktinfo, adresse og litt om boligen.",
      icon: <Droplets className="h-12 w-12 text-brand-600" />,
      details: [
        "Beskriv problemet ditt i detalj",
        "Angi din plassering for lokal service",
      ],
    },
    {
      number: "02",
      title: "Få Flere Tilbud",
      description:
        "Vi sender forespørselen videre til dreneringsfirma som jobber i ditt område, og de tar kontakt med deg direkte for å avtale befaring eller gi et tilbud.",
      icon: <DollarSign className="h-12 w-12 text-brand-600" />,
      details: [
        "Firmaene kontakter deg direkte",
        "Be om befaring før du får en fast pris",
        "Still spørsmål direkte til firmaene",
      ],
    },
    {
      number: "03",
      title: "Sammenlign & Velg",
      description:
        "Sammenlign tilbudene på pris, hva som er inkludert og når jobben kan gjøres. Du velger selv om du vil takke ja til noen av dem.",
      icon: <Check className="h-12 w-12 text-brand-600" />,
      details: [
        "Sammenlign priser og tidsestimater",
        "Sjekk at tilbudene inneholder det samme",
        "Velg det beste tilbudet for dine behov",
      ],
    },
  ];

  // Benefits of using our service
  const benefits = [
    {
      title: "Tidssparende",
      description:
        "Én forespørsel i stedet for å ringe rundt til flere firma selv.",
      icon: <Clock className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Ærlig om hvordan det fungerer",
      description:
        "Firmaene kan betale for henvendelsene de får gjennom oss. Det er slik tjenesten er gratis for deg.",
      icon: <Shield className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Helt Gratis",
      description:
        "Vår tjeneste er helt gratis å bruke for kunder. Du betaler kun for arbeidet som utføres.",
      icon: <DollarSign className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Lokale firma",
      description:
        "Forespørselen går til firma som jobber der du bor.",
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
        "Det varierer med sesong og hvor du bor. Firmaene tar kontakt direkte med deg.",
    },
    {
      question: "Hvordan velger dere fagfolk til nettverket deres?",
      answer:
        "Vi sjekker at firmaet er registrert i Brønnøysundregistrene og faktisk jobber med drenering. Vi anbefaler likevel at du selv ber om referanser og en skriftlig avtale før arbeidet starter.",
    },
    {
      question: "Hva hvis jeg ikke er fornøyd med tilbudene?",
      answer:
        "Det er ingen forpliktelser å akseptere noen av tilbudene. Du står fritt til å avslå alle og søke tjenester andre steder hvis du ønsker det.",
    },
    {
      question: "Kan jeg be om tilbud for akutte dreneringsproblemer?",
      answer:
        "Du kan sende en forespørsel, men vi er ikke en akuttjeneste. Står det vann i kjelleren nå, kontakt forsikringsselskapet ditt og eventuelt en skadeservice med en gang.",
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
