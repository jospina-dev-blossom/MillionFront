import { TEXTS } from '@shared/constants/texts';
import './Loading.css';

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__spinner" />
      <p className="loading__text">{TEXTS.common.loading}</p>
    </div>
  );
};
