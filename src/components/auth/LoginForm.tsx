import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/slices/authSlice";
import AuthError from "./AuthError";
import AuthInput from "./AuthInput";
import { IoIosMail } from "react-icons/io";
import PasswordInput from "./PasswordInput";

interface LoginFormProps{
    onSuccess: ()=> void
}
function LoginForm({onSuccess} : LoginFormProps) {
    const dispatch = useAppDispatch()
    const {status, error} = useAppSelector((state)=> state.auth)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [localError, setLocalError] = useState("")

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        setLocalError("")

        if(!email.trim()){
            setLocalError("ایمیل را وارد کنید")
            return
        }
        if(!password.trim()){
            setLocalError("رمز عبور را وارد کنید")
            return
        }

        const result = await dispatch(login({email,password}))

        if(login.fulfilled.match(result)){
            onSuccess()
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <AuthError error={localError|| error || ""} />
        <AuthInput 
        label="ایمیل"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="ایمیل خود را وارد کنید"
        Icon={IoIosMail}
        required
        />

        <PasswordInput
        label="رمز عبور"
        value={password}
        onChange={setPassword}
        placeholder="رمز عبور خود را وارد کنید"
        required
        />

        <button 
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-(--Primary) text-white rounded-xl py-3.5 font-bold text-sm disabled:opacity-50 mt-2"
        >
            {status === "loading" ? "در حال ورود..." : "ورود"}
        </button>

    </form>
  )
}

export default LoginForm