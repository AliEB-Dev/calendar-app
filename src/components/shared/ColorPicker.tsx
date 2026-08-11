import { IoIosCheckmark } from "react-icons/io"

interface ColorPickerProps {
  value: string
  onChange: (c: string) => void
}

const colors = ["#6366F1", "#3B82F6", "#10B981", "#F59E0B", "#EC4899", "#EF4444", "#9CA3AF"]

function ColorPicker({ value, onChange }: ColorPickerProps) {

  return (
    <div className="flex items-center gap-3">
        {colors.map((c)=> (
            <button
            key={c}
            type="button"
            onClick={()=> onChange(c)}
            style={{backgroundColor: c}}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            >
                {value === c && <IoIosCheckmark size={20} className="text-white"/> }
            </button>
        ))}
    </div>
  )
}

export default ColorPicker