import { IoIosHelpCircle, IoIosInformationCircle, IoIosLock, IoIosLogOut } from "react-icons/io";
import SettingItem from "./SettingItem";
import SettingSection from "./SettingSection";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";
import { useTranslation } from "react-i18next";
import useDirection from "../../hooks/useDirection";
import Swal from "sweetalert2";
import DeleteAllData from "./DeleteAllData";

function OtherSection() {
  const {t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isRTL } = useDirection();
  const handleLogout = () => {
    Swal.fire({
      title : t("settings.logout"),
      text : t("settings.logoutConfirmText"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("settings.logoutConfirm"),
      cancelButtonText: t("settings.cancel"),
      confirmButtonColor: "#DC2626",
      cancelButtonColor: "#6B7280",
      reverseButtons: isRTL,
    }).then((res)=> {
      if(res.isConfirmed) {
        dispatch(logout());
        navigate("/login")
      }
    });
  };

  return (
   <SettingSection title={t("settings.other")}>
      <SettingItem icon={IoIosLock} iconBg="#E8EFE6" iconColor="#6B7A2F" title={t("settings.privacy")} subtitle={t("settings.privacySubtitle")} arrow="navigate" onClick={() => navigate("/privacy")}/>
      <SettingItem icon={IoIosHelpCircle} iconBg="#E8EFE6" iconColor="#6B7A2F" title={t("settings.helpSupport")} subtitle={t("settings.helpSupportSubtitle")} arrow="navigate" onClick={() => navigate("/help")} />
      <SettingItem icon={IoIosInformationCircle} iconBg="#E8EFE6" iconColor="#6B7A2F" title={t("settings.about")} subtitle={t("settings.version")} arrow="navigate" onClick={() => navigate("/about")}/>
      <DeleteAllData/>
      <SettingItem icon={IoIosLogOut} iconBg="#FEE2E2" iconColor="#DC2626" title={t("settings.logout")}  subtitle={t("settings.logoutSubtitle")} onClick={handleLogout} isLast/>
   </SettingSection>
  )
}

export default OtherSection