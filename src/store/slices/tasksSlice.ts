import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { Task } from "../types/types"
import {
  fetchTasksFormServer,
  createTaskOnServer,
  deleteTaskOnServer,
  updateTaskStatusOnServer,
} from "../../utils/taskService"

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async (userId: string) => {
  return fetchTasksFormServer(userId)
})

export const addTask = createAsyncThunk(
  "tasks/add",
  async (task: Omit<Task, "id" | "createdAt">) => {
    return createTaskOnServer(task)
  }
)

export const removeTask = createAsyncThunk("tasks/remove", async (id: string) => {
  await deleteTaskOnServer(id)
  return id
})

export const updateTaskStatus = createAsyncThunk(
  "tasks/updateStatus",
  async ({ id, status }: { id: string; status: Task["status"] }) => {
    await updateTaskStatusOnServer(id, status)
    return { id, status }
  }
)

interface TasksState {
  items: Task[]
  status: "idle" | "loading" | "failed"
  error: string | null
}

const initialState: TasksState = {
  items: [],
  status: "idle",
  error: null,
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "idle"
        state.items = action.payload
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "خطا در دریافت وظایف"
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload)
      })
      .addCase(updateTaskStatus.fulfilled, (state, action) => {
        const task = state.items.find((t) => t.id === action.payload.id)
        if (task) task.status = action.payload.status
      })
  },
})

export default tasksSlice.reducer