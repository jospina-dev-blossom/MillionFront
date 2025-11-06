import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { propertyApi } from '@infrastructure/api/propertyApi';

/**
 * Redux Store Configuration
 * Configuración del store con RTK Query
 */
export const store = configureStore({
  reducer: {
    // RTK Query reducer
    [propertyApi.reducerPath]: propertyApi.reducer,
    // Aquí puedes agregar otros reducers si los necesitas
  },
  // Middleware de RTK Query para cache, invalidación, polling, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApi.middleware),
});

// Habilita refetchOnFocus y refetchOnReconnect
setupListeners(store.dispatch);

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
