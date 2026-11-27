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
  trondheim: { municipality: "Trondheim", detachedHouses: { value: 24663, year: "2026", ...SSB_BOLIGER } },
  tonsberg: { municipality: "Tønsberg", detachedHouses: { value: 13283, year: "2026", ...SSB_BOLIGER } },
  fredrikstad: { municipality: "Fredrikstad", detachedHouses: { value: 19078, year: "2026", ...SSB_BOLIGER } },
  oslo: { municipality: "Oslo", detachedHouses: { value: 28349, year: "2026", ...SSB_BOLIGER } },
  bergen: { municipality: "Bergen", detachedHouses: { value: 36309, year: "2026", ...SSB_BOLIGER } },
  drammen: { municipality: "Drammen", detachedHouses: { value: 18148, year: "2026", ...SSB_BOLIGER } },
  // Added 2026-11-27 (same method; region codes 3201, 3203, 3909, 3405; Drammen 18 148 re-checked).
  baerum: { municipality: "Bærum", detachedHouses: { value: 15987, year: "2026", ...SSB_BOLIGER } },
  asker: { municipality: "Asker", detachedHouses: { value: 21774, year: "2026", ...SSB_BOLIGER } },
  larvik: { municipality: "Larvik", detachedHouses: { value: 13032, year: "2026", ...SSB_BOLIGER } },
  lillehammer: { municipality: "Lillehammer", detachedHouses: { value: 6834, year: "2026", ...SSB_BOLIGER } },
};
