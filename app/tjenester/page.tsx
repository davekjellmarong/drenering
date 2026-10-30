import Link from "next/link";
import { ContentMethods } from "@/src/queryFactory/Article";
import { Breadcrumbs } from "@/src/components/site/Breadcrumbs";
import { CtaBox } from "@/src/components/site/CtaBox";

export const metadata = {
  alternates: { canonical: "/tjenester" },
  title: "Hva kan du få tilbud på? | DinDrenering",
  description:
    "Boligdrenering, drensrør, overvannshåndtering og drenering for næring og borettslag. Se hva jobbene omfatter og få tilbud fra firma i ditt område.",
};

export default async function TjenesterHub() {
  const services = await ContentMethods.getAll("tjenester");

  return (
    <>
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <Breadcrumbs items={[{ name: "Tjenester", href: "/tjenester" }]} />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Hva kan du få tilbud på?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Vi utfører ikke arbeid selv, men sender forespørselen din til firma som
            gjør denne typen jobber der du bor.
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/tjenester/${service.slug}`}
              className="rounded-2xl border border-border p-6 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              <span className="text-lg font-semibold text-ink-900">{service.navTitle || service.title}</span>
              <span className="mt-2 block text-sm text-text-subtle">{service.description}</span>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <CtaBox />
        </div>
      </section>
    </>
  );
}
