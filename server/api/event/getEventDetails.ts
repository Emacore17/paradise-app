import { IEventDetail } from "@/server/api/event/types/event.type";
import { IErrorResponse } from "../error.type";

interface IEventDetailsResponse {
  data: IEventDetail | null;
  error: IErrorResponse | null;
}

export const getEventDetails = async (
  id: number
): Promise<IEventDetailsResponse> => {
  try {
    const response: Response = await fetch(
      `${process.env.EVENTS_API_URL}/${id}`
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
