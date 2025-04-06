import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { CityMethods } from "@/src/queryFactory/City";
import Image from "next/image";

export default async function Footer() {
  const cities = await CityMethods.getRouteHandlerCities();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={100}
                className=""
              />
              {/* <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div> */}
              {/* <span className="ml-3 text-xl font-bold text-gray-900">
                DinDrenering
              </span> */}
            </Link>
            <p className="mt-4 text-gray-600">
              Kobler huseiere med pålitelige dreneringsselskaper for raske,
              rimelige løsninger.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Drenering - Lær Mer */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Drenering – Lær Mer
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/drenering/hva-er-drenering"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Hva er drenering?
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/typer-drenering"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Typer drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/drenering-rundt-hus"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Drenering rundt hus
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/drenerings-renne"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Dreneringsrenne
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/fordeler"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Fordeler med drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/klimaendringer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Drenering og klimaendringer
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/baerekraftig"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Bærekraftig drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/drenering/pris"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Drenering priser og kostnader
                </Link>
              </li>
            </ul>
          </div>

          {/* Våre Tjenester */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Våre Tjenester
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tjenester/boligdrenering"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Boligdrenering
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/drensror-installasjon"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Drensrør-installasjon
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/industriell-drenering"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Industriell drenering
                </Link>
              </li>
              <li>
                <Link
                  href="/tjenester/overvannshandtering"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Overvannshåndtering
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">
              Om Oss
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/om-oss/visjon"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Vår visjon
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss/team"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Vårt team
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss/kontakt"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Kontakt oss
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Blogg & artikler
                </Link>
              </li>
            </ul>
          </div>

          {/* For Bedrifter & Juridisk */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              For Bedrifter
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/bli-partner"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Bli Partner
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">
              Juridisk informasjon
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/juridisk/personvern"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Personvern
                </Link>
              </li>
              <li>
                <Link
                  href="/juridisk/brukervilkar"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Brukervilkår
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular cities */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Populære byer
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/drenering/${city.name}`}
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                Drenering i {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} DinDrenering. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
