import { useTranslation } from "react-i18next";
import { getPasswordStrength } from "../../utils/passwordStrength";

interface PasswordStrengthProps{
    password: string
}

const strengthColors = ["bg-gray-200", "bg-rose-400", "bg-orange-400", "bg-emerald-500"]

function PasswordStrength({password}:PasswordStrengthProps) {
    const {t} = useTranslation()
    const strength = getPasswordStrength(password)

    return(
        <div className="flex items-center gap-2 mt-1">
            <div className="flex gap-1 flex-1">
                {[0,1,2].map((i)=> (
                    <span key={i} className={`h-1.5 flex-1 rounded-full ${i< strength ? strengthColors[strength] : "bg-gray-200"}`}/>
                ))}
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{t("auth.passwordStrength")}</span>
        </div>
    )
}

export default PasswordStrength