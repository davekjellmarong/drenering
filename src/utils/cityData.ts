// Sourced facts per city (STRATEGY.md section 5). Every field carries its
// source. CityPage renders only fields that exist; a city without an entry
// stays short and generic. Never add a value you have not checked at the source.

export interface SourcedFact {
  value: number;
  year: string; // reference year as stated by the source
  sourceName: string;
  sourceUrl: string;
}

export interface CityData {
  municipality: string; // official municipality name
  detachedHouses?: SourcedFact; // eneboliger (boliger, bebodde og ubebodde)
}

const SSB_BOLIGER = {
  sourceName: "SSB tabell 06513: Boliger etter bygningstype",
  sourceUrl: "https://www.ssb.no/statbank/table/06513",
};

// Fetched from data.ssb.no (table 06513, BygnType 01 = Enebolig, all floor-area
// classes summed, latest year available 2026-11-02; table updated 2026-09-16).
export const CITY_DATA: Record<string, CityData> = {
  sandnes: { municipality: "Sandnes", detachedHouses: { value: 17268, year: "2026", ...SSB_BOLIGER } },
  kristiansand: { municipality: "Kristiansand", detachedHouses: { value: 22563, year: "2026", ...SSB_BOLIGER } },
  tromso: { municipality: "Tromsø", detachedHouses: { value: 15713, year: "2026", ...SSB_BOLIGER } },
  stavanger: { municipality: "Stavanger", detachedHouses: { value: 24125, year: "2026", ...SSB_BOLIGER } },
};
