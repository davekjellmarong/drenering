import ArticleCard from "@/src/components/features/blog/ArticleCard";
import { ArticleMethods } from "@/src/queryFactory/Article";

export const metadata = {
  title: "DreneringsBlogg | Nyheter, Tips og Råd om Drenering",
  description:
    "Les de nyeste artiklene om drenering, vedlikehold og bærekraftige løsninger. Finn eksperttips og råd for ditt dreneringsprosjekt.",
};
const BlogPage = async () => {
  const articles = await ArticleMethods.getAll();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-brand-900">
        DreneringsExperten Blog
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} post={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
