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
      "Få tilgang til tusenvis av potensielle kunder som aktivt søker etter dreneringstjenester",
    icon: Users,
  },
  {
    title: "Økt kredibilitet",
    description:
      "Bli verifisert som en pålitelig leverandør og bygg tillit hos potensielle kunder",
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
      "Fyll ut skjemaet, og vi kontakter deg innen 48 timer for å diskutere partnerskap",
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
