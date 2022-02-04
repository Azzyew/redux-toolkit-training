import { configureStore } from '@reduxjs/toolkit';
import customerSlice from '../features/customerSlice';
import reservationSlice from '../features/reservationSlice';

export const store = configureStore({
  reducer: {
    reservation: reservationSlice,
    customer: customerSlice
  }
})
