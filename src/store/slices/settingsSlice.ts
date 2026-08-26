import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type Appearance = "light" | "dark";
export type Language = "fa" | "en";
export type DaysOfWeek = "saturday" | "sunday" | "monday" | "tuesday"|"wednesday"|"thursday"|"friday"
interface SettingsState {
    appearance: Appearance
    language: Language
    daysofweek: DaysOfWeek
    notifications: boolean
}


const savedAppearance = localStorage.getItem("appearance") as Appearance | null;
const savedLanguage = localStorage.getItem("language") as Language | null;
const savedDaysofWeek = localStorage.getItem("daysofweek") as DaysOfWeek | null;
const savedNotifications = localStorage.getItem("notifications");

const initialAppearance: Appearance =
    savedAppearance || "light"

const initialNotifications = savedNotifications === null ? true : savedNotifications === "true"

const initialState: SettingsState = {
    appearance: initialAppearance,
    language: savedLanguage || "fa",
    daysofweek : savedDaysofWeek  || "saturday",
    notifications : initialNotifications
}

const settingsSlice = createSlice({
    name: "settings" ,
    initialState,
    reducers : {
        setAppearance: (state , action : PayloadAction<Appearance>)=>{
            state.appearance = action.payload
            localStorage.setItem("appearance", action.payload);
            document.documentElement.classList.toggle(
                "dark",
                action.payload === "dark"
            )
        },setLanguage: (state,action : PayloadAction<Language>)=>{
            state.language  = action.payload
            localStorage.setItem("language", action.payload)
        }, setDaysOfWeek: (state , action : PayloadAction<DaysOfWeek>)=>{
            state.daysofweek = action.payload
            localStorage.setItem("daysofweek",action.payload)
        },setNotifications: (state, action: PayloadAction<boolean>) => {
            state.notifications = action.payload;
            localStorage.setItem("notification",String(action.payload))
        }
    }
})
export const {
    setAppearance,
    setLanguage,
    setDaysOfWeek,
    setNotifications
} = settingsSlice.actions

export default settingsSlice.reducer