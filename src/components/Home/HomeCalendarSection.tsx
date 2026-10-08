import { FaRegCalendarAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import WeekCalendar from "./WeekCalendar"
import { getTodayString } from "../../utils/calendar"
import { useTranslation } from "react-i18next";

function HomeCalendarSection() {
    const today = getTodayString();
    const { t } = useTranslation();
  return (
    <section className="mt-4 bg-white p-3 rounded-2xl shadow-2xs w-11/12 lg:w-9/12 md:mx-3 dark:bg-(--bg-item-dark)">
       
      <div className="flex justify-between mb-4 text-[14px]">
        <div className="flex gap-1">
            <h2>{t("calendar.title")}</h2>
            <FaRegCalendarAlt />
        </div>
        <div>
            {today}
        </div>
        <Link to='/calendar' className=" text-(--Primary) hover:text-blue-700">
             {t("home.viewAll")}
            </Link>
        </div>
        <WeekCalendar/>
        
    </section>
  )
}

export default HomeCalendarSection