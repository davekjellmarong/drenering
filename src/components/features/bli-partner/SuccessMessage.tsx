"use client";

import { Button } from "@/src/components/ui/button";
import { Check } from "lucide-react";

export function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-100 text-success-600 mb-4">
        <Check className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Takk for din interesse!</h3>
      <p className="text-muted-foreground mb-6">
        Vi har mottatt din forespørsel. En representant vil kontakte deg.
      </p>
      <Button variant="outline" onClick={onReset}>
        Send et nytt skjema
      </Button>
    </div>
  );
}
