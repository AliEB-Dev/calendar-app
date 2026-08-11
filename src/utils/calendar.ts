import {
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isToday,
  isSameMonth,
  addDays,
} from "date-fns-jalali";

export interface CalendarDay {
  date: Date;
  day: string;
  weekday: string;
  month: string;
  isToday: boolean;
  isCurrentMonth: boolean;
}

export function getCurrentWeek(date:Date = new Date()): CalendarDay[]{
    const start = startOfWeek(date,{
        weekStartsOn:6
    })

    const end = endOfWeek(date,{
        weekStartsOn:6
    })

    
  return eachDayOfInterval({
    start,
    end,
  }).map((day) => ({
    date: day,
    day: format(day, "d"),
    weekday: format(day, "EEE"),
    month: format(day, "MMMM"),
    isToday: isToday(day),
    isCurrentMonth: isSameMonth(day, date),
  }));
}

export function getTodayString(date: Date = new Date()){
    return format(date,"d MMMM yyyy")
}

export function getCurrentMonth(date: Date = new Date()) {
  return format(date, "MMMM");
}

export function getYearsString(date: Date = new Date()):string{
    return format(date,"yyyy")
}

export function getMonthCalendar(date: Date = new Date()): CalendarDay[]{
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);

    const calendarStart = startOfWeek(monthStart,{
        weekStartsOn:6
    })
    const calendarEnd = endOfWeek(monthEnd, {
        weekStartsOn: 6,
    });

    const days = eachDayOfInterval({
        start: calendarStart,
        end: calendarEnd,
    });


    while (days.length < 35 ){
        days.push(addDays(days[days.length - 1],1))
    }

    return days.map((day)=> ({
        date:day,
        day : format(day, 'd'),
        weekday : format(day,'EEE'),
        month: format(day,'MMMM'),
        isToday:isToday(day),
        isCurrentMonth: isSameMonth(day,date)
    }))
}


export function nextMonth(date: Date): Date {
  return addMonths(date, 1);
}

export function previousMonth(date: Date): Date {
  return subMonths(date, 1);
}
export const weekDays = [
    "ش",
  "ی",
  "د",
  "س",
  "چ",
  "پ",
  "ج",
];
