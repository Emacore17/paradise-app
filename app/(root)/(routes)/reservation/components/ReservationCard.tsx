"use client";
import { IReservation } from "@/server/api/reservation/types/reservation.type";
import Image from "next/image";
import React, { useState } from "react";
import ReservationCardButtons from "./ReservationCardButtons";
import { manageDate } from "@/lib/manageDate";

interface IReservationCard {
  reservation: IReservation;
}
const ReservationCard = ({ reservation }: IReservationCard) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { longDate,time } = manageDate(reservation.eventDate)

  return (
    <div className="w-full h-[34rem] sm:h-64 bg-secondary rounded-lg flex flex-col sm:flex-row">
      <div className="w-full relative sm:w-1/3 shrink-0 rounded-t-lg h-1/2 sm:h-full sm:rounded-l-lg sm:rounded-e-none">
        <Image
          src={reservation.coverImage}
          fill
          alt={reservation.eventName}
          className="absolute w-full h-full rounded-t-lg sm:rounded-l-lg sm:rounded-e-none object-cover object-center"
        />
      </div>
      <div className="h-1/2 sm:h-full sm:w-full p-4 space-y-6 relative">
        <p className="font-bold text-lg sm:text-xl md:text-2xl line-clamp-1">
          {reservation.eventName}
        </p>
        <ul className="space-y-2 text-sm md:text-base">
          <li className="flex">
            <div className="w-24 font-semibold text-primary">Name:</div>
            <span>{reservation.firstName}</span>
          </li>
          <li className="flex">
            <div className="w-24 font-semibold text-primary">Surname:</div>
            <span>{reservation.lastName}</span>
          </li>
          <li className="flex">
            <div className="w-24 font-semibold text-primary">Start Time:</div>
            <span>{longDate} {time}</span>
          </li>
        </ul>
        <div className="w-full flex gap-4 justify-end items-center absolute bottom-4 left-0 px-4">
          <ReservationCardButtons
            showConfirm={showConfirm}
            reservationId={reservation.id}
            setShowConfirm={setShowConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
