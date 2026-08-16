import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import tasksReducer from "./slices/tasksSlice";
import eventsReducer from "./slices/eventsSlice";
import authReducer from "./slices/authSlice";
import settingsReducer from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    tasks: tasksReducer,
    events: eventsReducer,
    auth: authReducer,
    settings: settingsReducer,
  },
})

store.subscribe(() => {
  const state = store.getState()
  try {
    if (state.auth.currentUser) {
      localStorage.setItem("app:currentUser", JSON.stringify(state.auth.currentUser))
    } else {
      localStorage.removeItem("app:currentUser")
    }
  } catch (err) {
    console.error("خطا در ذخیره‌سازی localStorage:", err)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch