import { TEXTS } from '@shared/constants/texts';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="error-message">
      <div className="error-message__icon">⚠️</div>
      <h2 className="error-message__title">Error</h2>
      <p className="error-message__text">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="error-message__button"
        >
          {TEXTS.common.tryAgain}
        </button>
      )}
    </div>
  );
};
