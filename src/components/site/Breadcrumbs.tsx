import Link from "next/link";

export interface Crumb {
  name: string;
  href: string;
}

// Visible breadcrumb plus BreadcrumbList structured data.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Forside", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.dindrenering.no${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <nav aria-label="Brødsmuler" className="text-sm text-text-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index < all.length - 1 ? (
              <Link href={item.href} className="hover:text-brand-600">
                {item.name}
              </Link>
            ) : (
              <span className="text-ink-800" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
