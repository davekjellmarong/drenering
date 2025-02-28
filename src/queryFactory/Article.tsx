import { getPublicData, getPublicDataFetch } from "../utils/Request";
import { Article } from "../utils/types";

export const ArticleMethods = {
  getAll: async (): Promise<Article[]> => {
    return getPublicDataFetch("/articles?populate=*");
  },
  getById: async (id: string | number): Promise<Article> => {
    return getPublicData(`/Articles/${id}`);
  },
  getBySlug: async (slug: string | number): Promise<Article[]> => {
    return getPublicDataFetch(`/articles?filters[slug][$eq]=${slug}`);
  },
};
