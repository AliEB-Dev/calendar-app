import { FaRegCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface ReminderCardProps {
  type: "task" | "event"
  time: string
  title: string
  subtitle: string
  completed?: boolean
  color?: string
  onToggle?: () => void
}

function ReminderCard({type,time,title,subtitle,completed = false , color , onToggle}:ReminderCardProps){
    return(
      <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm md:mx-5">
        
        <div className="flex items-center gap-3">
          {type === "task" ? (
            <button type="button" onClick={(e)=> {
              e.preventDefault() 
              e.stopPropagation()
              onToggle?.()}}>
              {completed ? ( 
                <IoCheckmarkCircleOutline size={28} className="text-green-500"/>
              ) : (
                <FaRegCircle size={28} className="text-slate-300"/>
              )}
            </button>
          ): (
            <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{backgroundColor: color ?? "#6366F1"}}/>
          )
        }
        <div className="flex flex-col gap-1">
          <h3 className={`font-semibold ${completed ? "line-through text-slate-400" : ""}`}>
            {title}
          </h3>
          <div  className="flex items-center gap-1 text-sm text-slate-500">
            <IoLocationOutline size={16} />
            <span>{subtitle}</span>
          </div>
        </div>
        </div>
      
        <span className="text-sm font-medium text-slate-500 ">{time}</span>
    </div>
    )
}
export default ReminderCard