import { useState } from "react";
import { IoIosLock,IoIosEye , IoIosEyeOff } from "react-icons/io";

interface PasswordInputProps{
    label: string
    value: string
    onChange: (v:string) => void
    placeholder: string
    required ?: boolean
    minLength ?: number
}

function PasswordInput({label,value,onChange,placeholder,required,minLength}: PasswordInputProps){
    const [show,setShow] = useState(false)

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">{label}</label>
            <div className="relative">
                <input 
                type={show ? 'text' : "password"} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                minLength={minLength}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 pl-11 text-sm outline-none focus:border-(--Primary)"
                />
                <IoIosLock className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <button 
                type="button"
                onClick={()=> setShow((prev)=> !prev)}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                >
                    {show ? <IoIosEyeOff size={18}/> : <IoIosEye size={18} />}
                </button>
            </div>
        </div>
    )
}
export default PasswordInput;