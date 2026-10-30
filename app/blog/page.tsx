import Link from "next/link";
import { ArticleMethods } from "@/src/queryFactory/Article";
import { Breadcrumbs } from "@/src/components/site/Breadcrumbs";

export const metadata = {
  title: "Dreneringsblogg | Tips og råd om drenering og fuktsikring",
  description:
    "Artikler om drenering, fuktsikring av grunnmur, priser og hvordan du velger riktig dreneringsfirma. Praktiske råd for huseiere i Norge.",
  alternates: { canonical: "/blog" },
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPage() {
  const articles = await ArticleMethods.getAll();

  return (
    <>
      <section className="border-b border-border bg-sand-50">
        <div className="container mx-auto max-w-4xl px-4 py-10">
          <Breadcrumbs items={[{ name: "Blogg", href: "/blog" }]} />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">Dreneringsbloggen</h1>
          <p className="mt-3 text-lg text-slate-700">
            Artikler om drenering, fukt og hva du bør vite før du får gjort jobben.
            Se også{" "}
            <Link href="/drenering" className="text-brand-700 underline">
              alle guidene
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-4xl px-4 py-10">
        <ul className="divide-y divide-border">
          {articles.map((article) => (
            <li key={article.slug} className="py-6">
              <Link href={`/blog/${article.slug}`} className="group block">
                <p className="text-sm text-text-muted">
                  {formatDate(article.updated)}
                  {article.readingTime ? ` · ${article.readingTime} min lesetid` : ""}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-ink-900 group-hover:text-brand-700">
                  {article.title}
                </h2>
                <p className="mt-2 text-slate-700">{article.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
