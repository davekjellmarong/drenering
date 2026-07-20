import { City } from "../utils/types";
import { STATIC_CITIES } from "../utils/Constants";

// There is no live CMS backing city data right now, so these read from a
// static list. If a CMS comes back online, swap the bodies below to fetch
// from it with a fallback to STATIC_CITIES rather than removing the fallback.
export const CityMethods = {
  getAll: async (): Promise<City[]> => {
    return STATIC_CITIES;
  },
  getByName: async (name: string): Promise<City[]> => {
    return STATIC_CITIES.filter(
      (city) => city.name.toLowerCase() === name.toLowerCase()
    );
  },
};
