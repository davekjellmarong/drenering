import WizardContainer from "@/src/components/wizard/WizardContainer";

export default function HeroSection() {
  return (
    <section className="relative pt-20 overflow-hidden bg-background">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-brand-100/50 blur-3xl" />
      </div>

      {/* Wizard content */}
      <div className="relative">
        <WizardContainer
          title="Raske, Pålitelige Dreneringsløsninger ved Fingertuppene"
          description="Få kontakt med høyt rangerte dreneringsselskaper i ditt område og motta opptil 3 konkurransedyktige tilbud. Spar tid og penger på dine dreneringsprosjekter."
          backgroundImage="/manSign.jpg"
        />

        {/* Floating card */}
        <div className="hidden md:block absolute bottom-10 right-10 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs animate-bounce-slow border border-subtle">
          <div className="flex items-center">
            <div className="bg-secondary-100 rounded-full p-2 mr-3">
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
              <p className="text-sm text-text">Spart huseiere</p>
              <p className="text-lg font-bold text-text">
                8500 kr i gjennomsnitt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
