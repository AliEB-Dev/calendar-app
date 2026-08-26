import {IoIosGlobe,IoIosColorPalette,IoIosNotifications, IoIosCalendar} from "react-icons/io";
import  SettingSection  from "./SettingSection";
import  SettingItem  from "./SettingItem";
import { useTranslation } from "react-i18next"
import { useState } from "react";
import SettingToggleItem from "./SettingToggleItem";
import OptionList from "./OptionList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAppearance, setDaysOfWeek, setLanguage, setNotifications, type Appearance, type DaysOfWeek, type Language } from "../../store/slices/settingsSlice";
import { appearances, daysOfWeek, languages } from "./constants";

type OpenItem = "language" | "appearance" | "firstDay" | null;

function GeneralSection() {
  const {t,i18n} = useTranslation();
  const [openItem, setOpenItem] = useState<OpenItem>(null);
  
  const dispatch = useAppDispatch();

  const daysofweek = useAppSelector(
    (state) => state.settings.daysofweek
  );
  const appearance = useAppSelector(
    (state) => state.settings.appearance
  );
  const language = useAppSelector(
    (state) => state.settings.language
  );
  const notifications = useAppSelector(
    (state) => state.settings.notifications
  );

  const handleToggle = (item: Exclude<OpenItem, null>) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  const handleSelectLanguage = (code: string) => {
   const newLanguage = code as Language;
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
    setOpenItem(null);
  }

  const handleSelectAppearance = (value:string)=>{
    const newAppearance = value as Appearance;
    dispatch(setAppearance(newAppearance));
    setOpenItem(null);
  }

  const handleSelectFirstDay = (value: string) => {
    const newDay = value as DaysOfWeek;
    dispatch(setDaysOfWeek(newDay));
    setOpenItem(null);
  };

  const handleNotificationsChange = async (enabled : boolean)=> {
    if (!enabled){
      dispatch(setNotifications(false));
      return;
    }

    if (!("Notification" in window)) {
      dispatch(setNotifications(false));
      return;
    }
    const permission = await Notification.requestPermission();
    dispatch(setNotifications(permission === "granted"))
  }
  return (
    <SettingSection title={t("settings.general")}>
        <SettingItem 
        icon={IoIosGlobe} 
        iconBg="#E8EEF7"
        iconColor="#4F6B8A"
        title={t("settings.language")} 
        subtitle={language === "fa" ? t("settings.languagePersian") : t("settings.languageEnglish")}
        isopen={openItem === "language"}
        arrow="down"
        onClick={() => handleToggle("language")}
        >
          <OptionList options={languages} selectedValue={language}onSelect={handleSelectLanguage} />
        </SettingItem>

        <SettingItem 
         icon={IoIosColorPalette}
         iconBg="#E8EEF7"
         iconColor="#4F6B8A"
         title={t("settings.appearance")} 
         subtitle={appearance === "light" ? t("settings.lightMode") : t("settings.darkMode")} 
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
          checked={notifications}
          onChange={handleNotificationsChange}
      />
        <SettingItem 
        icon={IoIosCalendar} 
        iconBg="#E8EEF7"
        iconColor="#4F6B8A"
        title={t("settings.firstDayOfWeek")} 
        subtitle={t(`daysOfWeek.${daysofweek}`)} 
        isopen= {openItem === "firstDay"}
        arrow="down"
        onClick={() => handleToggle("firstDay")}
        isLast >
          <OptionList options={daysOfWeek} selectedValue={daysofweek} onSelect={handleSelectFirstDay} />
        </SettingItem>
    </SettingSection>
  )
}

export default GeneralSection