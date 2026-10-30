import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PostHogProvider } from "@/src/providers/PosthogProvider";
import { Header } from "@/src/components/site/Header";
import { Footer } from "@/src/components/site/Footer";
import { MobileCta } from "@/src/components/site/MobileCta";
import { ContentMethods } from "@/src/queryFactory/Article";
import { CityMethods } from "@/src/queryFactory/City";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "../src/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../src/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dindrenering.no"),
  // Pages without their own canonical (home) fall back to the root
  alternates: { canonical: "/" },
  title: "Drenering | Sammenlign tilbud fra dreneringsfirma i Norge",
  description:
    "Få opptil 3 gratis tilbud på drenering fra lokale firma. Se priser, les guider om drenering rundt hus og fuktsikring, og finn riktig dreneringsfirma.",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "DinDrenering",
    images: ["/logo.png"],
  },
};

// A comparison service without a public address, so Organization rather
// than LocalBusiness.
const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DinDrenering",
    url: "https://www.dindrenering.no",
    logo: "https://www.dindrenering.no/logo.png",
    description:
      "Gratis tjeneste som setter huseiere i kontakt med dreneringsfirma i Norge.",
    areaServed: "NO",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DinDrenering",
    url: "https://www.dindrenering.no",
    inLanguage: "nb-NO",
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toNav = (base: string) => (entry: { slug: string; navTitle?: string; title: string }) => ({
    href: `${base}/${entry.slug}`,
    title: entry.navTitle || entry.title,
  });
  const guides = (await ContentMethods.getAll("guides")).map(toNav("/drenering"));
  const services = (await ContentMethods.getAll("tjenester")).map(toNav("/tjenester"));
  const cities = (await CityMethods.getAll()).map((city) => ({
    href: `/drenering/${city.slug}`,
    title: city.name,
  }));

  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header guides={guides} />
        <ReactQueryProvider>
          <PostHogProvider>
            <main>{children}</main>
            <Toaster richColors />
          </PostHogProvider>
        </ReactQueryProvider>
        <Footer guides={guides} services={services} cities={cities} />
        <MobileCta />
      </body>
    </html>
  );
}
