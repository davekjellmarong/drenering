import { mockBlogPosts } from "@/mock";
import BlogPostCard from "@/components/features/blog/PostCard";

export const metadata = {
  title: "Blog - DreneringsExperten",
  description: "Les våre siste artikler om drenering og vannhåndtering",
};

const BlogPage = async () => {
  const response = await fetch("http://localhost:1337/api/articles?populate=*");
  const posts = await response.json();
  // console.log(posts.data[0]);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-brand-900">
        DreneringsExperten Blog
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.data.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
