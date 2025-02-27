import { mockBlogPosts } from "@/mock";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = mockBlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - DreneringsExperten Blog`,
    description: post.subtitle,
  };
};

export const generateStaticParams = () => {
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const post = mockBlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPosts
    .map((id) => mockBlogPosts.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <article className="container mx-auto px-4 py-8">
      <Image
        src={post.featuredImage || "/placeholder.svg"}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-64 object-cover mb-8"
      />
      <h1 className="text-4xl font-bold mb-4 text-brand-900">{post.title}</h1>
      <p className="text-xl text-brand-700 mb-6">{post.subtitle}</p>
      <div className="flex items-center mb-6">
        <Image
          src={post.author.avatar || "/placeholder.svg"}
          alt={post.author.name}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-brand-800">{post.author.name}</p>
          <p className="text-sm text-brand-600">{post.author.role}</p>
        </div>
      </div>
      <p className="text-brand-600 mb-6">
        Publisert: {new Date(post.publishedAt).toLocaleDateString("no-NO")} •{" "}
        {post.readingTime} min lestid
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-brand-100 text-brand-800 text-sm px-3 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="prose prose-lg max-w-none text-brand-700">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-900">
            Relaterte artikler
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={relatedPost.featuredImage || "/placeholder.svg"}
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
                    {new Date(relatedPost.publishedAt).toLocaleDateString(
                      "no-NO"
                    )}{" "}
                    • {relatedPost.readingTime} min lestid
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
};

export default BlogPost;
