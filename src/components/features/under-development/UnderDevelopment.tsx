"use client";

import Link from "next/link";
import { Construction, Home, ArrowLeft } from "lucide-react";
import { Button } from "../../ui/button";

interface UnderConstructionProps {
  pageName?: string;
}

export default function UnderConstruction({
  pageName = "Denne siden",
}: UnderConstructionProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-20 bg-blue-50/50">
      <div className="max-w-md w-full mx-auto text-center px-4">
        <div className="bg-white rounded-xl shadow-sm p-8 border border-blue-100">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Construction className="h-12 w-12 text-blue-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2 text-gray-900">
            Vi jobber fortsatt med denne siden
          </h1>

          <p className="text-gray-600 mb-6">
            {pageName} er under utvikling og vil være tilgjengelig snart. Takk
            for din tålmodighet mens vi forbedrer nettstedet vårt.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              // asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Gå til forsiden
              </Link>
            </Button>

            <Button
              // onClick={() => window.history.back()}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Gå tilbake
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
