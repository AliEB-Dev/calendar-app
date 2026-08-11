import { Link, useNavigate } from "react-router-dom"
import RegisterForm from "../components/auth/RegisterForm"

function Register() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-white items-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">ایجاد حساب کاربری</h1>
        <p className="text-sm text-gray-400 mb-8">
          اطلاعات خود را وارد کنید تا حساب کاربری جدید ایجاد شود
        </p>

        <RegisterForm onSuccess={() => navigate("/")} />
      </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link
            to="/login"
            className="font-semibold text-(--Primary) hover:underline"
          >
            وارد شوید
          </Link>
        </div>

    </div>
  )
}

export default Register