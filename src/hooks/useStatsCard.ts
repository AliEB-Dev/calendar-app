import { useTranslation } from "react-i18next"
import { useAppSelector } from "../store/hooks"
import { homeStats } from "../components/StatCard/constants"
import {
  selectEventsTodayCount,
  selectActiveRemindersThisWeekCount,
  selectCompletedTasksCount,
  selectDoneTodayCount,
} from "../store/selectors/statsSelectors"

export function useStats() {
  const { t } = useTranslation()
  const eventsToday = useAppSelector(selectEventsTodayCount)
  const remindersThisWeek = useAppSelector(selectActiveRemindersThisWeekCount)
  const completedTasks = useAppSelector(selectCompletedTasksCount)
  const doneToday = useAppSelector(selectDoneTodayCount)

  const counts = [eventsToday, remindersThisWeek, completedTasks, doneToday]

  return homeStats.map((stat, i) => ({
    Icon: stat.Icon,
    bg: stat.bg,
    color: stat.color,
    title: t(stat.titleKey),
    subtitle: t(stat.subtitleKey),
    count: counts[i],
  }))
}