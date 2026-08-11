import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { isBefore, startOfDay } from "date-fns-jalali"
import {
  getMonthCalendar,
  getCurrentMonth,
  getYearsString,
  nextMonth,
  previousMonth,
  weekDays,
  type CalendarDay,
} from "../../utils/calendar"

interface PersianCalendarProps {
  viewDate: Date
  selectedDate?: Date
  onSelectDate: (date: Date) => void
  onViewDateChange: (date: Date) => void
}

function PersianCalendar({
  viewDate,
  selectedDate,
  onSelectDate,
  onViewDateChange,
}: PersianCalendarProps) {
  const days = getMonthCalendar(viewDate)
  const today = startOfDay(new Date())
  return (
    <div className="w-full" dir="rtl">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => onViewDateChange(nextMonth(viewDate))}
          className="p-1 text-gray-400 hover:text-(--Primary)"
        >
          <IoIosArrowForward size={18} />
        </button>
        <span className="text-sm font-bold text-gray-700">
          {getCurrentMonth(viewDate)} {getYearsString(viewDate)}
        </span>
        <button
          type="button"
          onClick={() => onViewDateChange(previousMonth(viewDate))}
          className="p-1 text-gray-400 hover:text-(--Primary)"
        >
          <IoIosArrowBack size={18} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-1">
        {weekDays.map((d) => (
          <span key={d} className="text-[11px] text-gray-400 text-center font-bold">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((d: CalendarDay) => {
  const isSelected =
    selectedDate && d.date.toDateString() === selectedDate.toDateString()

  const isDisabled = isBefore(startOfDay(d.date), today)

  return (
    <button
      key={d.date.toISOString()}
      type="button"
      disabled={isDisabled}
      onClick={() => !isDisabled && onSelectDate(d.date)}
      className={`w-8 h-8 rounded-full text-xs flex items-center justify-center transition-colors ${
        isDisabled
          ? "text-gray-300 cursor-not-allowed"
          : isSelected
          ? "bg-(--Primary) text-white font-bold"
          : d.isToday
          ? "text-white bg-(--Primary) font-bold"
          :""
      }`}
    >
      {d.day}
    </button>
  )
})}
      </div>
    </div>
  )
}

export default PersianCalendar