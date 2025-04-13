import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function LearnMore() {
  const topics = [
    {
      title: "Drenering for Boligeiere",
      description:
        "Lær hvorfor god drenering er viktig for din bolig og hvordan du kan oppdage dreneringsproblemer.",
      href: "/tjenester/boligdrenering",
    },
    {
      title: "Drenering og Klimaendringer",
      description:
        "Forstå hvordan klimaendringer påvirker behovet for effektiv drenering og hvordan vi kan tilpasse oss.",
      href: "/drenering/klimaendringer",
    },
    {
      title: "Bærekraftig Drenering",
      description:
        "Utforsk moderne, miljøvennlige dreneringsløsninger som beskytter både din eiendom og miljøet.",
      href: "/drenering/baerekraftig",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Lær mer om drenering</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {topics.map(({ title, description, href }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-text">{title}</h3>
              <p className="mb-6 text-text-subtle">{description}</p>
              <Button asChild variant="outline">
                <Link href={href}>Les mer</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
