import type { IconType } from "react-icons";

interface AuthInputProps {
    label : string
    type : string
    value : string
    onChange : (v:string) => void
    placeholder: string
    Icon: IconType
    pattern?: string
    required?: boolean
    minLength?: number 
}

function AuthInput({label,type,value,onChange,placeholder,Icon,required,minLength,pattern}:AuthInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">{label}</label>
            <div className="relative">
                <input 
                type={type} 
                value={value}
                pattern={pattern}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                minLength={minLength}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm outline-none focus:border-(--Primary)"
                 />
                 <Icon className="absolute right-3.5 top-1 translate-y-1/2 text-gray-400 " size={18}/>
            </div>
        </div>
    )
}

export default AuthInput;