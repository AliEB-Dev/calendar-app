import { IoIosNotifications, IoIosRepeat, IoIosTime } from "react-icons/io"
import SettingSection from "./SettingSection"
import SettingToggleItem from "./SettingToggleItem"
import { useState } from "react"
import SettingItem from "./SettingItem"
import { useTranslation } from "react-i18next"

function RemindersSection() {
  const {t} = useTranslation();
  const [reminderEnabled, setReminderEnabled] = useState(true)
  return (
    <SettingSection title={t("settings.reminders")}>
      <SettingToggleItem 
      icon={IoIosNotifications}
      iconBg="#D1FAE5"
      iconColor="#059669"
      title={t("settings.reminderNotifications")}
       subtitle={t("settings.reminderNotificationsSubtitle")}
        checked={reminderEnabled}
        onChange={setReminderEnabled}
      />
      <SettingItem
        icon={IoIosTime}
        iconBg="#D1FAE5"
        iconColor="#059669"
        title= {t("settings.defaultReminderTime")}
        subtitle={t("settings.minutesBefore")}     
      />
      <SettingItem
       icon={IoIosRepeat} 
       iconBg="#D1FAE5" 
       iconColor="#059669" 
       title={t("settings.defaultRepeat")} 
       subtitle={t("settings.once")} 
       isLast />

    </SettingSection>
  )
}

export default RemindersSection