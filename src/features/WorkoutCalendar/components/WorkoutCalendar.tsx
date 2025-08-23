import InfoSvg from 'assets/info.svg?react';
import { getDaysTrained } from '../api/get-days-workedout';
import { useEffect, useState } from 'react';

type DayEntry = {
  id: number;
  date: string;
  restDay: boolean;
  attended: boolean;
};

//FIXME: Arreglar la organizacion de dias de la semana
//TODO: CAMBIAR para recoger el id usuario de otra parte
const WorkoutCalendar = () => {
  const [calendarEntries, setCalendarEntries] = useState<DayEntry[]>([]);

  useEffect(() => {
    let daysOfYear: DayEntry[] = [];
    getDaysTrained(1).then(response => {
      let entries = response.data;
      for (let index = 0; index < entries.length; index++) {
        const entry = entries[index];
        daysOfYear.push({ id: index, date: entry, attended: true, restDay: false });
      }
      setCalendarEntries(daysOfYear);
    });
  }, []);

  //TODO: remove mock
  // daysOfYear = [
  //   { id: 1, date: '01/01/2025', attended: true, restDay: false },
  //   { id: 2, date: '02/01/2025', attended: true, restDay: false },
  //   { id: 3, date: '03/01/2025', attended: false, restDay: true },
  //   { id: 4, date: '04/01/2025', attended: true, restDay: true },
  //   { id: 5, date: '05/01/2025', attended: true, restDay: false },
  //   { id: 6, date: '06/01/2025', attended: false, restDay: false },
  //   { id: 7, date: '07/01/2025', attended: false, restDay: true },
  //   { id: 8, date: '08/01/2025', attended: true, restDay: false },
  //   { id: 9, date: '09/01/2025', attended: true, restDay: false },
  //   { id: 10, date: '10/01/2025', attended: true, restDay: false },
  //   { id: 11, date: '11/01/2025', attended: false, restDay: true },
  //   { id: 12, date: '12/01/2025', attended: true, restDay: false },
  //   { id: 13, date: '13/01/2025', attended: true, restDay: false },
  //   { id: 14, date: '14/01/2025', attended: true, restDay: true },
  //   { id: 15, date: '15/01/2025', attended: false, restDay: false },
  // ];
  let daysTrainedCount = calendarEntries.filter(x => x.attended == true).length;
  return (
    <div className="flex flex-col ">
      <h2 className="text-white ml-2 text-sm">
        {daysTrainedCount} Entrenamientos en el ultimo año
      </h2>
      <CalendarGrid daysOfYear={calendarEntries} />
    </div>
  );
};

export default WorkoutCalendar;

export const CalendarGrid = ({ daysOfYear }: { daysOfYear: DayEntry[] }) => {
  return (
    <div className="border-1 border-white rounded-md p-1">
      <div className="grid grid-flow-col grid-rows-7 justify-start">
        <CalendarEntryArray daysOfYear={daysOfYear}></CalendarEntryArray>
      </div>
      <p className="text-white text-sm text-end"></p>
      <div className="size-5 w-full flex justify-end">
        <InfoSvg className="stroke-white" />
      </div>
    </div>
  );
};

export const CalendarEntry = ({ day }: { day: DayEntry }) => {
  const getColor = () => {
    if (day.restDay && day.attended) return 'bg-amber-400';
    if (day.restDay) return 'bg-blue-400';
    if (day.attended) return 'bg-green-400';
    return 'bg-red-400';
  };
  return <div className={`size-2.5 m-0.5 rounded-xs bg-red-400 ${getColor()}`}></div>;
};

export const CalendarEntryArray = ({ daysOfYear }: { daysOfYear: DayEntry[] }) => {
  return daysOfYear.map(entry => <CalendarEntry key={entry.id} day={entry} />);
};
