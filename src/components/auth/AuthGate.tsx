import type { ReactNode } from "react";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface AuthGateProps{
    children : ReactNode
}

function AuthGate({children}:AuthGateProps) {
    const currentUser = useAppSelector((state) => state.auth.currentUser)
    const isLocked = !currentUser

    return (
        <div className="relative">
            <div className={isLocked ? "pointer-events-none select-none blur-[5px]": ""}>
                {children}
            </div>

            {isLocked && (
                <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-6 flex flex-col items-center text-center max-w-xs w-full">
                        <div className="w-12 h-12 rounded-full bg-(--Primary)/12 flex items-center justify-center mb-3">
                            <IoIosLock size={22} className="text-(--Primary)"/>
                        </div>
                        <p className="font-bold text-gray-800 text-sm mb-1">
                             جهت دسترسی بیشتر وارد شوید
                        </p>
                        <p className="text-xs text-gray-400 mb-4">
                              برای استفاده از این بخش باید وارد حساب کاربری خود شوید   
                        </p>

                        <Link to="/login" className="w-full bg-(--Primary) text-white rounded-xl py-2.5 text-sm font-bold mb-2">ورود</Link>
                        <Link to="/register" className="w-full text-(--Primary) text-sm font-bold py-1">
                             ثبت‌نام کنید
                        </Link>

                    </div>
                </div>
            )}
        </div>
    )
}
export default AuthGate;