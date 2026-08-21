import { createSelector } from "@reduxjs/toolkit"
import { isToday } from "date-fns-jalali"
import type { RootState } from "../store"

const selectEventItems = (state: RootState) => state.events.items

export const selectTodayEvents = createSelector(
  [selectEventItems],
  (events) =>
    events
      .filter((e) => e.date && isToday(new Date(e.date)))
      .sort((a, b) => a.startTime.localeCompare(b.startTime))
)