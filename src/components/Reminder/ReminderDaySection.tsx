import ReminderCard from "./ReminderCard";
import ReminderDayHeader from "./ReminderDayHeader";
import type { AgendaItem } from "../../utils/agenda";

interface ReminderDaySectionProps {
  title: string;
  reminders: AgendaItem[];
  onToggle?: (id: string) => void;
}

function ReminderDaySection({ title, reminders, onToggle }: ReminderDaySectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <ReminderDayHeader title={title} count={reminders.length} />

      {reminders.map((reminder) => (
        <ReminderCard
          key={reminder.id}
          type={reminder.type}
          time={reminder.time}
          title={reminder.title}
          subtitle={reminder.subtitle}
          completed={reminder.completed}
          color={reminder.color}
          onToggle={() => onToggle?.(reminder.id)}
        />
      ))}
    </section>
  );
}

export default ReminderDaySection;