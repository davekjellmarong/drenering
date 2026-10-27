import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "../utils/types";

// Articles are Markdown files in content/blog, read at build time. The slug
// is the file name, everything else comes from the frontmatter.
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const readArticle = (slug: string): Article | null => {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated || data.date,
    readingTime: data.readingTime,
    image: data.image,
    imageAlt: data.imageAlt,
    content,
  };
};

export const ArticleMethods = {
  getAll: async (): Promise<Article[]> => {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".md"))
      .map((file) => readArticle(file.replace(/\.md$/, "")))
      .filter((article): article is Article => article !== null)
      .sort((a, b) => b.date.localeCompare(a.date));
  },
  getBySlug: async (slug: string): Promise<Article | null> => {
    return readArticle(slug);
  },
};
