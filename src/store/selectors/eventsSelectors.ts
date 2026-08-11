import { isToday } from "date-fns-jalali";
import type { RootState } from "../store";

export function selectTodayEvents(state: RootState){
    return state.events.items.filter((e)=> e.date && isToday(new Date(e.date)))
    .sort((a,b) => a.startTime.localeCompare(b.startTime))
}