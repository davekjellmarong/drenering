export const metadata = {
  title: "Vårt Team | Dreneringsekspertene bak tjenesten",
  description:
    "Bli kjent med teamet vårt. Møt ekspertene som hjelper deg med dreneringsløsninger.",
};

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-brand-900">Vårt Team</h1>
      <p className="text-lg text-brand-700 mt-4">
        Møt teamet bak dreneringstjenesten.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Example team member */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Ola Nordmann</h3>
          <p className="text-brand-700">Dreneringsekspert</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Kari Hansen</h3>
          <p className="text-brand-700">Prosjektleder</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Per Olsen</h3>
          <p className="text-brand-700">Teknisk rådgiver</p>
        </div>
      </div>
    </div>
  );
}
