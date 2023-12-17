import { deleteReservation } from "@/server/api/reservation/deleteReservation";
import { getReservations } from "@/server/api/reservation/getReservations";
import { IReservation } from "@/server/api/reservation/types/reservation.type";
import { create } from "zustand";

interface ReservationStoreState {
  reservations: IReservation[];
  loading: boolean;
  removeLoading: boolean;
  fetchReservations: (token: string) => Promise<void>;
  removeReservation: (reservationId: number, token: string) => Promise<void>;
}

export const useReservationStore = create<ReservationStoreState>((set) => ({
  reservations: [],
  loading: true,
  removeLoading: false,
  fetchReservations: async (token) => {
    set({ loading: true });
    try {
      const response = await getReservations(token);
      if (!response.data) {
        throw new Error(response.error?.message);
      }

      set({ reservations: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
  removeReservation: async (reservationId, token) => {
    set({ removeLoading: true });
    try {
      const response = await deleteReservation(reservationId, token);

      if (!response.data) {
        throw new Error(response.error?.message);
      }

      set((state) => ({
        reservations: state.reservations.filter(
          (res) => res.id !== reservationId
        ),
        removeLoading: false,
      }));
    } catch (error) {
      console.error("Error removing reservation:", error);
      set({ removeLoading: false });
    }
  },
}));
