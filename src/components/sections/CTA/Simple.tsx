import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function SimpleCta() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6 text-text">
        Klar til å få løst dreneringsproblemet ditt?
      </h2>
      <Button asChild size="lg">
        <Link href="/tilbud">Få Gratis Tilbud Nå</Link>
      </Button>
    </div>
  );
}
