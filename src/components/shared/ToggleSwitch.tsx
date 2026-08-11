interface ToggleSwitchProps {
  checked: boolean
  onChange: (v: boolean) => void
}

function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <button
    type="button"
    onClick={()=> onChange(!checked)}
    className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors
        ${checked ? "bg-(--Primary) justify-end" : "bg-gray-200 justify-start"}`}
    >
        <span className="w-5 h-5 bg-white rounded-full shadow-sm"/>
    </button>
  )
}

export default ToggleSwitch