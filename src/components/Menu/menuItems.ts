import { FaPlus } from "react-icons/fa6";
import { IoCalendar, IoHome } from "react-icons/io5";
import {  IoIosSettings } from "react-icons/io";
import { HiCalendarDateRange } from "react-icons/hi2";
import type { IconType } from "react-icons";

export interface MenuItemProps {
  titleKey?: string;
  path?: string;
  icon: IconType;
}

export const menuItems: MenuItemProps[] = [
  {
    titleKey: "navigation.home",
    path: "/",
    icon: IoHome,
  },
  {
    titleKey: "navigation.calendar",
    path: "/calendar",
    icon: IoCalendar,
  },
  {
    icon: FaPlus,
  },
  {
    titleKey: "navigation.mySchedule",
    path: "/reminder",
    icon: HiCalendarDateRange
  },
  {
    titleKey: "navigation.settings",
    path: "/settings",
    icon: IoIosSettings,
  },
];