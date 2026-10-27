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
                  <h3 className="font-medium text-text">Dette bør tilbudet inneholde</h3>
                  <p className="text-sm text-text-subtle">
                    Da blir tilbudene mulige å sammenligne
                  </p>
                </div>
              </div>

              <div className="mt-6 relative">
                <ul className="bg-white rounded-lg shadow-md p-5 space-y-3 text-sm text-text-subtle">
                  {[
                    "Hvor mange meter grunnmur som graves fram, og hvor dypt",
                    "Hvilke materialer som brukes: drensrør, pukk, fiberduk, grunnmursplate",
                    "Om isolering av grunnmuren er med",
                    "Bortkjøring av masser og tilbakefylling",
                    "Hva som skjer hvis de støter på fjell",
                    "Oppstart, ferdigdato og betalingsplan",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-brand-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border-2 border-border -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
