import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
  const [priceError, setPriceError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setAddress(currentFilters.address || '');
      setMinPrice(currentFilters.minPrice?.toString() || '');
      setMaxPrice(currentFilters.maxPrice?.toString() || '');
      setPriceError('');
    }
  }, [isOpen, currentFilters]);

  const validatePrices = (): boolean => {
    if (minPrice && maxPrice) {
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
      
      if (max < min) {
        setPriceError('El precio máximo no puede ser menor al precio mínimo');
        return false;
      }
    }
    setPriceError('');
    return true;
  };

  const handleMinPriceChange = (value: string) => {
    setMinPrice(value);
    if (maxPrice && value) {
      const min = parseFloat(value);
      const max = parseFloat(maxPrice);
      if (max < min) {
        setPriceError('El precio máximo no puede ser menor al precio mínimo');
      } else {
        setPriceError('');
      }
    } else {
      setPriceError('');
    }
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value);
    if (minPrice && value) {
      const min = parseFloat(minPrice);
      const max = parseFloat(value);
      if (max < min) {
        setPriceError('El precio máximo no puede ser menor al precio mínimo');
      } else {
        setPriceError('');
      }
    } else {
      setPriceError('');
    }
  };

  const handleApply = () => {
    if (!validatePrices()) {
      return;
    }

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
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="filter-modal" 
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="filter-modal-title"
        >
          <motion.div 
            className="filter-modal__content"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            role="document"
          >
            <header className="filter-modal__header">
              <h2 id="filter-modal-title" className="filter-modal__title">{TEXTS.filterModal.title}</h2>
              <motion.button
                type="button"
                className="filter-modal__close"
                onClick={onClose}
                aria-label={TEXTS.filterModal.close}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="filter-modal__close-icon" size={24} aria-hidden="true" />
              </motion.button>
            </header>

            <div className="filter-modal__body">
              <motion.section 
                className="filter-modal__section"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                aria-labelledby="filter-address-title"
              >
                <h3 id="filter-address-title" className="filter-modal__section-title">{TEXTS.filterModal.address}</h3>
                <div className="filter-modal__input-group">
                  <label className="filter-modal__label" htmlFor="address">
                    {TEXTS.filterModal.address}
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="filter-modal__input"
                    placeholder={TEXTS.filterModal.addressPlaceholder}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </motion.section>

              <motion.section 
                className="filter-modal__section"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                aria-labelledby="filter-price-title"
              >
                <h3 id="filter-price-title" className="filter-modal__section-title">{TEXTS.filterModal.priceRange}</h3>
                <div className="filter-modal__price-inputs">
                  <div className="filter-modal__input-group">
                    <label className="filter-modal__label" htmlFor="minPrice">
                      {TEXTS.filterModal.minPrice}
                    </label>
                    <input
                      id="minPrice"
                      type="number"
                      className={`filter-modal__input ${priceError ? 'filter-modal__input--error' : ''}`}
                      placeholder={TEXTS.filterModal.minPrice}
                      value={minPrice}
                      onChange={(e) => handleMinPriceChange(e.target.value)}
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
                      className={`filter-modal__input ${priceError ? 'filter-modal__input--error' : ''}`}
                      placeholder={TEXTS.filterModal.maxPrice}
                      value={maxPrice}
                      onChange={(e) => handleMaxPriceChange(e.target.value)}
                      min="0"
                    />
                  </div>
                </div>
                {priceError && (
                  <motion.div 
                    className="filter-modal__error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    role="alert"
                    aria-live="polite"
                  >
                    {priceError}
                  </motion.div>
                )}
              </motion.section>
            </div>

            <motion.footer 
              className="filter-modal__footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.button 
                type="button"
                className="filter-modal__clear" 
                onClick={handleClear}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {TEXTS.filterModal.clearAll}
              </motion.button>
              <motion.button 
                type="button"
                className="filter-modal__apply" 
                onClick={handleApply}
                disabled={!!priceError}
                whileHover={{ scale: priceError ? 1 : 1.05 }}
                whileTap={{ scale: priceError ? 1 : 0.95 }}
              >
                {TEXTS.filterModal.apply}
              </motion.button>
            </motion.footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
