interface CityFAQSectionProps {
  cityName: string;
}

export function CityFAQSection({ cityName }: CityFAQSectionProps) {
  const faqs = [
    {
      question: `Hvor mye koster drenering i ${cityName}?`,
      answer: `Prisen varierer med grunnforhold og tomtestørrelse, men for en typisk enebolig i ${cityName} ligger drenering vanligvis mellom 150 000 og 300 000 kr. Se vår prisguide for detaljer.`,
    },
    {
      question: `Hvordan finner jeg et pålitelig dreneringsfirma i ${cityName}?`,
      answer: `Fyll ut skjemaet på denne siden for å motta uforpliktende tilbud fra flere dreneringsfirmaer som jobber i ${cityName}, slik at du kan sammenligne priser og løsninger.`,
    },
    {
      question: `Hvor lang tid tar en dreneringsjobb i ${cityName}?`,
      answer:
        "De fleste dreneringsjobber for eneboliger tar 1-3 uker, avhengig av grunnforhold, tomtestørrelse og vær.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
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
