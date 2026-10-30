import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityMethods } from "@/src/queryFactory/City";
import { ContentMethods } from "@/src/queryFactory/Article";
import { ArticleLayout } from "@/src/components/site/ArticleLayout";
import { CityPage } from "@/src/components/city/CityPage";

// /drenering/<slug> is either a guide (content/guides/<slug>.md) or a city
// page (src/utils/Constants.ts KOMMUNER). Slugs never overlap.
export const dynamicParams = false;

export async function generateStaticParams() {
  const guides = await ContentMethods.getAll("guides");
  const cities = await CityMethods.getAll();
  return [
    ...guides.map((guide) => ({ slug: guide.slug })),
    ...cities.map((city) => ({ slug: city.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = await ContentMethods.getBySlug("guides", slug);
  if (guide) {
    return {
      title: guide.metaTitle || guide.title,
      description: guide.description,
      alternates: { canonical: `/drenering/${slug}` },
      openGraph: {
        type: "article",
        title: guide.title,
        description: guide.description,
        url: `/drenering/${slug}`,
      },
    };
  }

  const city = await CityMethods.getBySlugOrName(slug);
  if (!city) return {};
  return {
    title: `Drenering i ${city.name} | Få tilbud fra lokale firma`,
    description: `Trenger du drenering i ${city.name}? Beskriv jobben én gang og få opptil 3 tilbud fra dreneringsfirma i ${city.name}. Gratis og uforpliktende.`,
    alternates: { canonical: `/drenering/${city.slug}` },
  };
}

export default async function DreneringSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guides = await ContentMethods.getAll("guides");

  const guide = guides.find((entry) => entry.slug === slug);
  if (guide) {
    const related = guides
      .filter((entry) => entry.slug !== slug)
      .slice(0, 4)
      .map((entry) => ({
        href: `/drenering/${entry.slug}`,
        title: entry.navTitle || entry.title,
        description: entry.description,
      }));
    return (
      <ArticleLayout
        article={guide}
        url={`/drenering/${slug}`}
        breadcrumbs={[
          { name: "Guider", href: "/drenering" },
          { name: guide.navTitle || guide.title, href: `/drenering/${slug}` },
        ]}
        related={related}
      />
    );
  }

  const city = await CityMethods.getBySlugOrName(slug);
  if (!city) notFound();
  const cities = await CityMethods.getAll();
  return (
    <CityPage
      city={city}
      guides={guides.map((entry) => ({
        href: `/drenering/${entry.slug}`,
        title: entry.navTitle || entry.title,
      }))}
      otherCities={cities
        .filter((other) => other.slug !== city.slug)
        .map((other) => ({ href: `/drenering/${other.slug}`, title: other.name }))}
    />
  );
}
