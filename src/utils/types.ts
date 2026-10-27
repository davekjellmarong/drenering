// Global ID type
type ID = number | string;

// Blog article, parsed from a Markdown file in content/blog
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated: string; // YYYY-MM-DD
  readingTime?: number;
  image?: string;
  imageAlt?: string;
  content: string; // Markdown body
}

export interface City {
  id: ID;
  name: string;
  slug: string; // URL segment, lowercase ASCII (e.g. "tromso")
  average_price_meter: number;
  price_range: string;
  region: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
}

export interface Company {
  organisasjonsnummer: string;
  navn: string;
  organisasjonsform: {
    kode: string;
    beskrivelse: string;
  };
  registreringsdatoEnhetsregisteret: string;
  registrertIMvaregisteret: boolean;
  naeringskode1?: {
    kode: string;
    beskrivelse: string;
  };
  harRegistrertAntallAnsatte: boolean;
  registreringsdatoMerverdiavgiftsregisteret?: string;
  registreringsdatoMerverdiavgiftsregisteretEnhetsregisteret?: string;
  forretningsadresse: {
    land: string;
    landkode: string;
    postnummer: string;
    poststed: string;
    adresse: string[];
    kommune: string;
    kommunenummer: string;
  };
  institusjonellSektorkode?: {
    kode: string;
    beskrivelse: string;
  };
  registrertIForetaksregisteret: boolean;
  registrertIStiftelsesregisteret: boolean;
  registrertIFrivillighetsregisteret: boolean;
  konkurs: boolean;
  underAvvikling: boolean;
  underTvangsavviklingEllerTvangsopplosning: boolean;
  maalform: string;
  aktivitet?: string[];
  registrertIPartiregisteret: boolean;
  telefon: string;
  epostadresse: string;
}

export interface FormData {
  name: string;
  orgNumber: string;
  email: string;
  street: string;
  town: string;
  postalCode: string;
}
