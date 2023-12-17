"use client";
import { cn } from "@/lib/utils";
import { Calendar, Shirt } from "lucide-react";
import { useState } from "react";

type Icons = "calendar" | "shirt";

interface IEventInfoBadgeProps {
  Icon: Icons;
  label: string;
  info: string;
}

const EventInfoBadge = ({ Icon, label, info }: IEventInfoBadgeProps) => {
  const iconMapping = {
    shirt: Shirt,
    calendar: Calendar,
  };
  const LucideIcon = iconMapping[Icon];
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => setIsHover(true);

  const handleMouseOut = () => setIsHover(false);

  return (
    <div className="flex items-center gap-2 md:gap-4 max-w-[9rem] md:max-w-none">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="shrink-0 relative rounded-full w-8 h-8 md:w-10 md:h-10 border-primary border-2 bg-primary/50 hover:bg-primary/75 hover:cursor-pointer flex items-center justify-center"
      >
        <LucideIcon className="w-4 h-4 md:w-5 md:h-5" />
        <div
          className={cn(
            "absolute bottom-10 bg-black rounded-lg items-center justify-center p-4 text-xs font-medium",
            isHover ? "flex" : "hidden"
          )}
        >
          <p>{info}</p>
          <div className="absolute -bottom-[0.7rem] w-0 h-0 border-l-[0.5rem] border-l-transparent border-t-[0.8rem] border-t-black border-r-[0.5rem] border-r-transparent"></div>
        </div>
      </div>
      <p className="font-medium text-xs md:text-sm">{label}</p>
    </div>
  );
};

export default EventInfoBadge;
