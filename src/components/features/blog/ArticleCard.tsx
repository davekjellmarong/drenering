import Link from "next/link";
import Image from "next/image";
import { Article } from "@/src/utils/types";

const ArticleCard = ({ post }: { post: Article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Featured Image */}
      <Image
        src={post.featuredImage?.url || "/placeholder.svg"}
        alt={post.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        {/* Article Title */}
        <h2 className="text-xl font-semibold mb-2 text-brand-800">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
            {post.title}
          </Link>
        </h2>

        {/* Article Meta Data */}
        <p className="text-brand-600 text-sm mb-4">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("no-NO")
            : "Ukjent dato"}{" "}
          • {post.readingTime || "?"} min lestid
        </p>

        {/* Subtitle */}
        {post.subtitle && (
          <p className="text-brand-700 mb-4">{post.subtitle}</p>
        )}

        {/* Author Info */}
        {post.author && (
          <div className="flex items-center mb-4">
            <Image
              src={post.author.avatar?.url || "/placeholder.svg"}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-semibold text-brand-800">
                {post.author.name}
              </p>
              {post.author.role && (
                <p className="text-xs text-brand-600">{post.author.role}</p>
              )}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag) => (
            <span
              key={tag.id}
              className="bg-brand-100 text-brand-800 text-xs px-2 py-1 rounded"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="text-brand-500 hover:text-brand-600 font-semibold"
        >
          Les mer
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
