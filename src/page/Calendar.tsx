import { useState } from "react";
import MonthCalendar from "../components/Calendar/MonthCalendar"
import TodayEventsSection from "../components/TodayEventsSection"
import AuthGate from "../components/auth/AuthGate";
import TodayTasksSection from "../components/TodayTasksSection";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <AuthGate>
    <div className="w-full  p-1 mb-15 ">
        

        <MonthCalendar
        currentDate = {currentDate}
        setCurrentDate={setCurrentDate}
        />
        <TodayEventsSection/>
        <TodayTasksSection/>
    </div>
    </AuthGate>
  )
}

export default Calendar