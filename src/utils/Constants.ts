export const KOMMUNER = [
  { id: "oslo", name: "Oslo" },
  { id: "bergen", name: "Bergen" },
  { id: "trondheim", name: "Trondheim" },
  { id: "stavanger", name: "Stavanger" },
  { id: "drammen", name: "Drammen" },
  { id: "kristiansand", name: "Kristiansand" },
  { id: "tromso", name: "Tromsø" },
  { id: "fredrikstad", name: "Fredrikstad" },
  { id: "sandnes", name: "Sandnes" },
  { id: "sarpsborg", name: "Sarpsborg" },
  { id: "bodo", name: "Bodø" },
  { id: "alesund", name: "Ålesund" },
  { id: "sandefjord", name: "Sandefjord" },
  { id: "larvik", name: "Larvik" },
  { id: "tonsberg", name: "Tønsberg" },
  { id: "halden", name: "Halden" },
  { id: "moss", name: "Moss" },
  { id: "hamar", name: "Hamar" },
  { id: "lillehammer", name: "Lillehammer" },
  { id: "gjovik", name: "Gjøvik" },
];

// Static fallback data used when the Strapi CMS is unreachable, so city
// pages and the build never depend on a live backend for this content type.
export const STATIC_CITIES = KOMMUNER.map((kommune, index) => ({
  id: index + 1,
  name: kommune.name,
  average_price_meter: 3500,
  price_range: "150 000 - 300 000 kr",
  region: "",
  publishedAt: "",
  updatedAt: "",
  createdAt: "",
}));
