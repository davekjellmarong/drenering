// components/home/Cta.tsx
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-brand-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Klar til å løse dine dreneringsproblemer?
        </h2>
        <p className="text-lg text-brand-100 mb-8 max-w-3xl mx-auto">
          Kom i gang i dag og motta tilbud fra ledende dreneringsfagfolk i ditt
          område.
        </p>
        <Button
          asChild
          className="bg-white hover:bg-background-100 text-brand-700 text-base font-medium px-8 py-4 rounded-md"
        >
          <Link href="/tilbud">Få dine gratis tilbud nå</Link>
        </Button>
      </div>
    </section>
  );
}
