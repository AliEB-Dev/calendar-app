import { CiSearch } from "react-icons/ci"
import FloatingButton from "../Menu/FloatingButton"
import { IoCalendarOutline } from "react-icons/io5"
import { useTranslation } from "react-i18next"

function ReminderHeader() {
  const {t} = useTranslation()
  return (
    <header className="flex">
        <div className="flex items-center">
            <FloatingButton/>
            <CiSearch size={30} className="text-purple-700"/>
        </div>
        <div className="flex w-full justify-center p-2 gap-2 font-bold">
            <IoCalendarOutline size={30} className="text-purple-700"/>
            <h1>{t("reminder.pageTitle")}</h1>
        </div>
    </header>
  )
}

export default ReminderHeader