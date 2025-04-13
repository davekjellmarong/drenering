import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function HowItWorks() {
  return (
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
          {[
            {
              number: "01",
              title: "Send Inn Din Forespørsel",
              text: "Fortell oss om ditt avløpsproblem og hvilken tjeneste du trenger.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              ),
            },
            {
              number: "02",
              title: "Få Flere Tilbud",
              text: "Motta opptil 3 konkurransedyktige tilbud fra lokale fagfolk.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
            {
              number: "03",
              title: "Sammenlign & Velg",
              text: "Vurder tilbud, kvalifikasjoner, og velg det beste firmaet for dine behov.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              ),
            },
          ].map(({ number, title, text, icon }) => (
            <div
              key={number}
              className="bg-white p-8 rounded-lg shadow-sm relative"
            >
              <div className="step-number absolute top-4 right-4">{number}</div>
              <div className="bg-brand-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-text-muted">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="px-6 py-3">
            <Link href="/hvordan-funker-det">Lær mer om prosessen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
