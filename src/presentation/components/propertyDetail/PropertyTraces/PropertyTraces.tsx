import { motion } from 'framer-motion';
import type { PropertyTrace } from '@core/domain/entities';
import { TEXTS } from '@shared/constants/texts';
import { formatCurrency, formatDate } from '@shared/utils';
import './PropertyTraces.css';

interface PropertyTracesProps {
  traces: PropertyTrace[];
}

export const PropertyTraces = ({ traces }: PropertyTracesProps) => {
  if (traces.length === 0) {
    return null;
  }

  return (
    <motion.div 
      className="property-traces"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="property-traces__title">{TEXTS.propertyDetail.transactionHistory}</h2>
      <div className="property-traces__list">
        {traces.map((trace, index) => (
          <motion.div 
            key={trace.idPropertyTrace} 
            className="property-traces__item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <h3 className="property-traces__item-name">{trace.name}</h3>
            <div className="property-traces__item-info">
              <div className="property-traces__item-field">
                <span className="property-traces__item-label">
                  {TEXTS.propertyDetail.transactionDate}
                </span>
                <span className="property-traces__item-value">{formatDate(trace.dateSale)}</span>
              </div>
              <div className="property-traces__item-field">
                <span className="property-traces__item-label">
                  {TEXTS.propertyDetail.transactionValue}
                </span>
                <span className="property-traces__item-value">{formatCurrency(trace.value)}</span>
              </div>
              <div className="property-traces__item-field">
                <span className="property-traces__item-label">
                  {TEXTS.propertyDetail.transactionTax}
                </span>
                <span className="property-traces__item-value">{formatCurrency(trace.tax)}</span>
              </div>
              <div className="property-traces__item-field">
                <span className="property-traces__item-label">
                  {TEXTS.propertyDetail.transactionTotal}
                </span>
                <span className="property-traces__item-value">
                  {formatCurrency(trace.value + trace.tax)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
