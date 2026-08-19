import { FiCheckCircle, FiEdit2 } from "react-icons/fi"
import FormField from "./FormField"
import PrioritySelector from "./PrioritySelector"
import type { TaskFormData } from "./types"
import DateField from "./DateField"
import InputsShared from "./InputsShared"
import { useTranslation } from "react-i18next"
import ReminderSelect from "./ReminderSelect"
import DescriptionField from "./DescriptionField"

interface TaskFormProps {
  data: TaskFormData
  onChange: (data: TaskFormData) => void
}

const statusOptions = [
  { "title": "addItem.statusPending", "value": "pending" },
  { "title": "addItem.statusInProgress", "value": "in-progress" },
  { "title": "addItem.statusDone", "value": "done" },
];
function TaskForm({ data, onChange }: TaskFormProps) {
  const set = <K extends keyof TaskFormData>(key: K, value: TaskFormData[K]) =>
    onChange({ ...data, [key]: value })
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-5 ">
     <InputsShared
       label="addItem.itemTitle"
       type="text" 
       value={data.title}   
       onChange={(e) => set("title", e.target.value)} 
       placeholder={t("addItem.taskTitlePlaceholder")} 
       Icon={FiEdit2}
       />
      
        <DateField
        label={t("addItem.dueDate")}
        value={data.dueDate }
        onChange={(v) => set("dueDate", v)}
        />

      <FormField label={t("addItem.priority")}>
        <PrioritySelector value={data.priority} onChange={(p) => set("priority", p)} />
      </FormField>

      <ReminderSelect 
        value="addItem.reminder"
        onChange={(e) => set("reminder", e.target.value)}
        options={statusOptions}
        Icon={FiCheckCircle}
        label="addItem.status"
      />
      <DescriptionField
        label={t("addItem.description")}
        value={data.description}
        onChange={(e) => set("description", e.target.value)}
        placeholder={t("addItem.eventDescriptionPlaceholder")}
      />
    </div>
  )
}

export default TaskForm