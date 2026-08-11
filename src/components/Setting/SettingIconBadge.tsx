
import type {SettingIconBadgeProps} from './types/index'

function SettingIconBadge({icon : Icon , bg , color}:SettingIconBadgeProps) {
  return (
    <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
    style={{backgroundColor: bg}}>
        <Icon size={17} style={{color}} />
    </span>
  )
}

export default SettingIconBadge