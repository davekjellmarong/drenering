import { City } from "../utils/types";
import { STATIC_CITIES } from "../utils/Constants";

// There is no live CMS backing city data right now, so these read from a
// static list. If a CMS comes back online, swap the bodies below to fetch
// from it with a fallback to STATIC_CITIES rather than removing the fallback.
export const CityMethods = {
  getAll: async (): Promise<City[]> => {
    return STATIC_CITIES;
  },
  // Matches the slug ("tromso") and also the display name ("Tromsø"), which
  // older URLs used, so callers can redirect those to the slug URL.
  getBySlugOrName: async (value: string): Promise<City | undefined> => {
    const needle = value.toLowerCase();
    return STATIC_CITIES.find(
      (city) => city.slug === needle || city.name.toLowerCase() === needle
    );
  },
};
