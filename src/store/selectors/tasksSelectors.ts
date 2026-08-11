import { isToday} from "date-fns-jalali";
import type { RootState } from "../store";

export function selectTodayTasks(state:RootState) {
    return state.tasks.items.filter((t)=> t.dueDate && isToday(new Date(t.dueDate)))
    .sort((a,b) => a.title.localeCompare(b.title))
}