import type { Task } from "../store/types/types"

const BASE_URL = "http://localhost:3001"

export async function fetchTasksFormServer(userId: string):Promise<Task[]> {
    const res = await fetch(`${BASE_URL}/tasks?userId=${userId}`)
    if(!res.ok ) throw new Error("خطا در دریافت  وظایف")
    return res.json()
}

export async function createTaskOnServer(
  task: Omit<Task, "id" | "createdAt">
): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...task, createdAt: new Date().toISOString() }),
  })
  if (!res.ok) throw new Error("خطا در افزودن وظیفه")
  return res.json()
}

export async function deleteTaskOnServer(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" })
  if (!res.ok) throw new Error("خطا در حذف وظیفه")
}

export async function updateTaskStatusOnServer(
  id: string,
  status: Task["status"]
): Promise<void> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  })
  if (!res.ok) throw new Error("خطا در بروزرسانی وضعیت")
}