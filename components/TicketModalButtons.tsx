import { AlertTriangle, Loader2 } from "lucide-react";

interface ITicketModalButtonsProps {
  responseError: string | null;
  isSubmitting: boolean;
}
const TicketModalButtons = ({
  responseError,
  isSubmitting,
}: ITicketModalButtonsProps) => {
  if (responseError) {
    return (
      <div className="flex items-center gap-2 mt-1">
        <AlertTriangle className="text-yellow-500 w-5 h-5" />
        <p className="text-yellow-500 text-sm">{responseError}</p>
      </div>
    );
  }

  if (isSubmitting) {
    return <Loader2 className="animate-spin text-primary" strokeWidth={4} />;
  }

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="py-2 px-6 bg-gradient-to-r from-primary to-rose-500 text-xl rounded-lg font-black hover:to-primary"
    >
      BUY
    </button>
  );
};

export default TicketModalButtons;
