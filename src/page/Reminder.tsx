import { useEffect, useMemo, useState } from "react";
import ReminderFilterBar, { type ReminderFilter } from "../components/Reminder/ReminderFilterBar";
import ReminderDayList from "../components/Reminder/ReminderDayList";
import ReminderHeader from "../components/Reminder/ReminderHeader";
import AuthGate from "../components/auth/AuthGate";
import { useStats } from "../hooks/useStatsCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchTasks, updateTaskStatus } from "../store/slices/tasksSlice";
import { fetchEvents } from "../store/slices/eventsSlice";
import { buildAgendaItems, filterAgendaItems, groupAgendaByDay } from "../utils/agenda";
import HomeStatCard from "../components/StatCard/StatCard";

export default function ReminderPage() {
  const [filter, setFilter] = useState<ReminderFilter>("all");
  const homeStats = useStats();

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const tasks = useAppSelector((state) => state.tasks.items);
  const events = useAppSelector((state) => state.events.items);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchTasks(currentUser.id));
      dispatch(fetchEvents(currentUser.id));
    }
  }, [dispatch, currentUser]);

  const groups = useMemo(() => {
    const items = buildAgendaItems(tasks, events);
    const filtered = filterAgendaItems(items, filter);
    return groupAgendaByDay(filtered);
  }, [tasks, events, filter]);

  const handleToggle = (id: string) => {
    console.log("TOGGLE CLICKED", id)
    const task = tasks.find((t) => t.id === id);
    if (!task) return; 
    dispatch(
      updateTaskStatus({
        id,
        status: task.status === "done" ? "pending" : "done",
      })
    );
  };

  return (
    <AuthGate>
      <div className="p-2 mb-15">
        <ReminderHeader />
        <ReminderFilterBar selected={filter} onChange={setFilter} />

        
           <div className='flex gap-2 mt-7 mr-2 justify-center'>
          {
            homeStats.map((item,index)=>(
            <HomeStatCard
              key={index}
              {...item}
              />
            )
             )
          }
        </div>

        <ReminderDayList groups={groups} onToggle={handleToggle} />
      </div>
    </AuthGate>
  );
}