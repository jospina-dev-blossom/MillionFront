import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

/**
 * Typed hooks para usar en lugar de los hooks normales de react-redux
 * Proporcionan tipado automático
 */

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
