import { useTranslation } from "react-i18next";
import type { AgendaGroup } from "../../utils/agenda";
import ReminderCard from "./ReminderCard";


interface ReminderDayListProps {
  groups: AgendaGroup[]
  onToggle ?: (id:string) => void
}

function ReminderDayList({groups,onToggle}: ReminderDayListProps) {
  const { t } = useTranslation();
  if (groups.length === 0) {
    return (
      <p className="text-center text-gray-400 text-sm py-10">
         {t("reminder.noItemsForDay")}
      </p>
    )
  }
  return (
    <div className="flex flex-col gap-4 mt-5">
      {groups.map((group)=> (
        <div key={group.title} className="flex flex-col gap-2">
          <h4 className="text-sm font-bold text-gray-600 px-1">{group.title}</h4>
          <div className="flex flex-col gap-2">
            {
              group.items.map(item => (
                <ReminderCard 
                key={item.id}
                type={item.type}
                time={item.time}
                title={item.title}
                subtitle={item.subtitle}
                completed={item.completed}
                color={item.color}
                onToggle={() => onToggle?.(item.id)}
              />
              ))
            }
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReminderDayList;