import Image from "next/image";

import { bungee } from "@/app/layout";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
//ICONS
import { Calendar, Clock } from "lucide-react";

interface IEventCardProps {
  time: string;
  date: string;
  name: string;
  coverImage: string;
  price: string;
}

const EventCard = () => {
  return (
    <div className="rounded-lg flex flex-col md:flex-row md:p-6 bg-secondary">
      <div className="relative w-full h-60 md:w-52 md:h-52 xl:w-60 xl:h-60 bg-black rounded-t-lg md:rounded-lg shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="s"
          fill
          className="absolute object-cover object-center rounded-t-lg md:rounded-lg opacity-75"
        />
        <div className="bg-primary absolute bottom-2 right-2 py-1 px-2 font-semibold md:hidden">
          8:00 AM
        </div>
      </div>
      <div className="flex w-full items-center md:flex-col md:items-start p-4 gap-4 md:gap-0 md:justify-between">
        <div className="w-11 md:hidden h-11 rounded-lg bg-white shrink-0 ">
          <div className="rounded-t-lg bg-primary h-4 text-xs font-semibold flex justify-center items-center">
            <p>Nov</p>
          </div>
          <div className="rounded-b-lg h-6 text-sm text-secondary font-bold flex justify-center items-center">
            1
          </div>
        </div>
        <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-6 line-clamp-2">
          MARILYN MANSON MUSIC HOUR TURIN CONCERT
        </p>
        <div className="hidden md:flex flex-col gap-2 xl:text-lg">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-primary font-bold">Date</p>
            </div>
            <p>12 Novembre 2023</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5 text-primary" />
              <p className="text-primary font-bold">Time</p>
            </div>
            <p>8:00 AM</p>
          </div>
        </div>
      </div>
      <div className="flex items-center md:flex-col justify-between md:items-end gap-4 p-4 md:py-4 md:p-0">
        <p className={cn("text-3xl md:text-4xl", bungee.className)}>20$</p>
        <Button label="BUY TICKETS" font="bungee" />
      </div>
    </div>
  );
};

export default EventCard;
