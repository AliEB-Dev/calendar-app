import { useState } from "react";
import MonthCalendar from "../components/Calendar/MonthCalendar"
import TodayEventsSection from "../components/TodayEventsSection"
import TodayTasksSection from "../components/TodayTasksSection";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentUser = useAppSelector((state) => state.auth.currentUser)
  
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }
  return (
    
    <div className="w-full  p-1 mb-15 ">
        

        <MonthCalendar
        currentDate = {currentDate}
        setCurrentDate={setCurrentDate}
        />
        <TodayEventsSection/>
        <TodayTasksSection/>
    </div>
  )
}

export default Calendar