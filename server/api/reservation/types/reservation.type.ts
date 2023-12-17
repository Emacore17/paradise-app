export interface ReservationData {
  eventId: number;
  eventDate: string;
  eventName: string;
  firstName: string;
  lastName: string;
}

export interface IReservation {
  id: number;
  eventId: number;
  eventDate: string;
  userId: string;
  eventName: string;
  firstName: string;
  lastName: string;
  coverImage: string;
}
