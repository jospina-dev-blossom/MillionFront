/**
 * Formatea una fecha ISO string a formato legible
 */
export const formatDate = (
  isoDate: string,
  locale = 'es-ES',
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(isoDate);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString(locale, options || defaultOptions);
};