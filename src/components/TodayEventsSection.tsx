
import { Link } from "react-router-dom"
import { useAppSelector } from "../store/hooks"
import { selectTodayEvents } from "../store/selectors/eventsSelectors"
import { useTranslation } from "react-i18next"
function TodayEventsSection() {
const { t } = useTranslation()
const todayEvents = useAppSelector(selectTodayEvents).slice(0,3)
  return (
    <section className="flex flex-col mt-3 p-2 bg-white rounded-2xl shadow-2xs md:mx-5">
        <div className="flex justify-between px-3">
            <p className="text-[15px]">
               {t("home.todayEvents")}
            </p>
            <Link to='/reminder' className=" text-(--Primary) hover:text-blue-700">
                {t("home.viewAll")}
            </Link>
        </div>
        {todayEvents.length === 0 ? (
            <div className="flex justify-center p-5">
                <p className="text-gray-400 text-[15px]">{t('home.noEventsToday')}</p>
            </div>
        ) : (
            <div className="flex flex-col gap-2 px-3 py-2">
                {todayEvents.map((event)=>(
                    <div key={event.id} className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2.5 bg-gray-50">
                        <span className="w-2 h-2 rounded-full shrink-0 " style={{backgroundColor: event.color}}/>
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="text-sm font-bold text-gray-800 truncate">
                                {event.title}
                            </span>
                            {event.location && (
                                <span className="text-xs text-gray-400 truncate">{event.location}</span>
                            )}
                        </div>
                        <span className="text-xs text-gray-400 truncate">
                            {event.allDay ? "تمام روز" : event.startTime}
                        </span>
                    </div>
                ))}
            </div>
        )}

    </section>
  )
}

export default  TodayEventsSection