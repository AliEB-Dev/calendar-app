import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import userIMG from "../../assets/img/User.png"
import { FaCamera } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import EditProfileForm from "./EditProfileForm";
import { updateAvatar, updateProfile } from "../../store/slices/authSlice"
import { useTranslation } from "react-i18next";

function ProfileHeader() {
    const currentUser = useAppSelector(state => state.auth.currentUser)
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const [isExpanded,setIsExpanded]=useState(false);
    const [name,setName] =useState(currentUser?.name ?? "")

    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleCameraClick = () => {
    fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !currentUser) return

    const reader = new FileReader()
        reader.onload = () => {
            const base64 = reader.result as string
            dispatch(updateAvatar({ userId: currentUser.id, avatarUrl: base64 }))
        }
        reader.readAsDataURL(file)
    }
    const handleSaveName = ()=> {
        if(!currentUser || !name.trim()) return
        dispatch(updateProfile({userId: currentUser.id,name:name.trim()}))
        setIsExpanded(false)
    }
    return (
        <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
        <button type="button" onClick={() => setIsExpanded((prev) => !prev)} className="w-full p-4 flex items-center justify-between" >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={currentUser?.avatarUrl || userIMG} alt={t("setting.profileImage")} className="w-16 h-16 rounded-full object-cover" />
              <span
                 onClick={(e) => {
                  e.stopPropagation()
                  handleCameraClick()
                }}
                className="absolute bottom-0 left-0 bg-(--Primary) p-1.5 rounded-full border-2 border-white"
              >
                <FaCamera size={10} className="text-white" />
              </span>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-base">{currentUser?.name ?? t("setting.user")}</h2>
              <span className="text-gray-400 text-sm">{currentUser?.email ?? ""}</span>
            </div>
          </div>
          <IoIosArrowDown className={`text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} size={20} />
        </button>

        {isExpanded && (
          <EditProfileForm
              name={name}
              email={currentUser?.email ?? ""}
              onNameChange={setName}
              onSave={handleSaveName}
              onRemoveAvatar={() => {
                if (!currentUser) return

                dispatch(
                  updateAvatar({
                    userId: currentUser.id,
                    avatarUrl: "",
                  })
                )
              }}
              onChangeAvatar={handleCameraClick}
            />
        )}
      </div>
  )
}
export default ProfileHeader;