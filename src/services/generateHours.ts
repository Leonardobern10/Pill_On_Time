export const generateHours = (start: number, end: number): string[] => {
  const hours = [];
  for (let i = 0; i <= end; i++) {
    hours.push(`${i}:00`, `${i}:30`);
  }
  return hours;
};
