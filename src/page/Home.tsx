import StatCard from '../components/StatCard/StatCard';
import HomeCalendarSection from '../components/Home/HomeCalendarSection';
import TodayEventsSection from '../components/TodayEventsSection';
import WelcomeCard from '../components/Home/WelcomeCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Navigate } from 'react-router-dom';
import { useStats } from '../hooks/useStatsCard';
import { useEffect } from 'react';
import { fetchTasks } from '../store/slices/tasksSlice';
import { fetchEvents } from '../store/slices/eventsSlice';
import TodayTasksSection from '../components/TodayTasksSection';
function Home() {
  const currentUser = useAppSelector((state) => state.auth.currentUser)
  const dispatch = useAppDispatch()
  const homeStats = useStats() 

  useEffect(()=> {
    if(currentUser){
      dispatch(fetchTasks(currentUser.id))
      dispatch(fetchEvents(currentUser.id))
    }
  },[dispatch,currentUser])
  
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }
  return (
    <>
    
    <div className="w-full h-screen p-2 pt-5 mb-15">
      <header>
        <WelcomeCard/>
        <div className='flex gap-2 mt-7 mr-2 justify-center'>
          {
            homeStats.map((item,index)=>(
            <StatCard
              key={index}
              {...item}
              />
            )
             )
          }
        </div>
        
      </header>
      <HomeCalendarSection/>
      <TodayEventsSection/>
      <TodayTasksSection/>
    </div>
    </>
  )
}

export default Home