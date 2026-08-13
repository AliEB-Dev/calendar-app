import { IoIosArrowDown } from "react-icons/io"
import SettingIconBadge from "./SettingIconBadge"
import type { SettingItemProps } from "./types/index"


function SettingItem({ icon, iconBg, iconColor, title, subtitle, onClick, isLast, isopen , children }: SettingItemProps) {
  return (
    <div className={`mt-1 ${!isLast ? "border-b border-gray-50" : ""} ${isopen? "bg-(--PrimaryGlass) rounded-xl  border-1 overflow-hidden":""} `}
    style={{ borderColor: "var(--Glass-Border)" }}>
      <button onClick={onClick}
        className={`w-full flex items-center justify-between py-3 px-1 text-right 
          ${isopen? "bg-(--Header-Glass) w-full":""}
         ${!isLast ? "border-b border-gray-100" : ""}`}>
        <div className="flex items-center  w-full gap-3 justify-start ">
          <SettingIconBadge icon={icon} bg={iconBg} color={iconColor} />
          <div className="flex flex-col  items-start ">
            <span className="text-sm font-bold text-gray-800">{title}</span>
            <span className= "text-xs text-gray-500">{subtitle}</span>
          </div>
        </div>
        <IoIosArrowDown
          className={`transition-transform
            ${isopen ? "rotate-180" : ""}
            ${isopen? "text-white":"text-gray-400 "}`}
          size={16}
        />
      </button>
      {isopen && children && (<div className="pb-2 px-2">{children}</div>)}
    </div>
  )
}

export default SettingItem