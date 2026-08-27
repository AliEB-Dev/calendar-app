import { Link } from "react-router-dom"
import { FaRegCircle } from "react-icons/fa"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { selectTodayTasks } from "../store/selectors/tasksSelectors"
import { updateTaskStatus } from "../store/slices/tasksSlice"
import { useTranslation } from "react-i18next"

function TodayTasksSection(){
    const todayTasks = useAppSelector(selectTodayTasks)
    const dispatch = useAppDispatch()
    
    const handleToggle = (id: string , currentStatus: string) =>{
        dispatch(updateTaskStatus({id,status : currentStatus === "done" ?  "pending" : "done"}))
    }
    const { t } = useTranslation()
    return (
        <section className="flex flex-col mt-3 p-2 bg-white rounded-2xl shadow-2xs md:mx-5 dark:bg-(--bg-item-dark) dark:text-(--color-text-bgdark)">
            <div className="flex justify-between px-3">
                <p className="text-[15px]">{t("home.todayTasks")}</p>
                <Link to="/reminder" className="text-(--Primary) hover:text-blue-700">
                    {t("home.viewAll")}
                </Link>
            </div>

            {
                todayTasks.length === 0 ? (
                    <div className="flex justify-center p-5 ">
                        <p className="text-gray-400 text-[15px]">{t("home.noTasksToday")}</p>
                    </div>
                ):(
                    <div className="flex flex-col gap-2 px-4 py-2">
                        {todayTasks.map((task)=>(
                            <div key={task.id} className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2.5 bg-gray-50 ">
                                <button type="button" onClick={()=> handleToggle(task.id,task.status)} className="shrink-0">
                                    {task.status === "done" ? (
                                        <IoCheckmarkCircleOutline size={22} className="text-green-500" />
                                    ) : (
                                        <FaRegCircle size={22} className="text-slate-300" />
                                    )}
                                </button>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <span className={`text-sm font-bold truncate ${task.status === "done" ? "line-through text-gray-400" : "text-gray-800"}`}>
                                        {task.title}
                                    </span>
                                    {task.description && (
                                        <span className="text-xs text-gray-400 truncate">{task.description}</span>
                                    )}
                                </div>
                                <span className="text-xs text-gray-400 truncate">
                                    {task.reminder === "0" ? "" : `${task.reminder} دقیقه قبل`}
                                </span>
                            </div>
                        ))}
                    </div>
                )
            }
        </section>
    )
}
export default TodayTasksSection