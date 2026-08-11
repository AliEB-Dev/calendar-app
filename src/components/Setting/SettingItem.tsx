import { IoIosArrowDown } from "react-icons/io"
import SettingIconBadge from "./SettingIconBadge"
import type { SettingItemProps } from "./types/index"


function SettingItem({ icon, iconBg, iconColor, title, subtitle, onClick, isLast, isopen , children }: SettingItemProps) {
  return (
    <div className={!isLast ? "border-b border-gray-100" : ""}>
      <button onClick={onClick}
        className={`w-full flex items-center justify-between py-3 text-right ${!isLast ? "border-b border-gray-100" : ""}`}>
        <div className="flex items-center gap-3">
          <SettingIconBadge icon={icon} bg={iconBg} color={iconColor} />
          <div className="flex flex-col items-start">
            <span className="text-sm font-bold text-gray-800">{title}</span>
            <span className="text-xs text-gray-400">{subtitle}</span>
          </div>
        </div>
        <IoIosArrowDown
          className={`text-gray-300 transition-transform ${isopen ? "rotate-180" : ""
            }`}
          size={16}
        />
      </button>
      {isopen && children && (<div className="pb-2">{children}</div>)}
    </div>
  )
}

export default SettingItem