import { IoIosSettings, IoIosArrowDown } from "react-icons/io"
import { FaCamera } from "react-icons/fa"
import userIMG from "../../assets/img/User.png"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { useRef, useState } from "react"
import { updateAvatar, updateProfile } from "../../store/slices/authSlice"
import { useTranslation } from "react-i18next"

function SettingHeader() {
  const { t } = useTranslation();
  const currentUser = useAppSelector(state => state.auth.currentUser)
  const dispatch = useAppDispatch()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isExpanded,setIsExpanded]=useState(false);
  const [name,setName] =useState(currentUser?.name ?? "")

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
    <div className="w-full">
      <div className="flex items-center gap-2 justify-center py-3">
        <IoIosSettings size={22} className="text-(--Primary)" />
        <h1 className="font-bold text-lg">{t("settings.title")}</h1>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="w-full p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={currentUser?.avatarUrl || userIMG}
                alt={t("setting.profileImage")}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  handleCameraClick()
                }}
                className="absolute bottom-0 left-0 bg-(--Primary) p-1.5 rounded-full border-2 border-white"
              >
                <FaCamera size={10} className="text-white" />
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-base">{currentUser?.name ?? t("setting.user")}</h2>
              <span className="text-gray-400 text-sm">{currentUser?.email ?? ""}</span>
            </div>
          </div>

          <IoIosArrowDown
            className={`text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            size={20}
          />
        </button>

        {isExpanded && (
          <div className="px-4 pb-4 flex flex-col gap-3 border-t border-gray-100 pt-4 ">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">{t("settings.profileName")}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-(--Primary)"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">{t("settings.profileEmail")}</label>
              <input
                type="email"
                value={currentUser?.email ?? ""}
                disabled
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 text-gray-400"
              />
            </div>
            <div className="flex gap-5 justify-center ">
                <button className="bg-red-400 text-white rounded-xl p-1 px-5" onClick={() => {
                  if (!currentUser) return;
                  dispatch(updateAvatar({ userId: currentUser.id, avatarUrl: "" }));
                  }}>{t("common.cancel")}</button>
                <button className="bg-gray-500 p-3 rounded-xl text-white"               
                 onClick={(e) => {
                  e.stopPropagation()
                  handleCameraClick()
                }}>
                  {t("common.save")}
                </button>
            </div>
                <div className="flex justify-center">

            <button
              type="button"
              onClick={handleSaveName}
              className="w-full md:w-7/12 bg-(--Primary) text-white rounded-xl py-2.5 text-sm font-bold mt-1"
            >
              {t("settings.saveChanges")}
            </button>
                </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default SettingHeader