import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { loadingSlice } from './slices/loadingSlice';
import { alertSlice } from './slices/alertSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer,
    alert: alertSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store