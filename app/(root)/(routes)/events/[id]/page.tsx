import { bungee } from "@/app/layout";
import AperitiveCard from "@/components/AperitiveCard";
import EventInfoBadge from "@/components/EventInfoBadge";
import TicketFormModal from "@/components/TicketFormModal";
import { manageDate } from "@/lib/manageDate";
import { cn } from "@/lib/utils";
import { getEventDetails } from "@/server/api/event/getEventDetails";
import { CheckCircle, Martini, Ticket, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Params = {
  id: number;
};
interface IEventPageProps {
  params: Params;
  searchParams: Record<string, string> | null | undefined;
}
const EventPage = async ({ params, searchParams }: IEventPageProps) => {
  const { data } = await getEventDetails(params.id);
  if (!data) {
    return <div>{params.id}</div>;
  }

  const showTicketModal = searchParams?.ticketModal;

  const { day, longMonth, year, time } = manageDate(data.date);
  return (
    <main className="w-full min-h-[calc(100vh-6rem)">
      {/* COVER IMAGE */}
      <div className="w-full h-[50vh] bg-gradient-to-b from-secondary from-65% to-background flex justify-center items-center sm:py-4">
        <div className="relative h-full w-full sm:w-2/3 md:w-3/5 lg:w-2/3 xl:w-2/5 sm:rounded-lg">
          <Image
            src={data.coverImage}
            alt="sfondo"
            fill
            className="absolute w-full h-full object-cover object-center sm:rounded-lg"
          />
          <div className="absolute w-full bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background sm:hidden"></div>
        </div>
      </div>
      <div className="w-full sm:w-2/3 md:w-3/5 lg:w-2/3 xl:w-2/5 min-h-[calc(50vh-5rem)] mx-auto p-4 flex flex-col gap-14">
        {/* TITLE */}
        <div>
          <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold uppercase">
            {data.name}
          </h1>
        </div>
        {/* DESCRIPTION  */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <EventInfoBadge
              Icon="calendar"
              info="Data inizio"
              label={`${day} ${longMonth}, ${year} ${time}`}
            />
            <EventInfoBadge
              Icon="shirt"
              info="Dresscode"
              label={data.dresscode}
            />
          </div>
          <div className="bg-secondary rounded-lg p-4 xl:p-6 text-xs md:text-sm lg:text-base space-y-2 font-medium">
            {data.description.long?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
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
            {data.includedDrinks.map((drink, index) => (
              <li key={index}>{drink}</li>
            ))}
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
          {data.isAperitivoIncluded ? (
            <div className="space-y-10">
              <div className="flex items-center gap-2">
                <p>Aperitive is included </p>
                <CheckCircle className="text-green-500 " />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                {data.includedDishes &&
                  data.includedDishes.map((dish, index) => (
                    <AperitiveCard dish={dish} key={index} />
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <p>Nessun apertitivo</p>
              <XCircle className="text-red-500" />
            </div>
          )}
        </div>
        {/* BUTTON PRICE  */}
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-evenly">
          <div>
            <p className="font-semibold text-primary text-xl uppercase">
              price
            </p>
            <p className={cn("font-bold text-6xl", bungee.className)}>
              {data.price}$
            </p>
          </div>
          <Link href={`/events/${params.id}?ticketModal=true`}>
            <button
              className={cn(
                "text-4xl px-6 py-2 bg-gradient-to-r from-primary to-rose-500 rounded-lg flex items-center gap-2 hover:to-primary hover:translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
                bungee.className
              )}
            >
              BUY NOW <Ticket className="w-8 h-8" />
            </button>
          </Link>
        </div>

        {showTicketModal && (
          <TicketFormModal
            coverImage={data.coverImage}
            dateTime={data.date}
            eventId={data.id}
            price={data.price}
            eventName={data.name}
          ></TicketFormModal>
        )}
      </div>
    </main>
  );
};

export default EventPage;
