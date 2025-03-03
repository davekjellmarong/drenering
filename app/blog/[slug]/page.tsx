import { Article, Tag } from "@/src/utils/types";
import { ArticleMethods } from "@/src/queryFactory/Article";
import Image from "next/image";
// import Link from "next/link";
import { notFound } from "next/navigation";
import ContentRenderer from "@/src/components/features/blog/Content";
import { Metadata } from "next";

// Generate static paths for all articles
export async function generateStaticParams() {
  const articles: Article[] = await ArticleMethods.getAll();

  return articles.map((article) => ({
    slug: article.slug,
  }));
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
    title: `${article[0].title} | DreneringsBloggen`,
    description: article[0].subtitle || "Les mer om drenering og fuktsikring.",
    openGraph: {
      title: article[0].title,
      description:
        article[0].subtitle || "Les mer om drenering og fuktsikring.",
      images: article[0].featuredImage ? [article[0].featuredImage.url] : [],
    },
  };
}

// export const revalidate = 20;

// Article Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await ArticleMethods.getBySlug(slug);
  if (!article) return notFound(); // Handle 404 if article not found
  return (
    <article className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <Image
        src={article[0].featuredImage?.url || "/placeholder.svg"}
        alt={article[0].title}
        width={1200}
        height={600}
        className="w-full h-64 object-cover mb-8"
      />

      {/* Title & Subtitle */}
      <h1 className="text-4xl font-bold mb-4 text-brand-900">
        {article[0].title}
      </h1>
      {article[0].subtitle && (
        <p className="text-xl text-brand-700 mb-6">{article[0].subtitle}</p>
      )}

      {/* Author Info */}
      {article[0].author && (
        <div className="flex items-center mb-6">
          <Image
            src={article[0].author.avatar?.url || "/placeholder.svg"}
            alt={article[0].author.name}
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-brand-800">
              {article[0].author.name}
            </p>
            {article[0].author.role && (
              <p className="text-sm text-brand-600">{article[0].author.role}</p>
            )}
          </div>
        </div>
      )}

      {/* Meta Information */}
      <p className="text-brand-600 mb-6">
        Publisert:{" "}
        {article[0].publishedAt
          ? new Date(article[0].publishedAt).toLocaleDateString("no-NO")
          : "Ukjent dato"}{" "}
        •{" "}
        {article[0].readingTime
          ? `${article[0].readingTime} min lestid`
          : "Ukjent tid"}
      </p>

      {/* Tags */}
      {article[0].tags && article[0].tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {article[0].tags.map((tag: Tag) => (
            <span
              key={tag.id}
              className="bg-brand-100 text-brand-800 text-sm px-3 py-1 rounded"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Article Content */}

      <ContentRenderer content={article[0].content} />
      {/* Related Articles */}
      {article[0].articles && article[0].articles.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-900">
            Relaterte artikler
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* {article[0].articles.map((relatedPost: Article) => (
              <div
                key={relatedPost.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={relatedPost.featuredImage?.url || "/placeholder.svg"}
                  alt={relatedPost.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-brand-800">
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="hover:text-brand-600"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-600 mb-2">
                    {relatedPost.publishedAt
                      ? new Date(relatedPost.publishedAt).toLocaleDateString(
                          "no-NO"
                        )
                      : "Ukjent dato"}{" "}
                    •{" "}
                    {relatedPost.readingTime
                      ? `${relatedPost.readingTime} min lestid`
                      : "Ukjent tid"}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="text-brand-500 hover:text-brand-600 font-semibold text-sm"
                  >
                    Les mer
                  </Link>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      )}
    </article>
  );
}
