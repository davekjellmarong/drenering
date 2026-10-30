import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentMethods } from "@/src/queryFactory/Article";
import { ArticleLayout } from "@/src/components/site/ArticleLayout";

export const dynamicParams = false;

export async function generateStaticParams() {
  const services = await ContentMethods.getAll("tjenester");
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await ContentMethods.getBySlug("tjenester", slug);
  if (!service) return {};
  return {
    title: service.metaTitle || service.title,
    description: service.description,
    alternates: { canonical: `/tjenester/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await ContentMethods.getBySlug("tjenester", slug);
  if (!service) notFound();

  const services = await ContentMethods.getAll("tjenester");
  const guides = await ContentMethods.getAll("guides");
  const related = [
    ...services.filter((entry) => entry.slug !== slug).slice(0, 2).map((entry) => ({
      href: `/tjenester/${entry.slug}`,
      title: entry.navTitle || entry.title,
      description: entry.description,
    })),
    ...guides.slice(0, 2).map((entry) => ({
      href: `/drenering/${entry.slug}`,
      title: entry.navTitle || entry.title,
      description: entry.description,
    })),
  ];

  return (
    <ArticleLayout
      article={service}
      url={`/tjenester/${slug}`}
      breadcrumbs={[
        { name: "Tjenester", href: "/tjenester" },
        { name: service.navTitle || service.title, href: `/tjenester/${slug}` },
      ]}
      related={related}
    />
  );
}
