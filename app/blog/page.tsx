import ArticleCard from "@/src/components/features/blog/ArticleCard";
import { ArticleMethods } from "@/src/queryFactory/Article";

export const metadata = {
  title: "Dreneringsblogg | Tips og råd om drenering og fuktsikring",
  description:
    "Artikler om drenering, fuktsikring av grunnmur, priser og hvordan du velger riktig dreneringsfirma. Praktiske råd for huseiere i Norge.",
  alternates: { canonical: "/blog" },
};

const BlogPage = async () => {
  const articles = await ArticleMethods.getAll();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-brand-900">
        Dreneringsbloggen
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} post={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
