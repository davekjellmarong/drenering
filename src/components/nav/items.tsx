export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  className?: string;
}

export const navItems: NavItem[] = [
  { title: "Hjem", href: "/" },
  // {
  //   title: "Om Drenering",
  //   href: "/om-drenering",
  //   children: [
  //     { title: "Hva er drenering?", href: "/om-drenering/hva-er-drenering" },
  //     { title: "Slik fungerer det", href: "/om-drenering/slik-fungerer-det" },
  //     {
  //       title: "Fordeler og ulemper",
  //       href: "/om-drenering/fordeler-og-ulemper",
  //     },
  //   ],
  // },
  // {
  //   title: "Dreneringstjenester",
  //   href: "/tjenester",
  //   children: [
  //     { title: "Drenering av hus", href: "/tjenester/drenering-av-hus" },
  //     {
  //       title: "Drenering av kjeller",
  //       href: "/tjenester/drenering-av-kjeller",
  //     },
  //     {
  //       title: "Drenering uten graving",
  //       href: "/tjenester/drenering-uten-graving",
  //     },
  //     {
  //       title: "Bærekraftig drenering",
  //       href: "/tjenester/baerekraftig-drenering",
  //     },
  //     {
  //       title: "Drenering for borettslag & næring",
  //       href: "/tjenester/borettslag-og-naering",
  //     },
  //   ],
  // },
  // {
  //   title: "Finn Dreneringsfirma",
  //   href: "/finn-dreneringsfirma",
  //   children: [
  //     { title: "Drenering i Oslo", href: "/finn-dreneringsfirma/oslo" },
  //     { title: "Drenering i Bergen", href: "/finn-dreneringsfirma/bergen" },
  //     {
  //       title: "Drenering i Trondheim",
  //       href: "/finn-dreneringsfirma/trondheim",
  //     },
  //     {
  //       title: "Alle lokasjoner",
  //       href: "/finn-dreneringsfirma/alle-lokasjoner",
  //     },
  //   ],
  // },
  // {
  //   title: "Sammenlign Dreneringsfirmaer",
  //   href: "/sammenlign-dreneringsfirmaer",
  // },
  // { title: "Blogg & Artikler", href: "/blog" },
  // { title: "Få Tilbud", href: "/tilbud", className: "cta" }, // Added className for styling
];
