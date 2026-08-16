import { Link, useNavigate } from "react-router-dom"
import LoginForm from "../components/auth/LoginForm"
import { useTranslation } from "react-i18next"
import AuthHeaderActions from "../components/auth/AuthHeaderActions";

function Login() {
  
  const navigate = useNavigate()
  const { t } = useTranslation();
  return (
    
    <div className="min-h-screen flex flex-col justify-center px-6 bg-white items-center">
      <AuthHeaderActions/>
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{t("auth.loginTitle")}</h1>
        <p className="text-sm text-gray-400 mb-8">
            {t("auth.loginSubtitle")}
        </p>

        <LoginForm onSuccess={() => navigate("/")} />

          <div className="mt-6 text-center text-sm text-gray-500">
              {t("auth.noAccount")}{" "}
              <Link
                to="/register"
                className="text-(--Primary) font-semibold hover:underline"
              >
                {t("auth.registerLink")}
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Login