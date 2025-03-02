import { getPublicData, getPublicDataFetch } from "../utils/Request";
import { City } from "../utils/types";

export const CityMethods = {
  getAll: async (): Promise<City[]> => {
    return getPublicDataFetch("/Cities?populate=*");
  },
  getById: async (id: string | number): Promise<City> => {
    return getPublicData(`/Cities/${id}`);
  },
  getByName: async (name: string): Promise<City[]> => {
    return getPublicDataFetch(`/Cities?filters[name][$eq]=${name}`);
  },
};
