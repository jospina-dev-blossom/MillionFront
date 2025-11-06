/**
 * TODO: ELiminar este archivo si no se usa
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

/**
 * Formatea una fecha ISO string a formato corto (DD/MM/YYYY)
 */
export const formatShortDate = (isoDate: string, locale = 'es-ES'): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString(locale);
};

/**
 * Formatea una fecha ISO string con hora
 */
export const formatDateTime = (isoDate: string, locale = 'es-ES'): string => {
  const date = new Date(isoDate);
  return date.toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Obtiene el tiempo relativo (hace X días, hace X meses, etc.)
 */
export const getRelativeTime = (isoDate: string): string => {
  const date = new Date(isoDate);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Hoy';
  if (diffInDays === 1) return 'Ayer';
  if (diffInDays < 7) return `Hace ${diffInDays} días`;
  if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `Hace ${weeks} semana${weeks > 1 ? 's' : ''}`;
  }
  if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `Hace ${months} mes${months > 1 ? 'es' : ''}`;
  }
  const years = Math.floor(diffInDays / 365);
  return `Hace ${years} año${years > 1 ? 's' : ''}`;
};

/**
 * Verifica si una fecha es válida
 */
export const isValidDate = (isoDate: string): boolean => {
  const date = new Date(isoDate);
  return !isNaN(date.getTime());
};

/**
 * Compara dos fechas y retorna -1, 0 o 1
 */
export const compareDates = (date1: string, date2: string): number => {
  const d1 = new Date(date1).getTime();
  const d2 = new Date(date2).getTime();
  
  if (d1 < d2) return -1;
  if (d1 > d2) return 1;
  return 0;
};

/**
 * Calcula la diferencia en días entre dos fechas
 */
export const getDaysDifference = (date1: string, date2: string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffInMs = Math.abs(d2.getTime() - d1.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
};
