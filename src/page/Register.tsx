import { Link, useNavigate } from "react-router-dom"
import RegisterForm from "../components/auth/RegisterForm"
import { useTranslation } from "react-i18next"
import AuthHeaderActions from "../components/auth/AuthHeaderActions"

function Register() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-white items-center ">
      <AuthHeaderActions/>
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{t("auth.registerTitle")}</h1>
        <p className="text-sm text-gray-400 mb-8">
          {t("auth.registerSubtitle")}
        </p>

        <RegisterForm onSuccess={() => navigate("/")} />
      </div>
        <div className="mt-6 text-center text-sm text-gray-500">
           {t("auth.haveAccount")}{" "} 
          <Link
            to="/login"
            className="font-semibold text-(--Primary) hover:underline"
          >
            {t("auth.loginLink")}
          </Link>
        </div>

    </div>
  )
}

export default Register