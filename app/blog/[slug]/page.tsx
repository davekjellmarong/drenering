import { ArticleMethods } from "@/src/queryFactory/Article";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/src/components/features/blog/Markdown";
import CtaBanner from "@/src/components/sections/CtaBanner";
import { Metadata } from "next";

export const dynamicParams = false;

// Generate static paths for all articles
export async function generateStaticParams() {
  const articles = await ArticleMethods.getAll();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await ArticleMethods.getBySlug(slug);
  if (!article) return { title: "Artikkel ikke funnet" };

  return {
    title: `${article.title} | DinDrenering`,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/blog/${slug}`,
      publishedTime: article.date,
      modifiedTime: article.updated,
      images: article.image ? [article.image] : undefined,
    },
  };
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await ArticleMethods.getBySlug(slug);
  if (!article) return notFound();

  const related = (await ArticleMethods.getAll())
    .filter((other) => other.slug !== slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated,
    image: article.image ? [article.image] : undefined,
    mainEntityOfPage: `https://www.dindrenering.no/blog/${slug}`,
    author: { "@type": "Organization", name: "DinDrenering" },
    publisher: {
      "@type": "Organization",
      name: "DinDrenering",
      logo: { "@type": "ImageObject", url: "https://www.dindrenering.no/logo.png" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <nav className="text-sm text-brand-600 mb-6">
          <Link href="/blog" className="hover:text-brand-800">
            Blogg
          </Link>{" "}
          / {article.title}
        </nav>

        <h1 className="text-4xl font-bold mb-4 text-brand-900">
          {article.title}
        </h1>
        <p className="text-xl text-brand-700 mb-4">{article.description}</p>
        <p className="text-brand-600 mb-8 text-sm">
          Publisert {formatDate(article.date)}
          {article.updated !== article.date &&
            ` • Oppdatert ${formatDate(article.updated)}`}
          {article.readingTime && ` • ${article.readingTime} min lesetid`}
        </p>

        {article.image && (
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            priority
          />
        )}

        <MarkdownRenderer content={article.content} />

        {related.length > 0 && (
          <aside className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-6 text-brand-900">
              Relaterte artikler
            </h2>
            <ul className="space-y-3">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/blog/${other.slug}`}
                    className="text-brand-600 hover:text-brand-800 font-semibold"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>
      <CtaBanner />
    </>
  );
}
