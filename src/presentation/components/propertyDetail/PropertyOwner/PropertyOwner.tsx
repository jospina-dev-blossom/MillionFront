import { motion } from 'framer-motion';
import { User, MapPin, Calendar } from 'lucide-react';
import type { Owner } from '@core/domain/entities';
import { TEXTS } from '@shared/constants/texts';
import { formatDate } from '@shared/utils';
import './PropertyOwner.css';

interface PropertyOwnerProps {
  owner: Owner;
  ownerAge: number | null;
}

export const PropertyOwner = ({ owner, ownerAge }: PropertyOwnerProps) => {
  return (
    <motion.div 
      className="property-owner"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="property-owner__header">
        <User className="property-owner__icon" size={24} />
        <h3 className="property-owner__title">{TEXTS.propertyDetail.ownerInfo}</h3>
      </div>
      
      <motion.img
        src={owner.photo}
        alt={owner.name}
        className="property-owner__photo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      
      <h4 className="property-owner__name">{owner.name}</h4>
      
      <div className="property-owner__details">
        <div className="property-owner__info-item">
          <MapPin size={16} className="property-owner__info-icon" />
          <p className="property-owner__info">{owner.address}</p>
        </div>
        
        {ownerAge && (
          <div className="property-owner__info-item">
            <Calendar size={16} className="property-owner__info-icon" />
            <p className="property-owner__info">
              {ownerAge} {TEXTS.propertyDetail.years}
            </p>
          </div>
        )}
        
        <div className="property-owner__info-item">
          <Calendar size={16} className="property-owner__info-icon" />
          <p className="property-owner__info">{formatDate(owner.birthday)}</p>
        </div>
      </div>
    </motion.div>
  );
};
