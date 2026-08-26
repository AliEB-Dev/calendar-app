import { IoIosRepeat, IoIosTime } from "react-icons/io"
import SettingSection from "./SettingSection"
import { useState } from "react"
import SettingItem from "./SettingItem"
import { useTranslation } from "react-i18next"
import OptionList from "./OptionList"
import { minutesBefore, repeatOptions } from "./constants"

type OpenItem = "reminderTime" | "repeat" | null;

function RemindersSection() {
  const {t} = useTranslation();
  const [openItem, setOpenItem] = useState<OpenItem>(null);
  const [selectedReminderTime, setSelectedReminderTime] = useState("5");
  const [selectedRepeat, setSelectedRepeat] = useState("once");

  const handleToggle = (item: Exclude<OpenItem, null>) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };
  return (
    <SettingSection title={t("settings.reminders")}>
      <SettingItem
        icon={IoIosTime}
        iconBg="#D1FAE5"
        iconColor="#059669"
        title= {t("settings.defaultReminderTime")}
        subtitle={t("settings.minutesBefore")}  
        isopen={openItem === "reminderTime"}
        arrow="down"
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
       arrow="down"
       onClick={() => handleToggle("repeat")}
       isLast >
        <OptionList options={repeatOptions} selectedValue={selectedRepeat} onSelect={setSelectedRepeat}/>
       </SettingItem>

    </SettingSection>
  )
}

export default RemindersSection