import { MillionLogo } from '@presentation/components/common/MillionLogo';
import { TEXTS } from '@shared/constants/texts';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Logo Section */}
          <div className="footer__section">
            <div className="footer__logo">
              <MillionLogo variant="footer" />
            </div>
            <p className="footer__description">
              {TEXTS.footer.description}
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer__section">
            <h3 className="footer__title">{TEXTS.footer.contact}</h3>
            <p className="footer__text">{TEXTS.footer.address}</p>
            <p className="footer__text">{TEXTS.footer.city}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            {TEXTS.footer.copyright} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
