import { getCurrentWeek, weekDays } from "../../utils/calendar"

export default function WeekCalendar(){
    const week = getCurrentWeek();

    return (
         <div className="flex justify-between">
      {week.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col items-center gap-2"
        >
          <span className="text-sm font-semibold text-gray-500">
            {weekDays[index]}
          </span>

          <span
            className={`w-10/12 lg:w-4/12 rounded-2xl py-2  flex justify-center ${
              item.isToday
                ? "bg-(--Primary) text-white"
                : "hover:bg-gray-100 dark:hover:bg-(--bg-item-dark-hover)"
            }`}
          >
            {item.day}
          </span>
        </div>
      ))}
    </div>
    )
}