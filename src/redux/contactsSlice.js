import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, removeContact } from './operation';

const initialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: {
    [removeContact.pending]: handlePending,
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const tabIndex = state.items.find(item => item.id === action.payload);
      state.items.splice(tabIndex, 1);
    },
    [removeContact.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
  },
});

export const { fetchingInProgress, fetchingError, fetchingSuccess } =
  contactsReducer.actions;

