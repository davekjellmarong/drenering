import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ChooseOffer() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-text">
              Velg det beste tilbudet
            </h2>
            <p className="text-text-subtle mb-6">
              Du kan enkelt sammenligne tilbudene og velge det som passer best
              for ditt dreneringsprosjekt.
            </p>
            <p className="text-text-subtle mb-8">
              Det er gratis og uforpliktende å motta tilbud. Er du ikke fornøyd
              med tilbudene, kan du enkelt takke nei.
            </p>
            <Button asChild>
              <Link href="/tilbud">
                Få uforpliktende tilbud nå
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right Side */}
          <div className="order-1 md:order-2">
            <div className="bg-background-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-brand-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                  <h3 className="font-medium text-text">Sammenlign tilbud</h3>
                  <p className="text-sm text-text-subtle">
                    Se priser og tjenester side om side
                  </p>
                </div>
              </div>

              <div className="mt-6 relative">
                <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-brand-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">DreneringsProff AS</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-sm text-text-subtle mb-2">
                    Komplett dreneringsløsning
                  </p>
                  <p className="font-bold text-lg">12,500 kr</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-success-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Drenering & Graving</span>
                    <span className="text-yellow-500">★★★★☆</span>
                  </div>
                  <p className="text-sm text-text-subtle mb-2">
                    Drensrørreparasjon
                  </p>
                  <p className="font-bold text-lg">9,800 kr</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-border-strong">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Vanntek Solutions</span>
                    <span className="text-yellow-500">★★★★☆</span>
                  </div>
                  <p className="text-sm text-text-subtle mb-2">Drensrensing</p>
                  <p className="font-bold text-lg">8,200 kr</p>
                </div>

                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border-2 border-border -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
