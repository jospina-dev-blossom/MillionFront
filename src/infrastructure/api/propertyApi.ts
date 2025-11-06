import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Property, PropertyFilters, PagedResult } from '@core/domain/entities/Property';
import type { PropertyDetail } from '@core/domain/entities/PropertyDetail';
import { API_CONFIG, API_TAGS } from '@infrastructure/config/api.config';

/**
 * Property API Slice usando RTK Query
 * Implementa el repositorio de propiedades con cache automático
 */
export const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: [API_TAGS.PROPERTIES, API_TAGS.PROPERTY],
  endpoints: (builder) => ({
    /**
     * Query para obtener lista de propiedades con filtros
     * Los filtros se envían como query parameters mediante GET
     */
    getProperties: builder.query<PagedResult<Property>, PropertyFilters | void>({
      query: (filters) => {
        const params = new URLSearchParams();
        
        if (filters?.name) params.append('Name', filters.name);
        if (filters?.address) params.append('Address', filters.address);
        if (filters?.minPrice) params.append('MinPrice', filters.minPrice.toString());
        if (filters?.maxPrice) params.append('MaxPrice', filters.maxPrice.toString());
        params.append('PageNumber', (filters?.pageNumber || 1).toString());
        params.append('PageSize', (filters?.pageSize || 10).toString());
        
        return `${API_CONFIG.ENDPOINTS.PROPERTIES}?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: 'Properties' as const, id })),
              { type: 'Properties' as const, id: 'LIST' },
            ]
          : [{ type: 'Properties' as const, id: 'LIST' }],
    }),

    /**
     * Query para obtener una propiedad específica por ID
     * Retorna información completa incluyendo owner, images y traces
     */
    getPropertyById: builder.query<PropertyDetail, string>({
      query: (id) => API_CONFIG.ENDPOINTS.PROPERTY_BY_ID(id),
      providesTags: (_result, _error, id) => [{ type: 'Property' as const, id }],
    }),
  }),
});

/**
 * Export de hooks generados automáticamente por RTK Query
 */
export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useLazyGetPropertiesQuery,
  useLazyGetPropertyByIdQuery,
} = propertyApi;

/**
 * Export de endpoints para uso manual si es necesario
 */
export const { getProperties, getPropertyById } = propertyApi.endpoints;
