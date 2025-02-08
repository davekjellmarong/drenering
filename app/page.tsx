import WizardForm from "@/components/WizardForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Få ekspert dreneringsløsninger
          </h1>
          <p className="text-xl text-gray-600">
            Finn det perfekte dreneringssystemet for din eiendom
          </p>
        </div>
        <WizardForm />
      </div>
    </main>
  );
}
