import { Loader2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useReservationStore } from "@/store/reservationStore";
import { useAuth } from "@clerk/nextjs";

interface IReservationCardButtons {
  showConfirm: boolean;
  reservationId: number;
  setShowConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReservationCardButtons = ({
  showConfirm,
  reservationId,
  setShowConfirm,
}: IReservationCardButtons) => {
  const { removeReservation, removeLoading, fetchReservations } =
    useReservationStore();
  const router = useRouter();
  const { getToken } = useAuth();

  const handleRemove = async (reservationId: number) => {
    const token = await getToken();
    if (token) {
      await removeReservation(reservationId, token);
      fetchReservations(token);
    } else {
      return;
    }
  };

  if (removeLoading) {
    return <Loader2 className="animate-spin text-primary" strokeWidth={4} />;
  }

  if (showConfirm) {
    return (
      <>
        <button
          onClick={() => handleRemove(reservationId)}
          className="border-2 border-white bg-transparent rounded-lg p-2 font-semibold hover:bg-red-600  hover:border-red-500 transition-all duration-300"
        >
          Conferma
        </button>
        <button
          onClick={() => setShowConfirm(!showConfirm)}
          className="border-2 border-white bg-white text-black rounded-lg p-2 font-semibold transition-all duration-300"
        >
          Annulla
        </button>
      </>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(!showConfirm)}
      className="border-2 border-red-500 bg-red-600 rounded-lg p-2 text-lg font-semibold hover:bg-red-700 transition-all duration-300"
    >
      <Trash />
    </button>
  );
};

export default ReservationCardButtons;
