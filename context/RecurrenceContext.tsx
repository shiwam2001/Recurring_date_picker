"use client";
import React, { createContext, useContext, useState } from "react";

export type Frequency = "daily" | "weekly" | "monthly" | "yearly";

interface RecurrenceState {
  frequency: Frequency;
  interval: number;
  weekdays: string[];
  pattern: { week: string; day: string };
  startDate: string;
  endDate?: string;
  setFrequency: (f: Frequency) => void;
  setInterval: (i: number) => void;
  setWeekdays: (days: string[]) => void;
  setPattern: (p: { week: string; day: string }) => void;
  setStartDate: (d: string) => void;
  setEndDate: (d?: string) => void;
}

const RecurrenceContext = createContext<RecurrenceState | null>(null);

export const RecurrenceProvider = ({ children }: { children: React.ReactNode }) => {
  const [frequency, setFrequency] = useState<Frequency>("daily");
  const [interval, setInterval] = useState<number>(1);
  const [weekdays, setWeekdays] = useState<string[]>([]);
  const [pattern, setPattern] = useState({ week: "First", day: "Monday" });
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  return (
    <RecurrenceContext.Provider
      value={{
        frequency,
        interval,
        weekdays,
        pattern,
        startDate,
        endDate,
        setFrequency,
        setInterval,
        setWeekdays,
        setPattern,
        setStartDate,
        setEndDate,
      }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => {
  const context = useContext(RecurrenceContext);
  if (!context) throw new Error("useRecurrence must be used within a RecurrenceProvider");
  return context;
};