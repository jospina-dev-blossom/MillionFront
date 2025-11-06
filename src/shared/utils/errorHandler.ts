import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

/**
 * Type guard para FetchBaseQueryError
 */
export const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error;
};

/**
 * Type guard para SerializedError
 */
export const isSerializedError = (
  error: unknown
): error is SerializedError => {
  return typeof error === 'object' && error != null && 'message' in error;
};

/**
 * Extrae el mensaje de error de diferentes tipos de error de RTK Query
 */
export const getErrorMessage = (error: unknown): string => {
  if (isFetchBaseQueryError(error)) {
    if ('error' in error) {
      return error.error;
    }
    if ('data' in error && typeof error.data === 'object' && error.data !== null) {
      const data = error.data as Record<string, unknown>;
      if ('message' in data && typeof data.message === 'string') {
        return data.message;
      }
      if ('title' in data && typeof data.title === 'string') {
        return data.title;
      }
    }
    return `Error: ${error.status}`;
  }

  if (isSerializedError(error)) {
    return error.message || 'Error desconocido';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Ha ocurrido un error inesperado';
};

/**
 * Formatea errores de validación del backend
 */
export const formatValidationErrors = (error: unknown): Record<string, string[]> => {
  if (isFetchBaseQueryError(error) && 'data' in error) {
    const data = error.data as Record<string, unknown>;
    if ('errors' in data && typeof data.errors === 'object') {
      return data.errors as Record<string, string[]>;
    }
  }
  return {};
};
