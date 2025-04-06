import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Clock, Home, PiggyBank } from "lucide-react";
import WizardContainer from "@/src/components/wizard/WizardContainer";
import { CityMethods } from "@/src/queryFactory/City";

export default async function HomePage() {
  const cities = await CityMethods.getRouteHandlerCities();

  return (
    <main className="min-h-screen">
      {/* Hero Section with Wizard */}
      <section className="relative pt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute -bottom-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-3xl" />
        </div>

        <div className="relative">
          <WizardContainer
            title="Raske, Pålitelige Dreneringsløsninger ved Fingertuppene"
            description="Få kontakt med høyt rangerte dreneringsselskaper i ditt område og motta opptil 3 konkurransedyktige tilbud. Spar tid og penger på dine dreneringsprosjekter."
            backgroundImage="/manSign.jpg"
          />

          {/* Floating card */}
          <div className="hidden md:block absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs animate-bounce-slow">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50001 14.1667L3.33334 10"
                    stroke="#16A34A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Spart huseiere</p>
                <p className="text-lg font-bold">8500 kr i gjennomsnitt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="badge mx-auto mb-4 text-center">Enkel Prosess</div>
          <h2 className="section-title">Hvordan Funker Det</h2>
          <p className="section-subtitle">
            Vi har gjort det raskt og enkelt å finne pålitelige
            dreneringstjenester. Få tilbud fra betrodde fagfolk på bare noen få
            trinn.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="step-number absolute top-4 right-4">01</div>
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Send Inn Din Forespørsel
              </h3>
              <p className="text-gray-600">
                Fortell oss om ditt avløpsproblem og hvilken tjeneste du
                trenger.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="step-number absolute top-4 right-4">02</div>
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Få Flere Tilbud</h3>
              <p className="text-gray-600">
                Motta opptil 3 konkurransedyktige tilbud fra lokale fagfolk.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="step-number absolute top-4 right-4">03</div>
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sammenlign & Velg</h3>
              <p className="text-gray-600">
                Vurder tilbud, kvalifikasjoner, og velg det beste firmaet for
                dine behov.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              <Link href="/hvordan-funker-det">Lær mer om prosessen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="badge mx-auto mb-4 text-center">
            Profesjonelle Tjenester
          </div>
          <h2 className="section-title">Dreneringstjenester Vi Tilbyr</h2>
          <p className="section-subtitle">
            Fra nødreparasjoner til rutinemessig vedlikehold, vårt nettverk av
            fagfolk håndterer alle dine dreneringsbehov.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Drensrensing</h3>
              <p className="text-gray-600 mb-4">
                Profesjonell rengjøring for å fjerne tilstoppinger og
                gjenopprette riktig flyt.
              </p>
              <Link
                href="/tjenester/boligdrenering"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Les mer <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Drensrørreparasjon</h3>
              <p className="text-gray-600 mb-4">
                Rask og effektiv reparasjon av ødelagte eller skadede drensrør.
              </p>
              <Link
                href="/tjenester/drensror-installasjon"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Les mer <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dreneringsinspeksjon</h3>
              <p className="text-gray-600 mb-4">
                Kamerainspeksjoner for å identifisere skjulte problemer i
                dreneringssystemet ditt.
              </p>
              <Link
                href="/tjenester/industriell-drenering"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Les mer <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Nødtjenester</h3>
              <p className="text-gray-600 mb-4">
                24/7 nøddreneringstjenester for akutte situasjoner.
              </p>
              <Link
                href="/tjenester/overvannshandtering"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Les mer <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-md"
            >
              <Link href="/tjenester">Se alle tjenester</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Choose Best Offer Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Velg det beste tilbudet
              </h2>
              <p className="text-gray-600 mb-6">
                Du kan enkelt sammenligne tilbudene og velge det som passer best
                for ditt dreneringsprosjekt.
              </p>
              <p className="text-gray-600 mb-8">
                Det er gratis og uforpliktende å motta tilbud. Er du ikke
                fornøyd med tilbudene, kan du enkelt takke nei.
              </p>
              <Button
                asChild
                className="group bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="/tilbud">
                  Få uforpliktende tilbud nå
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500"
                    >
                      <path
                        d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12H9.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 16H9.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Sammenlign tilbud
                    </h3>
                    <p className="text-sm text-gray-600">
                      Se priser og tjenester side om side
                    </p>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-blue-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">DreneringsProff AS</span>
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Komplett dreneringsløsning
                    </p>
                    <p className="font-bold text-lg">12,500 kr</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-green-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Drenering & Graving</span>
                      <span className="text-yellow-500">★★★★☆</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Drensrørreparasjon
                    </p>
                    <p className="font-bold text-lg">9,800 kr</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-gray-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Vanntek Solutions</span>
                      <span className="text-yellow-500">★★★★☆</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Drensrensing</p>
                    <p className="font-bold text-lg">8,200 kr</p>
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border-2 border-gray-200 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Hvorfor velge oss?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi gjør det enkelt å finne den beste dreneringsløsningen for ditt
              hjem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Spar tid</h3>
              <p className="text-gray-600">
                Ikke kast bort tid på å kontakte flere firmaer. La ekspertene
                kontakte deg med deres beste tilbud.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <PiggyBank className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Spar penger</h3>
              <p className="text-gray-600">
                Få flere leverandører til å konkurrere om oppdraget ditt. Dette
                sikrer deg best mulig pris.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Øk boligverdien</h3>
              <p className="text-gray-600">
                God drenering beskytter boligen din mot fuktskader og øker
                eiendommens verdi.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/tilbud">Få tilbud på drenering nå</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Lær mer om drenering
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Drenering for Boligeiere
              </h3>
              <p className="mb-6 text-gray-600">
                Lær hvorfor god drenering er viktig for din bolig og hvordan du
                kan oppdage dreneringsproblemer.
              </p>
              <Button
                asChild
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Link href="/tjenester/boligdrenering">Les mer</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Drenering og Klimaendringer
              </h3>
              <p className="mb-6 text-gray-600">
                Forstå hvordan klimaendringer påvirker behovet for effektiv
                drenering og hvordan vi kan tilpasse oss.
              </p>
              <Button
                asChild
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Link href="/drenering/klimaendringer">Les mer</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Bærekraftig Drenering
              </h3>
              <p className="mb-6 text-gray-600">
                Utforsk moderne, miljøvennlige dreneringsløsninger som beskytter
                både din eiendom og miljøet.
              </p>
              <Button
                asChild
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Link href="/drenering/baerekraftig">Les mer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til å løse dine dreneringsproblemer?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Kom i gang i dag og motta tilbud fra ledende dreneringsfagfolk i
            ditt område.
          </p>
          <Button
            asChild
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md text-lg font-medium"
          >
            <Link href="/tilbud">Få dine gratis tilbud nå</Link>
          </Button>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Populære byer
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                href={`/drenering/${city.name}`}
                key={city.id}
                className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 border border-gray-200 transition-colors duration-200"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
