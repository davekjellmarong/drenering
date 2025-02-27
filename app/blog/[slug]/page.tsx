import { Article, Tag } from "@/src/utils/types";
import { ArticleMethods } from "@/src/queryFactory/Article";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

// Generate static paths for all articles
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articles: Article[] = await ArticleMethods.getAll();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Article Page Component
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article: Article | null = await ArticleMethods.getBySlug(slug);

  if (!article) return notFound(); // Handle 404 if article not found

  return (
    <article className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <Image
        src={article.featuredImage?.url || "/placeholder.svg"}
        alt={article.title}
        width={1200}
        height={600}
        className="w-full h-64 object-cover mb-8"
      />

      {/* Title & Subtitle */}
      <h1 className="text-4xl font-bold mb-4 text-brand-900">
        {article.title}
      </h1>
      {article.subtitle && (
        <p className="text-xl text-brand-700 mb-6">{article.subtitle}</p>
      )}

      {/* Author Info */}
      {article.author && (
        <div className="flex items-center mb-6">
          <Image
            src={article.author.avatar?.url || "/placeholder.svg"}
            alt={article.author.name}
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-brand-800">
              {article.author.name}
            </p>
            {article.author.role && (
              <p className="text-sm text-brand-600">{article.author.role}</p>
            )}
          </div>
        </div>
      )}

      {/* Meta Information */}
      <p className="text-brand-600 mb-6">
        Publisert:{" "}
        {article.publishedAt
          ? new Date(article.publishedAt).toLocaleDateString("no-NO")
          : "Ukjent dato"}{" "}
        •{" "}
        {article.readingTime
          ? `${article.readingTime} min lestid`
          : "Ukjent tid"}
      </p>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag: Tag) => (
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
      {/* <ReactMarkdown>{article.content}</ReactMarkdown> */}
      {/* <div className="prose prose-lg max-w-none text-brand-700">
        {article.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div> */}

      {/* Related Articles */}
      {article.articles && article.articles.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-900">
            Relaterte artikler
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {article.articles.map((relatedPost: Article) => (
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
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
