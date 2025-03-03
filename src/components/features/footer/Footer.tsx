import Link from "next/link";
import { Facebook } from "lucide-react";
import { Button } from "../../ui/button";
import { CityMethods } from "@/src/queryFactory/City";

export default async function Footer() {
  const cities = await CityMethods.getAll();
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Drenering */}
          <div>
            <h3 className="text-lg font-semibold text-brand-900 mb-4">
              Om Drenering
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/drenering/om-drenering"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Hva er drenering?
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/typer-drenering"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Typer drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/fordeler"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Fordeler med drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/klimaendringer"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Drenering og klimaendringer
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/baerekraftig"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Bærekraftig drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/pris"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Priser og kostnader
                </Link>
              </li>
            </ul>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="text-lg font-semibold text-brand-900 mb-4">
              Våre Tjenester
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tjenester/boligdrenering"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Boligdrenering
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/drensror-installasjon"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Drensrør-installasjon
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/industriell-drenering"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Industriell drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/overvannshandtering"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Overvannshåndtering
                </Link>
              </li>
            </ul>
          </div>

          {/* Om Oss */}
          <div>
            <h3 className="text-lg font-semibold text-brand-900 mb-4">
              Om Oss
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/om-oss/visjon"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Vår visjon
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss/team"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Vårt team
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss/kontakt"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Kontakt oss
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Blogg & artikler
                </Link>
              </li>
              <li>
                <Link
                  href="/personvern"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Personvern
                </Link>
              </li>
              <li>
                <Link
                  href="/brukervilkar"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Brukervilkår
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold text-brand-900 mb-4">
              Kontakt oss
            </h3>
            <div className="space-y-4">
              <p className="text-brand-600">
                Få gratis og uforpliktende tilbud fra kvalifiserte
                dreneringseksperter i ditt område.
              </p>
              <Button
                asChild
                className="w-full bg-brand-500 hover:bg-brand-600"
              >
                <Link href="/fa-tilbud">Få tilbud nå</Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://facebook.com/dreneringsexperten">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Populære byer */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-brand-900 mb-4">
            Populære byer
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/drenering/${city.name}`}
                className="bg-brand-50 text-brand-700 hover:bg-brand-100 px-3 py-1 rounded-full text-sm"
              >
                Drenering i {city.name}
              </Link>
            ))}
            {/* <Button
              variant="link"
              asChild
              className="text-brand-500 hover:text-brand-600"
            >
              <Link href="/drenering/city">Se alle byer</Link>
            </Button> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-brand-600 text-sm">
            © {new Date().getFullYear()} DreneringsExperten. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
