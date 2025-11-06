import { useParams, Link } from 'react-router-dom';
import { useProperty } from '@presentation/hooks/useProperty';
import { Loading } from '@presentation/components/common/Loading/Loading';
import { ErrorMessage } from '@presentation/components/common/ErrorMessage/ErrorMessage';
import { Footer } from '@presentation/components/common/Footer/Footer';
import { MillionLogo } from '@presentation/components/common/MillionLogo';
import { TEXTS } from '@shared/constants/texts';
import { formatCurrency, formatDate, getErrorMessage } from '@shared/utils';
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
          <Link to="/" className="property-detail__back">
            {TEXTS.common.backButton} {TEXTS.common.backToList}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="property-detail">
      <header className="property-detail__header">
        <div className="property-detail__header-content">
          <Link to="/" className="property-detail__back">
            {TEXTS.common.backButton}
          </Link>
          <div className="property-detail__logo">
            <MillionLogo />
          </div>
          <div className="property-detail__spacer"></div>
        </div>
      </header>

      <div className="property-detail__container">
        <h1 className="property-detail__title">{property.name}</h1>
        <p className="property-detail__address">{property.addressProperty}</p>

        {/* Gallery */}
        {enabledImages.length > 0 && (
          <div className="property-detail__gallery">
            <div className="property-detail__images">
              {enabledImages.map((img) => (
                <img
                  key={img.idPropertyImage}
                  src={img.file}
                  alt={property.name}
                  className="property-detail__image"
                />
              ))}
            </div>
          </div>
        )}

        <div className="property-detail__content">
          {/* Main Content */}
          <div className="property-detail__main">
            {/* General Information */}
            <div className="property-detail__section">
              <h2 className="property-detail__section-title">{TEXTS.propertyDetail.generalInfo}</h2>
              <div className="property-detail__info-grid">
                <div className="property-detail__info-item">
                  <span className="property-detail__info-label">{TEXTS.propertyDetail.basePrice}</span>
                  <span className="property-detail__info-value property-detail__price">
                    {formatCurrency(property.priceProperty)}
                  </span>
                </div>
                <div className="property-detail__info-item">
                  <span className="property-detail__info-label">{TEXTS.propertyDetail.priceWithTaxes}</span>
                  <span className="property-detail__info-value property-detail__price">
                    {formatCurrency(totalPriceWithTax)}
                  </span>
                </div>
                <div className="property-detail__info-item">
                  <span className="property-detail__info-label">{TEXTS.propertyDetail.buildYear}</span>
                  <span className="property-detail__info-value">{property.year}</span>
                </div>
                <div className="property-detail__info-item">
                  <span className="property-detail__info-label">{TEXTS.propertyDetail.internalCode}</span>
                  <span className="property-detail__info-value">{property.codeInternal}</span>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            {sortedTraces.length > 0 && (
              <div className="property-detail__section">
                <h2 className="property-detail__section-title">{TEXTS.propertyDetail.transactionHistory}</h2>
                <div className="property-detail__traces">
                  {sortedTraces.map((trace) => (
                    <div key={trace.idPropertyTrace} className="property-detail__trace">
                      <h3 className="property-detail__trace-name">{trace.name}</h3>
                      <div className="property-detail__trace-info">
                        <div className="property-detail__trace-item">
                          <span className="property-detail__trace-label">{TEXTS.propertyDetail.transactionDate}</span>
                          <span className="property-detail__trace-value">{formatDate(trace.dateSale)}</span>
                        </div>
                        <div className="property-detail__trace-item">
                          <span className="property-detail__trace-label">{TEXTS.propertyDetail.transactionValue}</span>
                          <span className="property-detail__trace-value">{formatCurrency(trace.value)}</span>
                        </div>
                        <div className="property-detail__trace-item">
                          <span className="property-detail__trace-label">{TEXTS.propertyDetail.transactionTax}</span>
                          <span className="property-detail__trace-value">{formatCurrency(trace.tax)}</span>
                        </div>
                        <div className="property-detail__trace-item">
                          <span className="property-detail__trace-label">{TEXTS.propertyDetail.transactionTotal}</span>
                          <span className="property-detail__trace-value">{formatCurrency(trace.value + trace.tax)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="property-detail__sidebar">
            {/* Owner Information */}
            <div className="property-detail__owner">
              <img
                src={property.owner.photo}
                alt={property.owner.name}
                className="property-detail__owner-photo"
              />
              <h3 className="property-detail__owner-name">{property.owner.name}</h3>
              <p className="property-detail__owner-info">{property.owner.address}</p>
              <p className="property-detail__owner-info">{ownerAge} {TEXTS.propertyDetail.years}</p>
              <p className="property-detail__owner-info">{formatDate(property.owner.birthday)}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
