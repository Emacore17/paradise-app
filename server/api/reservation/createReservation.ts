import { ReservationData } from "./types/reservation.type";

type Result = "success" | "failed";

interface IEventsResponse {
  result: Result;
  error: string | null;
}

export const createReservation = async (
  reservationData: ReservationData,
  token: string
): Promise<IEventsResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RESERVATION_API_URL}/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reservationData),
      }
    );

    if (response.status === 409) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Ti sei già registrato per questo evento."
      );
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Errore nella richiesta al server");
    }

    return { result: "success", error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { result: "failed", error: error.message };
    }
    return {
      result: "failed",
      error: "An unknown error occurred",
    };
  }
};
