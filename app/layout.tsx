import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PostHogProvider } from "@/src/providers/PosthogProvider";
// import Navbar from "@/src/components/nav/NavBar";
import Footer from "@/src/components/features/footer/Footer";
import { Header } from "@/src/components/features/header/Header";
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
  title: "Drenering | Finn Beste Dreneringsfirma",
  description:
    "Finn den beste dreneringsløsningen for ditt behov. Sammenlign priser og tilbydere.",
  keywords:
    "drenering, dreneringsfirma, drensrør, boligdrenering, industriell drenering",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DinDrenering",
  url: "https://dindrenering.no",
  logo: "https://dindrenering.no/logo.png",
  description:
    "Sammenligningstjeneste for drenering. Få tilbud fra kvalifiserte dreneringsfirmaer i Norge.",
  areaServed: "NO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <ReactQueryProvider>
          <PostHogProvider>
            <main className="">{children}</main>
            <Toaster richColors />
          </PostHogProvider>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
