import type { FormFieldProps } from "./types"

function FormField({label,children} : FormFieldProps) {
  return (
    <div className="flex gap-3 flex-col">
        <label className="text-sm font-bold text-gray-700">{label}</label>
        {children}
    </div>
  )
}

export default FormField