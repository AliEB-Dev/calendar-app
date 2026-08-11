import { isToday as isTodayJalali, differenceInCalendarDays } from "date-fns-jalali"
import type { RootState } from "../store"


function isToday(dateStr:string):boolean {
    if (!dateStr) return false
    return isTodayJalali(new Date(dateStr))
}

function isWithinLast7Days(isDate:string): boolean {
    const diff = differenceInCalendarDays(new Date(),new Date(isDate))
    return diff >= 0 && diff <= 7
}

export function selectEventsTodayCount(state: RootState): number {
    return state.events.items.filter(e => isToday(e.date)).length
}
export function selectActiveRemindersThisWeekCount(state: RootState): number {
    const taskCount = state.tasks.items.filter(
        t=> t.reminder !== '0' && isWithinLast7Days(t.createdAt)
    ).length
    const eventCount = state.events.items.filter(e=> e.reminder !== "0" && isWithinLast7Days(e.createdAt)).length

    return taskCount + eventCount
}
export  function selectCompletedTasksCount(state: RootState): number {
  return state.tasks.items.filter((t) => t.status === "done").length
}

export function selectDoneTodayCount(state: RootState): number {
  return state.tasks.items.filter(
    (t) => t.status === "done" && isToday(t.dueDate)
  ).length
}