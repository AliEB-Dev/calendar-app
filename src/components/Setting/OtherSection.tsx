import { IoIosHelpCircle, IoIosInformationCircle, IoIosLock, IoIosLogOut } from "react-icons/io";
import SettingItem from "./SettingItem";
import SettingSection from "./SettingSection";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";
import { useTranslation } from "react-i18next";

function OtherSection() {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }
  return (
   <SettingSection title={t("settings.other")}>
         <SettingItem icon={IoIosLock} iconBg="#EDE9FE" iconColor="#6B7A2F" title={t("settings.privacy")} subtitle={t("settings.privacySubtitle")}/>
      <SettingItem icon={IoIosHelpCircle} iconBg="#EDE9FE" iconColor="#6B7A2F" title={t("settings.helpSupport")} subtitle={t("settings.helpSupportSubtitle")} />
      <SettingItem icon={IoIosInformationCircle} iconBg="#EDE9FE" iconColor="#6B7A2F" title={t("settings.about")} subtitle={t("settings.version")} isLast />
      <SettingItem
        icon={IoIosLogOut}
        iconBg="#FEE2E2"
        iconColor="#DC2626"
        title={t("settings.logout")} 
        subtitle={t("settings.logoutSubtitle")}
        onClick={handleLogout}
        isLast
      />
   </SettingSection>
  )
}

export default OtherSection