import { IErrorResponse } from "../error.type";
import { IReservation } from "./types/reservation.type";

interface IEventDetailsResponse {
  data: IReservation[] | null;
  error: IErrorResponse | null;
}

export const getReservations = async (
  token: string
): Promise<IEventDetailsResponse> => {
  const { signal } = new AbortController();
  try {
    const response: Response = await fetch(
      `${process.env.NEXT_PUBLIC_RESERVATION_API_URL}/all`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        signal,
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: { message: error.message } };
    }
    return { data: null, error: { message: "An unknown error occurred" } };
  }
};
