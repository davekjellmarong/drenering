import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { PartnerSignupForm } from "@/src/components/features/bli-partner/form";
import { PartnerBenefits } from "@/src/components/sections/Pages/BliPartner/Benefits";

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
            <PartnerBenefits />

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
