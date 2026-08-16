import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { register } from "../../store/slices/authSlice"
import AuthError from "./AuthError"
import AuthInput from "./AuthInput"
import { IoIosMail, IoIosPerson } from "react-icons/io"
import PasswordInput from "./PasswordInput"
import PasswordStrength from "./PasswordStrength"
import TermsCheckbox from "./TermsCheckbox"
import { useTranslation } from "react-i18next"

interface RegisterFormProps{
    onSuccess: ()=> void
}
function RegisterForm({onSuccess}: RegisterFormProps) {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const {status,error} = useAppSelector((state) => state.auth)

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [agreed,setAgreed]=useState(false);
    const [localError,setLocalError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLocalError("")

        if(password !== confirmPassword){
            setLocalError(t("auth.passwordMismatch"))
            return
        }
        if(!agreed){
            setLocalError(t("auth.agreeTermsRequired"))
            return
        }
        const result = await dispatch(register({name,email,password}))

        if(register.fulfilled.match(result)){
            onSuccess()
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
        {(error || localError) && <AuthError error = {localError || error || ""} />}
        <AuthInput 
        label={t("auth.fullName")}
        type="text"
        value={name}
        onChange={setName}
        placeholder={t("auth.fullNamePlaceholder")}
        Icon={IoIosPerson}
        required
        />
        <AuthInput 
        label={t("auth.email")}
        type="email"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
        value={email}
        onChange={setEmail}
        placeholder={t("auth.emailPlaceholder")}
        Icon={IoIosMail}
        required
        />
        <div>
            <PasswordInput 
                label={t("auth.password")}
                value={password}
                onChange={setPassword}
                placeholder={t("auth.passwordPlaceholder")}
                required
                minLength={6}
            />
            <PasswordStrength password={password}/>
        </div>

        <PasswordInput
        label={t("auth.confirmPassword")}
        value={confirmPassword}
        onChange={setConfirmPassword}
        placeholder={t("auth.confirmPasswordPlaceholder")}
        required
        />
        <TermsCheckbox checked={agreed} onChange={setAgreed}/>

        <button 
        type="submit"
        disabled = {status === "loading"}
        className="w-full bg-(--Primary) text-white rounded-xl py-3.5 font-bold text-sm disabled:opacity-50 mt-2"
        >
            {status === "loading" ? t("auth.registering") : t("auth.register")}
        </button>

    </form>
  )
}

export default RegisterForm