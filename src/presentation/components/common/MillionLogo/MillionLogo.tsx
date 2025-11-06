import './MillionLogo.css';

interface MillionLogoProps {
  variant?: 'default' | 'footer';
}

export const MillionLogo = ({ variant = 'default' }: MillionLogoProps) => {
  return (
    <div className={`million-logo million-logo--${variant}`}>
      <span className="million-logo__text">MILLION</span>
      <span className="million-logo__subtitle">LUXURY REAL ESTATE</span>
    </div>
  );
};
