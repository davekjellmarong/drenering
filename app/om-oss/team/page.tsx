import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { OWNER } from "@/src/utils/Constants";

export const metadata = {
  alternates: { canonical: "/om-oss/team" },
  title: "Hvem står bak DinDrenering?",
  description:
    "DinDrenering er en uavhengig tjeneste drevet av én person. Her er hvordan tjenesten fungerer, hvordan vi tjener penger og hvordan vi lager innholdet.",
};

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Hvem står bak DinDrenering?
      </h1>

      <div className="space-y-6 text-brand-700 text-lg">
        <p>
          DinDrenering er en liten, uavhengig tjeneste som drives av{" "}
          {OWNER.name} gjennom enkeltpersonforetaket {OWNER.business} (org.nr.{" "}
          {OWNER.orgNr}). Vi er ikke et dreneringsfirma og utfører ikke
          gravearbeid selv. Målet
          er å gjøre det enklere for huseiere å forstå hva en dreneringsjobb
          innebærer, og å komme i kontakt med firma som kan gjøre den.
        </p>

        <h2 className="text-2xl font-semibold text-brand-800 pt-4">
          Slik fungerer tjenesten
        </h2>
        <p>
          Når du sender inn en forespørsel via{" "}
          <Link href="/tilbud" className="text-brand-600 underline">
            tilbudsskjemaet
          </Link>
          , videreformidler vi den til dreneringsfirma som jobber i ditt område,
          slik at de kan kontakte deg med et tilbud. Det er gratis og
          uforpliktende for deg. Firmaene kan betale for henvendelsene de får
          gjennom oss, og det er slik tjenesten finansieres.
        </p>

        <h2 className="text-2xl font-semibold text-brand-800 pt-4">
          Slik lager vi innholdet
        </h2>
        <p>
          Guidene på nettstedet skal være nøkterne og etterprøvbare. Konkrete
          tall og regler skal ha en kilde vi lenker til, for eksempel SINTEF
          Byggforsk, Direktoratet for byggkvalitet, NVE eller SSB. Der noe
          varierer fra hus til hus, sier vi det, i stedet for å gi et tall som
          ser presist ut. Priser oppgir vi som spenn med forklaring på hva som
          påvirker dem, ikke som faste priser for en bestemt by.
        </p>
        <p>
          Finner du noe som er feil eller utdatert, vil vi gjerne vite det:{" "}
          <a href={`mailto:${OWNER.email}`} className="text-brand-600 underline">
            {OWNER.email}
          </a>
          .
        </p>
      </div>

      <div className="mt-10">
        <Button asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/tilbud">Få gratis tilbud på drenering</Link>
        </Button>
      </div>
    </div>
  );
}
