import { useRecurrence } from "../context/RecurrenceContext";
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeekdaySelector() {
  const { weekdays: selected, setWeekdays } = useRecurrence();

  const toggleDay = (day: string) => {
    setWeekdays(
      selected.includes(day) ? selected.filter((d) => d !== day) : [...selected, day]
    );
  };

  return (
    <div>
      <label className="block font-medium mb-1">Select Days:</label>
      <div className="flex gap-2 flex-wrap">
        {weekdays.map((day) => (
          <label key={day} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selected.includes(day)}
              onChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
}