import type { CalendarEvent } from "../store/types/types"

const BASE_URL = "http://localhost:3001"

export async function fetchEventsFromServer(userId: string): Promise<CalendarEvent[]> {
  const res = await fetch(`${BASE_URL}/events?userId=${userId}`)
  if (!res.ok) throw new Error("خطا در دریافت رویدادها")
  return res.json()
}

export async function createEventOnServer(
  event: Omit<CalendarEvent, "id" | "createdAt">
): Promise<CalendarEvent> {
  const res = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...event, createdAt: new Date().toISOString() }),
  })
  if (!res.ok) throw new Error("خطا در افزودن رویداد")
  return res.json()
}

export async function deleteEventOnServer(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/events/${id}`, { method: "DELETE" })
  if (!res.ok) throw new Error("خطا در حذف رویداد")
}