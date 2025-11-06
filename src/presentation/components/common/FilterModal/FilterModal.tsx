import { useState, useEffect } from 'react';
import { TEXTS } from '@shared/constants/texts';
import type { PropertyFilters } from '@core/domain/entities';
import './FilterModal.css';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Partial<PropertyFilters>) => void;
  onClear: () => void;
  currentFilters?: Partial<PropertyFilters>;
}

export const FilterModal = ({
  isOpen,
  onClose,
  onApply,
  onClear,
  currentFilters = {},
}: FilterModalProps) => {
  const [address, setAddress] = useState(currentFilters.address || '');
  const [minPrice, setMinPrice] = useState(currentFilters.minPrice?.toString() || '');
  const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice?.toString() || '');

  useEffect(() => {
    if (isOpen) {
      setAddress(currentFilters.address || '');
      setMinPrice(currentFilters.minPrice?.toString() || '');
      setMaxPrice(currentFilters.maxPrice?.toString() || '');
    }
  }, [isOpen, currentFilters]);

  if (!isOpen) return null;

  const handleApply = () => {
    const filters: Partial<PropertyFilters> = {};
    
    if (address.trim()) {
      filters.address = address.trim();
    }
    if (minPrice) {
      filters.minPrice = minPrice;
    }
    if (maxPrice) {
      filters.maxPrice = maxPrice;
    }
    
    onApply(filters);
    onClose();
  };

  const handleClear = () => {
    setAddress('');
    setMinPrice('');
    setMaxPrice('');
    onClear();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="filter-modal" onClick={handleBackdropClick}>
      <div className="filter-modal__content">
        <div className="filter-modal__header">
          <h2 className="filter-modal__title">{TEXTS.filterModal.title}</h2>
          <button
            className="filter-modal__close"
            onClick={onClose}
            aria-label={TEXTS.filterModal.close}
          >
            <svg
              className="filter-modal__close-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="filter-modal__body">
          <div className="filter-modal__section">
            <h3 className="filter-modal__section-title">{TEXTS.filterModal.address}</h3>
            <div className="filter-modal__input-group">
              <label className="filter-modal__label" htmlFor="address">
                {TEXTS.filterModal.address}
              </label>
              <input
                id="address"
                type="text"
                className="filter-modal__input"
                placeholder={TEXTS.filterModal.addressPlaceholder}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-modal__section">
            <h3 className="filter-modal__section-title">{TEXTS.filterModal.priceRange}</h3>
            <div className="filter-modal__price-inputs">
              <div className="filter-modal__input-group">
                <label className="filter-modal__label" htmlFor="minPrice">
                  {TEXTS.filterModal.minPrice}
                </label>
                <input
                  id="minPrice"
                  type="number"
                  className="filter-modal__input"
                  placeholder={TEXTS.filterModal.minPrice}
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min="0"
                />
              </div>
              <div className="filter-modal__input-group">
                <label className="filter-modal__label" htmlFor="maxPrice">
                  {TEXTS.filterModal.maxPrice}
                </label>
                <input
                  id="maxPrice"
                  type="number"
                  className="filter-modal__input"
                  placeholder={TEXTS.filterModal.maxPrice}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="filter-modal__footer">
          <button className="filter-modal__clear" onClick={handleClear}>
            {TEXTS.filterModal.clearAll}
          </button>
          <button className="filter-modal__apply" onClick={handleApply}>
            {TEXTS.filterModal.apply}
          </button>
        </div>
      </div>
    </div>
  );
};
