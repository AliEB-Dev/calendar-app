import { useTranslation } from "react-i18next";
import FormField from "./FormField";
import type { IconType } from "react-icons";

interface InputsSharedProps {
  label: string
  type : string
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder : string
  Icon : IconType
}

function InputsShared({label,type,value,onChange,placeholder,Icon}:InputsSharedProps) {

    const { t } = useTranslation();
    return (
       <FormField label={t(`${label}`)}>
        <div className="relative">
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={t(`${placeholder}`)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-10 text-sm outline-none focus:border-(--Primary)"
          />
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-(--Primary)" size={16} />
        </div>
      </FormField>
    )
}
export default InputsShared;