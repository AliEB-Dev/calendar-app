import { FaRegStar, FaRegCalendarCheck } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuAlarmClockCheck } from "react-icons/lu";

export const homeStats = [
  {
    Icon: FaRegStar,
    bg: "#FEF3C7",
    color: "#B45309",
    titleKey: "home.importantEvents",
    subtitleKey: "home.today",
    count: 0,
  },
  {
    Icon: IoMdNotificationsOutline,
    bg: "#EDE9FE",
    color: "#6B7A2F",
    titleKey: "home.remindersThisWeek",
    subtitleKey: "home.thisWeek",
    count: 0,
  },
  {
    Icon: LuAlarmClockCheck,
    bg: "#DBEAFE",
    color: "#2563EB",
    titleKey: "home.tasks",
    subtitleKey: "home.completed",
    count: 0,
  },
  {
    Icon: FaRegCalendarCheck,
    bg: "#D1FAE5",
    color: "#059669",
    titleKey: "home.doneToday",
    subtitleKey: "home.today",
    count: 0,
  },
];