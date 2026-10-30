import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container mx-auto max-w-2xl px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink-900">Fant ikke siden</h1>
      <p className="mt-3 text-slate-700">
        Siden finnes ikke, eller den har flyttet. Kanskje du finner det du leter etter her:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/drenering" className="rounded-lg border border-border px-4 py-2 font-medium text-ink-900 hover:border-brand-300">
          Guider om drenering
        </Link>
        <Link href="/drenering/pris" className="rounded-lg border border-border px-4 py-2 font-medium text-ink-900 hover:border-brand-300">
          Pris på drenering
        </Link>
        <Link href="/tilbud" className="rounded-lg bg-clay-500 px-4 py-2 font-semibold text-white hover:bg-clay-600">
          Få tilbud
        </Link>
      </div>
    </section>
  );
}
