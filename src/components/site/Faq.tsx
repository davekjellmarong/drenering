import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

// Accordion of questions plus FAQPage structured data.
export function Faq({
  items,
  title = "Vanlige spørsmål",
}: {
  items: FaqItem[];
  title?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section aria-labelledby="faq" className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 id="faq" className="scroll-mt-24 text-2xl font-semibold text-ink-900">
        {title}
      </h2>
      <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-white">
        {items.map((item) => (
          <details key={item.q} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
              {item.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-slate-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
