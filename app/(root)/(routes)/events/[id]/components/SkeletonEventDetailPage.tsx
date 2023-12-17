import { Calendar, Martini, Shirt, Ticket } from "lucide-react";
import React from "react";

const SkeletonEventDetailPage = () => {
  return (
    <main className="w-full min-h-[calc(100vh-5rem)">
      {/* COVER IMAGE */}
      <div className="w-full h-[50vh] bg-gradient-to-b from-secondary from-65% to-background flex justify-center items-center sm:py-4">
        <div className="relative h-full w-full sm:w-2/3 md:w-3/5 lg:w-2/3 xl:w-2/5 sm:rounded-lg bg-slate-500/50 animate-pulse">
          <div className="absolute w-full bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background sm:hidden"></div>
        </div>
      </div>
      <div className="w-full sm:w-2/3 md:w-3/5 lg:w-2/3 xl:w-2/5 min-h-[calc(50vh-5rem)] mx-auto p-4 flex flex-col gap-14">
        {/* TITLE */}
        <div className="space-y-2 flex flex-col items-center">
          <div className="w-full rounded-lg bg-slate-500/50 animate-pulse h-10" />
          <div className="w-1/2 rounded-lg bg-slate-500/50 animate-pulse h-10" />
        </div>
        {/* DESCRIPTION  */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 md:gap-4 max-w-[9rem] md:max-w-none">
              <div className="shrink-0 relative rounded-full w-8 h-8 md:w-10 md:h-10 border-primary border-2 bg-primary/50 hover:bg-primary/75 hover:cursor-pointer flex items-center justify-center">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-32 h-6 rounded-lg bg-slate-500/50 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 md:gap-4 max-w-[9rem] md:max-w-none">
              <div className="shrink-0 relative rounded-full w-8 h-8 md:w-10 md:h-10 border-primary border-2 bg-primary/50 hover:bg-primary/75 hover:cursor-pointer flex items-center justify-center">
                <Shirt className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-56 h-6 rounded-lg bg-slate-500/50 animate-pulse" />
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-4 xl:p-6 text-xs md:text-sm lg:text-base space-y-2 font-medium">
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
            <div className="bg-slate-500/50 animate-pulse h-4 rounded-lg w-full"></div>
          </div>
        </div>
        {/* DRINKS INCLUDED */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-2xl font-semibold uppercase text-primary">
              Drinks included
            </p>
            <Martini className="w-6 h-6 text-primary" />
          </div>
          <ul className="space-y-2 list-disc px-6 md:text-lg md:flex md:space-y-0 md:list-none md:px-0 md:items-center md:gap-4">
            <li className="bg-slate-500/50 animate-pulse rounded-lg h-6 w-32"></li>
            <li className="bg-slate-500/50 animate-pulse rounded-lg h-6 w-32"></li>
            <li className="bg-slate-500/50 animate-pulse rounded-lg h-6 w-32"></li>
          </ul>
        </div>
        {/* APERITIVE INCLUDED */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-2xl font-semibold uppercase text-primary">
              APERITIVE INCLUDED
            </p>
            <Martini className="w-6 h-6 text-primary" />
          </div>
          <p>asfsafasfa</p>
        </div>
        {/* BUTTON PRICE  */}
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-evenly">
          <div>
            <p className="font-semibold text-primary text-xl uppercase">
              price
            </p>
            <div className="w-40 h-24 bg-slate-500/50 animate-pulse rounded-lg" />
          </div>

          <div className="text-4xl px-6 py-2 bg-gradient-to-r from-primary to-rose-500 rounded-lg flex items-center gap-2 hover:to-primary hover:translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="w-40  h-10 bg-slate-500/50 animate-pulse rounded-lg"></div><Ticket className="w-8 h-8" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkeletonEventDetailPage;
