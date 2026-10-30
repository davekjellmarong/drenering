import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";
import { Shield, CheckCircle, Building, Users } from "lucide-react";

const benefits = [
  {
    title: "Utvidelse av kundegrunnlag",
    description:
      "Få henvendelser fra huseiere i ditt område som leter etter noen til å gjøre dreneringsjobben",
    icon: Users,
  },
  {
    title: "Økt kredibilitet",
    description:
      "Bli presentert for kunder som allerede har bestemt seg for å få gjort jobben",
    icon: Shield,
  },
  {
    title: "Vekst for virksomheten",
    description:
      "Fokuser på det du er best på, mens vi hjelper deg med å finne kundene",
    icon: Building,
  },
  {
    title: "Enkel prosess",
    description:
      "Fyll ut skjemaet, så tar vi kontakt for å avtale hvordan samarbeidet kan se ut",
    icon: CheckCircle,
  },
];

export function PartnerBenefits() {
  return (
    <div className="space-y-6">
      {benefits.map((benefit, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <benefit.icon className="h-6 w-6 mr-3 text-brand-600" />
              {benefit.title}
            </CardTitle>
            <CardDescription className="text-base">
              {benefit.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
