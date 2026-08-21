import { createSelector } from "@reduxjs/toolkit"
import { isToday } from "date-fns-jalali"
import type { RootState } from "../store"

const selectTaskItems = (state: RootState) => state.tasks.items

export const selectTodayTasks = createSelector(
  [selectTaskItems],
  (tasks) =>
    tasks
      .filter((t) => t.dueDate && isToday(new Date(t.dueDate)))
      .sort((a, b) => a.title.localeCompare(b.title))
)