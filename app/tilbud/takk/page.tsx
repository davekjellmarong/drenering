import { Button } from "@/src/components/ui/button";
import { CheckCircle, Calendar, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Takk for din forespørsel - DinDrenering",
  description:
    "Din forespørsel om tilbud er mottatt. Vi vil kontakte deg snart.",
};

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Takk for din forespørsel!
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Vi har mottatt din forespørsel om tilbud på dreneringstjenester. En av
          våre samarbeidspartnere vil kontakte deg innen kort tid for å
          diskutere ditt prosjekt.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Hva skjer nå?
          </h2>
          <ol className="space-y-3 text-left text-gray-700">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              <span>
                Vi behandler din forespørsel og matcher deg med opptil 3
                kvalifiserte dreneringsfirmaer i ditt område
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                2
              </span>
              <span>
                Dreneringsfirmaene vil kontakte deg direkte for å diskutere ditt
                prosjekt
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                3
              </span>
              <span>
                Du mottar tilbud fra hver leverandør og kan velge det som passer
                best for dine behov
              </span>
            </li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold">Forventet responstid</h3>
            </div>
            <p className="text-gray-600">
              Du kan forvente å bli kontaktet innen 1-2 virkedager.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold">Trenger du hjelp?</h3>
            </div>
            <p className="text-gray-600">
              Kontakt oss på <span className="font-medium">22 12 34 56</span>{" "}
              hvis du har spørsmål.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <Link href="/">Gå til forsiden</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/blog">Les våre artikler om drenering</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
