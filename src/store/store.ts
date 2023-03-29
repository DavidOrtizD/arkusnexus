import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { loadingSlice } from './slices/loadingSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store