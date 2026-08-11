import { IoIosCloudDownload, IoIosCloudUpload, IoIosTrash } from "react-icons/io"
import SettingItem from "./SettingItem"
import SettingSection from "./SettingSection"
import { useTranslation } from "react-i18next"

function DataBackupSection() {
  const {t} = useTranslation()
  return (
    <SettingSection title={t("settings.dataBackup")}>
      <SettingItem 
      icon={IoIosCloudUpload} 
      iconBg="#DBEAFE" 
      iconColor="#2563EB" 
      title={t("settings.backup")}
      subtitle={t("settings.lastBackup")} />

      <SettingItem 
      icon={IoIosCloudDownload} 
      iconBg="#DBEAFE" 
      iconColor="#2563EB" 
      title={t("settings.restore")}
      subtitle={t("settings.restoreSubtitle")}/>

      <SettingItem 
      icon={IoIosTrash} 
      iconBg="#FEE2E2" 
      iconColor="#DC2626" 
      title={t("settings.deleteAll")} 
      subtitle={t("settings.deleteAllSubtitle")}
      isLast />

    </SettingSection>
  )
}

export default DataBackupSection