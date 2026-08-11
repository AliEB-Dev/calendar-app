import { isToday, isTomorrow, isThisWeek, isSameMonth, format } from "date-fns-jalali";
import type { Task, CalendarEvent } from "../store/types/types";
import type { ReminderFilter } from "../components/Reminder/ReminderFilterBar";
import i18n from "../i18n";

export interface AgendaItem {
    id: string
    type: "task" | "event"
    title: string
    subtitle: string
    time: string
    completed: boolean
    color?: string
    sortDate: Date
}

function taskToAgendaItem(task: Task): AgendaItem {
    return {
        id: task.id,
        type: "task",
        title: task.title,
        subtitle: task.description || "-",
        time: task.reminder === "0"
            ? i18n.t("home.noReminder")
            : `${i18n.t("reminder.minutesBefore",{ count: task.reminder})}`,
        completed: task.status === "done",
        sortDate: task.dueDate ? new Date(task.dueDate) : new Date(task.createdAt)
    }
}

function eventTOAgendaItem(event: CalendarEvent): AgendaItem {
    return {
        id: event.id,
        type: "event",
        title: event.title,
        subtitle: event.location || "-",
        time: event.allDay ? i18n.t("home.allDay") : event.startTime,
        completed: false,
        color: event.color,
        sortDate: event.date ? new Date(event.date) : new Date(event.createdAt)
    }
}

export function buildAgendaItems(tasks: Task[], events: CalendarEvent[]): AgendaItem[] {
    return [...tasks.map(taskToAgendaItem), ...events.map(eventTOAgendaItem)]
}

export function filterAgendaItems(items: AgendaItem[], filter: ReminderFilter): AgendaItem[] {
    const now = new Date()

    switch (filter) {
        case "today":
            return items.filter((i) => isToday(i.sortDate))
        case "week":
            return items.filter((i) => isThisWeek(i.sortDate, { weekStartsOn: 6 }))
        case "month":
            return items.filter((i) => isSameMonth(i.sortDate, now))
        case "completed":
            return items.filter((i) => i.type === "task" && i.completed)
        case "all":
        default:
            return items
    }
}

export interface AgendaGroup {
  title: string
  items: AgendaItem[]
}

export function groupAgendaByDay(items: AgendaItem[]): AgendaGroup[] {
  const groups = new Map<string, AgendaGroup>()

  const sorted = [...items].sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime())

  for (const item of sorted) {
    let label: string
    if (isToday(item.sortDate)) label = i18n.t("reminder.today")
    else if (isTomorrow(item.sortDate)) label = i18n.t("reminder.tomorrow")
    else label = format(item.sortDate, "d MMMM")

    if (!groups.has(label)) {
      groups.set(label, { title: label, items: [] })
    }
    groups.get(label)!.items.push(item)
  }

  return Array.from(groups.values())
}