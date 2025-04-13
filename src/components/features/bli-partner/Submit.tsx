import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PartnerSubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? "Sender..." : "Send inn søknad"}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
