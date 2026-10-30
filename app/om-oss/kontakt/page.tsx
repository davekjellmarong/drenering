import Link from "next/link";
import { OWNER } from "@/src/utils/Constants";

export const metadata = {
  alternates: { canonical: "/om-oss/kontakt" },
  title: "Kontakt DinDrenering",
  description:
    "Spørsmål om tjenesten, feil i en guide eller ønske om å bli partner? Send oss en e-post.",
};

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl text-slate-700 text-lg space-y-6">
      <h1 className="text-4xl font-bold text-ink-900">Kontakt oss</h1>
      <p>
        DinDrenering drives av én person, så den raskeste veien er e-post:{" "}
        <a
          href={`mailto:${OWNER.email}`}
          className="text-brand-600 underline"
        >
          {OWNER.email}
        </a>
        .
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Vil du ha tilbud på drenering?</strong> Bruk{" "}
          <Link href="/tilbud" className="text-brand-600 underline">
            tilbudsskjemaet
          </Link>
          , så går forespørselen direkte videre til firma i ditt område.
        </li>
        <li>
          <strong>Driver du et dreneringsfirma?</strong> Se{" "}
          <Link href="/bli-partner" className="text-brand-600 underline">
            bli partner
          </Link>
          .
        </li>
        <li>
          <strong>Fant du en feil i en av guidene?</strong> Send en e-post. Vi
          retter det.
        </li>
      </ul>
      <p className="text-base">
        {OWNER.business} · org.nr. {OWNER.orgNr} ·{" "}
        <Link href="/om-oss/team" className="underline">
          Hvem står bak
        </Link>
      </p>
    </div>
  );
}
