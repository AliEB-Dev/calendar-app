
import type { SettingSectionProps } from "./types"

function SettingSection({title ,children}: SettingSectionProps) {
  
  return (
      <div className="w-full flex flex-col gap-1 mb-6">
        <h3 className="text-sm text-gray-400 font-bold px-1 mb-1">{title}</h3>
        <div className="w-full bg-white rounded-2xl px-1 overflow-hidden shadow-sm">
            {children}
        </div>
    </div>
  )
}

export default SettingSection