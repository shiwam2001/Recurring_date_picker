import { useRecurrence } from "../context/RecurrenceContext";
import { generateRecurringDates } from "../utils/DateGenerator";
import { weekMap, weekdayMap } from "../utils/Mapping";

export default function CalendarPreview() {
  const {
    startDate,
    endDate,
    frequency,
    interval,
    weekdays,
    pattern
  } = useRecurrence();

  const isReady =
    startDate &&
    frequency &&
    interval &&
    (frequency !== "weekly" || (Array.isArray(weekdays) && weekdays.length > 0)) &&
    (frequency !== "monthly" || (pattern?.week && pattern?.day));

  const convertedPattern =
    pattern?.week && pattern?.day
      ? {
          week: weekMap[pattern.week],
          weekday: weekdayMap[pattern.day],
        }
      : undefined;

  const dates = isReady
    ? generateRecurringDates({
        startDate,
        endDate,
        frequency,
        interval,
        weekdays,
        pattern: convertedPattern,
      })
    : [];

  return (
    <div>
      <label className="block font-medium mb-1">Preview (upcoming 14 dates):</label>
      <div className="grid grid-cols-7 gap-2 border p-4 rounded min-h-[60px]">
        {dates.slice(0, 14).map((date, idx) => (
          <div key={idx} className="bg-blue-100 text-center p-2 rounded text-sm">
            {date}
          </div>
        ))}
        {dates.length === 0 && (
          <div className="text-gray-400 col-span-7 text-center">No dates to preview</div>
        )}
      </div>
    </div>
  );
}
