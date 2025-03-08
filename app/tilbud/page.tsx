import WizardForm from "@/src/components/WizardForm";

export default function TilbudPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 py-4 px-2 sm:px-4">
      <div className="w-full max-w-2xl bg-white py-6 px-2 sm:px-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Få ditt tilbud på drenering
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Fyll ut skjemaet for å få gratis og uforpliktende tilbud fra
          profesjonelle dreneringsfirmaer.
        </p>
        <WizardForm />
      </div>
    </main>
  );
}
