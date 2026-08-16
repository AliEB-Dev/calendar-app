import { useTranslation } from "react-i18next"
import { IoLanguage, IoMoon, IoSunny } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setAppearance, setLanguage } from "../../store/slices/settingsSlice"

function AuthHeaderActions() {
    const { i18n } = useTranslation()

    const dispatch = useAppDispatch()
    const appearance = useAppSelector(
        (state) => state.settings.appearance
    )
    const toggleLanguage = ()=>{
        const newLanguage = i18n.language === "fa" ? "en" : "fa"
        i18n.changeLanguage(newLanguage)
        dispatch(setLanguage(newLanguage))
    }
    const toggleTheme = ()=>{
        const newAppearance = appearance === "light" ? "dark" : "light"
        dispatch(setAppearance(newAppearance))
    }

    return (
        <div className="flex items-center justify-end gap-2 mb-6">
            <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-(--Primary) dark:hover:bg-(--Primary) transition"
                >
                    <IoLanguage size={18} />
                    <span>
                        {i18n.language === "fa" ? "EN" : "FA"}
                    </span>
            </button>
            <button
                type="button"
                onClick={toggleTheme}
                className={`flex items-center justify-center rounded-xl p-2 text-gray-600 dark:text-gray-300 transition
                    ${appearance=== "light" ? "bg-gray-100 dark:hover:bg-gray-800 ": "hover:bg-(--Primary)"}`}
            >
                {appearance === "light" ? (
                    <IoMoon size={19} />
                ) : (
                    <IoSunny size={19} className="text-yellow-200"/>
                )}
            </button>
        </div>
    )
}

export default AuthHeaderActions