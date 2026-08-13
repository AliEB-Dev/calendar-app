import { IoIosNotifications, IoIosRepeat, IoIosTime } from "react-icons/io"
import SettingSection from "./SettingSection"
import SettingToggleItem from "./SettingToggleItem"
import { useState } from "react"
import SettingItem from "./SettingItem"
import { useTranslation } from "react-i18next"
import type { Option } from "./OptionList"
import OptionList from "./OptionList"

type OpenItem = "reminderTime" | "repeat" | null;

const minutesBefore: Option[] = [
  { value: "5", labelKey: "minutesBefore.five" },
  { value: "10", labelKey: "minutesBefore.ten" },
  { value: "15", labelKey: "minutesBefore.fifteen" },
  { value: "30", labelKey: "minutesBefore.thirty" },
  { value: "60", labelKey: "minutesBefore.sixty" },
];
const repeatOptions: Option[] = [
  { value: "once", labelKey: "repeat.once" },
  { value: "daily", labelKey: "repeat.daily" },
  { value: "weekly", labelKey: "repeat.weekly" },
  { value: "monthly", labelKey: "repeat.monthly" },
  { value: "yearly", labelKey: "repeat.yearly" },
];

function RemindersSection() {
  const {t} = useTranslation();
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [openItem, setOpenItem] = useState<OpenItem>(null);
  const [selectedReminderTime, setSelectedReminderTime] = useState("5");
  const [selectedRepeat, setSelectedRepeat] = useState("once");

  const handleToggle = (item: Exclude<OpenItem, null>) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };
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
        isopen={openItem === "reminderTime"}
        onClick={()=> handleToggle("reminderTime")}   
      >
          <OptionList options={minutesBefore} selectedValue={selectedReminderTime} onSelect={setSelectedReminderTime}/>      
          
      </SettingItem>
      <SettingItem
       icon={IoIosRepeat} 
       iconBg="#D1FAE5" 
       iconColor="#059669" 
       title={t("settings.defaultRepeat")} 
       subtitle={t("settings.once")} 
       isopen={openItem === "repeat"}
       onClick={() => handleToggle("repeat")}
       isLast >
        <OptionList options={repeatOptions} selectedValue={selectedRepeat} onSelect={setSelectedReminderTime}/>
       </SettingItem>

    </SettingSection>
  )
}

export default RemindersSection