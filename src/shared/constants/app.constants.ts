/**
 * Pagination Constants
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
} as const;

/**
 * Price Range Constants
 */
export const PRICE_RANGE = {
  MIN: 0,
  MAX: 10000000,
  STEP: 10000,
} as const;

/**
 * Property Constants
 */
export const PROPERTY = {
  MIN_YEAR: 1900,
  MAX_YEAR: new Date().getFullYear(),
  RECENT_YEARS_THRESHOLD: 5,
} as const;
