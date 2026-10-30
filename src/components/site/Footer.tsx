import Link from "next/link";
import { Logo } from "./Logo";
import { OWNER } from "@/src/utils/Constants";
import type { NavItem } from "./Header";

interface FooterProps {
  guides: NavItem[];
  services: NavItem[];
  cities: NavItem[];
}

function Column({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-200">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-slate-300 hover:text-white">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ guides, services, cities }: FooterProps) {
  return (
    <footer className="bg-ink-950 pb-24 pt-14 text-sm text-slate-300 sm:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo inverted />
            <p className="mt-4 max-w-sm text-slate-300">
              Gratis tjeneste som setter huseiere i kontakt med dreneringsfirma,
              og nøkterne guider om drenering, fukt og vann i kjelleren.
            </p>
            <Link
              href="/tilbud"
              className="mt-5 inline-block rounded-lg bg-clay-500 px-4 py-2 font-semibold text-white hover:bg-clay-600"
            >
              Få gratis tilbud
            </Link>
          </div>
          <Column title="Guider" items={[...guides, { href: "/blog", title: "Blogg" }]} />
          <Column title="Tjenester" items={services} />
          <Column
            title="Om DinDrenering"
            items={[
              { href: "/hvordan-funker-det", title: "Slik fungerer det" },
              { href: "/om-oss/team", title: "Hvem står bak" },
              { href: "/om-oss/kontakt", title: "Kontakt" },
              { href: "/bli-partner", title: "For dreneringsfirma" },
              { href: "/juridisk/personvern", title: "Personvern" },
              { href: "/juridisk/brukervilkar", title: "Brukervilkår" },
            ]}
          />
        </div>

        <div className="mt-12 border-t border-ink-800 pt-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-200">
            Drenering i din by
          </h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {cities.map((city) => (
              <li key={city.href}>
                <Link href={city.href} className="text-slate-300 hover:text-white">
                  {city.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-xs text-slate-400">
          © {new Date().getFullYear()} DinDrenering · {OWNER.business} · org.nr.{" "}
          {OWNER.orgNr}
        </p>
      </div>
    </footer>
  );
}
