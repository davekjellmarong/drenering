import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleMethods } from "@/src/queryFactory/Article";
import { ArticleLayout } from "@/src/components/site/ArticleLayout";

export const dynamicParams = false;

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
    title: `${article.metaTitle || article.title} | DinDrenering`,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await ArticleMethods.getBySlug(slug);
  if (!article) notFound();

  const related = (await ArticleMethods.getAll())
    .filter((other) => other.slug !== slug)
    .slice(0, 4)
    .map((other) => ({
      href: `/blog/${other.slug}`,
      title: other.title,
      description: other.description,
    }));

  return (
    <ArticleLayout
      article={article}
      url={`/blog/${slug}`}
      breadcrumbs={[
        { name: "Blogg", href: "/blog" },
        { name: article.title, href: `/blog/${slug}` },
      ]}
      related={related}
    />
  );
}
