import type { FormFieldProps } from "./types"

function FormField({label,children} : FormFieldProps) {
  return (
    <div className="flex gap-3 flex-col text-gray-700 dark:bg-(--bg-item-dark) dark:text-(--color-text-bgdark)">
        <label className="text-sm font-bold ">{label}</label>
        {children}
    </div>
  )
}

export default FormField