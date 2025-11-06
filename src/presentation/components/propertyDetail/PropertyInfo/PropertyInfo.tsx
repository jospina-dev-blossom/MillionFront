import { motion } from 'framer-motion';
import { TEXTS } from '@shared/constants/texts';
import { formatCurrency } from '@shared/utils';
import './PropertyInfo.css';

interface PropertyInfoProps {
  basePrice: number;
  priceWithTaxes: number;
  year: number;
  codeInternal: string | number;
}

export const PropertyInfo = ({
  basePrice,
  priceWithTaxes,
  year,
  codeInternal,
}: PropertyInfoProps) => {
  return (
    <motion.div 
      className="property-info"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="property-info__title">{TEXTS.propertyDetail.generalInfo}</h2>
      <div className="property-info__grid">
        <motion.div 
          className="property-info__item"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <span className="property-info__label">{TEXTS.propertyDetail.basePrice}</span>
          <span className="property-info__value property-info__price">
            {formatCurrency(basePrice)}
          </span>
        </motion.div>
        <motion.div 
          className="property-info__item"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span className="property-info__label">{TEXTS.propertyDetail.priceWithTaxes}</span>
          <span className="property-info__value property-info__price">
            {formatCurrency(priceWithTaxes)}
          </span>
        </motion.div>
        <motion.div 
          className="property-info__item"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <span className="property-info__label">{TEXTS.propertyDetail.buildYear}</span>
          <span className="property-info__value">{year}</span>
        </motion.div>
        <motion.div 
          className="property-info__item"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <span className="property-info__label">{TEXTS.propertyDetail.internalCode}</span>
          <span className="property-info__value">{codeInternal}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
