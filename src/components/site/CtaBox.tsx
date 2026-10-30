import Link from "next/link";
import { JOB_TYPES } from "@/src/components/quote/options";

// Call to action placed in and after articles. Each job type deep-links into
// the quote form with that answer already chosen.
export function CtaBox({ title = "Vil du ha tilbud på jobben?" }: { title?: string }) {
  return (
    <aside className="not-prose rounded-2xl bg-ink-900 p-6 text-white sm:p-8">
      <p className="text-xl font-semibold">{title}</p>
      <p className="mt-2 text-slate-300">
        Beskriv jobben én gang, så sender vi forespørselen til opptil 3
        dreneringsfirma i ditt område. Gratis og uforpliktende.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {JOB_TYPES.slice(0, 4).map((type) => (
          <Link
            key={type.id}
            href={`/tilbud?jobb=${type.id}`}
            className="rounded-full border border-slate-500 px-3 py-1.5 text-sm text-slate-100 hover:border-white hover:text-white"
          >
            {type.title}
          </Link>
        ))}
      </div>
      <Link
        href="/tilbud"
        className="mt-5 inline-block rounded-lg bg-clay-500 px-5 py-3 font-semibold text-white hover:bg-clay-600"
      >
        Få gratis tilbud
      </Link>
    </aside>
  );
}
