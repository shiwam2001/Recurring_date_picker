import { useRecurrence } from "../context/RecurrenceContext";

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrence();

  return (
    <div>
      <label className="block font-medium mb-1">Date Range:</label>
      <div className="flex flex-col gap-2">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={endDate || ""}
          onChange={(e) => setEndDate(e.target.value || undefined)}
          className="border p-2 rounded"
          placeholder="End Date (optional)"
        />
      </div>
    </div>
  );
}