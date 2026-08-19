import FormField from "./FormField";

interface DescriptionFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
} 

function DescriptionField({label,value,onChange,placeholder}:DescriptionFieldProps){
    return(
      <FormField label={label}>
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-(--Primary)"
        />
      </FormField>
    )
}
export default DescriptionField;