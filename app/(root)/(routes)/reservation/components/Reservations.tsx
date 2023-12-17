"use client";
import ReservationCard from "@/app/(root)/(routes)/reservation/components/ReservationCard";
import { useReservationStore } from "@/store/reservationStore";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import ReservationCardSkeleton from "./ReservationCardSkeleton";
import Link from "next/link";

const Reservations = () => {
  const { fetchReservations, reservations, loading } = useReservationStore();
  const { getToken } = useAuth();
  useEffect(() => {
    (async () => {
      const token = await getToken();
      token && fetchReservations(token);
    })();
  }, [fetchReservations, getToken]);
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
      {loading && <ReservationCardSkeleton />}
      {reservations.length === 0 && !loading && <p>No tickets. <Link href="/#upcoming-events" className="underline ml-2 text-primary font-bold">BUY NOW</Link></p>}
      {reservations &&
        reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
    </div>
  );
};

export default Reservations;
