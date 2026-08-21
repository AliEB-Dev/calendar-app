import { createSelector } from "@reduxjs/toolkit"
import { isToday, differenceInCalendarDays } from "date-fns-jalali"
import type { RootState } from "../store"

const selectTaskItems = (state: RootState) => state.tasks.items
const selectEventItems = (state: RootState) => state.events.items

function isDueToday(dateStr: string): boolean {
  if (!dateStr) return false
  return isToday(new Date(dateStr))
}

function isWithinLast7Days(isoDate: string): boolean {
  const diff = differenceInCalendarDays(new Date(), new Date(isoDate))
  return diff >= 0 && diff <= 7
}

export const selectEventsTodayCount = createSelector(
  [selectEventItems],
  (events) => events.filter((e) => isDueToday(e.date)).length
)

export const selectActiveRemindersThisWeekCount = createSelector(
  [selectTaskItems, selectEventItems],
  (tasks, events) => {
    const taskCount = tasks.filter(
      (t) => t.reminder !== "0" && isWithinLast7Days(t.createdAt)
    ).length
    const eventCount = events.filter(
      (e) => e.reminder !== "0" && isWithinLast7Days(e.createdAt)
    ).length
    return taskCount + eventCount
  }
)

export const selectCompletedTasksCount = createSelector(
  [selectTaskItems],
  (tasks) => tasks.filter((t) => t.status === "done").length
)

export const selectDoneTodayCount = createSelector(
  [selectTaskItems],
  (tasks) => tasks.filter((t) => t.status === "done" && isDueToday(t.dueDate)).length
)