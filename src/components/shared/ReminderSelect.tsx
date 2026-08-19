import { IoIosArrowDown } from "react-icons/io";
import FormField from "./FormField";
import type { IconType } from "react-icons";
import { useTranslation } from "react-i18next";

interface Option {
  title: string;
  value: string | number;
}

interface ReminderSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  Icon : IconType
  label: string;
}

function ReminderSelect({value,onChange,options,Icon,label}:ReminderSelectProps) {
    const { t } = useTranslation()
    return(
      <FormField label={t(`${label}`)}>
        <div className="relative">
          <select
            value={value}
            onChange={onChange}
            className="w-full appearance-none border border-gray-200 rounded-xl pr-10 pl-4 py-3 text-sm text-gray-700 outline-none focus:border-(--Primary)"
          >
            {options.map((item)=> (
              <option value={item.value}>{t(`${item.title}`)}</option>
            ))}
          </select>
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          <IoIosArrowDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
      </FormField>
    )
}
export default ReminderSelect;