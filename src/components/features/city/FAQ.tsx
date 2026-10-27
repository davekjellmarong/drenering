interface CityFAQSectionProps {
  cityName: string;
}

export function CityFAQSection({ cityName }: CityFAQSectionProps) {
  const faqs = [
    {
      question: `Hvor mye koster drenering i ${cityName}?`,
      answer: `Det finnes ingen fast pris for ${cityName}. Prisen avhenger av hvor mange meter grunnmur som skal graves fram, hvor dypt det er, grunnforholdene (leire, fjell, fyllmasse) og hvor lett det er å komme til med maskiner. Se prisguiden vår for hva som påvirker prisen, og hent inn tilbud fra lokale firma for å få et reelt tall for ditt hus.`,
    },
    {
      question: `Hvordan finner jeg et pålitelig dreneringsfirma i ${cityName}?`,
      answer: `Fyll ut skjemaet på denne siden for å motta uforpliktende tilbud fra flere dreneringsfirmaer som jobber i ${cityName}, slik at du kan sammenligne priser og løsninger.`,
    },
    {
      question: `Hvor lang tid tar en dreneringsjobb i ${cityName}?`,
      answer:
        "Det avhenger av hvor mange meter som skal graves, grunnforholdene og været. Be firmaet om en tidsplan med oppstart og ferdigdato i tilbudet.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-900">
        Ofte stilte spørsmål om drenering i {cityName}
      </h2>
      <div className="space-y-4 max-w-3xl">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="border border-brand-100 rounded-lg p-4"
          >
            <summary className="cursor-pointer text-lg font-semibold text-brand-700">
              {faq.question}
            </summary>
            <p className="mt-2 text-brand-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
