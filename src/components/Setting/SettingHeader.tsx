import { IoIosSettings } from "react-icons/io"
import { useTranslation } from "react-i18next"
import ProfileHeader from "./ProfileHeader";

function SettingHeader() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 justify-center py-3">
        <IoIosSettings size={22} className="text-(--Primary)" />
        <h1 className="font-bold text-lg">{t("settings.title")}</h1>
      </div>
      <ProfileHeader/>
    </div>
  )
}

export default SettingHeader