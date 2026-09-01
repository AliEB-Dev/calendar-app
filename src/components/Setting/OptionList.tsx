import { IoIosCheckmark } from "react-icons/io";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";

export interface Option {
  value: string;
  labelKey: string;
  icon ?: IconType;
}

interface OptionListProps {
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

function OptionList({options,selectedValue,onSelect}: OptionListProps){
    const { t } = useTranslation();
    
    return (
        <div>
            {options.map(option=>{
                const Icon = option.icon
                return (
                <button key={option.value} type="button" onClick={()=>onSelect(option.value)} 
                className="flex items-center my-2 gap-2 px-3 py-2.5 rounded-xl w-full hover:bg-gray-50 dark:hover:bg-(--bg-item-dark-hover)">
                    {Icon && <Icon size={18} className="text-gray-400"/>}
                    <span className="text-sm text-gray-600 dark:text-(--color-text-bgdark)">{t(option.labelKey)}</span>
                        
                        {selectedValue === option.value && (
                            <IoIosCheckmark size={20}className="text-(--Primary)"/>
                        )}
                </button>
)})}
        </div>
    )
}
export default OptionList;