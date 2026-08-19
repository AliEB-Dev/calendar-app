import { IoIosArrowDown, IoIosTime } from "react-icons/io";
import FormField from "./FormField";
import { useTranslation } from "react-i18next";
import type { EventFormData } from "./types";
interface ButtonEventProps {
  data: EventFormData
  labelTitle : string
}
function ButtonEvent({data,labelTitle}:ButtonEventProps) {
    const { t } = useTranslation();
    return (
        <FormField label={t(`${labelTitle}`)}>
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
    )
}
export default ButtonEvent;