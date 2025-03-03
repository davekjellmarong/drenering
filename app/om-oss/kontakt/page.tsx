export const metadata = {
  title: "Kontakt oss | Få hjelp med drenering",
  description:
    "Ta kontakt med oss for spørsmål om dreneringstjenester, priser, og løsninger. Vi er her for å hjelpe deg!",
};

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-brand-900">Kontakt oss</h1>
      <p className="text-lg text-brand-700 mt-4">
        Vi svarer på dine spørsmål om dreneringstjenester.
      </p>

      <div className="mt-8">
        <p className="text-brand-700">
          📞 Telefon: <strong>+47 123 456 789</strong>
        </p>
        <p className="text-brand-700">
          📧 E-post: <strong>kontakt@dreneringsexperten.no</strong>
        </p>
        <p className="text-brand-700">
          📍 Adresse: <strong>Oslo, Norge</strong>
        </p>
      </div>
    </div>
  );
}
