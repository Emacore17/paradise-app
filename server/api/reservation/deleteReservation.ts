import { IErrorResponse } from "../error.type";

interface IDeleteReservationResponse {
  data: string | null;
  error: IErrorResponse | null;
}

export const deleteReservation = async (
  reservationId: number,
  token: string
): Promise<IDeleteReservationResponse> => {
  try {
    const response: Response = await fetch(
      `${process.env.NEXT_PUBLIC_RESERVATION_API_URL}/delete/${reservationId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
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
