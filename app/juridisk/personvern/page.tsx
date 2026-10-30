import Link from "next/link";
import { OWNER } from "@/src/utils/Constants";

export const metadata = {
  alternates: { canonical: "/juridisk/personvern" },
  title: "Personvernerklæring | DinDrenering",
  description:
    "Hvilke opplysninger DinDrenering samler inn når du ber om tilbud, hva de brukes til, hvem som får dem og hvilke rettigheter du har.",
};

const UPDATED = "30. oktober 2026";

export default function PersonvernPage() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl prose prose-lg text-brand-700 prose-headings:text-brand-900 prose-a:text-brand-600">
      <h1>Personvernerklæring</h1>
      <p className="text-sm">Sist oppdatert {UPDATED}</p>

      <h2>Hvem er ansvarlig?</h2>
      <p>
        Behandlingsansvarlig for personopplysningene som samles inn på
        dindrenering.no er {OWNER.name}, som driver nettstedet gjennom
        enkeltpersonforetaket {OWNER.business} (org.nr. {OWNER.orgNr}). Du når
        oss på <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>.
      </p>

      <h2>Hvilke opplysninger vi samler inn</h2>
      <p>
        <strong>Når du ber om tilbud</strong> via{" "}
        <Link href="/tilbud">tilbudsskjemaet</Link>: navn, e-post, telefonnummer,
        adresse, postnummer, sted, boligtype og omtrentlig boligstørrelse.
      </p>
      <p>
        <strong>Når et firma søker om å bli partner</strong> via{" "}
        <Link href="/bli-partner">partnerskjemaet</Link>: firmanavn,
        kontaktperson, e-post, telefonnummer, nettside og adresse.
      </p>
      <p>
        <strong>Når du besøker nettstedet</strong>: anonym bruksstatistikk, som
        hvilke sider som besøkes. Se avsnittet om statistikk nedenfor.
      </p>

      <h2>Hva opplysningene brukes til, og grunnlaget for det</h2>
      <p>
        Opplysningene fra tilbudsskjemaet brukes til å gjøre det du ber om: å
        sende forespørselen din videre til dreneringsfirma i ditt område, slik
        at de kan kontakte deg. Behandlingsgrunnlaget er at det er nødvendig for
        å levere tjenesten du har bedt om (personvernforordningen artikkel 6
        nr. 1 bokstav b). Vi bruker ikke opplysningene til markedsføring og
        selger dem ikke videre til andre formål.
      </p>
      <p>
        Opplysningene fra partnerskjemaet brukes til å vurdere og følge opp et
        mulig samarbeid med firmaet (artikkel 6 nr. 1 bokstav b og f).
      </p>

      <h2>Hvem som får opplysningene</h2>
      <ul>
        <li>
          <strong>Dreneringsfirma i ditt område</strong> (opptil tre) får
          kontaktinformasjonen og opplysningene om boligen din, slik at de kan
          gi deg et tilbud. Når et firma har mottatt henvendelsen, er firmaet
          selv ansvarlig for hvordan det behandler opplysningene.
        </li>
        <li>
          <strong>Cloudflare</strong> (Cloudflare, Inc., USA) drifter nettstedet
          og tar imot innsendte skjemaer.
        </li>
        <li>
          <strong>Resend</strong> (Plus Five Five, Inc., USA) leverer innsendte
          skjemaer til oss på e-post. Opplysningene lagres ikke i noen database
          hos oss; e-posten er det eneste eksemplaret.
        </li>
        <li>
          <strong>PostHog</strong> (PostHog, Inc., USA) brukes til anonym
          bruksstatistikk.
        </li>
      </ul>
      <p>
        Cloudflare, Resend og PostHog behandler opplysningene på våre vegne, og
        opplysningene kan dermed bli behandlet i USA.
      </p>

      <h2>Statistikk og informasjonskapsler</h2>
      <p>
        Vi bruker PostHog til å telle sidevisninger og se hvordan nettstedet
        brukes, slik at vi kan forbedre innholdet. PostHog er satt opp uten
        informasjonskapsler (cookies) og uten å lagre noe på enheten din, og vi
        bruker ikke opptak av økter. Vi bruker ikke informasjonskapsler til
        annonsering eller sporing.
      </p>

      <h2>Hvor lenge vi lagrer opplysningene</h2>
      <p>
        Tilbudsforespørsler slettes senest 12 måneder etter at de ble sendt
        inn. Opplysninger om partnere lagres så lenge samarbeidet varer, og
        slettes senest 12 måneder etter at det er avsluttet eller ikke ble noe
        av.
      </p>

      <h2>Dine rettigheter</h2>
      <p>
        Du har rett til innsyn i opplysningene vi har om deg, og til å få dem
        rettet eller slettet. Du kan også protestere mot behandlingen eller be
        om at den begrenses. Send en e-post til{" "}
        <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>, så svarer vi så
        raskt vi kan, og senest innen 30 dager.
      </p>
      <p>
        Mener du at vi behandler opplysningene dine i strid med
        personvernreglene, kan du klage til{" "}
        <a href="https://www.datatilsynet.no" rel="noopener">
          Datatilsynet
        </a>
        .
      </p>
    </article>
  );
}
