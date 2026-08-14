import {IoIosGlobe,IoIosColorPalette,IoIosNotifications, IoIosCalendar} from "react-icons/io";
import  SettingSection  from "./SettingSection";
import  SettingItem  from "./SettingItem";
import { useTranslation } from "react-i18next"
import { useState } from "react";
import SettingToggleItem from "./SettingToggleItem";
import OptionList from "./OptionList";
import { IoMoon, IoSunny } from "react-icons/io5";
import type { Option } from "./OptionList";

const languages: Option[] = [
  { value: "fa", labelKey: "settings.languagePersian"  },
  { value: "en", labelKey: "settings.languageEnglish" },
];
const appearances:Option[] = [
  { value: "light", labelKey: "settings.lightMode",icon: IoSunny  },
  { value: "dark", labelKey: "settings.darkMode",icon: IoMoon  },
];

const daysOfWeek:Option[] = [
  { value: "saturday", labelKey: "daysOfWeek.saturday" },
  { value: "sunday", labelKey: "daysOfWeek.sunday" },
  { value: "monday", labelKey: "daysOfWeek.monday" },
  {value: "tuesday", labelKey : "daysOfWeek.tuesday"},
  {value : "wednesday" , labelKey : "daysOfWeek.wednesday"},
  {value: "thursday",labelKey:"daysOfWeek.thursday"},
  {value: "friday",labelKey:"daysOfWeek.friday"}
];


type OpenItem = "language" | "appearance" | "firstDay" | null;

function GeneralSection() {
  const {t,i18n} = useTranslation();
  const [openItem, setOpenItem] = useState<OpenItem>(null);


  const [appearance, setAppearance] = useState("light");
  const [firstDay, setFirstDay] = useState("saturday");

  const [NotificationEnabled, setNotificationsEnabled] = useState(true);

  const handleToggle = (item: Exclude<OpenItem, null>) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  const handleSelectLanguage = (code: string) => {
    i18n.changeLanguage(code)
    setOpenItem(null)
  }

  const handleSelectAppearance = (value:string)=>{
    setAppearance(value);
    setOpenItem(null)
  }

   const handleSelectFirstDay = (value: string) => {
    setFirstDay(value);
    setOpenItem(null)
  };
  return (
    <SettingSection title={t("settings.general")}>
        <SettingItem 
        icon={IoIosGlobe} 
        iconBg="#E8EEF7"
        iconColor="#4F6B8A"
        title={t("settings.language")} 
        subtitle={i18n.language === "fa"? t("settings.languagePersian"): t("settings.languageEnglish")} 
        isopen={openItem === "language"}
        arrow="down"
        onClick={() => handleToggle("language")}
        >
          <OptionList options={languages} selectedValue={i18n.language} onSelect={handleSelectLanguage} />
        </SettingItem>

        <SettingItem 
         icon={IoIosColorPalette}
         iconBg="#E8EEF7"
         iconColor="#4F6B8A"
         title={t("settings.appearance")} 
         subtitle={t("settings.lightMode")}
        isopen={openItem === "appearance"}
        arrow="down"
        onClick={()=> handleToggle("appearance")} >
          <OptionList options={appearances} selectedValue={appearance} onSelect={handleSelectAppearance} />
        </SettingItem>

        <SettingToggleItem 
          icon={IoIosNotifications}
          iconBg="#E8EEF7"
          iconColor="#4F6B8A"
          title={t("settings.notifications")}
          subtitle={""}
          checked={NotificationEnabled}
          onChange={setNotificationsEnabled}
      />
        <SettingItem 
        icon={IoIosCalendar} 
        iconBg="#E8EEF7"
        iconColor="#4F6B8A"
        title={t("settings.firstDayOfWeek")} 
        subtitle={t("settings.saturday")} 
        isopen= {openItem === "firstDay"}
        arrow="down"
        onClick={() => handleToggle("firstDay")}
        isLast >
          <OptionList options={daysOfWeek} selectedValue={firstDay} onSelect={handleSelectFirstDay} />
        </SettingItem>
    </SettingSection>
  )
}

export default GeneralSection