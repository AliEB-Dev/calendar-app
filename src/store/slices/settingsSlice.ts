import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type Appearance = "light" | "dark";
export type Language = "fa" | "en";

interface SettingsState {
    appearance: Appearance
    language: Language
}


const savedAppearance = localStorage.getItem("appearance") as Appearance | null
const savedLanguage = localStorage.getItem("language") as Language | null
const initialAppearance: Appearance =
    savedAppearance || "light"

const initialState: SettingsState = {
    appearance: initialAppearance,
    language: savedLanguage || "fa",
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
        }
    }
})
export const {
    setAppearance,
    setLanguage,
} = settingsSlice.actions

export default settingsSlice.reducer