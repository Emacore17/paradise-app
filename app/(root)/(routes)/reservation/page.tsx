import Reservations from "./components/Reservations";

const TicketsPage = async () => {
  return (
    <main className="w-full min-h-[calc(100vh-5rem)]">
      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-4/5 mx-auto py-16 px-8 md:px-0 space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-center md:text-left">
          My Tickets
        </h1>
        <Reservations />
      </div>
    </main>
  );
};

export default TicketsPage;
