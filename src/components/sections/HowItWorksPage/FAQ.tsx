interface FAQ {
  question: string;
  answer: string;
}

export default function FaqHowItWorks({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-text">
        Ofte Stilte Spørsmål
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
              <p className="text-text-subtle">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
