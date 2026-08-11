import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { CalendarEvent } from "../types/types"
import {
  fetchEventsFromServer,
  createEventOnServer,
  deleteEventOnServer,
} from "../../utils/eventService"

export const fetchEvents = createAsyncThunk("events/fetchAll", async (userId: string) => {
  return fetchEventsFromServer(userId)
})

export const addEvent = createAsyncThunk(
  "events/add",
  async (event: Omit<CalendarEvent, "id" | "createdAt">) => {
    return createEventOnServer(event)
  }
)

export const removeEvent = createAsyncThunk("events/remove", async (id: string) => {
  await deleteEventOnServer(id)
  return id
})

interface EventsState {
  items: CalendarEvent[]
  status: "idle" | "loading" | "failed"
  error: string | null
}

const initialState: EventsState = {
  items: [],
  status: "idle",
  error: null,
}

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "idle"
        state.items = action.payload
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "خطا در دریافت رویدادها"
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(removeEvent.fulfilled, (state, action) => {
        state.items = state.items.filter((e) => e.id !== action.payload)
      })
  },
})

export default eventsSlice.reducer