import { IoMoon, IoSunny } from "react-icons/io5";
import type { Option } from "./OptionList";

export const languages: Option[] = [ 
  { value: "fa", labelKey: "settings.languagePersian"  }, 
  { value: "en", labelKey: "settings.languageEnglish" }, 
]; 
export const appearances:Option[] = [ 
  { value: "light", labelKey: "settings.lightMode",icon: IoSunny  }, 
  { value: "dark", labelKey: "settings.darkMode",icon: IoMoon  }, 
]; 
 
export const daysOfWeek:Option[] = [ 
  { value: "saturday", labelKey: "daysOfWeek.saturday" }, 
  { value: "sunday", labelKey: "daysOfWeek.sunday" }, 
  { value: "monday", labelKey: "daysOfWeek.monday" }, 
  {value: "tuesday", labelKey : "daysOfWeek.tuesday"}, 
  {value : "wednesday" , labelKey : "daysOfWeek.wednesday"}, 
  {value: "thursday",labelKey:"daysOfWeek.thursday"}, 
  {value: "friday",labelKey:"daysOfWeek.friday"} 
]; 
export const minutesBefore: Option[] = [
  { value: "5", labelKey: "minutesBefore.five" },
  { value: "10", labelKey: "minutesBefore.ten" },
  { value: "15", labelKey: "minutesBefore.fifteen" },
  { value: "30", labelKey: "minutesBefore.thirty" },
  { value: "60", labelKey: "minutesBefore.sixty" },
];
export const repeatOptions: Option[] = [
  { value: "once", labelKey: "repeat.once" },
  { value: "daily", labelKey: "repeat.daily" },
  { value: "weekly", labelKey: "repeat.weekly" },
  { value: "monthly", labelKey: "repeat.monthly" },
  { value: "yearly", labelKey: "repeat.yearly" },
];