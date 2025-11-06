import { useState } from 'react';
import { useProperties } from '@presentation/hooks/useProperties';
import { SearchBar } from '@presentation/components/common/SearchBar/SearchBar';
import { FilterModal } from '@presentation/components/common/FilterModal/FilterModal';
import { PropertyGrid } from '@presentation/components/properties/PropertyGrid/PropertyGrid';
import { Pagination } from '@presentation/components/common/Pagination/Pagination';
import { Footer } from '@presentation/components/common/Footer/Footer';
import { MillionLogo } from '@presentation/components/common/MillionLogo';
import { TEXTS } from '@shared/constants/texts';
import { getErrorMessage } from '@shared/utils/errorHandler';
import './PropertiesPage.css';

export const PropertiesPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const {
    properties,
    pagination,
    isLoading,
    isError,
    error,
    filters,
    goToPage,
    refetch,
    handleSearch,
    handleApplyFilters,
    handleClearFilters,
  } = useProperties();

  if (isLoading) {
    return (
      <div className="properties-page">
        <div className="properties-page__loading">
          <div className="properties-page__spinner" />
          <p className="properties-page__loading-text">{TEXTS.propertiesPage.loadingProperties}</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="properties-page">
        <div className="properties-page__error">
          <div className="properties-page__error-icon">⚠️</div>
          <h2 className="properties-page__error-title">{TEXTS.propertiesPage.errorLoading}</h2>
          <p className="properties-page__error-message">{getErrorMessage(error)}</p>
          <button className="properties-page__error-button" onClick={() => refetch()}>
            {TEXTS.common.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="properties-page">
      <header className="properties-page__header">
        <div className="properties-page__logo">
          <MillionLogo />
        </div>
        <SearchBar
          onSearch={handleSearch}
          onFilterClick={() => setIsFilterModalOpen(true)}
          isLoading={isLoading}
        />
      </header>

      <main className="properties-page__content">
        <PropertyGrid properties={properties} />

        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.pageNumber}
            totalPages={pagination.totalPages}
            hasNextPage={pagination.hasNextPage}
            hasPreviousPage={pagination.hasPreviousPage}
            onPageChange={goToPage}
          />
        )}
      </main>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        currentFilters={filters}
      />

      <Footer />
    </div>
  );
};
