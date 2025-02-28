import { getPublicData } from "../utils/Request";
import { Article } from "../utils/types";

export const ArticleMethods = {
  getAll: async (): Promise<Article[]> => {
    return getPublicData("/articles?populate=*");
  },
  getById: async (id: string | number): Promise<Article> => {
    return getPublicData(`/Articles/${id}`);
  },
  getBySlug: async (slug: string | number): Promise<Article[]> => {
    return getPublicData(`/articles?filters[slug][$eq]=${slug}`);
  },
};
