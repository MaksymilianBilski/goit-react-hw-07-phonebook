import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: rootReducer,
});
