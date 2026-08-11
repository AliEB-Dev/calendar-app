import { FiEdit2 } from "react-icons/fi"
import {  IoIosArrowDown } from "react-icons/io"
import FormField from "./FormField"
import PrioritySelector from "./PrioritySelector"
import type { TaskFormData } from "./types"
import DateField from "./DateField"

interface TaskFormProps {
  data: TaskFormData
  onChange: (data: TaskFormData) => void
}

function TaskForm({ data, onChange }: TaskFormProps) {
  const set = <K extends keyof TaskFormData>(key: K, value: TaskFormData[K]) =>
    onChange({ ...data, [key]: value })

  return (
    <div className="flex flex-col gap-5 ">
      <FormField label="عنوان">
        <div className="relative">
          <input
            type="text"
            value={data.title}
            onChange={(e) => set("title", e.target.value)}
            placeholder="عنوان وظیفه را وارد کنید"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-10 text-sm outline-none focus:border-(--Primary)"
          />
          <FiEdit2 className="absolute left-3 top-1/2 -translate-y-1/2 text-(--Primary)" size={16} />
        </div>
      </FormField>

      
        <DateField
        label="تاریخ سررسید"
        value={data.dueDate }
        onChange={(v) => set("dueDate", v)}
        />
      

      <FormField label="اولویت">
        <PrioritySelector value={data.priority} onChange={(p) => set("priority", p)} />
      </FormField>

      <FormField label="وضعیت">
        <div className="relative">
          <select
            value={data.status}
            onChange={(e) => set("status", e.target.value as TaskFormData["status"])}
            className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-700 outline-none focus:border-(--Primary)"
          >
            <option value="pending" >در انتظار</option>
            <option value="in-progress">در حال انجام</option>
            <option value="done">انجام‌شده</option>
          </select>
          <IoIosArrowDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
      </FormField>

      <FormField label="توضیحات (اختیاری)">
        <textarea
          value={data.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="توضیحات وظیفه را بنویسید..."
          rows={3}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-(--Primary)"
        />
      </FormField>
    </div>
  )
}

export default TaskForm