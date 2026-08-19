import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoIosClose, IoIosCheckmarkCircle, IoIosCalendar } from "react-icons/io"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { closeAddItemModal } from "../../store/slices/modalSlice"
import TaskForm from "./TaskForm"
import EventForm from "./EventForm"
import type { ItemType, TaskFormData, EventFormData } from "./types"
import { addTask } from "../../store/slices/tasksSlice"
import { addEvent } from "../../store/slices/eventsSlice"
import { useTranslation } from "react-i18next"

const initialTask: TaskFormData = {
  title: "",
  dueDate: "",
  priority: "medium",
  status: "pending",
  description: "",
  reminder: "30",
}

const initialEvent: EventFormData = {
  title: "",
  date: "",
  startTime: "10:00",
  endTime: "11:30",
  allDay: false,
  location: "",
  reminder: "30",
  color: "#6366F1",
  description: "",
}

function AddItemModal() {
  const isOpen = useAppSelector((state) => state.modal.isAddItemOpen)
  const defaultType = useAppSelector((state) => state.modal.defaultType)
  const currentUser = useAppSelector((state) => state.auth.currentUser)
  const dispatch = useAppDispatch()

  const [type, setType] = useState<ItemType>(defaultType)
  const [taskData, setTaskData] = useState<TaskFormData>(initialTask)
  const [eventData, setEventData] = useState<EventFormData>(initialEvent)

  const { t } = useTranslation();
  if (!isOpen) return null

  const handleClose = () => {
    dispatch(closeAddItemModal())
    setTaskData(initialTask)
    setEventData(initialEvent)
    setType("task")
  }

   const handleSubmit = () => {
  if (!currentUser) return

  if (type === "task") {
    dispatch(addTask({ userId: currentUser.id, ...taskData }))
  } else {
    dispatch(addEvent({ userId: currentUser.id, ...eventData }))
  }
  handleClose()
}

  const isValid = type === "task" ? taskData.title.trim() : eventData.title.trim()

  return (
    <AnimatePresence>
      {
        isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/40 flex items-end justify-center z-50 "
            onClick={handleClose}
            initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.20 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md sm:max-w-10/12  bg-white rounded-t-3xl max-h-[90vh] overflow-y-auto flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-2 sticky top-0 bg-white z-10 ">
              <button onClick={handleClose}>
                <IoIosClose size={26} className="text-gray-400" />
              </button>
              <h2 className="font-bold text-lg text-gray-800 my-2">{t("addItem.title")}</h2>
            </div>

            <div className="px-5">
              <div className="flex rounded-2xl p-1 mb-5 gap-3">
                <button
                  type="button"
                  onClick={() => setType("event")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    type === "event" ? "bg-(--Primary) text-white" : "text-gray-400"
                  }`}
                >
                  <IoIosCalendar size={16} />
                  رویداد
                </button>
                <button
                  type="button"
                  onClick={() => setType("task")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    type === "task" ? "bg-(--Primary) text-white" : "text-gray-400 bg-gray-100"
                  }`}
                >
                  <IoIosCheckmarkCircle size={16} />
                  وظیفه
                </button>
              </div>

              {type === "task" ? (
                <TaskForm data={taskData} onChange={setTaskData} />
              ) : (
                <EventForm data={eventData} onChange={setEventData} />
              )}
            </div>

            <div className="px-5 py-5 sticky bottom-0 bg-white">
              <button
                onClick={handleSubmit}
                disabled={!isValid}
                className="w-full bg-(--Primary) text-white rounded-xl py-3.5 font-bold text-sm disabled:opacity-40"
              >
                {type === "task" ? t("addItem.saveTask") : t("addItem.saveEvent")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
        
    </AnimatePresence>
  )
}

export default AddItemModal