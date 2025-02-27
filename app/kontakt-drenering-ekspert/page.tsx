import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";

export default function KontaktEkspert() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand-900">
        Kontakt en Dreneringsekspert
      </h1>
      <p className="mb-6 text-brand-700">
        Har du spørsmål om drenering eller trenger profesjonell hjelp? Fyll ut
        skjemaet under, så vil en av våre eksperter kontakte deg snarest.
      </p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name" className="text-brand-700">
            Navn
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Ditt fulle navn"
            className="border-brand-300 focus:border-brand-500"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="text-brand-700">
            E-post
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="din@epost.no"
            className="border-brand-300 focus:border-brand-500"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone" className="text-brand-700">
            Telefon
          </Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Ditt telefonnummer"
            className="border-brand-300 focus:border-brand-500"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="message" className="text-brand-700">
            Beskrivelse av prosjektet
          </Label>
          <Textarea
            id="message"
            placeholder="Fortell oss om ditt dreneringsprosjekt eller problem"
            className="border-brand-300 focus:border-brand-500"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-brand-500 hover:bg-brand-600 text-white"
        >
          Send forespørsel
        </Button>
      </form>
    </div>
  );
}
