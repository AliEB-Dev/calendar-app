// components/shared/EventForm.tsx
import { FiEdit2 } from "react-icons/fi"
import { IoIosArrowDown, IoIosNotifications, IoIosTime, IoIosPin } from "react-icons/io"
import FormField from "./FormField"
import ColorPicker from "./ColorPicker"
import ToggleSwitch from "./ToggleSwitch"
import type { EventFormData } from "./types"
import DateField from "./DateField"

interface EventFormProps {
  data: EventFormData
  onChange: (data: EventFormData) => void
}

function EventForm({ data, onChange }: EventFormProps) {
  const set = <K extends keyof EventFormData>(key: K, value: EventFormData[K]) =>
    onChange({ ...data, [key]: value })

  return (
    
    <div className="flex flex-col gap-5">
      <FormField label="عنوان">
        <div className="relative">
          <input
            type="text"
            value={data.title}
            onChange={(e) => set("title", e.target.value)}
            placeholder="عنوان رویداد را وارد کنید"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-10 text-sm outline-none focus:border-(--Primary)"
          />
          <FiEdit2 className="absolute left-3 top-1/2 -translate-y-1/2 text-(--Primary)" size={16} />
        </div>
      </FormField>

      <DateField
        label="تاریخ سررسید"
        value={data.date }
        onChange={(v) => set("date", v)}
        />

      <div className="grid grid-cols-2 gap-3">
        <FormField label="ساعت شروع">
          <button
            type="button"
            className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
          >
            <IoIosArrowDown className="text-gray-400" size={16} />
            <span className="flex items-center gap-2">
              {data.startTime}
              <IoIosTime className="text-gray-400" size={18} />
            </span>
          </button>
        </FormField>
        <FormField label="ساعت پایان">
          <button
            type="button"
            className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
          >
            <IoIosArrowDown className="text-gray-400" size={16} />
            <span className="flex items-center gap-2">
              {data.endTime}
              <IoIosTime className="text-gray-400" size={18} />
            </span>
          </button>
        </FormField>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-700">تمام‌روز</span>
        <ToggleSwitch checked={data.allDay} onChange={(v) => set("allDay", v)} />
      </div>

      <FormField label="مکان">
        <div className="relative">
          <input
            type="text"
            value={data.location}
            onChange={(e) => set("location", e.target.value)}
            placeholder="مکان رویداد را وارد کنید"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-10 text-sm outline-none focus:border-(--Primary)"
          />
          <IoIosPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </FormField>

      <FormField label="یادآوری">
        <div className="relative">
          <select
            value={data.reminder}
            onChange={(e) => set("reminder", e.target.value)}
            className="w-full appearance-none border border-gray-200 rounded-xl pr-10 pl-4 py-3 text-sm text-gray-700 outline-none focus:border-(--Primary)"
          >
            <option value="30">۳۰ دقیقه قبل</option>
            <option value="15">۱۵ دقیقه قبل</option>
            <option value="60">۱ ساعت قبل</option>
            <option value="0">بدون یادآوری</option>
          </select>
          <IoIosNotifications className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          <IoIosArrowDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
      </FormField>

      <FormField label="رنگ رویداد">
        <ColorPicker value={data.color} onChange={(c) => set("color", c)} />
      </FormField>

      <FormField label="توضیحات (اختیاری)">
        <textarea
          value={data.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="توضیحات رویداد را بنویسید..."
          rows={3}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-(--Primary)"
        />
      </FormField>
    </div>
  )
}

export default EventForm