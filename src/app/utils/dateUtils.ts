/**
 * Calculate years of experience from a start date to current date
 * @param startDate - The start date in YYYY-MM-DD format
 * @returns Number of years (rounded down)
 */
export const calculateYearsOfExperience = (startDate: string): number => {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffYears);
};

/**
 * Get the total years of professional experience
 * Based on start date: January 2018
 */
export const getTotalYearsOfExperience = (): number => {
  return calculateYearsOfExperience('2018-01-01');
};

/**
 * Calculate years from a specific start year to current year
 * @param startYear - The starting year
 * @returns Number of years
 */
export const getYearsFromStartYear = (startYear: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
