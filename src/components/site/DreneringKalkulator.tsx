"use client";

import { useState } from "react";
import Link from "next/link";

// Huseierne.no (updated 06.11.2025): "Priser for drenering varierer mellom
// 4000 og 9000 kroner per løpemeter." The source gives no VAT or scope info.
// This is the ONLY price figure used; factors below never change the number.
const LOW = 4000;
const HIGH = 9000;

const FACTORS = [
  {
    id: "dybde",
    label: "Hvor dypt går grunnmuren?",
    options: [
      { v: "grunn", t: "Lav sokkel / plate på mark", note: "Ofte mindre graving, men det avgjør firmaet ved befaring." },
      { v: "kjeller", t: "Full kjeller", note: "Dypere grøft gir mer graving, mer masse og mer sikring, som regel høyere pris." },
      { v: "usikker", t: "Vet ikke", note: "Skriv ned hva du vet om kjeller og nivå på kjellergulv til befaringen." },
    ],
  },
  {
    id: "grunn",
    label: "Grunnforhold",
    options: [
      { v: "vanlig", t: "Vanlige masser", note: "" },
      { v: "tung", t: "Leire, stein eller høy grunnvannstand", note: "Gjør graving tyngre og kan øke prisen." },
      { v: "fjell", t: "Fjell mot grunnmuren", note: "Kan kreve spesialutstyr og prises ofte som tillegg etter tid." },
      { v: "usikker", t: "Vet ikke", note: "Firmaet ser ofte mer ved befaring, men ikke alt før de graver." },
    ],
  },
  {
    id: "adkomst",
    label: "Kommer gravemaskin til?",
    options: [
      { v: "lett", t: "Ja, godt med plass", note: "" },
      { v: "trang", t: "Trang tomt, bratt, terrasser eller bygg tett på", note: "Mer håndarbeid og dyrere." },
    ],
  },
  {
    id: "isolasjon",
    label: "Skal grunnmuren isoleres samtidig?",
    options: [
      { v: "nei", t: "Nei", note: "" },
      { v: "ja", t: "Ja", note: "Legger til materialer og arbeid, men du slipper å grave ut igjen senere. Be om pris med og uten som to alternativer." },
      { v: "usikker", t: "Vet ikke ennå", note: "Spør firmaene om å prise begge alternativene." },
    ],
  },
  {
    id: "vann",
    label: "Hvor skal vannet ledes?",
    options: [
      { v: "kjent", t: "Kommunal ledning eller åpen utløp er avklart", note: "" },
      { v: "usikker", t: "Vet ikke", note: "Kum, pumpekum eller tilknytning kan endre omfanget betydelig." },
    ],
  },
] as const;

const fmt = (n: number) => Math.round(n).toLocaleString("nb-NO").replace(/ /g, " ");

export function DreneringKalkulator() {
  const [lengde, setLengde] = useState("10");
  const [bredde, setBredde] = useState("8");
  const [direkte, setDirekte] = useState("");
  const [svar, setSvar] = useState<Record<string, string>>({});

  const rect = 2 * (Number(lengde) + Number(bredde));
  const meter = direkte !== "" ? Number(direkte) : rect;
  const gyldig = Number.isFinite(meter) && meter > 0 && meter <= 500;

  const valgte = FACTORS.flatMap((f) => {
    const o = f.options.find((x) => x.v === svar[f.id]);
    return o && o.note ? [{ label: f.label, ...o }] : [];
  });

  const input =
    "mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-ink-900";

  return (
    <div className="not-prose rounded-2xl border border-border bg-sand-50 p-5 sm:p-8">
      <h2 className="text-xl font-semibold text-ink-900">1. Hvor mange meter grunnmur?</h2>
      <p className="mt-1 text-sm text-text-muted">
        For et rektangulært hus er det omkretsen. Trekk fra sider som ikke skal dreneres.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-medium text-ink-900">
          Lengde (m)
          <input type="number" min="0" inputMode="decimal" className={input} value={lengde}
            onChange={(e) => { setLengde(e.target.value); setDirekte(""); }} />
        </label>
        <label className="text-sm font-medium text-ink-900">
          Bredde (m)
          <input type="number" min="0" inputMode="decimal" className={input} value={bredde}
            onChange={(e) => { setBredde(e.target.value); setDirekte(""); }} />
        </label>
        <label className="text-sm font-medium text-ink-900">
          …eller meter direkte
          <input type="number" min="0" inputMode="decimal" className={input} value={direkte}
            placeholder="f.eks. 42" onChange={(e) => setDirekte(e.target.value)} />
        </label>
      </div>
      <p className="mt-2 text-sm text-slate-700">
        Regnet lengde: <strong>{gyldig ? `${fmt(meter)} meter` : "fyll inn et tall mellom 1 og 500"}</strong>
        {" "}(hus med avsatser og tilbygg har flere meter enn en enkel firkant).
      </p>

      <h2 className="mt-8 text-xl font-semibold text-ink-900">2. Hva vet du om jobben?</h2>
      <p className="mt-1 text-sm text-text-muted">
        Svarene endrer ikke tallet under, men viser hva du bør ta med til firmaene.
      </p>
      <div className="mt-4 space-y-5">
        {FACTORS.map((f) => (
          <fieldset key={f.id}>
            <legend className="text-sm font-medium text-ink-900">{f.label}</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {f.options.map((o) => (
                <button
                  key={o.v}
                  type="button"
                  aria-pressed={svar[f.id] === o.v}
                  onClick={() => setSvar({ ...svar, [f.id]: o.v })}
                  className={`rounded-full border px-3 py-1.5 text-sm ${
                    svar[f.id] === o.v
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-border bg-white text-ink-900 hover:border-brand-300"
                  }`}
                >
                  {o.t}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-8 rounded-xl border-l-4 border-brand-500 bg-white p-5" aria-live="polite">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
          Grovt regnestykke, ikke et tilbud
        </p>
        {gyldig ? (
          <>
            <p className="mt-2 text-2xl font-bold text-ink-900">
              {fmt(meter * LOW)} – {fmt(meter * HIGH)} kr
            </p>
            <p className="mt-1 text-sm text-slate-700">
              = {fmt(meter)} m × {fmt(LOW)}–{fmt(HIGH)} kr per løpemeter, Huseiernes oppgitte spenn.
              Kilden sier ikke om beløpet er med eller uten mva., eller hva som er inkludert.
              Spennet er stort fordi prisen avhenger av landsdel, forholdene rundt bygget og husets
              utforming. Det kan ligge både over og under for din bolig.
            </p>
          </>
        ) : (
          <p className="mt-2 text-slate-700">Fyll inn antall meter for å se regnestykket.</p>
        )}
        {valgte.length > 0 && (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {valgte.map((v) => (
              <li key={v.label}><strong>{v.t}:</strong> {v.note}</li>
            ))}
          </ul>
        )}
      </div>

      <Link href="/tilbud?jobb=ny-drenering"
        className="mt-6 inline-block rounded-lg bg-clay-500 px-5 py-3 font-semibold text-white hover:bg-clay-600">
        Få pris på din bolig
      </Link>
    </div>
  );
}
