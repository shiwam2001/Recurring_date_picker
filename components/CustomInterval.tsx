import { useRecurrence } from "../context/RecurrenceContext";

export default function CustomInterval() {
  const { interval, setInterval } = useRecurrence();

  return (
    <div>
      <label className="block font-medium mb-1">Repeat Every:</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          className="border p-2 rounded w-20"
          min={1}
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
        />
        <span>interval(s)</span>
      </div>
    </div>
  );
}