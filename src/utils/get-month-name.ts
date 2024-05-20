export function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", { month: "long" });
}
