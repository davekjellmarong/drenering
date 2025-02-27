import { Button } from "@/src/components/ui/button";
import WizardForm from "@/src/components/WizardForm";
import { Clock, Home, PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hjem() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <section
          className="relative min-h-[500px] flex items-center justify-center text-white text-center"
          style={{
            backgroundImage: "url('/manSign.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 max-w-2xl px-6">
            <h1 className="text-4xl font-bold mb-4">
              Lokale dreneringseksperter
            </h1>
            <p className="text-lg mb-6">
              Finn profesjonelle dreneringseksperter i ditt område og få tilbud
              på ditt dreneringsprosjekt.
            </p>
          </div>
        </section>
        <div className="-translate-y-32 px-4">
          <WizardForm />
        </div>

        <section className="bg-brand-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-900">
              Lær mer om drenering
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-800">
                  Drenering for Boligeiere
                </h3>
                <p className="mb-4 text-brand-700">
                  Lær hvorfor god drenering er viktig for din bolig og hvordan
                  du kan oppdage dreneringsproblemer.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="text-brand-500 border-brand-500 hover:bg-brand-100"
                >
                  <Link href="/drenering-for-boligeiere">Les mer</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-800">
                  Drenering og Klimaendringer
                </h3>
                <p className="mb-4 text-brand-700">
                  Forstå hvordan klimaendringer påvirker behovet for effektiv
                  drenering og hvordan vi kan tilpasse oss.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="text-brand-500 border-brand-500 hover:bg-brand-100"
                >
                  <Link href="/drenering-og-klimaendringer">Les mer</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-800">
                  Bærekraftig Drenering
                </h3>
                <p className="mb-4 text-brand-700">
                  Utforsk moderne, miljøvennlige dreneringsløsninger som
                  beskytter både din eiendom og miljøet.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="text-brand-500 border-brand-500 hover:bg-brand-100"
                >
                  <Link href="/baerekraftig-drenering">Les mer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Choose Best Offer Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Velg det beste tilbudet
              </h2>
              <p className="text-gray-600 mb-6">
                Du kan enkelt sammenligne tilbudene og velge det som passer best
                for ditt dreneringsprosjekt.
              </p>
              <p className="text-gray-600 mb-6">
                Det er gratis og uforpliktende å motta tilbud. Er du ikke
                fornøyd med tilbudene, kan du enkelt takke nei.
              </p>
              <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full">
                Få uforpliktende tilbud nå
              </Button>
            </div>
            <div>
              <Image
                src="/options.svg"
                alt="Velg beste tilbud illustrasjon"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-500 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Spar tid</h3>
                <p className="text-gray-600">
                  Ikke kast bort tid på å kontakte flere firmaer. La ekspertene
                  kontakte deg med deres beste tilbud.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-500 rounded-full flex items-center justify-center">
                  <PiggyBank className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Spar penger</h3>
                <p className="text-gray-600">
                  Få flere leverandører til å konkurrere om oppdraget ditt.
                  Dette sikrer deg best mulig pris.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-500 rounded-full flex items-center justify-center">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Øk boligverdien</h3>
                <p className="text-gray-600 ">
                  God drenering beskytter boligen din mot fuktskader og øker
                  eiendommens verdi.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full">
                Få tilbud på drenering nå
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Cities Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">Populære byer</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Oslo",
              "Bergen",
              "Trondheim",
              "Stavanger",
              "Drammen",
              "Fredrikstad",
              "Sarpsborg",
              "Skien",
              "Ålesund",
              "Tønsberg",
              "Moss",
              "Haugesund",
              "Arendal",
              "Bodø",
              "Tromsø",
              "Hamar",
              "Halden",
              "Larvik",
              "Askøy",
              "Kongsberg",
              "Molde",
              "Kristiansund",
              "Steinkjer",
            ].map((city) => (
              <span
                key={city}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Som omtalt i
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-75">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="h-8 w-24 bg-gray-700 rounded" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
