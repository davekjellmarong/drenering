import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "../utils/types";

// All written content is Markdown with frontmatter, read at build time:
//   content/blog/<slug>.md      → /blog/<slug>
//   content/guides/<slug>.md    → /drenering/<slug>
//   content/tjenester/<slug>.md → /tjenester/<slug>
// The slug is the file name; everything else comes from the frontmatter.
export type Collection = "blog" | "guides" | "tjenester";

const dir = (collection: Collection) =>
  path.join(process.cwd(), "content", collection);

const readEntry = (collection: Collection, slug: string): Article | null => {
  const file = path.join(dir(collection), `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: data.title,
    metaTitle: data.metaTitle,
    navTitle: data.navTitle,
    description: data.description,
    summary: data.summary,
    date: data.date,
    updated: data.updated || data.date,
    readingTime: data.readingTime,
    image: data.image,
    imageAlt: data.imageAlt,
    order: data.order,
    faq: data.faq,
    sources: data.sources,
    content,
  };
};

const getAll = (collection: Collection): Article[] => {
  if (!fs.existsSync(dir(collection))) return [];
  const entries = fs
    .readdirSync(dir(collection))
    .filter((file) => file.endsWith(".md"))
    .map((file) => readEntry(collection, file.replace(/\.md$/, "")))
    .filter((entry): entry is Article => entry !== null);

  // Guides and services have a fixed menu order; blog posts are newest first.
  return collection === "blog"
    ? entries.sort((a, b) => b.date.localeCompare(a.date))
    : entries.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
};

export const ContentMethods = {
  getAll: async (collection: Collection) => getAll(collection),
  getBySlug: async (collection: Collection, slug: string) =>
    readEntry(collection, slug),
};

// Blog-specific helpers kept for existing callers.
export const ArticleMethods = {
  getAll: async () => getAll("blog"),
  getBySlug: async (slug: string) => readEntry("blog", slug),
};
