import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import SettingIconBadge from "./SettingIconBadge"
import type { SettingItemProps } from "./types/index"
import useDirection from "../../hooks/useDirection";

function SettingItem({ icon, iconBg, iconColor, title, subtitle, onClick, isLast, isopen ,arrow, children }: SettingItemProps) {
  const {isRTL} = useDirection()
  return (
    <div className={`text-gray-800 mt-1 bg-(--bg-item-light) dark:bg-(--bg-item-dark) dark:text-(--color-text-bgdark) ${!isLast ? "border-b border-gray-50" : ""} ${isopen? "bg-(--PrimaryGlass) rounded-xl  border-1 overflow-hidden":""} `}
    style={{ borderColor: "var(--Glass-Border)" }}>
      <button onClick={onClick}
        className={`w-full flex items-center justify-between py-3 px-1 text-right 
          ${isopen? "bg-(--Header-Glass) w-full":""}
         ${!isLast ? "border-b border-gray-100 dark:border-gray-700" : ""} `}>
        <div className="flex items-center  w-full gap-3 justify-start ">
          <SettingIconBadge icon={icon} bg={iconBg} color={iconColor} />
          <div className="flex flex-col  items-start ">
            <span className="text-sm font-bold ">{title}</span>
            <span className= "text-xs text-gray-500 dark:text-gray-400">{subtitle}</span>
          </div>
        </div>
        {arrow === "down" && (
          <IoIosArrowDown className={`shrink-0 transition-transform duration-200 ${isopen ? "rotate-180" : ""} ${isopen ? "text-white" : "text-gray-400"}`}
          size={16}
          />
        )}
        {arrow === "navigate" && (
          <IoIosArrowForward
            className={`shrink-0 text-gray-400 ${isRTL ? "rotate-180" : ""}`}
            size={18}
          />
        )}
      </button>
      {isopen && children && (<div className="pb-2 px-2">{children}</div>)}
    </div>
  )
}

export default SettingItem