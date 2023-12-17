"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import UnauthorizedView from "@/components/UnauthorizedView"; // Assumo sia un componente interno
import { createReservation } from "@/server/api/reservation/createReservation";
import { generateTimeSlots } from "@/lib/manageDate";
import TicketModalButtons from "./TicketModalButtons";

const reservationSchema = z.object({
  eventDate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
      "Selezionare l'orario di prenotazione."
    ),
  eventId: z.number().min(1, "Event id is required."),
  eventName: z.string().min(1, "Event Name is required."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  coverImage: z.string().min(1, "Cover image is required"),
});

interface TicketFormModalProps {
  coverImage: string;
  dateTime: string;
  price: number;
  eventId: number;
  eventName: string;
}
const TicketFormModal = ({
  coverImage,
  dateTime,
  eventId,
  price,
  eventName,
}: TicketFormModalProps) => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState("");
  const [responseError, setResponseError] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      eventDate: "",
      eventId,
      eventName,
      coverImage,
      firstName: "",
      lastName: "",
    },
  });

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const { isLoaded, userId, getToken } = useAuth();
  const timeSlots = generateTimeSlots(dateTime);

  //CONTROLLO AUTORIZZAZIONE
  if (!isLoaded || !userId) {
    return <UnauthorizedView />;
  }

  const onSubmit = async (data: z.infer<typeof reservationSchema>) => {
    const token = await getToken();
    if (token) {
      const response = await createReservation(data, token);
      if (response.result === "failed") {
        setResponseError(response.error);
        reset();
        return;
      }

      reset();
      router.push("/reservation");
    } else {
      return;
    }
  };
  const handleSlotClick = (date: { date: string; time: string }) => {
    setSelectedTime(date.time);
    setValue("eventDate", date.date);
  };
  return (
    <div className="bg-black absolute top-0 left-0 w-full h-full z-20 bg-opacity-80 flex items-center justify-center p-4">
      <div className="w-full h-2/3 md:h-4/5 space-y-8 overflow-y-auto rounded-lg bg-background p-6 md:p-10 xs:w-5/6 sm:w-2/3 md:w-2/3 lg:w-2/5 xl:w-1/3">
        <div className="flex items-center justify-between">
          <p className="font-black text-2xl md:text-3xl xl:text-4xl">
            BUY TICKET
          </p>
          <button onClick={router.back}>
            <X className="w-10 h-10 hover:text-primary" strokeWidth={3} />
          </button>
        </div>
        <div className="relative w-full h-2/5 sm:h-1/2 rounded-lg">
          <Image
            src={coverImage}
            alt=""
            fill
            className="absolute top-0 left-0 h-full w-full object-cover object-center rounded-lg"
          ></Image>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="space-y-6 2xl:space-y-8">
            <div className="flex w-full justify-between gap-8">
              <div className="w-full space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm 2xl:text-xl font-black text-primary uppercase"
                >
                  First name:
                </label>
                <input
                  type="text"
                  className="w-full focus:ring-2 ring-primary bg-white rounded-sm outline-none px-2 py-1 2xl:py-2 text-slate-900 text-sm font-semibold"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <div className="flex items-center gap-2 mt-1">
                    <AlertTriangle className="text-yellow-500 w-5 h-5" />
                    <p className="text-yellow-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full space-y-2">
                <label
                  htmlFor="secondName"
                  className="text-sm 2xl:text-xl font-black text-primary uppercase"
                >
                  Last name:
                </label>
                <input
                  type="text"
                  className="w-full focus:ring-2 ring-primary bg-white rounded-sm outline-none px-2 py-1 2xl:py-2 text-slate-900 text-sm font-semibold"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <div className="flex items-center gap-2 mt-1">
                    <AlertTriangle className="text-yellow-500 w-5 h-5" />
                    <p className="text-yellow-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="font-black text-xl text-primary">SCEGLI UN ORARIO</p>
            <div className="flex flex-wrap gap-4">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSlotClick(time)}
                  className={cn(
                    "rounded-lg border-2 border-white w-14 h-8 md:w-16 md:h-10 flex justify-center items-center hover:text-black hover:bg-white transition-all duration-200",
                    selectedTime === time.time && "bg-white text-black"
                  )}
                >
                  {time.time}
                </button>
              ))}
            </div>
            {errors.eventDate && (
              <div className="flex items-center gap-2 mt-1">
                <AlertTriangle className="text-yellow-500 w-5 h-5" />
                <p className="text-yellow-500 text-sm">
                  {errors.eventDate.message}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold text-primary">PRICE:</p>
              <p className="font-black text-3xl">{price}$</p>
            </div>
            <TicketModalButtons isSubmitting={isSubmitting} responseError={responseError}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketFormModal;
