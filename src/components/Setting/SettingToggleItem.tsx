import  SettingIconBadge  from "./SettingIconBadge"

import type {SettingToggleItemProps} from './types/index'
function SettingToggleItem({icon,iconBg,iconColor,title,subtitle,checked,onChange,isLast}:SettingToggleItemProps) {
  return (
    <div className= {`w-full flex items-center justify-between py-3 px-2 ${
        !isLast ? "border-b border-gray-100" : ""
    }`} onClick={() => onChange(!checked)}>
        <div className="flex items-center gap-3">
            <SettingIconBadge icon={icon} bg={iconBg} color={iconColor} />
            <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-gray-800">{title}</span>
                <span className="text-xs text-gray-400">{subtitle}</span>
            </div>
        </div>
        <button
            
            className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors  ${
          checked ? "bg-(--Primary) justify-end" : "bg-gray-200 justify-start"
        }`}
      >
        <span className="w-5 h-5 bg-white rounded-full shadow-sm" />
      </button>
    </div>
  )
}

export default SettingToggleItem