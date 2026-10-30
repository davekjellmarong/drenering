import Link from "next/link";
import { OWNER } from "@/src/utils/Constants";

export const metadata = {
  alternates: { canonical: "/juridisk/brukervilkar" },
  title: "Brukervilkår | DinDrenering",
  description:
    "Vilkårene for å bruke DinDrenering: hva tjenesten er, hva den ikke er, og hvem du inngår avtale med.",
};

const UPDATED = "27. oktober 2026";

export default function BrukervilkarPage() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl prose prose-lg text-slate-700 prose-headings:text-ink-900 prose-h1:text-3xl prose-h1:break-words sm:prose-h1:text-4xl prose-a:text-brand-600">
      <h1>Brukervilkår</h1>
      <p className="text-sm">Sist oppdatert {UPDATED}</p>

      <h2>Om tjenesten</h2>
      <p>
        dindrenering.no drives av {OWNER.name} gjennom enkeltpersonforetaket{" "}
        {OWNER.business} (org.nr. {OWNER.orgNr}). Tjenesten videreformidler
        forespørsler fra huseiere til dreneringsfirma, og publiserer guider om
        drenering. Vi er ikke et dreneringsfirma og utfører ikke arbeid selv.
      </p>

      <h2>For deg som ber om tilbud</h2>
      <ul>
        <li>Det er gratis og uforpliktende å sende en forespørsel.</li>
        <li>
          Vi sender forespørselen til opptil tre firma i ditt område, men kan
          ikke garantere at du får tilbud, eller når firmaene tar kontakt.
        </li>
        <li>
          Takker du ja til et tilbud, inngår du avtalen direkte med firmaet.
          DinDrenering er ikke part i den avtalen og er ikke ansvarlig for
          arbeidet, prisen eller eventuelle mangler. Som forbruker har du
          rettigheter etter håndverkertjenesteloven overfor firmaet.
        </li>
        <li>
          Du må oppgi riktige opplysninger, og bare sende forespørsler om din
          egen bolig eller en bolig du har fullmakt til å be om tilbud på.
        </li>
      </ul>

      <h2>For firma</h2>
      <p>
        Firma som mottar forespørsler gjennom oss, kan betale for dem. Det er
        slik tjenesten er gratis for huseiere. Vilkårene for samarbeidet avtales
        direkte med hvert firma.
      </p>

      <h2>Innholdet på nettstedet</h2>
      <p>
        Guidene er generell informasjon og erstatter ikke en vurdering fra en
        fagperson som har sett boligen din. Priser og andre tall er veiledende.
        Vi gjør vårt beste for at innholdet skal være korrekt og oppdatert, men
        kan ikke garantere at det alltid er det. Finner du feil, setter vi pris
        på å høre om det.
      </p>

      <h2>Personvern</h2>
      <p>
        Hvordan vi behandler opplysningene dine, står i{" "}
        <Link href="/juridisk/personvern">personvernerklæringen</Link>.
      </p>

      <h2>Kontakt</h2>
      <p>
        Spørsmål om vilkårene kan sendes til{" "}
        <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>.
      </p>
    </article>
  );
}
