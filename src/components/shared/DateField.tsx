import { useState } from "react"
import { format } from "date-fns-jalali"
import { IoIosCalendar, IoIosArrowDown } from "react-icons/io"
import FormField from "./FormField"
import PersianCalendar from "./PersianCalendar"

interface DateFieldProps {
  label: string
  value: string 
  onChange: (isoDate: string) => void
}

function DateField({ label, value, onChange }: DateFieldProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date())

  const selectedDate = value ? new Date(value) : undefined
  const displayValue = value ? format(new Date(value), "d MMMM yyyy") : ""

  const handleSelectDate = (date: Date) => {
    onChange(date.toISOString())
    setIsOpen(false)
  }

  return (
    <FormField label={label}>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
        >
          <IoIosArrowDown className="text-gray-400" size={16} />
          <span className="flex items-center gap-2">
            {displayValue || "انتخاب تاریخ"}
            <IoIosCalendar className="text-gray-400" size={18} />
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
            <PersianCalendar
              viewDate={viewDate}
              selectedDate={selectedDate}
              onSelectDate={handleSelectDate}
              onViewDateChange={setViewDate}
            />
          </div>
        )}
      </div>
    </FormField>
  )
}

export default DateField