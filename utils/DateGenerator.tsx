import { addDays, addWeeks, addMonths, addYears, isBefore, isAfter, isEqual, parseISO } from 'date-fns';

export type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type RecurrenceConfig = {
  frequency: Frequency;
  interval: number; // Every X days/weeks/months/years
  weekdays?: string[]; // ['Mon', 'Wed'] (for weekly)
  pattern?: {
    week: number; // 1 = first, 2 = second, etc.
    weekday: number; // 0 = Sunday, 1 = Monday, etc.
  }; // For monthly pattern
  startDate: string; // ISO
  endDate?: string;  // ISO
};

export function generateRecurringDates(config: RecurrenceConfig): string[] {
  const {
    frequency,
    interval,
    weekdays = [],
    pattern,
    startDate,
    endDate,
  } = config;

  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : addYears(start, 1); // default 1 year span

  const dates: string[] = [];

  if (frequency === 'daily') {
    let current = start;
    while (!isAfter(current, end)) {
      dates.push(current.toISOString().split('T')[0]);
      current = addDays(current, interval);
    }
  }

  if (frequency === 'weekly') {
    let current = start;
    while (!isAfter(current, end)) {
      for (let day of weekdays) {
        const date = addDays(current, (getWeekdayIndex(day) - current.getDay() + 7) % 7);
        if (!isAfter(date, end) && !isBefore(date, start)) {
          dates.push(date.toISOString().split('T')[0]);
        }
      }
      current = addWeeks(current, interval);
    }
  }

  if (frequency === 'monthly' && pattern) {
    let current = start;
    while (!isAfter(current, end)) {
      const date = getNthWeekdayOfMonth(current, pattern.week, pattern.weekday);
      if (!isAfter(date, end) && !isBefore(date, start)) {
        dates.push(date.toISOString().split('T')[0]);
      }
      current = addMonths(current, interval);
    }
  }

  if (frequency === 'yearly') {
    let current = start;
    while (!isAfter(current, end)) {
      dates.push(current.toISOString().split('T')[0]);
      current = addYears(current, interval);
    }
  }

  return dates;
}

function getWeekdayIndex(day: string): number {
  const map: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6
  };
  return map[day];
}

function getNthWeekdayOfMonth(date: Date, nth: number, weekday: number): Date {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  let day = firstDayOfMonth;
  let count = 0;

  while (day.getMonth() === firstDayOfMonth.getMonth()) {
    if (day.getDay() === weekday) {
      count++;
      if (count === nth) break;
    }
    day = addDays(day, 1);
  }

  return day;
}