import { IEvent } from "@/server/api/event/types/event.type";
import { IErrorResponse } from "../error.type";

interface IEventsResponse {
  data: IEvent[] | null;
  error: IErrorResponse | null;
}

export const getEvents = async (): Promise<IEventsResponse> => {
  try {
    const response: Response = await fetch(
      `${process.env.EVENTS_API_URL}`
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
