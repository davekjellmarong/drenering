import { BlocksContent } from "@strapi/blocks-react-renderer";

// Global ID type
type ID = number | string;

// Media type (for avatar, featuredImage, etc.)
export interface Media {
  id: ID;
  url: string;
  mime: string;
  name: string;
  width?: number;
  height?: number;
  size?: number;
  createdAt: string;
  updatedAt: string;
}

// Tag export Interface
export interface Tag {
  id: ID;
  name: string;
}

// Author export Interface
export interface Author {
  id: ID;
  name: string;
  role?: string;
  avatar?: Media | null;
  articles?: Article[]; // One-to-Many Relation (An author can have multiple articles)
}

// Article export Interface
export interface Article {
  id: ID;
  title: string;
  subtitle?: string;
  slug: string;
  readingTime?: number;
  featuredImage?: Media | null;
  author?: Author; // Many-to-One Relation (Each article has one author)
  articles?: Article[]; // One-to-Many Self-Relation (Linked articles)
  tags?: Tag[]; // One-to-Many Relation (An article can have multiple tags)
  content: BlocksContent;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
}

export interface City {
  id: ID;
  name: string;
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
