import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useProperty } from '@presentation/hooks/useProperty';
import { Loading } from '@presentation/components/common/Loading/Loading';
import { ErrorMessage } from '@presentation/components/common/ErrorMessage/ErrorMessage';
import { Footer } from '@presentation/components/common/Footer/Footer';
import { PropertyHeader } from '@presentation/components/propertyDetail/PropertyHeader';
import { PropertyGallery } from '@presentation/components/propertyDetail/PropertyGallery';
import { PropertyInfo } from '@presentation/components/propertyDetail/PropertyInfo';
import { PropertyTraces } from '@presentation/components/propertyDetail/PropertyTraces';
import { PropertyOwner } from '@presentation/components/propertyDetail/PropertyOwner';
import { TEXTS } from '@shared/constants/texts';
import { getErrorMessage } from '@shared/utils';
import './PropertyDetailPage.css';

export const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const {
    property,
    isLoading,
    isError,
    error,
    enabledImages,
    sortedTraces,
    ownerAge,
    totalPriceWithTax,
    refetch,
  } = useProperty(id!);

  if (isLoading) {
    return (
      <div className="property-detail">
        <div className="property-detail__container">
          <Loading />
        </div>
      </div>
    );
  }

  if (isError || !property) {
    return (
      <div className="property-detail">
        <div className="property-detail__container">
          <ErrorMessage
            message={getErrorMessage(error)}
            onRetry={() => refetch()}
          />
          <Link to="/" className="property-detail__back-link">
            <ArrowLeft size={20} /> {TEXTS.common.backToList}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="property-detail">
      <PropertyHeader />

      <motion.div 
        className="property-detail__container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="property-detail__title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {property.name}
        </motion.h1>
        <motion.p 
          className="property-detail__address"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {property.addressProperty}
        </motion.p>

        <PropertyGallery images={enabledImages} propertyName={property.name} />

        <div className="property-detail__content">
          <div className="property-detail__main">
            <PropertyInfo
              basePrice={property.priceProperty}
              priceWithTaxes={totalPriceWithTax}
              year={property.year}
              codeInternal={property.codeInternal}
            />
            <PropertyTraces traces={sortedTraces} />
          </div>

          <div className="property-detail__sidebar">
            <PropertyOwner owner={property.owner} ownerAge={ownerAge} />
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};
