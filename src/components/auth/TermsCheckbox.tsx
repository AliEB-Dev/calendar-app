import { useTranslation } from "react-i18next"

interface TermsCheckboxProps{
    checked: boolean
    onChange : (v:boolean) => void
}

function TermsCheckbox({checked,onChange}:TermsCheckboxProps) {
    const { t } = useTranslation(); 
    return (
        <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer ">
            <input type="checkbox" checked={checked} 
            onChange={(e) => onChange(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 accent-(--Primary)"
            />
                {t("auth.agreeTerms")}
        </label>
    )
}
export default TermsCheckbox