import Link from "next/link";
import { ContentMethods } from "@/src/queryFactory/Article";
import { CityMethods } from "@/src/queryFactory/City";
import { Breadcrumbs } from "@/src/components/site/Breadcrumbs";
import { CtaBox } from "@/src/components/site/CtaBox";

export const metadata = {
  alternates: { canonical: "/drenering" },
  title: "Alt om drenering: guider, priser og firma i din by",
  description:
    "Guider om drenering rundt hus, pris, vann og fukt i kjelleren og typer drenering, og dreneringsfirma i din by.",
};

export default async function DreneringHub() {
  const guides = await ContentMethods.getAll("guides");
  const posts = await ContentMethods.getAll("blog");
  const cities = await CityMethods.getAll();

  return (
    <>
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <Breadcrumbs items={[{ name: "Guider", href: "/drenering" }]} />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Alt om drenering
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Nøkterne guider om drenering rundt hus, hva det koster, og hva du gjør
            med vann og fukt i kjelleren. Og når du er klar: dreneringsfirma i din by.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-ink-900">Guider</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/drenering/${guide.slug}`}
              className="rounded-2xl border border-border p-6 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              <span className="text-lg font-semibold text-ink-900">{guide.navTitle || guide.title}</span>
              <span className="mt-2 line-clamp-3 block text-sm text-text-subtle">{guide.description}</span>
            </Link>
          ))}
        </div>

        {posts.length > 0 && (
          <>
            <h2 className="mt-14 text-2xl font-bold text-ink-900">Fra bloggen</h2>
            <ul className="mt-4 space-y-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="font-medium text-brand-700 underline underline-offset-2">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section id="byer" className="scroll-mt-20 bg-brand-50 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-ink-900">Dreneringsfirma i din by</h2>
          <p className="mt-2 text-slate-700">
            Finner du ikke byen din? Bruk{" "}
            <Link href="/tilbud" className="text-brand-700 underline">
              tilbudsskjemaet
            </Link>
            , så sender vi forespørselen til firma der du bor.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/drenering/${city.slug}`}
                  className="block rounded-lg bg-white px-4 py-3 font-medium text-ink-900 hover:text-brand-700"
                >
                  Drenering i {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-14">
        <CtaBox />
      </section>
    </>
  );
}
