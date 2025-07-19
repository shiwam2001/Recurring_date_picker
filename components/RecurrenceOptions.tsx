import { useRecurrence } from "../context/RecurrenceContext";

export default function RecurrenceOptions() {
  const { frequency, setFrequency } = useRecurrence();

  return (
    <div>
      <label className="block font-medium mb-1">Recurrence:</label>
      <select
        className="w-full border p-2 rounded"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as any)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
}