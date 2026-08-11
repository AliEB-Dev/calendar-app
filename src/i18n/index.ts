import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import fa from "../locales/fa.json"
import en from "../locales/en.json"

const STORAGE_KEY = "app:language"

function getSavedLanguage(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "fa"
  } catch {
    return "fa"
  }
}

function applyDirection(lng: string) {
  document.documentElement.dir = lng === "fa" ? "rtl" : "ltr"
  document.documentElement.lang = lng
}

const initialLanguage = getSavedLanguage()

i18n.use(initReactI18next).init({
  resources: {
    fa: { translation: fa },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
})

applyDirection(initialLanguage)

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // ignore
  }
  applyDirection(lng)
})

export default i18n