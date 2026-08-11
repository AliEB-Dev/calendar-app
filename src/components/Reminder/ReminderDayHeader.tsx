import { useTranslation } from "react-i18next";

interface ReminderDayHeaderProps {
  title: string;
  count: number;
}

function ReminderDayHeader({
  title,
  count,
}: ReminderDayHeaderProps) {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-between px-1">

      <h2 className="text-xl font-bold">
        {title}
      </h2>


      <span className="text-sm text-slate-500">
        {t("reminder.itemsCount", { count })}
      </span>

    </div>
  );
}

export default ReminderDayHeader;