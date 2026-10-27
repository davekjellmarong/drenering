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
          title="Få tilbud på drenering fra firma i ditt område"
          description="Beskriv jobben én gang, så sender vi forespørselen til dreneringsfirma i ditt område. Gratis og uforpliktende."
          backgroundImage="/manSign.jpg"
        />
      </div>
    </section>
  );
}
