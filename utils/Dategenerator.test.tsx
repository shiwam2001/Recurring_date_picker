import { generateRecurringDates } from "./DateGenerator";

describe("generateRecurringDates", () => {
  it("should return daily recurring dates", () => {
    const dates = generateRecurringDates({
      startDate: "2025-07-20",
      endDate: "2025-07-23",
      frequency: "daily",
      interval: 1,
    });

    expect(dates).toEqual([
      "2025-07-20",
      "2025-07-21",
      "2025-07-22",
      "2025-07-23",
    ]);
  });

  it("should return weekly recurring dates on specified weekdays", () => {
    const dates = generateRecurringDates({
      startDate: "2025-07-01",
      endDate: "2025-07-20",
      frequency: "weekly",
      interval: 1,
      weekdays: ["Mon", "Wed"],
    });

    expect(dates).toContain("2025-07-02"); 
    expect(dates).toContain("2025-07-07"); 
  });

  it("should handle monthly pattern recurrence (second Tuesday)", () => {
  const dates = generateRecurringDates({
    startDate: "2025-01-01",
    endDate: "2025-06-30",
    frequency: "monthly",
    interval: 1,
    pattern: {
      week: 2,
      weekday: 2, 
    },
  });

  expect(dates[0]).toBe("2025-01-14");
  expect(dates.length).toBe(6);
});

  it("should return yearly recurring dates", () => {
    const dates = generateRecurringDates({
      startDate: "2022-01-01",
      endDate: "2025-01-01",
      frequency: "yearly",
      interval: 1,
    });

    expect(dates).toEqual(["2022-01-01", "2023-01-01", "2024-01-01", "2025-01-01"]);
  });

  it("should throw an error if startDate is missing", () => {
  expect(() =>
    
    generateRecurringDates({
      endDate: "2025-01-01",
      frequency: "daily",
      interval: 1,
    })
  ).toThrow();
});
});
