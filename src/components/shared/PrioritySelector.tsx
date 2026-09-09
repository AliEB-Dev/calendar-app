import type { PrioritySelectorProps } from "./types"
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md"
import { TbEqual } from "react-icons/tb"
import type { Priority } from "./types"
import { useTranslation } from "react-i18next"

const options: { value: Priority; label: string; icon: React.ElementType; active: string; idle: string }[] = [
  { value: "low", label: "addItem.priorityHigh", icon: MdKeyboardDoubleArrowDown, active: "bg-emerald-100 text-emerald-600", idle: "bg-gray-50 text-gray-400" },
  { value: "medium", label: "addItem.priorityMedium", icon: TbEqual, active: "bg-orange-100 text-orange-500", idle: "bg-gray-50 text-gray-400" },
  { value: "high", label: "addItem.priorityLow", icon: MdKeyboardDoubleArrowUp, active: "bg-rose-100 text-rose-500", idle: "bg-gray-50 text-gray-400" },
]


function PrioritySelector({ value, onChange }: PrioritySelectorProps) {
  const {t} = useTranslation();
  return (
    <div className="grid grid-cols-3 gap-2">
        {options.map(({ value: v, label, icon: Icon, active, idle }) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={`flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-bold transition-colors ${
            value === v ? active : idle
          }`}
        >
          <span>{t(label)}</span>
          <Icon size={16} />
        </button>
      ))}
    </div>
  )
}

export default PrioritySelector