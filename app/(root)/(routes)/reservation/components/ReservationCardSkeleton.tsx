const ReservationCardSkeleton = () => {
  return (
    <div className="w-full h-[34rem] sm:h-64 bg-secondary rounded-lg flex flex-col sm:flex-row">
      <div className="w-full relative sm:w-1/3 shrink-0 rounded-t-lg h-1/2 sm:h-full sm:rounded-l-lg sm:rounded-e-none">
        <div className="bg-slate-500/30 animate-pulse w-full h-full rounded-t-lg sm:rounded-l-lg sm:rounded-e-none"></div>
      </div>
      <div className="h-1/2 sm:h-full sm:w-full p-4 space-y-6 relative">
        <div className="h-6 w-48 bg-slate-500/30 animate-pulse rounded-lg"></div>
        <ul className="space-y-2 text-sm md:text-base">
          <li className="flex items-center">
            <div className="w-24 font-semibold text-primary">Name:</div>
            <div className="bg-slate-500/30 animate-pulse rounded-lg w-20 h-4" />
          </li>
          <li className="flex items-center">
            <div className="w-24 font-semibold text-primary">Surname:</div>
            <div className="bg-slate-500/30 animate-pulse rounded-lg w-20 h-4" />
          </li>
          <li className="flex items-center">
            <div className="w-24 font-semibold text-primary">Start Time:</div>
            <div className="bg-slate-500/30 animate-pulse rounded-lg w-20 h-4" />
          </li>
        </ul>
        <div className="w-full flex gap-4 justify-end items-center absolute bottom-4 left-0 px-4">
            <div className="w-10 h-10 rounded-lg bg-slate-500/30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCardSkeleton;
