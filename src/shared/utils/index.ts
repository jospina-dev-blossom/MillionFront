/**
 * Shared Utils Export
 * Punto de entrada centralizado para todas las utilidades
 */

// Error Handler
export {
  isFetchBaseQueryError,
  isSerializedError,
  getErrorMessage,
  formatValidationErrors,
} from './errorHandler';

// Formatters
export {
  formatCurrency,
  formatNumber,
  parseCurrency,
  isValidNumber,
  truncateText,
  capitalize,
  debounce,
} from './formatters';

// Date Utils
export {
  formatDate,
  formatShortDate,
  formatDateTime,
  getRelativeTime,
  isValidDate,
  compareDates,
  getDaysDifference,
} from './dateUtils';
