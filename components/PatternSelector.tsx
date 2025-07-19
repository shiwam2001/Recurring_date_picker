import { useRecurrence } from "../context/RecurrenceContext";
const weekNumbers = ["First", "Second", "Third", "Fourth"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function PatternSelector() {
  const { pattern, setPattern } = useRecurrence();

  return (
    <div>
      <label className="block font-medium mb-1">Monthly Pattern:</label>
      <div className="flex gap-2">
        <select
          className="border p-2 rounded"
          value={pattern.week}
          onChange={(e) => setPattern({ ...pattern, week: e.target.value })}>
          {weekNumbers.map((week) => (
            <option key={week} value={week}>{week}</option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={pattern.day}
          onChange={(e) => setPattern({ ...pattern, day: e.target.value })}>
          {days.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
    </div>
  );
}