import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import { MdKeyboardArrowDown } from "react-icons/md"
import { getYearsString } from "../../utils/calendar"
import { useAppDispatch } from "../../store/hooks"
import { openAddItemModal } from "../../store/slices/modalSlice"
import { getYear, setYear } from "date-fns-jalali"

interface Props {
  currentDate: Date;
  onYearChange: (date: Date) => void;
}

function CalendarHeader({ currentDate, onYearChange }: Props) {
  const dispatch = useAppDispatch()
  const [isYearOpen, setIsYearOpen] = useState(false)

  const currentYear = getYear(currentDate)
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i)

  const handleSelectYear = (year: number) => {
    const updatedDate = setYear(currentDate,year)
    onYearChange(updatedDate)
    setIsYearOpen(false)
  }

  return (
    <header className="relative flex items-center justify-between p-5 h-14 bg-(--Primary) text-white rounded-t-3xl md:mx-5">
      <button
        type="button"
        onClick={() => dispatch(openAddItemModal("event"))}
        className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110"
      >
        <FaPlus className="text-(--Primary) text-sm" />
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsYearOpen((prev) => !prev)}
          className="flex items-center gap-1"
        >
          <MdKeyboardArrowDown
            className={`transition-transform ${isYearOpen ? "rotate-180" : ""}`}
          />
          <p>{getYearsString(currentDate)}</p>
        </button>

        {isYearOpen && (
          <div
            dir="rtl"
            className="absolute left-1/2 -translate-x-1/2 mt-2 w-28 max-h-52 overflow-y-auto bg-white text-gray-700 rounded-xl shadow-lg py-1 z-30"
          >
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => handleSelectYear(year)}
                className={`w-full text-center py-2 text-sm hover:bg-gray-100 ${
                  year === currentYear ? "text-(--Primary) font-bold" : ""
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default CalendarHeader