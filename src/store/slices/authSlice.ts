import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { AuthUser } from "../types/types"
import { findUserByEmail, createUser, updateUserAvatar, toAuthUser, updateUserProfile } from "../../utils/authService"

const SESSION_KEY = 'app:currentUser';

function loadSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    const user = await findUserByEmail(email)
    if (!user) return rejectWithValue("کاربری با این ایمیل یافت نشد")
    if (user.password !== password) return rejectWithValue("رمز عبور اشتباه است")
    return toAuthUser(user)
  }
)

export const register = createAsyncThunk(
  "auth/register",
  async (
    { name, email, password }: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    const existing = await findUserByEmail(email)
    if (existing) return rejectWithValue("این ایمیل قبلاً ثبت شده است")
    const user = await createUser(name, email, password)
    return toAuthUser(user)
  }
)

export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async ({ userId, avatarUrl }: { userId: string; avatarUrl: string }) => {
    const user = await updateUserAvatar(userId, avatarUrl)
    return toAuthUser(user)
  }
)

export const updateProfile = createAsyncThunk("auth/updateProfile", async ({ userId, name }: { userId: string; name: string }) => {
  const user = await updateUserProfile(userId,name)
  return toAuthUser(user)
})


interface AuthState {
  currentUser: AuthUser | null
  status: "idle" | "loading" | "failed"
  error: string | null
}

const initialState: AuthState = {
  currentUser: loadSession(),
  status: "idle",
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle"
        state.currentUser = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed"
        state.error = (action.payload as string) ?? "خطا در ورود"
      })
      .addCase(register.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "idle"
        state.currentUser = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed"
        state.error = (action.payload as string) ?? "خطا در ثبت نام"
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.currentUser = action.payload
      })
      .addCase(updateProfile.fulfilled, (state,action)=>{
        state.currentUser = action.payload
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer