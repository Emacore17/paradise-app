import { bungee } from "@/app/layout";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        <div className="w-5/6 xs:w-2/3 sm:w-1/2 md:w-[95%] lg:w-5/6 xl:w-2/3 mx-auto flex flex-col">
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
            <div className="w-full flex flex-col gap-10">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
