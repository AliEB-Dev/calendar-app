import {
  getCurrentMonth,
  getMonthCalendar,
  nextMonth,
  previousMonth,
  weekDays,
} from "../../utils/calendar";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import useDirection from "../../hooks/useDirection";

interface Props {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

function MonthCalendar({currentDate,setCurrentDate}: Props) {
      
  const days = getMonthCalendar(currentDate);
  const {isRTL }= useDirection()

  return (
    <div className="bg-white rounded-xl p-2 ">
        <CalendarHeader 
          currentDate={currentDate}
          onYearChange={setCurrentDate}
        />
        {/* Header */}
        <div className="flex items-center justify-between mb-4 mt-2 md:mx-5">
            <button 
              onClick={()=> setCurrentDate(previousMonth(currentDate))}
              className="p-2 rounded-lg hover:bg-gray-100">
                    {isRTL ? <FaChevronRight /> : <FaChevronLeft />}
            </button>

             <h2 className="font-bold text-lg">
                {getCurrentMonth(currentDate)}
            </h2>
            <button
              onClick={() => setCurrentDate(nextMonth(currentDate))}
              className="p-2 rounded-lg hover:bg-gray-100"
             >
                {isRTL ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
        </div>

        {/*Week Days */}
         <div className="grid grid-cols-7 mb-3 md:mx-5">
                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="text-center text-sm md:text-xl font-semibold text-gray-500 "
                        >
                         {day}
                    </div>
                ))}
        </div>

      {/* Calendar */}

      <div className="grid grid-cols-7 gap-2 md:mx-5">
            {days.map((day) => (
                <div className={`h-15 justify-center flex items-center rounded-lg border p-2 transition
                    ${
                        day.isToday
                            ? "bg-[#6B7A2F] text-white border-[#6B7A2F]"
                            : day.isCurrentMonth
                            ? "bg-white border-gray-200 hover:border-[#6B7A2F]"
                            : "bg-gray-50 text-gray-400 border-gray-200"
                    }
                `} 
                key={day.date.toISOString()}>
                    
                    <span>
                        {day.day}
                    </span>
                </div>
            ))}
      </div>
    </div>
  )
}

export default MonthCalendar