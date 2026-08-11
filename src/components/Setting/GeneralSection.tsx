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

function GeneralSection() {
  const {t,i18n} = useTranslation();
  const [isLanguageOpen,setIsLanguageOpen] = useState(false);
  const [isAppearanceOpen, setIsAppearanceOpen] = useState(false);
  const [isFirstDayOpen, setIsFirstDayOpen] = useState(false);


  const [appearance, setAppearance] = useState("light");
  const [firstDay, setFirstDay] = useState("saturday");

  const [NotificationEnabled, setNotificationsEnabled] = useState(true);
  const handleSelectLanguage = (code: string) => {
    i18n.changeLanguage(code)
    setIsLanguageOpen(false)
  }

  const handleSelectAppearance = (value:string)=>{
    setAppearance(value);
    setIsAppearanceOpen(false)
  }

   const handleSelectFirstDay = (value: string) => {
    setFirstDay(value);
    setIsFirstDayOpen(false);
  };
  return (
    <SettingSection title={t("settings.general")}>
        <SettingItem 
        icon={IoIosGlobe} 
        iconBg="#EDE9FE" 
        iconColor="var(--color-text)" 
        title={t("settings.language")} 
        subtitle={i18n.language === "fa"? t("settings.languagePersian"): t("settings.languageEnglish")} 
        isopen={isLanguageOpen} onClick={() => setIsLanguageOpen((prev) => !prev)}
        >
          <OptionList options={languages} selectedValue={i18n.language} onSelect={handleSelectLanguage} />
        </SettingItem>

        <SettingItem 
        icon={IoIosColorPalette}
         iconBg="#EDE9FE" 
         iconColor="var(--color-text)" 
         title={t("settings.appearance")} 
         subtitle={t("settings.lightMode")}
        isopen={isAppearanceOpen}
        onClick={() => setIsAppearanceOpen((prev) => !prev)} >
          <OptionList options={appearances} selectedValue={appearance} onSelect={handleSelectAppearance} />
        </SettingItem>

        <SettingToggleItem 
          icon={IoIosNotifications}
          iconBg="#EDE9FE"
          iconColor="var(--color-text)"
          title={t("settings.notifications")}
          subtitle={""}
          checked={NotificationEnabled}
          onChange={setNotificationsEnabled}
      />
        <SettingItem 
        icon={IoIosCalendar} 
        iconBg="#EDE9FE" 
        iconColor="var(--color-text)" 
        title={t("settings.firstDayOfWeek")} 
        subtitle={t("settings.saturday")} 
        isopen= {isFirstDayOpen}
        onClick={()=> setIsFirstDayOpen((prev)=> !prev)}
        isLast >
          <OptionList options={daysOfWeek} selectedValue={firstDay} onSelect={handleSelectFirstDay} />
        </SettingItem>
    </SettingSection>
  )
}

export default GeneralSection