import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "../../ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
  text: string;
  loadingText?: string;
}

export default function SubmitButton({
  isSubmitting,
  text,
  loadingText = "Sender...",
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full bg-brand-500 hover:bg-brand-600 text-white"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <Loader2 className="animate-spin mr-2 h-5 w-5" />
          {loadingText}
        </span>
      ) : (
        <span className="flex items-center justify-center">
          <CheckCircle2 className="mr-2 h-5 w-5" />
          {text}
        </span>
      )}
    </Button>
  );
}
