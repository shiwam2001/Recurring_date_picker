"use client";

// import { RecurrenceProvider } from "../context/RecurrenceContext";
import RecurrenceOptions from "../components/RecurrenceOptions";
import CustomInterval from "../components/CustomInterval";
import WeekdaySelector from "../components/WeekdaySelector";
import PatternSelector from "../components/PatternSelector";
import DateRangePicker from "../components/DateRangePicker";
import CalendarPreview from "../components/CalenderPreview";
import { RecurrenceProvider } from "../context/RecurrenceContext";

export default function RecurringDatePicker() {
  return (
    <RecurrenceProvider>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 text-gray-700 shadow-md rounded-2xl space-y-4">
        <h2 className="text-xl font-semibold mb-4">Recurring Date Picker</h2>
        <RecurrenceOptions />
        <CustomInterval />
        <WeekdaySelector />
        <PatternSelector />
        <DateRangePicker />
        <CalendarPreview />
      </div>
    </RecurrenceProvider>
  );
}

