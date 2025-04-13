import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Drensrensing",
      description:
        "Profesjonell rengjøring for å fjerne tilstoppinger og gjenopprette riktig flyt.",
      href: "/tjenester/boligdrenering",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Drensrørreparasjon",
      description:
        "Rask og effektiv reparasjon av ødelagte eller skadede drensrør.",
      href: "/tjenester/drensror-installasjon",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Dreneringsinspeksjon",
      description:
        "Kamerainspeksjoner for å identifisere skjulte problemer i dreneringssystemet ditt.",
      href: "/tjenester/industriell-drenering",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Nødtjenester",
      description: "24/7 nøddreneringstjenester for akutte situasjoner.",
      href: "/tjenester/overvannshandtering",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="badge mx-auto mb-4 text-center">
          Profesjonelle Tjenester
        </div>
        <h2 className="section-title">Dreneringstjenester Vi Tilbyr</h2>
        <p className="section-subtitle">
          Fra nødreparasjoner til rutinemessig vedlikehold, vårt nettverk av
          fagfolk håndterer alle dine dreneringsbehov.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="text-brand-600 hover:text-brand-800 font-medium inline-flex items-center"
              >
                Les mer <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
