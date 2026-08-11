// store/types.ts
import type { Priority, TaskStatus } from "../../components/shared/types"

export interface Task {
  id: string
  userId: string
  title: string
  dueDate: string
  priority: Priority
  status: TaskStatus
  description: string
  reminder: string
  createdAt: string
}

export interface CalendarEvent {
  id: string
  userId: string
  title: string
  date: string
  startTime: string
  endTime: string
  allDay: boolean
  location: string
  reminder: string
  color: string
  description: string
  createdAt: string
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  avatarUrl ?: string
}

export interface AuthUser {
  id: string
  name: string
  email: string
  avatarUrl ?: string
}