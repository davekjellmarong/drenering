import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Shield, CheckCircle, Building, Users } from "lucide-react";
import { PartnerSignupForm } from "@/src/components/features/bli-partner/form";

export const metadata: Metadata = {
  title: "Bli Partner - DinDrenering",
  description:
    "Få flere kunder og vekst for din dreneringsbedrift ved å bli en del av vårt nettverk",
};

export default function PartnerSignupPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Bli en DinDrenering Partner
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Få flere kunder og vekst for din dreneringsbedrift ved å bli en
              del av vårt nettverk
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl ">
                      <Users className="h-6 w-6 mr-3 text-blue-600" /> Utvidelse
                      av kundegrunnlag
                    </CardTitle>
                    <CardDescription className="text-base">
                      Få tilgang til tusenvis av potensielle kunder som aktivt
                      søker etter dreneringstjenester
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl ">
                      <Shield className="h-6 w-6 mr-3 text-blue-600" /> Økt
                      kredibilitet
                    </CardTitle>
                    <CardDescription className="text-base">
                      Bli verifisert som en pålitelig leverandør og bygg tillit
                      hos potensielle kunder
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl ">
                      <Building className="h-6 w-6 mr-3 text-blue-600" /> Vekst
                      for virksomheten
                    </CardTitle>
                    <CardDescription className="text-base">
                      Fokuser på det du er best på, mens vi hjelper deg med å
                      finne kundene
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl ">
                      <CheckCircle className="h-6 w-6 mr-3 text-blue-600" />{" "}
                      Enkel prosess
                    </CardTitle>
                    <CardDescription className="text-base">
                      Fyll ut skjemaet, og vi kontakter deg innen 48 timer for å
                      diskutere partnerskap
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Registrer din bedrift
                  </CardTitle>
                  <CardDescription>
                    Fyll ut skjemaet under for å starte prosessen med å bli en
                    DinDrenering partner
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PartnerSignupForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
