import { useState, useCallback, useEffect, useRef } from "react";
import { useGetPropertiesQuery } from "@infrastructure/api/propertyApi";
import type { PropertyFilters, Property } from "@core/domain/entities/Property";

/**
 * Custom Hook para manejar propiedades con scroll infinito
 * Acumula propiedades a medida que se cargan más páginas
 */
export const useInfiniteProperties = (initialFilters?: PropertyFilters) => {
  const [filters, setFilters] = useState<PropertyFilters>(
    initialFilters || { pageNumber: 1, pageSize: 10 }
  );
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const previousFiltersRef = useRef<string>("");

  const { data, isLoading, isFetching, isError, error, refetch } =
    useGetPropertiesQuery({ ...filters, pageNumber: currentPage });

  useEffect(() => {
    if (!data?.items) return;

    const currentFiltersKey = JSON.stringify({
      name: filters.name,
      address: filters.address,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });

    const filtersChanged = previousFiltersRef.current !== currentFiltersKey;

    if (currentPage === 1 || filtersChanged) {
      setAllProperties(data.items);
      previousFiltersRef.current = currentFiltersKey;
    } else {
      setAllProperties((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newProperties = data.items.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newProperties];
      });
    }
  }, [data, filters, currentPage]);

  /**
   * Actualiza los filtros de búsqueda
   */
  const updateFilters = useCallback((newFilters: Partial<PropertyFilters>) => {
    setFilters((prev) => {
      const updated = { ...prev, ...newFilters };

      Object.keys(updated).forEach((key) => {
        if (updated[key as keyof PropertyFilters] === undefined) {
          delete updated[key as keyof PropertyFilters];
        }
      });

      return updated;
    });
    setCurrentPage(1); // Resetear a página 1 cuando cambien filtros
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({ pageNumber: 1, pageSize: 10 });
    setAllProperties([]);
    setCurrentPage(1);
  }, []);

  const loadMore = useCallback(() => {
    if (data?.hasNextPage && !isFetching) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [data?.hasNextPage, isFetching]);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      updateFilters({ name: searchTerm || undefined });
    },
    [updateFilters]
  );

  const handleApplyFilters = useCallback(
    (newFilters: Partial<PropertyFilters>) => {
      updateFilters(newFilters);
    },
    [updateFilters]
  );

  const handleClearFilters = useCallback(() => {
    updateFilters({
      address: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    });
  }, [updateFilters]);

  return {
    // Datos
    properties: allProperties,
    hasMore: data?.hasNextPage || false,
    totalCount: data?.totalCount || 0,

    // Estados
    isLoading: isLoading && currentPage === 1, // Solo mostrar loading en primera carga
    isFetching,
    isError,
    error,

    // Filtros
    filters,

    // Acciones
    updateFilters,
    clearFilters,
    refetch,
    loadMore,

    // Handlers
    handleSearch,
    handleApplyFilters,
    handleClearFilters,
  };
};
