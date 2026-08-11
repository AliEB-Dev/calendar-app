import React from "react";
import { useTranslation } from "react-i18next";

export type ReminderFilter =
  | "all"
  | "today"
  | "week"
  | "month"
  | "completed";

interface ReminderFilterBarProps {
  selected: ReminderFilter;
  onChange: (filter: ReminderFilter) => void;
}

const filters: {
  label: string;
  value: ReminderFilter;
}[] =[ { label: "reminder.filterAll", value: "all", }, { label: "reminder.filterToday", value: "today", }, { label: "reminder.filterWeek", value: "week", }, { label: "reminder.filterMonth", value: "month", }, { label: "reminder.filterCompleted", value: "completed", }, ];
const ReminderFilterBar: React.FC<ReminderFilterBarProps> = ({
  selected,
  onChange,
}) => {
  const {t} = useTranslation()
  return (
    <div className="flex justify-around items-center gap-2 rounded-2xl bg-white p-2 shadow-sm md:mx-10 ">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`rounded-xl px-3 md:px-9 py-2 text-sm transition-all ${
            selected === filter.value
              ? "bg-(--Primary) text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {t(filter.label)}
        </button>
      ))}
    </div>
  );
};

export default ReminderFilterBar;