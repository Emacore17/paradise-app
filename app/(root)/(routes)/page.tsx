import { bungee } from "@/app/layout";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { getEvents } from "@/server/api/event/getEvents";

const HomePage = async () => {
  const { data, error } = await getEvents();
  return (
    <>
      <Header />
      <main className="w-full">
        <div className="w-5/6 xs:w-2/3 sm:w-1/2 md:w-[90%] lg:w-2/3 2xl:w-1/2 mx-auto flex flex-col">
          <section id="upcoming-events" className="space-y-20 py-32">
            <div className="md:space-y-2">
              <p className="text-primary text-xl xl:text-2xl font-bold text-center">
                Our Events
              </p>
              <h2
                className={cn(
                  "text-5xl xl:text-6xl text-center",
                  bungee.className
                )}
              >
                UPCOMING EVENTS
              </h2>
            </div>
              <div className="w-full flex flex-col gap-5">
                {data &&
                  data.map((item, index) => (
                    <EventCard
                      key={item.id}
                      indice={index}
                      eventResponse={item}
                    ></EventCard>
                  ))}
                {error && (
                  <p className="uppercase text-center font-semibold text-red-500">
                    {error.message}
                  </p>
                )}
              </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
