import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { register } from "../../store/slices/authSlice"
import AuthError from "./AuthError"
import AuthInput from "./AuthInput"
import { IoIosMail, IoIosPerson } from "react-icons/io"
import PasswordInput from "./PasswordInput"
import PasswordStrength from "./PasswordStrength"
import TermsCheckbox from "./TermsCheckbox"

interface RegisterFormProps{
    onSuccess: ()=> void
}
function RegisterForm({onSuccess}: RegisterFormProps) {
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
            setLocalError("رمز عبور و تکرار آن یکسان نیستند")
            return
        }
        if(!agreed){
            setLocalError("لازم است شرایط و قوانین را بپذیرید")
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
        label="نام و نام خانوادگی"
        type="text"
        value={name}
        onChange={setName}
        placeholder="نام و نام خانوادگی خود را وارد کنید"
        Icon={IoIosPerson}
        required
        />
        <AuthInput 
        label="ایمیل"
        type="email"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
        value={email}
        onChange={setEmail}
        placeholder="ایمیل خود را وارد کنید"
        Icon={IoIosMail}
        required
        />
        <div>
            <PasswordInput 
            label="رمز عبور"
          value={password}
          onChange={setPassword}
          placeholder="رمز عبور خود را وارد کنید"
          required
          minLength={6}
          />
            <PasswordStrength password={password}/>
        </div>

        <PasswordInput
        label="تکرار رمز عبور"
        value={confirmPassword}
        onChange={setConfirmPassword}
        placeholder="رمز عبور خود را دوباره وارد کنید"
        required
        />
        <TermsCheckbox checked={agreed} onChange={setAgreed}/>

        <button 
        type="submit"
        disabled = {status === "loading"}
        className="w-full bg-(--Primary) text-white rounded-xl py-3.5 font-bold text-sm disabled:opacity-50 mt-2"
        >
            {status === "loading" ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </button>

    </form>
  )
}

export default RegisterForm