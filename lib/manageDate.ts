import { addMinutes, format, parseISO } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import { it } from "date-fns/locale";

export const manageDate = (date: string, timeZone: string = "Europe/Rome") => {
  // Converti la stringa ISO in un oggetto Date nel fuso orario UTC
  const dateUTC = zonedTimeToUtc(date, timeZone);

  // Converti l'oggetto Date UTC nel fuso orario desiderato
  const dateInTimeZone = utcToZonedTime(dateUTC, timeZone);

  // Formatta la data e l'ora
  const longDate = format(dateInTimeZone, "d MMMM yyyy", { locale: it });
  const time = format(dateInTimeZone, "HH:mm", { locale: it });
  const shortDate = format(dateInTimeZone, "d MMM yyyy", {
    locale: it,
  });
  const longMonth = format(dateInTimeZone, "MMMM", { locale: it });
  const shortMonth = format(dateInTimeZone, "MMM", { locale: it });
  const year = format(dateInTimeZone, "yyyy", { locale: it });
  const day = format(dateInTimeZone, "d", { locale: it });

  return { longDate, shortDate, time, longMonth, shortMonth, day, year };
};

export const generateTimeSlots = (
  date: string,
  increments = 5,
  minutesToAdd = 15,
  timeZone: string = "Europe/Rome"
) => {
  const startDate = parseISO(date);
  let timeSlots = [];

  for (let i = 0; i <= increments; i++) {
    const d = addMinutes(startDate, minutesToAdd * i);
    // Assicurati che la data sia nel fuso orario corretto
    const dateUTC = zonedTimeToUtc(d, timeZone);
    const dateInTimeZone = utcToZonedTime(dateUTC, timeZone);

    // Formatta la data nel fuso orario desiderato, mantenendo il fuso orario
    const formattedDate = format(dateInTimeZone, "yyyy-MM-dd'T'HH:mm", {
      locale: it,
    });
    timeSlots.push({
      date: formattedDate,
      time: format(d, "HH:mm", { locale: it }),
    });
  }

  return timeSlots;
};
