// Answer options for the quote form. The `value` is what's sent in the lead
// email (functions/api/[form].ts), so keep values readable Norwegian.

export const JOB_TYPES = [
  {
    id: "ny-drenering",
    value: "Ny drenering rundt huset",
    title: "Ny drenering rundt huset",
    hint: "Gammel eller manglende drenering",
  },
  {
    id: "vann-i-kjeller",
    value: "Vann eller fukt i kjelleren",
    title: "Vann eller fukt i kjelleren",
    hint: "Usikker på årsaken",
  },
  {
    id: "drensror",
    value: "Drensrør: spyling, inspeksjon eller utskifting",
    title: "Drensrør",
    hint: "Spyling, inspeksjon, utskifting",
  },
  {
    id: "overvann",
    value: "Overvann, takvann eller vann på tomten",
    title: "Overvann og vann på tomten",
    hint: "Takvann, renner, terreng",
  },
  {
    id: "annet",
    value: "Annet / vet ikke",
    title: "Annet eller vet ikke",
    hint: "Beskriv det med egne ord",
  },
] as const;

export const TIMING = [
  "Så snart som mulig",
  "Innen 3 måneder",
  "I løpet av året",
  "Undersøker bare foreløpig",
];

export const HOUSE_TYPES = [
  "Enebolig",
  "Tomannsbolig / rekkehus",
  "Hytte / fritidsbolig",
  "Borettslag / sameie",
  "Næringsbygg",
  "Annet",
];

export const BUILD_YEARS = [
  "Før 1950",
  "1950–1979",
  "1980–1999",
  "2000 eller nyere",
  "Vet ikke",
];

export const BASEMENT = ["Ja, full kjeller", "Delvis / underetasje", "Nei", "Vet ikke"];

export const jobTypeById = (id: string | null) =>
  JOB_TYPES.find((job) => job.id === id);
