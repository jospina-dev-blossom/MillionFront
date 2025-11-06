/**
 * Formatea un número como moneda
 */
export const formatCurrency = (
  amount: number,
  locale = 'es-US',
  currency = 'USD'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};