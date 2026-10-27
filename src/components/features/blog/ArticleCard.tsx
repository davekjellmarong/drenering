import Link from "next/link";
import Image from "next/image";
import { Article } from "@/src/utils/types";

const ArticleCard = ({ post }: { post: Article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      {/* Featured Image */}
      {post.image && (
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Article Title */}
        <h2 className="text-xl font-semibold mb-2 text-brand-800">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
            {post.title}
          </Link>
        </h2>

        {/* Article Meta Data */}
        <p className="text-brand-600 text-sm mb-4">
          {new Date(post.date).toLocaleDateString("nb-NO")}
          {post.readingTime && ` • ${post.readingTime} min lesetid`}
        </p>

        <p className="text-brand-700 mb-4 flex-1">{post.description}</p>

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
