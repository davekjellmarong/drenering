import Link from "next/link";
import Image from "next/image";
import MarkdownRenderer, { slugify } from "@/src/components/features/blog/Markdown";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CtaBox } from "./CtaBox";
import { Faq } from "./Faq";
import { OWNER } from "@/src/utils/Constants";
import type { Article } from "@/src/utils/types";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

interface ArticleLayoutProps {
  article: Article;
  url: string; // path, e.g. /drenering/pris
  breadcrumbs: Crumb[];
  related: { href: string; title: string; description?: string }[];
}

// One layout for guides, service pages and blog posts: answer first, table
// of contents, readable body, FAQ, sources, related reading and a CTA.
export function ArticleLayout({ article, url, breadcrumbs, related }: ArticleLayoutProps) {
  const headings = [...article.content.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated,
    image: article.image ? [`https://www.dindrenering.no${article.image}`] : undefined,
    mainEntityOfPage: `https://www.dindrenering.no${url}`,
    author: { "@type": "Person", name: OWNER.name, url: "https://www.dindrenering.no/om-oss/team" },
    publisher: {
      "@type": "Organization",
      name: "DinDrenering",
      logo: { "@type": "ImageObject", url: "https://www.dindrenering.no/logo.png" },
    },
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="border-b border-border bg-sand-50">
        <div className="container mx-auto max-w-6xl px-4 pb-10 pt-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Av{" "}
            <Link href="/om-oss/team" className="underline hover:text-brand-600">
              {OWNER.name}
            </Link>{" "}
            · Sist oppdatert {formatDate(article.updated)}
            {article.readingTime ? ` · ${article.readingTime} min lesetid` : ""}
          </p>
          {article.summary && (
            <div className="mt-6 max-w-3xl rounded-xl border-l-4 border-brand-500 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                Kort svar
              </p>
              <p className="mt-1 text-lg text-ink-800">{article.summary}</p>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="min-w-0">
          {article.image && (
            <figure className="mb-8">
              <Image
                src={article.image}
                alt={article.imageAlt || ""}
                width={1200}
                height={600}
                className="w-full rounded-2xl border border-border"
                priority
              />
              {article.imageAlt && (
                <figcaption className="mt-2 text-sm text-text-muted">{article.imageAlt}</figcaption>
              )}
            </figure>
          )}

          <MarkdownRenderer content={article.content} />

          <div className="mt-12">
            <CtaBox />
          </div>

          {article.faq && article.faq.length > 0 && <Faq items={article.faq} />}

          {article.sources && article.sources.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-ink-900">Kilder</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener" className="text-brand-600 underline">
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-12 border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-ink-900">Les også</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-border p-5 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    <span className="font-semibold text-ink-900">{item.title}</span>
                    {item.description && (
                      <span className="mt-1 line-clamp-2 block text-sm text-text-subtle">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {headings.length > 2 && (
              <nav aria-label="Innhold" className="rounded-xl border border-border p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                  Innhold
                </p>
                <ol className="mt-3 space-y-2 text-sm">
                  {headings.map((heading) => (
                    <li key={heading}>
                      <a href={`#${slugify(heading)}`} className="text-ink-800 hover:text-brand-600">
                        {heading}
                      </a>
                    </li>
                  ))}
                  {article.faq && article.faq.length > 0 && (
                    <li>
                      <a href="#faq" className="text-ink-800 hover:text-brand-600">
                        Vanlige spørsmål
                      </a>
                    </li>
                  )}
                </ol>
              </nav>
            )}
            <div className="rounded-xl bg-clay-50 p-5">
              <p className="font-semibold text-ink-900">Få tilbud på drenering</p>
              <p className="mt-1 text-sm text-text-subtle">
                Gratis og uforpliktende, fra firma i ditt område.
              </p>
              <Link
                href="/tilbud"
                className="mt-4 block rounded-lg bg-clay-500 py-2.5 text-center text-sm font-semibold text-white hover:bg-clay-600"
              >
                Kom i gang
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
