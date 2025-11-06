/**
 * API Configuration
 * Configuración centralizada para endpoints y configuración de la API
 */

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:44311/api/v1',
  TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  ENDPOINTS: {
    PROPERTIES: '/Properties',
    PROPERTY_BY_ID: (id: string) => `/Properties/${id}`,
  },
} as const;

/**
 * API Tags para cache invalidation de RTK Query
 */
export const API_TAGS = {
  PROPERTIES: 'Properties',
  PROPERTY: 'Property',
} as const;
