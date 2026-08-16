import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/slices/authSlice";
import AuthError from "./AuthError";
import AuthInput from "./AuthInput";
import { IoIosMail } from "react-icons/io";
import PasswordInput from "./PasswordInput";
import { useTranslation } from "react-i18next";

interface LoginFormProps{
    onSuccess: ()=> void
}
function LoginForm({onSuccess} : LoginFormProps) {
    const {t} = useTranslation();
    const dispatch = useAppDispatch()
    const {status, error} = useAppSelector((state)=> state.auth)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [localError, setLocalError] = useState("")

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        setLocalError("")

        if(!email.trim()){
            setLocalError(t("auth.emailPlaceholder"))
            return
        }
        if(!password.trim()){
            setLocalError(t("auth.passwordPlaceholder"))
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
        label={t("auth.email")}
        type="email"
        value={email}
        onChange={setEmail}
        placeholder={t("auth.emailPlaceholder")}
        Icon={IoIosMail}
        required
        />

        <PasswordInput
        label={t("auth.password")}
        value={password}
        onChange={setPassword}
        placeholder={t("auth.passwordPlaceholder")}
        required
        />

        <button 
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-(--Primary) text-white rounded-xl py-3.5 font-bold text-sm disabled:opacity-50 mt-2"
        >
            {status === "loading" ? t("auth.registering") : t("auth.login")}
        </button>

    </form>
  )
}

export default LoginForm