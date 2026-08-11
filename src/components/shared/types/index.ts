import type { ReactNode } from "react"

export type ItemType = "task" | "event"
export type Priority = "low" | "medium" | "high"
export type TaskStatus = "pending" | "in-progress" | "done"

export interface TaskFormData {
  title: string
  dueDate: string
  priority: Priority
  status: TaskStatus
  description: string
  reminder: string
}

export interface EventFormData {
  title: string
  date: string
  startTime: string
  endTime: string
  allDay: boolean
  location: string
  reminder: string
  color: string
  description: string
}
export interface FormFieldProps {
  label: string
  children: ReactNode
}
export interface PrioritySelectorProps {
  value: Priority
  onChange: (p: Priority) => void
}