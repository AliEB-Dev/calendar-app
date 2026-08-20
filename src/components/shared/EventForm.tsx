import { FiEdit2, FiMapPin } from "react-icons/fi"
import { IoIosNotifications } from "react-icons/io"
import FormField from "./FormField"
import ColorPicker from "./ColorPicker"
import ToggleSwitch from "./ToggleSwitch"
import type { EventFormData } from "./types"
import DateField from "./DateField"
import { useTranslation } from "react-i18next"
import ButtonEvent from "./ButtonEvent"
import InputsShared from "./InputsShared"
import ReminderSelect from "./ReminderSelect"
import DescriptionField from "./DescriptionField"

interface EventFormProps {
  data: EventFormData
  onChange: (data: EventFormData) => void
}

const reminderOptions = [
  {"title": "addItem.reminder15" , "value": 15 } , 
  {"title" : "addItem.reminder30","value": 30},
  {"title" : "addItem.reminder60","value":60},
  {"title": "addItem.reminderNone","value":0}
]

function EventForm({ data, onChange }: EventFormProps) {
  const set = <K extends keyof EventFormData>(key: K, value: EventFormData[K]) =>
    onChange({ ...data, [key]: value })
  const { t } = useTranslation();

  return (
    
    <div className="flex flex-col gap-5">
      <InputsShared 
       label="addItem.itemTitle"
       type="text" 
       value={data.title}   
       onChange={(e) => set("title", e.target.value)} 
       placeholder={t("addItem.eventTitlePlaceholder")} 
       Icon={FiEdit2}
       />

      <DateField
        label={t("addItem.dueDate")}
        value={data.date }
        onChange={(v) => set("date", v)}
        />

      <div className="grid grid-cols-2 gap-3">
        <ButtonEvent data={data} labelTitle = "addItem.startTime"/>
        <ButtonEvent data= {data} labelTitle="addItem.endTime"/>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-700">{t("addItem.allDay")}</span>
        <ToggleSwitch checked={data.allDay} onChange={(v) => set("allDay", v)} />
      </div>
      <InputsShared
        label={t("addItem.location")}
        type="text"
        value={data.location}
        onChange={(e) => set("location", e.target.value)}
        placeholder={t("addItem.locationPlaceholder")}
        Icon={FiMapPin}
      />
      <ReminderSelect 
        value={data.reminder}
        onChange={(e) => set("reminder", e.target.value)}
        options={reminderOptions}
        Icon={IoIosNotifications}
        label="addItem.reminder"
      />
      <FormField label={t("addItem.eventColor")}>
        <ColorPicker value={data.color} onChange={(c) => set("color", c)} />
      </FormField>
      
      <DescriptionField
        label={t("addItem.description")}
        value={data.description}
        onChange={(e) => set("description", e.target.value)}
        placeholder={t("addItem.taskDescriptionPlaceholder")}
      />
    </div>
  )
}

export default EventForm