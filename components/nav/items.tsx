export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { title: "Hjem", href: "/" },
  {
    title: "Om Drenering",
    href: "/om-drenering",
    children: [
      { title: "Generelt om Drenering", href: "/om-drenering" },
      { title: "Typer Drenering", href: "/typer-drenering" },
      { title: "Fordeler med Drenering", href: "/fordeler-med-drenering" },
      { title: "For Boligeiere", href: "/drenering-for-boligeiere" },
    ],
  },
  { title: "Klima og Drenering", href: "/drenering-og-klimaendringer" },
  { title: "Bærekraftig Drenering", href: "/baerekraftig-drenering" },
  { title: "Blog", href: "/blog" },
  { title: "Kontakt Ekspert", href: "/kontakt-ekspert" },
];
