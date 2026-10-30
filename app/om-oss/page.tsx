import Link from "next/link";
import { Breadcrumbs } from "@/src/components/site/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/om-oss" },
  title: "Om DinDrenering",
  description:
    "Hvem som står bak DinDrenering, hvordan tjenesten fungerer og hvordan du kontakter oss.",
};

const LINKS = [
  { href: "/om-oss/team", title: "Hvem står bak", text: "Én person, en liten uavhengig tjeneste, og hvordan vi lager innholdet." },
  { href: "/hvordan-funker-det", title: "Slik fungerer det", text: "Hva som skjer med forespørselen din, og hvordan tjenesten finansieres." },
  { href: "/om-oss/kontakt", title: "Kontakt", text: "Spørsmål, feil i en guide, eller vil du bli partner? Send en e-post." },
  { href: "/bli-partner", title: "For dreneringsfirma", text: "Få henvendelser fra huseiere i ditt område." },
];

export default function OmOss() {
  return (
    <>
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <Breadcrumbs items={[{ name: "Om oss", href: "/om-oss" }]} />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">Om DinDrenering</h1>
        </div>
      </section>
      <section className="container mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-border p-6 transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            <span className="text-lg font-semibold text-ink-900">{link.title}</span>
            <span className="mt-2 block text-sm text-text-subtle">{link.text}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
